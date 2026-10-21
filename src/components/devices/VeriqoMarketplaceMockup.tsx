"use client";

import React, { useState } from "react";
import {
  ShoppingBag,
  ShieldCheck,
  Camera,
  Upload,
  CheckCircle2,
  FileText,
  Lock,
  Layers,
  Sparkles,
  Barcode
} from "lucide-react";

export function VeriqoMarketplaceMockup() {
  const [activeTab, setActiveTab] = useState<"catalog" | "scanner" | "kyc">("catalog");
  const [barcodeScanned, setBarcodeScanned] = useState(false);
  const [kycUploaded, setKycUploaded] = useState(false);

  return (
    <div className="w-full bg-[#0D111A] text-white rounded-[28px] border border-[#22293C] shadow-2xl overflow-hidden font-sans">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-5 py-3.5 bg-[#121623] border-b border-[#1E2436] gap-3">
        <div className="flex items-center gap-2.5">
          <ShoppingBag className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono font-bold text-white tracking-tight">
            Veriqo Marketplace &bull; Flutter &amp; Supabase Storage RLS
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
            Riverpod &bull; 001_schema.sql
          </span>
        </div>

        <div className="flex items-center bg-[#171D2D] p-1 rounded-xl border border-[#263048] text-xs">
          <button
            type="button"
            onClick={() => setActiveTab("catalog")}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === "catalog" ? "bg-emerald-600 text-white font-semibold shadow-md" : "text-slate-400 hover:text-white"
            }`}
          >
            Product Catalog
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("scanner")}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1 ${
              activeTab === "scanner" ? "bg-emerald-600 text-white font-semibold shadow-md" : "text-slate-400 hover:text-white"
            }`}
          >
            <Barcode className="w-3.5 h-3.5" />
            <span>Origin Scanner</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("kyc")}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1 ${
              activeTab === "kyc" ? "bg-emerald-600 text-white font-semibold shadow-md" : "text-slate-400 hover:text-white"
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Seller KYC Bucket</span>
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-7">
        {/* TAB 1: PRODUCT CATALOG */}
        {activeTab === "catalog" && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-in fade-in">
            {[
              {
                name: "GI Kampot Black Pepper",
                seller: "Kampot Spice Co. (Verified)",
                price: "$14.50",
                badge: "GI Certified",
                origin: "Kampot Province"
              },
              {
                name: "Handwoven Angkor Silk Scarf",
                seller: "Khmer Heritage Weavers",
                price: "$28.00",
                badge: "Handcrafted",
                origin: "Siem Reap Province"
              },
              {
                name: "Mondulkiri Wild Forest Honey",
                seller: "Mondulkiri Organic Co-op",
                price: "$19.00",
                badge: "Organic Forest",
                origin: "Mondulkiri Province"
              }
            ].map((p, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#121726] border border-[#20273D] space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">{p.origin}</span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                    {p.badge}
                  </span>
                </div>
                <div>
                  <h6 className="text-sm font-bold text-white tracking-tight">{p.name}</h6>
                  <p className="text-[11px] text-slate-400">{p.seller}</p>
                </div>
                <div className="pt-2 border-t border-[#1E253B] flex justify-between items-center">
                  <span className="text-base font-bold font-mono text-white">{p.price}</span>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Authenticity
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: ORIGIN BARCODE SCANNER */}
        {activeTab === "scanner" && (
          <div className="max-w-md mx-auto space-y-4 text-center animate-in fade-in">
            <div className="relative h-44 rounded-2xl bg-black border border-slate-800 flex items-center justify-center overflow-hidden">
              <div className="w-48 h-24 border-2 border-dashed border-emerald-400/80 rounded-xl relative flex items-center justify-center">
                <Barcode className="w-24 h-12 text-emerald-400/70" />
                <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_8px_#34d399] animate-[bounce_2s_infinite]" />
              </div>
              <span className="absolute bottom-2 text-[10px] font-mono text-emerald-400">
                BARCODE_TOKEN: VRQ-GI-889104
              </span>
            </div>

            {!barcodeScanned ? (
              <button
                type="button"
                onClick={() => setBarcodeScanned(true)}
                className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md"
              >
                Scan Product Origin Barcode
              </button>
            ) : (
              <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/50 space-y-2 text-left">
                <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Geographical Indication (GI) Verified</span>
                </div>
                <div className="text-[11px] text-slate-300 space-y-1 font-mono">
                  <div>Origin Lot: Kampot Highland Plantation #401</div>
                  <div>Harvest Date: 2026-03-15 &bull; Authenticity Certificate #7819</div>
                  <div className="text-emerald-400">Ledger Verified in Supabase PostgreSQL</div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: SELLER KYC BUCKET */}
        {activeTab === "kyc" && (
          <div className="max-w-lg mx-auto space-y-4 animate-in fade-in">
            <div className="p-4 rounded-xl bg-[#090C14] border border-[#1C2336] space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-400">SUPABASE STORAGE RLS ARCHITECTURE</span>
                <span className="text-emerald-400">Bucket: /kyc-documents (Private)</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Seller national ID scans are stored in a private bucket with strict PostgreSQL Row-Level Security policies:
                <code className="text-emerald-400 font-mono block mt-1">
                  CREATE POLICY &quot;Sellers can only access own KYC&quot; ON storage.objects FOR ALL USING (bucket_id = &apos;kyc-documents&apos; AND auth.uid() = owner);
                </code>
              </p>
            </div>

            {!kycUploaded ? (
              <button
                type="button"
                onClick={() => setKycUploaded(true)}
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2"
              >
                <Upload className="w-4 h-4" />
                <span>Simulate National ID Upload to Private Bucket</span>
              </button>
            ) : (
              <div className="p-3.5 rounded-xl bg-emerald-950/50 border border-emerald-600/50 text-center space-y-1">
                <div className="flex items-center justify-center gap-1.5 text-emerald-400 font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>KYC Encrypted &amp; Uploaded to Supabase Private Bucket</span>
                </div>
                <p className="text-[10px] text-slate-300 font-mono">
                  Encrypted AES-256. Access restricted strictly to verified seller UID.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
