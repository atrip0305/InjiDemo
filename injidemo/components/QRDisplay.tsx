"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

type Props = {
  value: string;
};

export function QRDisplay({ value }: Props) {
  const [qr, setQr] = useState<string>("");

  useEffect(() => {
    if (!value) return;

    QRCode.toDataURL(value)
      .then((url) => setQr(url))
      .catch((err) => console.error("QR generation error:", err));
  }, [value]);

  return (
    <div className="flex justify-center">
      <div className="relative w-72 h-72 p-4 bg-white ring-4 ring-blue-50 rounded-2xl shadow-xl flex items-center justify-center">

        {/* QR Content */}
        {qr ? (
          <img
            src={qr}
            alt="QR Code"
            className="w-full h-full object-contain rounded-xl"
          />
        ) : (
          <div className="w-full h-full bg-slate-50 rounded-xl border border-dashed border-slate-300 flex items-center justify-center">
            <svg
              className="w-16 h-16 text-slate-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
              />
            </svg>
          </div>
        )}

        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-blue-600 rounded-tl-2xl -m-[2px]" />
        <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-blue-600 rounded-tr-2xl -m-[2px]" />
        <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-blue-600 rounded-bl-2xl -m-[2px]" />
        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-blue-600 rounded-br-2xl -m-[2px]" />
      </div>
    </div>
  );
}