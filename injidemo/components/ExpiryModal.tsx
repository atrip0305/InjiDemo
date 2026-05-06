"use client";

export function ExpiryModal({
  isOpen,
  onRegenerate,
}: {
  isOpen: boolean;
  onRegenerate: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-sm text-center shadow-xl">
        <h2 className="text-xl text-black font-semibold mb-2">QR Code Expired</h2>
        <p className="text-gray-600 mb-6">
          Your QR code has expired. Please generate a new one.
        </p>
        <button
          onClick={onRegenerate}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Regenerate QR
        </button>
      </div>
    </div>
  );
}