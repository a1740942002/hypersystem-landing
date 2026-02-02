
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

/**
 * Vite SSR/SSG Render Function
 * @param url The path to render (for multi-page SSG)
 */
export function render(url: string = '/') {
  // 在更複雜的 SSG 設置中，這裡會根據 url 切換路由狀態
  const appHtml = renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  return { appHtml };
}
