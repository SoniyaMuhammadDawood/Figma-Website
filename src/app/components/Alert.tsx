// components/Alert.tsx
export function Alert({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
      <div className={`p-4 border-l-4 border-yellow-500 bg-yellow-100 text-yellow-700 ${className}`}>
        {children}
      </div>
    )
  }
  
  export function AlertCircle({ className }: { className?: string }) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-yellow-700 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="9" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h0m0 0h0m-6 0h6" />
      </svg>
    );
  }
  
  export function AlertDescription({ children }: { children: React.ReactNode }) {
    return <div className="mt-2 text-sm">{children}</div>;
  }
  