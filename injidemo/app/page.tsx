"use client";
export default function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={() => (window.location.href = "/dashboard")}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Go to Dashboard
      </button>
    </div>
  );
}