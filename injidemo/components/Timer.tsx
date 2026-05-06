export function Timer() {
  return (
    <div className="inline-flex items-center justify-center gap-1.5 text-amber-600 font-mono text-base font-bold tracking-tight">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      Expires in 05:00
    </div>
  );
}
