import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { ClubSystem } from '@/components/club/ClubSystem';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo' });

  return {
    title: t('clubTitle'),
    description: t('description'),
    openGraph: {
      title: t('clubTitle'),
      description: t('description'),
      locale: locale,
    },
  };
}

export default async function ClubPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ClubSystem />;
}
