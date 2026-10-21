"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  QrCode,
  ArrowLeftRight,
  Banknote,
  Grid,
  Bell,
  Eye,
  EyeOff,
  CheckCircle2,
  RotateCw,
  Fingerprint,
  ChevronRight,
  ShieldAlert,
  AlertTriangle,
  Activity,
  Smartphone,
  Lock
} from "lucide-react";

export type TxStatus = "APPROVED" | "SOFT_BLOCKED" | "RELEASED" | "BLOCKED";

interface ShapFeature {
  feature: string;
  value: string;
  shap: number;
}

export interface DemoRecipient {
  id: string;
  name: string;
  account: string;
  bank: string;
  category: string;
  city: string;
  amount: number;
  currency: string;
  risk: number;
  status: TxStatus;
  expectedAction: string;
  dist: number;
  timeDelta: number;
  merchantRisk: number;
  deviceTrust: number;
  shapValues: ShapFeature[];
}

// Exact recipients from AbaMobileApp.jsx in VinSambrathna/CreditCardFraudDectection
const DEMO_RECIPIENTS: DemoRecipient[] = [
  {
    id: "recip_1",
    name: "Phnom Penh Coffee (BKK1)",
    account: "001 294 812",
    bank: "ABA Bank",
    category: "Coffee & Food",
    city: "Phnom Penh",
    amount: 8.5,
    currency: "USD",
    risk: 0.038,
    status: "APPROVED",
    expectedAction: "AUTO_APPROVED",
    dist: 1.2,
    timeDelta: 18.0,
    merchantRisk: 0.08,
    deviceTrust: 0.98,
    shapValues: [
      { feature: "device_trust_score (0.98)", value: "High Trust Enclave", shap: -3.85 },
      { feature: "distance_from_home (1.2 km)", value: "Residential Baseline", shap: -2.42 },
      { feature: "time_delta_last_tx (18.0 hrs)", value: "Normal Circadian Gap", shap: -1.88 },
      { feature: "merchant_risk_score (0.08)", value: "Verified Merchant MCC", shap: -1.25 },
      { feature: "velocity_1h (1 tx)", value: "Baseline Frequency", shap: -0.95 },
      { feature: "tx_amount_normalized_usd ($8.50)", value: "Micro-payment", shap: -0.82 },
      { feature: "biometric_authenticity (FaceID)", value: "Secure Hardware Enclave", shap: -2.1 }
    ]
  },
  {
    id: "recip_2",
    name: "Cambodia Electronics Mall",
    account: "000 551 920",
    bank: "ABA Bank",
    category: "Electronics",
    city: "Siem Reap",
    amount: 1500.0,
    currency: "USD",
    risk: 0.482,
    status: "SOFT_BLOCKED",
    expectedAction: "STEP_UP_REQUIRED",
    dist: 310.0,
    timeDelta: 1.5,
    merchantRisk: 0.65,
    deviceTrust: 0.88,
    shapValues: [
      { feature: "distance_from_home (310 km)", value: "Inter-Province Transit", shap: +3.25 },
      { feature: "tx_amount_normalized_usd ($1,500)", value: "7.2x Mean Deviation", shap: +2.95 },
      { feature: "merchant_risk_score (0.65)", value: "High-Value Consumer Tech", shap: +1.4 },
      { feature: "device_trust_score (0.88)", value: "Trusted Device", shap: -2.8 },
      { feature: "biometric_authenticity (FaceID)", value: "Biometric Passed", shap: -1.75 },
      { feature: "time_delta_last_tx (1.5 hrs)", value: "Rapid Hop Velocity", shap: +1.1 }
    ]
  },
  {
    id: "recip_3",
    name: "Poipet Border Duty Free",
    account: "010 882 104",
    bank: "Bakong Network",
    category: "Border Retail",
    city: "Poipet",
    amount: 1800.0,
    currency: "USD",
    risk: 0.894,
    status: "BLOCKED",
    expectedAction: "HARD_BLOCKED",
    dist: 850.0,
    timeDelta: 0.15,
    merchantRisk: 0.92,
    deviceTrust: 0.1,
    shapValues: [
      { feature: "distance_from_home (850 km)", value: "Teleportation Anomaly", shap: +5.85 },
      { feature: "device_trust_score (0.10)", value: "Unregistered Proxy Node", shap: +4.65 },
      { feature: "time_delta_last_tx (0.15 hrs)", value: "Physically Impossible", shap: +3.8 },
      { feature: "merchant_risk_score (0.92)", value: "Blacklisted Terminal", shap: +2.9 },
      { feature: "tx_amount_normalized_usd ($1,800)", value: "Max Tier Outlier", shap: +2.45 },
      { feature: "velocity_1h (4 tx)", value: "Rapid Probe Burst", shap: +1.95 }
    ]
  }
];

