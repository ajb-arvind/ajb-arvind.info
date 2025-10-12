import { MainHeader } from '@/components/Header/main-header';
import { Hero } from '@/components/hero/Hero';
import { Separator } from '@/components/ui/Separator';
import { SectionTitle } from '@/components/section/SectionTitle';
import { SectionCard } from '@/components/section/article';
import { ProjectSection } from '@/components/section/ProjectSection';

export default function Home() {
  return (
    <main className="pt-8 max-w-330 mx-auto h-[calc(100vh-4rem)]">
      <MainHeader />
      <Hero />
      <ProjectSection />
    </main>
  );
}
