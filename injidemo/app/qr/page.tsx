"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { QRDisplay } from "../../components/QRDisplay";
import { Timer } from "../../components/Timer";
import { ExpiryModal } from "../../components/ExpiryModal";

export default function QRPage() {
  const params = useSearchParams();

  const [offer, setOffer] = useState(params.get("offer") || "");
  const [expiresAt, setExpiresAt] = useState(
    Number(params.get("expiresAt"))
  );
  const [isExpired, setIsExpired] = useState(false);
  const [currentCode, setCurrentCode] = useState(
    params.get("offer")?.split("=")[1] || ""
  );

  // Detect expiry
  useEffect(() => {
    if (!expiresAt) return;

    const interval = setInterval(() => {
      if (Date.now() >= expiresAt) {
        setIsExpired(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [expiresAt]);

  // Handle regenerate
  const handleRegenerate = async () => {
    try {
      const res = await fetch("/api/regenerate", {
        method: "POST",
        body: JSON.stringify({ oldCode: currentCode }),
      });

      const data = await res.json();

      setOffer(data.credentialOffer);
      setExpiresAt(data.expiresAt);
      setIsExpired(false);
      setCurrentCode(data.preAuthCode);
    } catch (err) {
      console.error("Regenerate failed:", err);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4 relative font-sans">
      <div className="w-full max-w-md text-center z-10">

        <header className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900">
            Your Certificate QR Code
          </h1>
        </header>

        <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
          <div className="p-8 flex flex-col items-center">

            <div className="mb-6">
              <QRDisplay value={offer} />
            </div>

            <div className="mb-6">
              <Timer expiresAt={expiresAt} />
            </div>

            <div className="w-full bg-blue-50 rounded-xl p-5 mb-6 border border-blue-100">
              <p className="text-blue-900 text-sm">
                Scan this QR code using Inji Wallet to securely receive your certificate.
              </p>
            </div>

            <p className="text-xs text-slate-400">
              This QR code is valid for a limited time and can only be used once.
            </p>

          </div>
        </div>
      </div>

      <ExpiryModal isOpen={isExpired} onRegenerate={handleRegenerate} />
    </main>
  );
}