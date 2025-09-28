import { cookies } from 'next/headers';
import { TabBar } from '@/components';

export const metadata = {
  title: 'Cookies Page',
  description: 'Cookies Page',
};

export default async function CookiesPage() {
  const tab = Number((await cookies()).get('tab')?.value || '1');
  return (
    <div className="grid ">
      <div className="flex flex-col">
        <span className="text-3xl">Tabs</span>
        <TabBar currentTab={tab} />
      </div>
    </div>
  );
}
