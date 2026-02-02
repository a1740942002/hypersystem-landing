import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { PricingPage } from '@/components/pricing/PricingPage';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo' });

  return {
    title: t('pricingTitle'),
    description: t('description'),
    openGraph: {
      title: t('pricingTitle'),
      description: t('description'),
      locale: locale,
    },
  };
}

export default async function PricingPageRoute({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PricingPage />;
}
