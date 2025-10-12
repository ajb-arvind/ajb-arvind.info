import { Contact } from '@/components/contact/Contact';
import { Footer } from '@/components/footer/Footer';
import { MainHeader } from '@/components/Header/main-header';
import { Hero } from '@/components/hero/Hero';
import { ProjectSection } from '@/components/section/ProjectSection';

export default function Home() {
  return (
    <main className="pt-8 max-w-330 mx-auto h-[calc(100vh-4rem)]">
      <MainHeader />
      <Hero />
      <ProjectSection />
      <Contact />
      <Footer />
    </main>
  );
}
