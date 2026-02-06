import React, { createContext, useContext, useState, useEffect } from 'react';

const RouterContext = createContext<{ 
  path: string; 
  push: (path: string) => void; 
}>({ 
  path: '/', 
  push: () => {} 
});

export const useRouter = () => useContext(RouterContext);

export const RouterProvider = ({ children }: { children?: React.ReactNode }) => {
  const [path, setPath] = useState(() => {
    if (typeof window === 'undefined') return '/';
    const p = window.location.pathname;
    // Basic normalization for SPA routing
    if (p === '/glossary' || p.startsWith('/article/')) {
      return p;
    }
    return '/';
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
      window.history.pushState({}, '', newPath);
    } catch (e) {
      console.warn("Navigation warning: ", e);
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

export const Link: React.FC<{ href: string; children?: React.ReactNode; className?: string }> = ({ href, children, className }) => {
  const { push } = useRouter();
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    push(href);
  };
  return <a href={href} onClick={handleClick} className={className}>{children}</a>;
};