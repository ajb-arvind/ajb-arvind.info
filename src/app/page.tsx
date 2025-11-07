import { MainHeader } from '@/app/_components/main-header';
import { Hero } from './_components/hero';
import { AboutMe } from './_components/about-me';
import { Project } from './_components/project';
import { Contact } from './_components/contact';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-dvh relative max-w-screen overflow-x-hidden">
      <div className="h-full grid grid-cols-[1rem_auto_1rem] md:grid-cols-[5rem_1fr_5rem] mx-auto">
        <div
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, rgba(0,0,0,0.04) 0 1px, transparent 1px 12px)',
            backgroundSize: 'auto',
            opacity: 0.9,
          }}
        />

        <div>{children}</div>
        <div
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
      <div className="fixed inset-x-0 top-0 h-full w-full bg-background">
        <div className="absolute top-0 bottom-0 left-4 right-4 md:left-20 md:right-20 border-r border-r-shark-100 bg-[linear-gradient(to_right,var(--color-shark-100)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-shark-100)_1px,transparent_1px)] bg-[size:150px_var(--spacing-nav-height)]"></div>
        {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(125%_125%_at_50%_10%,var(--color-shark-200)_40%,rgba(15,23,42,1)_100%)]"></div> */}
      </div>
      <Wrapper>
        <MainHeader />
        <article>
          <Hero />
          <AboutMe />
          <Project />
          <Contact />
        </article>
      </Wrapper>
    </main>
  );
}
