import { createFileRoute } from '@tanstack/react-router';
import { ArrowRightIcon } from 'lucide-react';
import ButtonLink from '~/components/ButtonLink';
import { HeroSection } from '~/components/HeroSection';
import { Badge } from '~/components/ui/badge';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';
import { GithubIcon } from '~/components/ui/icons';
import { getProfile } from '~/utils/api/profile';
import { getFeaturedProjects } from '~/utils/api/projects';

export const Route = createFileRoute('/')({
  loader: async () => {
    const [profile, projects] = await Promise.all([getProfile(), getFeaturedProjects()]);
    return { profile, projects };
  },
  component: HomePage,
});

function HomePage() {
  const { profile, projects } = Route.useLoaderData();

  return (
    <div className="relative space-y-24">
      <HeroSection
        profile={profile}
        className="container mx-auto px-4 max-w-5xl pt-12 md:pt-24"
      />
      <div className="relative container mx-auto px-4 max-w-5xl mb-12 md:mb-24 z-10">
        {/* Featured Projects Grid */}
        <section className="space-y-10">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Selected Work</h2>
            <ButtonLink to="/projects" variant="outline">
              View all <ArrowRightIcon />
            </ButtonLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects?.map((project) => (
              <Card
                key={project.id}
                className="flex flex-col group overflow-hidden border-border/50 hover:border-primary/50 transition-colors"
              >
                <CardHeader className="space-y-4">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <GithubIcon className="h-5 w-5 fill-foreground" />
                      </a>
                    )}
                  </div>
                  <CardDescription className="text-base line-clamp-3 leading-relaxed">
                    {project.description?.[0]?.children?.[0]?.text}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.relatedSkills?.slice(0, 4).map((skill: any) => (
                      <Badge key={skill.id} variant="secondary" className="font-normal text-xs">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardFooter className="mt-auto pt-6 pb-6">
                  <ButtonLink
                    to={`/projects/$projectId`}
                    params={{ projectId: project.id }}
                    variant="link"
                    className="font-semibold text-primary inline-flex items-center"
                  >
                    Read Case Study <ArrowRightIcon />
                  </ButtonLink>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
