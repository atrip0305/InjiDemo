export function ExpiryModal({ isOpen = false }: { isOpen?: boolean }) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl p-6 text-center transform transition-all border border-slate-100">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50 mb-5">
          <svg className="h-7 w-7 text-red-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">QR Code Expired</h3>
        <p className="text-[15px] text-slate-500 mb-8 leading-relaxed">
          Your QR code has expired. Please generate a new one.
        </p>
        <button
          type="button"
          className="w-full inline-flex justify-center rounded-xl bg-blue-600 px-4 py-3 text-[15px] font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all"
        >
          Regenerate QR
        </button>
      </div>
    </div>
  );
}
