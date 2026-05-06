export function QRDisplay() {
  return (
    <div className="flex justify-center">
      <div className="relative w-72 h-72 p-4 bg-white ring-8 ring-blue-50/50 rounded-2xl shadow-2xl flex items-center justify-center">
        {/* Placeholder for actual QR code */}
        <div className="w-full h-full bg-slate-50 rounded-xl border border-dashed border-slate-300 flex items-center justify-center">
          <svg className="w-16 h-16 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
          </svg>
        </div>
        
        {/* Decorative corner markers typical of QR scanning UI */}
        <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-blue-600 rounded-tl-2xl -m-[2px]"></div>
        <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-blue-600 rounded-tr-2xl -m-[2px]"></div>
        <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-blue-600 rounded-bl-2xl -m-[2px]"></div>
        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-blue-600 rounded-br-2xl -m-[2px]"></div>
      </div>
    </div>
  );
}
