import { createFileRoute } from '@tanstack/react-router';
import { getProfile } from '~/utils/api/profile';
import { getFeaturedProjects } from '~/utils/api/projects';

export const Route = createFileRoute('/projects')({
  loader: async () => {
    const [profile, projects] = await Promise.all([getProfile(), getFeaturedProjects()]);
    return { profile, projects };
  },
  component: ProjectsList,
});

function ProjectsList() {
  const { projects: _ } = Route.useLoaderData();

  return <div className="relative space-y-24"></div>;
}
