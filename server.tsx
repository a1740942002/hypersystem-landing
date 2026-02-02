
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

/**
 * Server-side render function.
 * In a real SSR environment, this would be called by your Express/Hono/Node server.
 */
export function render(url: string) {
  // We render the app to a string. 
  // Note: For a real production app, you might pass 'url' to a Router.
  const appHtml = renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  return appHtml;
}
