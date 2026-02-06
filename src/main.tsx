import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, useRouter } from './lib/router';
import { AppShell } from './components/AppShell';

// Pages
import { Page as HomePage } from './pages/index/Page';
import { Page as GlossaryPage } from './pages/glossary/Page';
import { Page as PostPage } from './pages/blog/PostPage';
import { Page as NotFoundPage } from './pages/not-found/Page';

const AppContent = () => {
  const { path } = useRouter();

  let Component;
  let pageProps = {};

  if (path === '/' || path === '') {
    Component = HomePage;
  } else if (path === '/glossary') {
    Component = GlossaryPage;
  } else if (path.startsWith('/article/')) {
    const id = path.split('/')[2];
    if (id) {
      Component = PostPage;
      pageProps = { id };
    } else {
       Component = NotFoundPage;
    }
  } else {
    Component = NotFoundPage;
  }

  return (
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
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