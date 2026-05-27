import { Outlet } from 'react-router';
import { Header } from '@/widgets/header';
import { Footer } from '@/shared/ui/Footer';
import { PageLayout } from '@/shared/ui/PageLayout';

export const PublicLayout = () => {
  return (
    <PageLayout headerSlot={<Header />} footerSlot={<Footer />}>
      <Outlet />
    </PageLayout>
  );
};
