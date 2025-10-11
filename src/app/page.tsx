import { MainHeader } from '@/components/Header/main-header';
import { Hero } from '@/components/hero/Hero';
import { LinkButton } from '@/components/ui/LinkButton';
import { Separator } from '@/components/ui/Separator';

export default function Home() {
  return (
    <main className="pt-8 max-w-330 mx-auto">
      <MainHeader />
      <Hero />
      <div className="space-y-1.5 my-4">
        <Separator />
        <Separator />
      </div>
    </main>
  );
}