export function SentinelPayLiveConsole() {
  const [selectedRecipient, setSelectedRecipient] = useState<DemoRecipient>(DEMO_RECIPIENTS[0]);
  const [activeConsoleTab, setActiveConsoleTab] = useState<"aba_phone" | "forensics_portal">("aba_phone");
  const [showBalance, setShowBalance] = useState(true);
  const [enteredPin, setEnteredPin] = useState("");
  const [showPinModal, setShowPinModal] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [txState, setTxState] = useState<TxStatus>("APPROVED");
  const [pushNotification, setPushNotification] = useState<{
    type: "success" | "warning" | "danger";
    title: string;
    message: string;
  } | null>(null);

  const timerRefs = useRef<NodeJS.Timeout[]>([]);

  // Clear timers on unmount to avoid state update on unmounted component
  useEffect(() => {
    return () => {
      timerRefs.current.forEach((t) => clearTimeout(t));
    };
  }, []);

  const addTimer = (timer: NodeJS.Timeout) => {
    timerRefs.current.push(timer);
    return timer;
  };

  const accountNumber = "000 842 192";
  const cardholderName = "SOVANNA SOK";
  const balanceUSD = 4820.5;

  const handleSelectRecipient = (recip: DemoRecipient) => {
    setSelectedRecipient(recip);
    setTxState(recip.status);
    setEnteredPin("");
    setShowPinModal(false);
    setPushNotification(null);
  };

  const handleSimulatePayment = () => {
    setIsEvaluating(true);
    const t = setTimeout(() => {
      setIsEvaluating(false);
      const targetState = selectedRecipient.status;
      setTxState(targetState);

      if (targetState === "APPROVED") {
        setPushNotification({
          type: "success",
          title: "Transfer Successful",
          message: `Sent $${selectedRecipient.amount.toFixed(2)} to ${selectedRecipient.name} via Bakong KHQR.`
        });
      } else if (targetState === "SOFT_BLOCKED") {
        setPushNotification({
          type: "warning",
          title: "Verification Required",
          message: `Authorize $${selectedRecipient.amount.toFixed(2)} to ${selectedRecipient.name} with PIN or Face ID.`
        });
      } else if (targetState === "BLOCKED") {
        setPushNotification({
          type: "danger",
          title: "Payment Blocked",
          message: `Suspicious payment of $${selectedRecipient.amount.toFixed(2)} at ${selectedRecipient.name} was declined.`
        });
      }
    }, 400);
    addTimer(t);
  };

  const handleNumpad = (digit: string) => {
    if (enteredPin.length < 4) {
      const next = enteredPin + digit;
      setEnteredPin(next);
      if (next.length === 4) {
        const t = setTimeout(() => {
          setShowPinModal(false);
          setTxState("RELEASED");
          setEnteredPin("");
          setPushNotification({
            type: "success",
            title: "Step-Up Verified",
            message: `Customer authenticated via PIN. Transaction $${selectedRecipient.amount.toFixed(2)} released.`
          });
        }, 400);
        addTimer(t);
      }
    }
  };

  const handleFaceID = () => {
    const t = setTimeout(() => {
      setShowPinModal(false);
      setTxState("RELEASED");
      setPushNotification({
        type: "success",
        title: "Face ID Verified",
        message: `Biometric enclave verified. Transaction $${selectedRecipient.amount.toFixed(2)} released.`
      });
    }, 450);
    addTimer(t);
  };

  return (
    <div className="w-full bg-[#0A0D14] text-white rounded-[28px] border border-[#23293D] shadow-2xl overflow-hidden font-sans">
      {/* Top Console Navigation Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-5 py-3.5 bg-[#0F1422] border-b border-[#1E2538] gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
          </div>
          <div className="pl-2">
            <span className="text-xs font-mono font-bold text-white">
              SentinelPay Gateway • FastAPI &amp; XGBoost Engine
            </span>
            <span className="text-[11px] text-slate-400 font-mono ml-2">
              (PR-AUC 0.9990 • Recall 98.61% • Sub-3ms Inference)
            </span>
          </div>
        </div>

        {/* View Switcher: Phone vs Double-Bezel Forensics */}
        <div className="flex items-center bg-[#171D2D] p-1 rounded-xl border border-[#27324B] text-xs">
          <button
            type="button"
            onClick={() => setActiveConsoleTab("aba_phone")}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
              activeConsoleTab === "aba_phone"
                ? "bg-blue-600 text-white font-semibold shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>ABA Mobile App</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveConsoleTab("forensics_portal")}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
              activeConsoleTab === "forensics_portal"
                ? "bg-blue-600 text-white font-semibold shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Double-Bezel Forensics Portal</span>
          </button>
        </div>
      </div>

      {/* Recipient / Scenario Ingestion Bar */}
      <div className="px-5 py-2.5 bg-[#0C101A] border-b border-[#1C2336] flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="text-slate-400 font-mono text-[11px]">SELECT REAL-WORLD TRANSACTION SCENARIO:</span>
        <div className="flex flex-wrap gap-2">
          {DEMO_RECIPIENTS.map((recip) => (
            <button
              key={recip.id}
              type="button"
              onClick={() => handleSelectRecipient(recip)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                selectedRecipient.id === recip.id
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "bg-[#141A28] text-slate-300 hover:bg-[#1C2438] border border-[#222B3F]"
              }`}
            >
              {recip.name} (${recip.amount.toFixed(2)})
            </button>
          ))}
        </div>
      </div>

      {/* MAIN CONSOLE BODY */}
      <div className="p-5 sm:p-7">
        {/* TAB 1: EXACT ABA MOBILE APP REPLICA */}
        {activeConsoleTab === "aba_phone" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Pixel-Perfect ABA Mobile Phone */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[340px] rounded-[44px] p-3.5 bg-gradient-to-b from-[#253047] via-[#151C2C] to-[#0A0E17] shadow-2xl border border-slate-700/60 relative select-none">
                {/* Dynamic Island */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-40 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-800" />
                </div>

                {/* Simulated In-App Push Notification banner */}
                {pushNotification && (
                  <div
                    className={`absolute top-12 left-4 right-4 z-50 p-2.5 rounded-2xl shadow-2xl border text-xs animate-in slide-in-from-top-4 duration-300 ${
                      pushNotification.type === "success"
                        ? "bg-[#064E3B] border-emerald-500 text-white"
                        : pushNotification.type === "warning"
                        ? "bg-[#78350F] border-amber-500 text-white"
                        : "bg-[#881337] border-rose-500 text-white"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold text-[11px] uppercase font-mono tracking-wider">
                      <span>ABA Mobile &bull; Now</span>
                    </div>
                    <div className="font-bold text-xs mt-0.5">{pushNotification.title}</div>
                    <div className="text-[11px] text-slate-200 mt-0.5 leading-snug">{pushNotification.message}</div>
                  </div>
                )}

                {/* Phone Screen Container */}
                <div className="rounded-[36px] bg-[#001D38] p-4 text-white overflow-hidden relative border border-[#003B64] min-h-[550px] flex flex-col justify-between">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-[11px] font-mono text-slate-300 pt-1 pb-3 px-1">
                    <span>9:41</span>
                    <span className="text-[#00A3FF] font-semibold">Bakong KHQR Active</span>
                  </div>

                  {/* Top Bar: ABA Mobile Logo & Bell */}
                  <div>
                    <div className="flex justify-between items-center pb-3">
                      <div>
                        <div className="text-lg font-black tracking-tighter text-white">ABA<span className="text-[#00A3FF]">'</span></div>
                        <span className="text-[11px] text-[#86BBE5] font-mono block -mt-1">Mobile Banking</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-[#003B64] flex items-center justify-center text-xs">
                          <Bell className="w-3.5 h-3.5 text-slate-300" />
                        </div>
                        <div className="w-7 h-7 rounded-full bg-[#004B80] border border-[#00A3FF]/40 flex items-center justify-center text-[11px] font-bold text-[#00A3FF]">
                          SS
                        </div>
                      </div>
                    </div>

                    {/* Account Balance Card (Sovanna Sok) */}
                    <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#003B64] to-[#002642] border border-[#005A99] space-y-2 shadow-lg">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-[11px] text-slate-300 font-mono">ACCOUNT: {accountNumber}</span>
                        <button
                          type="button"
                          onClick={() => setShowBalance(!showBalance)}
                          className="text-slate-300 hover:text-white"
                          aria-label={showBalance ? "Hide balance" : "Show balance"}
                        >
                          {showBalance ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                      <div className="flex justify-between items-baseline">
                        <div>
                          <div className="text-xl font-bold font-mono tracking-tight">
                            {showBalance ? `$${balanceUSD.toFixed(2)}` : "••••••••"}
                          </div>
                          <span className="text-[11px] text-slate-300">{cardholderName}</span>
                        </div>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-[#00223D] text-[#00A3FF] font-mono border border-[#005A99]">
                          USD Account
                        </span>
                      </div>
                    </div>

                    {/* 4-Icon Quick Action Grid (Transfers, Payments, Scan QR, ABA Places) */}
                    <div className="grid grid-cols-4 gap-2 py-3 text-center">
                      {[
                        { label: "Transfers", icon: ArrowLeftRight },
                        { label: "Payments", icon: Banknote },
                        { label: "Scan QR", icon: QrCode },
                        { label: "ABA Places", icon: Grid }
                      ].map((act, i) => {
                        const Icon = act.icon;
                        return (
                          <div key={i} className="flex flex-col items-center gap-1">
                            <div className="w-10 h-10 rounded-2xl bg-[#002B4D] border border-[#004B80] flex items-center justify-center text-[#00A3FF] shadow-sm">
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-[11px] text-slate-300 font-medium">{act.label}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Transfer to Selected Recipient Invoice */}
                    <div className="p-3 rounded-2xl bg-[#002642] border border-[#004B80] space-y-2 mt-1">
                      <div className="flex justify-between items-center text-[11px] font-mono text-slate-300">
                        <span>RECIPIENT INVOICE</span>
                        <span className="text-[#00A3FF]">Bakong KHQR</span>
                      </div>

                      <div className="flex justify-between items-center text-xs">
                        <div>
                          <div className="font-bold text-white text-xs">{selectedRecipient.name}</div>
                          <span className="text-[11px] text-slate-400 font-mono">
                            Acc: {selectedRecipient.account} &bull; {selectedRecipient.city}
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="text-base font-bold font-mono text-white">
                            ${selectedRecipient.amount.toFixed(2)}
                          </div>
                          <span className="text-[11px] text-slate-400">USD</span>
                        </div>
                      </div>

                      {/* Payment Result Status / Trigger Button */}
                      {txState === "APPROVED" && (
                        <div className="p-2 rounded-xl bg-emerald-950/80 border border-emerald-500/60 text-center text-[11px] text-emerald-300 flex items-center justify-center gap-1 font-mono">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>AUTO-APPROVED BY SENTINELPAY GATEWAY</span>
                        </div>
                      )}

                      {txState === "SOFT_BLOCKED" && (
                        <div className="p-2.5 rounded-xl bg-amber-950/80 border border-amber-500/60 text-center space-y-2">
                          <div className="text-[11px] text-amber-300 font-bold flex items-center justify-center gap-1">
                            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                            <span>STEP-UP CHALLENGE REQUIRED</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setShowPinModal(true)}
                            className="w-full py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold shadow-md flex items-center justify-center gap-1"
                          >
                            <Lock className="w-3 h-3" />
                            <span>Enter 4-Digit ABA PIN or Face ID</span>
                          </button>
                        </div>
                      )}

                      {txState === "RELEASED" && (
                        <div className="p-2 rounded-xl bg-blue-950/80 border border-blue-500/60 text-center text-[11px] text-blue-300 flex items-center justify-center gap-1 font-mono">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                          <span>VERIFIED &bull; FUNDS RELEASED</span>
                        </div>
                      )}

                      {txState === "BLOCKED" && (
                        <div className="p-2 rounded-xl bg-rose-950/80 border border-rose-500/60 text-center text-[11px] text-rose-300 flex items-center justify-center gap-1 font-mono">
                          <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                          <span>HIGH RISK &bull; HARD BLOCKED</span>
                        </div>
                      )}

                      {/* Simulate Gateway Evaluate Button */}
                      <button
                        type="button"
                        disabled={isEvaluating}
                        onClick={handleSimulatePayment}
                        className="w-full py-2 rounded-xl bg-[#0072CE] hover:bg-[#0085F2] disabled:opacity-50 text-white font-bold text-xs transition-all shadow-md flex items-center justify-center gap-1.5"
                      >
                        {isEvaluating ? (
                          <>
                            <RotateCw className="w-3.5 h-3.5 animate-spin" />
                            <span>Evaluating XGBoost Classifier...</span>
                          </>
                        ) : (
                          <>
                            <QrCode className="w-3.5 h-3.5" />
                            <span>Send via Bakong KHQR</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Simulated PIN / Biometric Modal Overlay */}
                  {showPinModal && (
                    <div className="absolute inset-0 z-50 bg-[#001D38]/95 backdrop-blur-md p-4 rounded-[36px] flex flex-col justify-between animate-in fade-in">
                      <div className="text-center pt-4 space-y-1">
                        <div className="w-10 h-10 rounded-full bg-[#003B64] mx-auto flex items-center justify-center text-[#00A3FF]">
                          <Lock className="w-5 h-5" />
                        </div>
                        <h6 className="text-sm font-bold text-white">Enter ABA Mobile PIN</h6>
                        <p className="text-[11px] text-slate-300">
                          Authorize ${selectedRecipient.amount.toFixed(2)} to {selectedRecipient.name}
                        </p>
                      </div>

                      {/* 4 PIN Dots */}
                      <div className="flex justify-center gap-3 my-2">
                        {[0, 1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className={`w-3.5 h-3.5 rounded-full border border-[#00A3FF] transition-all ${
                              enteredPin.length > i ? "bg-[#00A3FF]" : "bg-transparent"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Numpad */}
                      <div className="grid grid-cols-3 gap-2 px-4">
                        {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => handleNumpad(num)}
                            className="h-10 rounded-xl bg-[#002B4D] hover:bg-[#003B64] text-white font-bold text-base transition-colors flex items-center justify-center font-mono"
                          >
                            {num}
                          </button>
                        ))}
                        <button
                          type="button"
                          onClick={handleFaceID}
                          className="h-10 rounded-xl bg-[#002B4D] hover:bg-[#003B64] text-[#00A3FF] flex items-center justify-center"
                          title="Simulate Face ID"
                          aria-label="Simulate Face ID"
                        >
                          <Fingerprint className="w-5 h-5" />
                        </button>
                        <button
                          key="0"
                          type="button"
                          onClick={() => handleNumpad("0")}
                          className="h-10 rounded-xl bg-[#002B4D] hover:bg-[#003B64] text-white font-bold text-base flex items-center justify-center font-mono"
                        >
                          0
                        </button>
                        <button
                          type="button"
                          onClick={() => setEnteredPin((p) => p.slice(0, -1))}
                          className="h-10 rounded-xl bg-[#002B4D] hover:bg-[#003B64] text-slate-300 flex items-center justify-center text-xs"
                        >
                          Delete
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => setShowPinModal(false)}
                        className="text-xs text-slate-400 hover:text-white underline text-center py-2"
                      >
                        Cancel Verification
                      </button>
                    </div>
                  )}

                  {/* Phone Bottom Bezel Indicator */}
                  <div className="w-24 h-1 bg-slate-600 rounded-full mx-auto mt-2" />
                </div>
              </div>
            </div>

            {/* Right: Live Technical Details of the Transaction */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-5 rounded-2xl bg-[#0F1422] border border-[#20273D] space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 block font-bold">
                      SentinelPay Real-Time Telemetry
                    </span>
                    <h5 className="text-base font-bold text-white tracking-tight">{selectedRecipient.name}</h5>
                    <span className="text-xs text-slate-400">{selectedRecipient.city} &bull; {selectedRecipient.category}</span>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-[11px] text-slate-400 block">Inference Speed</span>
                    <span className="text-xs font-bold text-emerald-400">2.1 ms</span>
                  </div>
                </div>

                {/* Behavioral Feature Inputs */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono pt-1">
                  <div className="p-2.5 rounded-xl bg-[#141A28] border border-[#1E2538]">
                    <span className="text-[11px] text-slate-400 block">Distance Baseline</span>
                    <span className="font-bold text-white text-xs">{selectedRecipient.dist} km</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#141A28] border border-[#1E2538]">
                    <span className="text-[11px] text-slate-400 block">Device Trust</span>
                    <span className="font-bold text-white text-xs">{selectedRecipient.deviceTrust}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#141A28] border border-[#1E2538]">
                    <span className="text-[11px] text-slate-400 block">Time Delta</span>
                    <span className="font-bold text-white text-xs">{selectedRecipient.timeDelta} hrs</span>
                  </div>
                </div>

                {/* Model Probability & Action */}
                <div className="p-3.5 rounded-xl bg-[#141A28] border border-[#1E2538] flex justify-between items-center">
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Fraud Probability P(fraud | x)</span>
                    <div className="text-xl font-bold font-mono text-white">
                      {(selectedRecipient.risk * 100).toFixed(1)}%
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono text-slate-400 block">Operational State</span>
                    <span
                      className={`text-xs font-bold font-mono px-2 py-0.5 rounded ${
                        txState === "APPROVED" || txState === "RELEASED"
                          ? "bg-emerald-950 text-emerald-300 border border-emerald-700"
                          : txState === "SOFT_BLOCKED"
                          ? "bg-amber-950 text-amber-300 border border-amber-700"
                          : "bg-rose-950 text-rose-300 border border-rose-700"
                      }`}
                    >
                      {txState}
                    </span>
                  </div>
                </div>
              </div>

              {/* View Forensics Portal Banner */}
              <button
                type="button"
                onClick={() => setActiveConsoleTab("forensics_portal")}
                className="w-full p-4 rounded-2xl bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/40 hover:border-blue-400 text-left transition-all group flex items-center justify-between"
              >
                <div>
                  <h6 className="text-xs font-bold text-white group-hover:text-blue-300">
                    Switch to Double-Bezel Forensics Portal &rarr;
                  </h6>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    Inspect the 2-column Double-Bezel layout with live Audit Queue and TreeSHAP waterfall decomposition.
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-blue-400 shrink-0 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: EXACT DOUBLE-BEZEL TRANSACTION INTELLIGENCE PORTAL */}
        {activeConsoleTab === "forensics_portal" && (
          <div className="space-y-4 animate-in fade-in">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <h5 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                  <span>Double-Bezel Audit Queue &amp; SHAP Forensics</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                    TransactionIntelligence.jsx
                  </span>
                </h5>
                <p className="text-xs text-slate-400">
                  Exact marginal Shapley values quantifying continuous risk attribution into log-odds.
                </p>
              </div>
              <span className="text-xs font-mono text-emerald-400">WebSocket /ws/alerts Live</span>
            </div>

            {/* 2-Column Double-Bezel Shell */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* Left Bezel: Audit Queue */}
              <div className="lg:col-span-5 rounded-2xl bg-[#0D121F] border border-[#1E2538] p-4 space-y-3">
                <div className="flex justify-between items-center text-xs font-mono pb-2 border-b border-[#1E2538] text-slate-400">
                  <span>Audit Queue ({DEMO_RECIPIENTS.length} records)</span>
                  <span>Inference</span>
                </div>

                <div className="space-y-2">
                  {DEMO_RECIPIENTS.map((tx, idx) => {
                    const isSelected = tx.id === selectedRecipient.id;
                    const prob = (tx.risk * 100).toFixed(1);

                    return (
                      <div
                        key={tx.id}
                        role="button"
                        tabIndex={0}
                        aria-label={`Audit transaction ${tx.name}, amount $${tx.amount.toFixed(2)}, status ${tx.status}`}
                        onClick={() => handleSelectRecipient(tx)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handleSelectRecipient(tx);
                          }
                        }}
                        className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                          isSelected
                            ? "bg-blue-950/60 border-blue-500 shadow-md ring-1 ring-blue-500"
                            : "bg-[#121727] border-[#1C2336] hover:border-[#27324B]"
                        }`}
                      >
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-mono font-bold text-slate-200">
                            TX-ABA-1002{idx + 1}
                          </span>
                          <span className="font-mono font-bold text-white">${tx.amount.toFixed(2)}</span>
                        </div>
                        <div className="text-xs text-slate-300 mt-1 truncate">{tx.name}</div>
                        <div className="flex justify-between items-center mt-2 pt-1 border-t border-white/5 text-[11px] font-mono">
                          <span
                            className={
                              tx.risk > 0.7
                                ? "text-rose-400 font-bold"
                                : tx.risk > 0.35
                                ? "text-amber-400 font-bold"
                                : "text-emerald-400 font-bold"
                            }
                          >
                            Risk: {prob}%
                          </span>
                          <span
                            className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                              tx.status === "APPROVED"
                                ? "bg-emerald-950 text-emerald-300"
                                : tx.status === "SOFT_BLOCKED"
                                ? "bg-amber-950 text-amber-300"
                                : "bg-rose-950 text-rose-300"
                            }`}
                          >
                            {tx.status}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Bezel: TreeSHAP Waterfall Chart */}
              <div className="lg:col-span-7 rounded-2xl bg-[#0D121F] border border-[#1E2538] p-5 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h6 className="text-sm font-bold text-white">
                      SHAP Decomposition: {selectedRecipient.name}
                    </h6>
                    <span className="text-xs text-slate-400 font-mono">
                      Continuous Risk: {(selectedRecipient.risk * 100).toFixed(1)}% &bull; Latency &lt; 15ms
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] font-mono">
                    <span className="flex items-center gap-1 text-rose-400">
                      <span className="w-2 h-2 rounded bg-rose-500" /> + Push Fraud
                    </span>
                    <span className="flex items-center gap-1 text-emerald-400">
                      <span className="w-2 h-2 rounded bg-emerald-500" /> - Pull Legit
                    </span>
                  </div>
                </div>

                {/* Waterfall Bars */}
                <div className="space-y-2.5 pt-2">
                  {selectedRecipient.shapValues.map((item, idx) => {
                    const isPositive = item.shap > 0;
                    const barWidth = Math.min(Math.abs(item.shap) * 16, 100);

                    return (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-mono text-slate-300 text-xs">{item.feature}</span>
                          <span
                            className={`font-mono font-bold text-xs ${
                              isPositive ? "text-rose-400" : "text-emerald-400"
                            }`}
                          >
                            {isPositive ? `+${item.shap.toFixed(2)}` : item.shap.toFixed(2)} SHAP
                          </span>
                        </div>
                        <div className="h-1.5 rounded-full bg-[#161C2C] overflow-hidden flex">
                          {!isPositive ? (
                            <div
                              className="h-full bg-emerald-500 rounded-full ml-auto transition-all duration-300"
                              style={{ width: `${barWidth}%` }}
                            />
                          ) : (
                            <div
                              className="h-full bg-rose-500 rounded-full mr-auto transition-all duration-300"
                              style={{ width: `${barWidth}%` }}
                            />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Base Value & Probability Conversion */}
                <div className="pt-3 border-t border-[#1E2538] flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400">Baseline Expected E[f(x)]: -2.41 log-odds</span>
                  <span className="text-white font-bold">
                    Result: <span className="text-blue-400">{selectedRecipient.expectedAction}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
