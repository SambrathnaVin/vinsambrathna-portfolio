"use client";

import React, { useState } from "react";
import {
  Car,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Play
} from "lucide-react";

// Exact domain schema from slot.java and ParkingRate.java in SambrathnaVin/parking-system-management
interface JavaSlot {
  slotId: number;
  slotStatus: "Free" | "Occupied";
  slotLocation: { floor: string; area: string };
  slotType: "Covered" | "Open";
  slotSize: "S" | "M" | "L";
  isReserved: "Y" | "N";
  lastUpdated: string;
}

const INITIAL_JAVA_SLOTS: JavaSlot[] = [
  {
    slotId: 101,
    slotStatus: "Occupied",
    slotLocation: { floor: "1", area: "A" },
    slotType: "Covered",
    slotSize: "L",
    isReserved: "Y",
    lastUpdated: "2026-10-21 09:30"
  },
  {
    slotId: 102,
    slotStatus: "Free",
    slotLocation: { floor: "1", area: "A" },
    slotType: "Covered",
    slotSize: "M",
    isReserved: "N",
    lastUpdated: "2026-10-21 08:00"
  },
  {
    slotId: 103,
    slotStatus: "Free",
    slotLocation: { floor: "1", area: "B" },
    slotType: "Open",
    slotSize: "S",
    isReserved: "N",
    lastUpdated: "2026-10-21 08:00"
  },
  {
    slotId: 104,
    slotStatus: "Occupied",
    slotLocation: { floor: "1", area: "B" },
    slotType: "Covered",
    slotSize: "L",
    isReserved: "N",
    lastUpdated: "2026-10-21 10:15"
  },
  {
    slotId: 201,
    slotStatus: "Free",
    slotLocation: { floor: "2", area: "A" },
    slotType: "Open",
    slotSize: "M",
    isReserved: "Y",
    lastUpdated: "2026-10-21 07:45"
  },
  {
    slotId: 202,
    slotStatus: "Free",
    slotLocation: { floor: "2", area: "B" },
    slotType: "Covered",
    slotSize: "L",
    isReserved: "N",
    lastUpdated: "2026-10-21 08:00"
  }
];

