import React, { createContext, useContext, useState, useEffect } from 'react';

// Simple Router Context mimicking Next.js App Router
const RouterContext = createContext<{ 
  path: string; 
  push: (path: string) => void; 
}>({ 
  path: '/', 
  push: () => {} 
});

export const useRouter = () => useContext(RouterContext);

export const RouterProvider = ({ children }: { children?: React.ReactNode }) => {
  // Initialize path from window.location.pathname
  const [path, setPath] = useState(() => {
    if (typeof window === 'undefined') return '/';
    return window.location.pathname === '' ? '/' : window.location.pathname;
  });

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const push = (newPath: string) => {
    try {
      // Attempt to update the URL bar using History API
      // We catch errors here because some restricted sandboxes (like blob: origins) 
      // block pushState, but we still want the app to navigate internally.
      window.history.pushState({}, '', newPath);
    } catch (e) {
      console.warn("URL update blocked by environment, proceeding with in-memory navigation.");
    }
    
    setPath(newPath);
    window.scrollTo(0, 0);
  };

  return (
    <RouterContext.Provider value={{ path, push }}>
      {children}
    </RouterContext.Provider>
  );
};

// Mock next/link
export const Link: React.FC<{ href: string; children?: React.ReactNode; className?: string }> = ({ href, children, className }) => {
  const { push } = useRouter();
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

// Mock next/navigation
export const usePathname = () => {
  const { path } = useRouter();
  return path;
};

export const notFound = () => {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center">
      <h2 className="text-4xl font-bold text-slate-800 mb-4">404</h2>
      <p className="text-xl text-slate-600">מצטערים, הדף שחיפשת לא נמצא.</p>
      <Link href="/" className="mt-6 text-indigo-600 hover:underline font-bold">
        חזרה לדף הבית
      </Link>
    </div>
  );
};
