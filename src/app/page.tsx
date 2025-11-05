import { Contact } from '@/components/contact/Contact';
import { Footer } from '@/components/footer/Footer';
import { MainHeader } from '@/app/_components/main-header';
import { ProjectSection } from '@/components/section/ProjectSection';
import { Hero } from './_components/hero';
import { AboutMe } from './_components/about-me';
import { Project } from './_components/project';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-dvh relative max-w-screen overflow-x-hidden">
      <div className="h-full grid grid-cols-[1rem_auto_1rem] lg:grid-cols-[5rem_1fr_5rem] mx-auto">
        <div
          className="border-r border-gray-200"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, rgba(0,0,0,0.04) 0 1px, transparent 1px 12px)',
            backgroundSize: 'auto',
            opacity: 0.9,
          }}
        />

        <div>{children}</div>
        <div
          className="border-l border-gray-200"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.04) 0 1px, transparent 1px 12px)',
            backgroundSize: 'auto',
            opacity: 0.9,
          }}
        />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main>
      <MainHeader />
      <article>
        <Hero />
        <AboutMe />
        <Project />
      </article>
      {/* <AboutMe />
       
    */}
      {/* <MainHeader /> */}
      {/* 
      <Hero />
      <ProjectSection />
      <Contact />
      <Footer /> */}{' '}
    </main>
  );
}
