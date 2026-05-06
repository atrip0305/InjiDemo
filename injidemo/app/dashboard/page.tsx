'use client';
import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-2xl">
        <header className="mb-8 text-center sm:text-left">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Student</h1>
        </header>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Degree Certificate</h2>

            <div className="mb-6 flex items-center">
              <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 border border-green-200">
                <svg className="mr-1.5 h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Eligible for Certificate
              </span>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              You have completed all requirements and can request your digital certificate.
            </p>

            <div className="flex justify-end mt-8">
              <Link
                href="/qr"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all shadow-md hover:shadow-lg"
              >
                Generate Certificate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}