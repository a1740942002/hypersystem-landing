import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['zh-TW', 'zh-CN', 'en', 'ja'],
  defaultLocale: 'zh-TW',
});

export type Locale = (typeof routing.locales)[number];
