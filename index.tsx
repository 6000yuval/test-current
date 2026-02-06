import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, useRouter } from './lib/router';

// Vike Architecture Components
import { PageShell } from './renderer/PageShell';
import { Page as HomePage } from './pages/index/+Page';
import { Page as GlossaryPage } from './pages/glossary/+Page';
import { Page as ArticlePage } from './pages/article/@id/+Page';

const AppContent = () => {
  const { path } = useRouter();

  let Component;
  let pageProps = {};

  // Simple Vike Routing Shim for Client Preview
  if (path === '/' || path === '') {
    Component = HomePage;
  } else if (path === '/glossary') {
    Component = GlossaryPage;
  } else if (path.startsWith('/article/')) {
    const id = path.split('/')[2];
    if (id) {
      Component = ArticlePage;
      pageProps = { routeParams: { id } };
    } else {
       Component = () => <div className="p-8 text-center">Invalid Article ID</div>;
    }
  } else {
    Component = () => <div className="p-8 text-center">404 - Page Not Found</div>;
  }

  return (
    <PageShell>
      <Component {...pageProps} />
    </PageShell>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  </React.StrictMode>
);