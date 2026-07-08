import { Link, useRouter } from "@tanstack/react-router";
import { Button } from "./ui/button";
import { P } from "./ui/typography";
import { ChevronLeftIcon, HomeIcon } from "lucide-react";
import { PropsWithChildren } from "react";

export function NotFound({ children }: PropsWithChildren) {
  const router = useRouter();
  return (
    <div className="space-y-2 p-2">
      <div>
        {children || (
          <P className="text-gray-600 dark:text-gray-400">
            The page you are looking for does not exist.
          </P>
        )}
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <Button onClick={() => window.history.back()}>
          <ChevronLeftIcon data-icon="inline-start" className="size-4" />
          Go back
        </Button>
        <Button
          variant="outline"
          onClick={() => router.navigate({ href: "/", replace: true })}
        >
          <HomeIcon data-icon="inline-start" className="size-4" />
          Home
        </Button>
      </div>
    </div>
  );
}
