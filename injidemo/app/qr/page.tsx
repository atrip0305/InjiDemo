"use client";

import { useSearchParams } from "next/navigation";
import { QRDisplay } from "../../components/QRDisplay";
import { Timer } from "../../components/Timer";
import { ExpiryModal } from "../../components/ExpiryModal";

export default function QRPage() {
  const params = useSearchParams();

  const offer = params.get("offer") || "";
  const expiresAt = Number(params.get("expiresAt"));

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4 relative font-sans">
      <div className="w-full max-w-md text-center z-10">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Your Certificate QR Code
          </h1>
        </header>

        {/* Card */}
        <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative">
          <div className="p-8 sm:p-10 flex flex-col items-center">

            {/* QR */}
            <div className="mb-6">
              <QRDisplay value={offer} />
            </div>

            {/* Timer */}
            <div className="mb-6">
              <Timer expiresAt={expiresAt} />
            </div>

            {/* Instructions */}
            <div className="w-full bg-blue-50/60 rounded-xl p-5 mb-6 border border-blue-100">
              <p className="text-blue-900 text-[15px] font-medium leading-relaxed">
                Scan this QR code using Inji Wallet to securely receive your certificate.
              </p>
            </div>

            {/* Security Note */}
            <div className="w-full pt-2">
              <p className="text-xs text-slate-400 font-medium">
                This QR code is valid for a limited time and can only be used once.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Modal (we will control this in Phase 4) */}
      <ExpiryModal isOpen={false} />
    </main>
  );
}