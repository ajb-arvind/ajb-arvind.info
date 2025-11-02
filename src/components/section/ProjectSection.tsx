import { PROJECT_DATA } from '@/lib/constant';
import { Separator } from '../ui/Separator';
import { SectionTitle, SectionTitleRoot } from './SectionTitle';
import {
  Article,
  ArticleImage,
  ArticleSummary,
  ArticleTitle,
  ArticleDescription,
  ArticleFooter,
  ArticleLink,
} from './article';
import Project from '@/svg/project.svg';

export const ProjectSection = () => {
  return (
    <section>
      <SectionTitleRoot className="mb-4">
        <Project />
        <SectionTitle>Project</SectionTitle>
      </SectionTitleRoot>
      <div className="flex flex-col md:flex-row items-center gap-4">
        {PROJECT_DATA.map((project) => {
          return (
            <Article key={project.id}>
              <ArticleImage
                src={project.image}
                width={300}
                height={170}
                alt={project.alt}
              />
              <ArticleSummary>
                <ArticleTitle>{project.title}</ArticleTitle>
                <ArticleDescription>{project.description}</ArticleDescription>
                <ArticleFooter>
                  <ArticleLink
                    linkButtonProps={{
                      href: project.link,
                    }}
                  >
                    Go to this
                  </ArticleLink>
                </ArticleFooter>
              </ArticleSummary>
            </Article>
          );
        })}
      </div>
    </section>
  );
};