export function ParkSmartDualConsole() {
  const [activeTab, setActiveTab] = useState<"slot_tracker" | "jvm_terminal">("slot_tracker");
  const [slots, setSlots] = useState<JavaSlot[]>(INITIAL_JAVA_SLOTS);
  const [selectedSlotId, setSelectedSlotId] = useState<number>(101);
  const [rateType, setRateType] = useState<"Hourly" | "Daily">("Hourly");
  const [durationHours, setDurationHours] = useState<number>(3);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "[JVM Initializer] Instantiating com.parksystem.slot instances...",
    "SlotTracker{slotId=101, slotStatus='Occupied', slotLocation=1-A, slotType='Covered', slotSize='L', isReserved='Y'}",
    "SlotTracker{slotId=102, slotStatus='Free', slotLocation=1-A, slotType='Covered', slotSize='M', isReserved='N'}",
    "[ParkingRate.java] ParkingRate initialized: vehicleType=Car, rateType=Hourly, rateValue=$1.50, effective=01/01/2026-31/12/2026",
    "[ParkingRate.java] isCurrentlyEffective() -> true"
  ]);

  const selectedSlot = slots.find((s) => s.slotId === selectedSlotId) || slots[0];

  // Exact calculateParkingCost from ParkingRate.java
  const rateValue = rateType === "Hourly" ? 1.5 : 15.0;
  const calculateCost = (hours: number, type: "Hourly" | "Daily") => {
    if (type === "Hourly") {
      return rateValue * hours;
    } else {
      const days = Math.ceil(hours / 24.0);
      return rateValue * days;
    }
  };

  const currentCost = calculateCost(durationHours, rateType);

  const handleMutateStatus = (newStatus: "Free" | "Occupied") => {
    setSlots((prev) =>
      prev.map((s) =>
        s.slotId === selectedSlotId
          ? { ...s, slotStatus: newStatus, lastUpdated: new Date().toISOString().slice(0, 16).replace("T", " ") }
          : s
      )
    );
    const log = `[slot.java] slotId=${selectedSlotId}.setSlotStatus("${newStatus}"); -> lastUpdated=${new Date().toLocaleTimeString()}`;
    setTerminalLogs((prev) => [...prev, log]);
  };

  const handleToggleReserved = () => {
    const nextReserved = selectedSlot.isReserved === "Y" ? "N" : "Y";
    setSlots((prev) =>
      prev.map((s) =>
        s.slotId === selectedSlotId
          ? { ...s, isReserved: nextReserved }
          : s
      )
    );
    const log = `[slot.java] slotId=${selectedSlotId}.setIsReserved("${nextReserved}");`;
    setTerminalLogs((prev) => [...prev, log]);
  };

  const handleRunCommand = (cmd: string) => {
    let result = "";
    if (cmd === "calculateParkingCost()") {
      result = `[ParkingRate.java] calculateParkingCost(${durationHours} hrs) -> $${currentCost.toFixed(2)} (${rateType} rate @ $${rateValue.toFixed(2)})`;
    } else if (cmd === "isCurrentlyEffective()") {
      result = `[ParkingRate.java] isCurrentlyEffective() -> true (Effective: 01/01/2026 to 31/12/2026)`;
    } else {
      result = `[slot.java] slotId=${selectedSlotId}.toString() -> SlotTracker{slotId=${selectedSlot.slotId}, slotStatus='${selectedSlot.slotStatus}', slotLocation=${selectedSlot.slotLocation.floor}-${selectedSlot.slotLocation.area}, slotType='${selectedSlot.slotType}', slotSize='${selectedSlot.slotSize}', isReserved='${selectedSlot.isReserved}'}`;
    }
    setTerminalLogs((prev) => [...prev, `$ ${cmd}`, result]);
  };

  return (
    <div className="w-full bg-[#0B0E17] text-white rounded-[28px] border border-[#22293C] shadow-2xl overflow-hidden font-sans">
      {/* Top Bar with Tab Switcher */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-5 py-3.5 bg-[#101524] border-b border-[#1E2538] gap-3">
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          <Car className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="text-xs font-mono font-bold text-white tracking-tight">
            ParkSmart Management &bull; Pure Java OOP Architecture
          </span>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-800">
            slot.java &bull; ParkingRate.java
          </span>
        </div>

        <div className="flex items-center bg-[#171D2D] p-1 rounded-xl border border-[#263048] text-xs w-full sm:w-auto justify-between sm:justify-start">
          <button
            type="button"
            onClick={() => setActiveTab("slot_tracker")}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === "slot_tracker"
                ? "bg-amber-600 text-white font-semibold shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Slot Tracker &amp; Rates
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("jvm_terminal")}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
              activeTab === "jvm_terminal"
                ? "bg-amber-600 text-white font-semibold shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>JVM Object Console</span>
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-7">
        {/* TAB 1: SLOT TRACKER & PARKING RATE ENGINE */}
        {activeTab === "slot_tracker" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
            {/* Left: 6 Java SlotTrackers */}
            <div className="lg:col-span-7 bg-[#0E1321] rounded-2xl border border-[#1E2538] p-5 space-y-4">
              <div className="flex justify-between items-center text-xs">
                <div>
                  <h5 className="font-bold text-white text-sm">Java SlotTracker Grid</h5>
                  <span className="text-xs text-slate-400">Instances of slot.java domain entity</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" /> Free
                  </span>
                  <span className="flex items-center gap-1 text-rose-400">
                    <span className="w-2 h-2 rounded-full bg-rose-400" /> Occupied
                  </span>
                </div>
              </div>

              {/* Slot Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {slots.map((s) => {
                  const isSelected = s.slotId === selectedSlotId;
                  const isFree = s.slotStatus === "Free";

                  return (
                    <button
                      key={s.slotId}
                      type="button"
                      onClick={() => setSelectedSlotId(s.slotId)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? "border-amber-500 bg-amber-500/15 ring-2 ring-amber-500/30"
                          : "border-[#1E2538] bg-[#141A28] hover:border-[#2A354E]"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-mono font-bold text-xs text-white">Slot #{s.slotId}</span>
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isFree ? "bg-emerald-400 shadow-[0_0_6px_#34d399]" : "bg-rose-500 shadow-[0_0_6px_#f43f5e]"
                          }`}
                        />
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono mt-1">
                        Loc: {s.slotLocation.floor}-{s.slotLocation.area} &bull; {s.slotType}
                      </div>
                      <div className="flex justify-between items-center mt-2 pt-1 border-t border-white/5 text-[11px] font-mono font-bold">
                        <span className="text-slate-300">Size: {s.slotSize}</span>
                        <span className={s.isReserved === "Y" ? "text-amber-400" : "text-slate-500"}>
                          Res: {s.isReserved}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Mutation Actions on Selected Slot */}
              <div className="pt-3 border-t border-[#1E2538] space-y-2">
                <span className="text-xs font-mono text-slate-400 block">
                  MUTATE STATE ON SLOT #{selectedSlot.slotId} (SlotLocation: {selectedSlot.slotLocation.floor}-{selectedSlot.slotLocation.area}):
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => handleMutateStatus("Free")}
                    className="px-3 py-1.5 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-800 hover:bg-emerald-900 font-medium font-mono text-xs"
                  >
                    setSlotStatus("Free")
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMutateStatus("Occupied")}
                    className="px-3 py-1.5 rounded-lg bg-rose-950 text-rose-300 border border-rose-800 hover:bg-rose-900 font-medium font-mono text-xs"
                  >
                    setSlotStatus("Occupied")
                  </button>
                  <button
                    type="button"
                    onClick={handleToggleReserved}
                    className="px-3 py-1.5 rounded-lg bg-amber-950 text-amber-300 border border-amber-800 hover:bg-amber-900 font-medium font-mono text-xs"
                  >
                    setIsReserved("{selectedSlot.isReserved === "Y" ? "N" : "Y"}")
                  </button>
                </div>
              </div>
            </div>

            {/* Right: ParkingRate.java Calculation Engine */}
            <div className="lg:col-span-5 bg-[#0E1321] rounded-2xl border border-[#1E2538] p-5 space-y-4">
              <div>
                <span className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider block">
                  ParkingRate.java
                </span>
                <h5 className="font-bold text-white text-sm">Tariff Calculation Engine</h5>
              </div>

              <div className="p-3.5 rounded-xl bg-[#080B12] border border-[#1A2234] space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center text-slate-400">
                  <span>Rate Type:</span>
                  <div className="flex gap-1">
                    {(["Hourly", "Daily"] as const).map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setRateType(t)}
                        className={`px-2.5 py-1 rounded text-xs font-bold ${
                          rateType === t ? "bg-amber-600 text-white" : "bg-[#141A28] text-slate-400"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center text-slate-400">
                  <span>Duration (Hours):</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setDurationHours((p) => Math.max(1, p - 1))}
                      className="w-6 h-6 rounded bg-[#141A28] text-white flex items-center justify-center font-bold text-xs"
                    >
                      -
                    </button>
                    <span className="font-bold text-white w-6 text-center text-xs">{durationHours}h</span>
                    <button
                      type="button"
                      onClick={() => setDurationHours((p) => p + 1)}
                      className="w-6 h-6 rounded bg-[#141A28] text-white flex items-center justify-center font-bold text-xs"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex justify-between text-slate-400">
                  <span>Rate Value:</span>
                  <span className="text-white font-bold text-xs">${rateValue.toFixed(2)} / {rateType.toLowerCase()}</span>
                </div>

                <div className="flex justify-between text-slate-400">
                  <span>isCurrentlyEffective():</span>
                  <span className="text-emerald-400 font-bold text-xs">true (2026 Season)</span>
                </div>

                <div className="pt-2 border-t border-[#1C253B] flex justify-between items-baseline text-sm">
                  <span className="text-slate-300 font-sans font-bold">calculateParkingCost():</span>
                  <span className="text-xl font-bold font-mono text-emerald-400">
                    ${currentCost.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#141A28] border border-[#1E2538] text-xs text-slate-300 font-mono leading-relaxed">
                <span className="text-amber-400 font-bold block mb-1">Java Method Implementation:</span>
                <code>{`if (rateType.equalsIgnoreCase("Hourly")) {
  return rateValue * parkingDurationHours;
} else if (rateType.equalsIgnoreCase("Daily")) {
  int days = (int) Math.ceil(parkingDurationHours / 24.0);
  return rateValue * days;
}`}</code>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: JVM OBJECT CONSOLE */}
        {activeTab === "jvm_terminal" && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs text-slate-400 font-mono">
                EXECUTE REAL JAVA METHODS ON DOMAIN OBJECTS:
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => handleRunCommand("calculateParkingCost()")}
                  className="px-2.5 py-1 rounded bg-[#161D2E] border border-[#27324B] hover:bg-[#202940] text-amber-300 flex items-center gap-1 text-xs"
                >
                  <Play className="w-3 h-3" />
                  <span>calculateParkingCost()</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleRunCommand("isCurrentlyEffective()")}
                  className="px-2.5 py-1 rounded bg-[#161D2E] border border-[#27324B] hover:bg-[#202940] text-amber-300 flex items-center gap-1 text-xs"
                >
                  <Play className="w-3 h-3" />
                  <span>isCurrentlyEffective()</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleRunCommand("slot.toString()")}
                  className="px-2.5 py-1 rounded bg-[#161D2E] border border-[#27324B] hover:bg-[#202940] text-amber-300 flex items-center gap-1 text-xs"
                >
                  <Play className="w-3 h-3" />
                  <span>slot.toString()</span>
                </button>
              </div>
            </div>

            {/* Terminal Screen */}
            <div className="p-4 rounded-2xl bg-[#07090F] border border-[#1A2030] font-mono text-xs text-slate-300 h-64 overflow-y-auto space-y-1.5 shadow-inner">
              {terminalLogs.map((line, idx) => (
                <div
                  key={idx}
                  className={
                    line.startsWith("$")
                      ? "text-amber-400 font-bold"
                      : line.includes("true") || line.includes("Instantiating")
                      ? "text-emerald-400"
                      : "text-slate-300"
                  }
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
