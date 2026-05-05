"use client";
export default function DashboardPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <button
        onClick={() => (window.location.href = "/qr")}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Go to QR Page
      </button>
    </div>
  );
}