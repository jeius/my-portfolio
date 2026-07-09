import { extractObject } from '@jeius-portfolio/utilities/extractors';
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html';
import { createFileRoute } from '@tanstack/react-router';
import { useMemo } from 'react';
import { Badge } from '~/components/ui/badge';
import { Card, CardContent, CardTitle } from '~/components/ui/card';
import { getExperiences } from '~/utils/api/experiences';
import { getProfile } from '~/utils/api/profile';
import { getSkills } from '~/utils/api/skills';

export const Route = createFileRoute('/about')({
  loader: async () => {
    const [profile, paginatedExps, paginatedSkills] = await Promise.all([
      getProfile(),
      getExperiences({ data: { pagination: false, limit: 50 } }),
      getSkills({ data: { pagination: false, limit: 50 } }),
    ]);
    return { profile, paginatedExps, paginatedSkills };
  },
  component: AboutPage,
});

function AboutPage() {
  const { profile, paginatedExps, paginatedSkills } = Route.useLoaderData();

  const experiences = paginatedExps.docs;

  const skills = useMemo(() => {
    const skillsDict: Map<string, string[]> = new Map();

    paginatedSkills.docs.forEach((skill) => {
      const category = extractObject(skill.category);
      if (!category) return;

      const existingSkill = skillsDict.get(category.name);
      if (existingSkill) existingSkill.push(skill.name);
      else skillsDict.set(category.name, [skill.name]);
    });
    return Array.from(skillsDict.entries());
  }, [paginatedSkills]);

  const bioHTML = convertLexicalToHTML({
    data: profile.bio,
    disableContainer: true,
  });

  return (
    <div className="max-w-3xl space-y-20 animate-in fade-in duration-500">
      {/* Bio Section */}
      <section className="space-y-6">
        <h1>About Me.</h1>
        <div
          className="text-lg text-muted-foreground leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: bioHTML }}
        />
      </section>

      {/* Experience Timeline */}
      <section className="space-y-8">
        <h2 className="border-b pb-4">Experience</h2>
        <div className="space-y-6 border-l-2 border-muted pl-6 ml-3">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative">
              {/* Timeline Dot */}
              <div className="absolute -left-7.75 top-1.5 h-4 w-4 rounded-full border-2 border-background bg-primary" />

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-2">
                <h3>{exp.role}</h3>
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                  {new Date(exp.startDate).toLocaleDateString(undefined, {
                    month: 'short',
                    year: 'numeric',
                  })}{' '}
                  —{' '}
                  {exp.isCurrent
                    ? 'Present'
                    : exp.endDate
                      ? new Date(exp.endDate).toLocaleDateString(undefined, {
                          month: 'short',
                          year: 'numeric',
                        })
                      : 'Unknown'}
                </span>
              </div>
              <p className="text-primary font-medium mb-3">{exp.company}</p>
              {exp.responsibilities && (
                <div
                  className="text-muted-foreground"
                  dangerouslySetInnerHTML={{
                    __html: convertLexicalToHTML({
                      data: exp.responsibilities,
                      disableContainer: true,
                    }),
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Technical Arsenal */}
      <section className="space-y-8">
        <h2 className="border-b pb-4">Technical Arsenal</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map(([category, skills]) => (
            <Card key={category}>
              <CardTitle className="px-6">
                <h3>{category}</h3>
              </CardTitle>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-background">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
