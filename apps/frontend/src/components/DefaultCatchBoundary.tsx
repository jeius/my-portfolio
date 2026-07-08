import {
  ErrorComponent,
  Link,
  useLocation,
  useRouter,
} from "@tanstack/react-router";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { ChevronLeftIcon, HomeIcon, RefreshCcwIcon } from "lucide-react";
import { Button } from "./ui/button";

export function DefaultCatchBoundary({ error }: ErrorComponentProps) {
  const router = useRouter();
  const isRoot = useLocation({
    select: (location) => location.pathname === "/",
  });

  console.error(error);

  return (
    <div className="min-w-0 flex-1 p-4 flex flex-col items-center justify-center gap-6">
      <ErrorComponent error={error} />
      <div className="flex gap-2 items-center flex-wrap">
        <Button
          onClick={() => {
            router.invalidate();
          }}
        >
          <RefreshCcwIcon data-icon="inline-start" className="size-4" />
          Try Again
        </Button>
        {isRoot ? (
          <Button
            variant="outline"
            onClick={() => router.navigate({ href: "/", replace: true })}
          >
            <HomeIcon data-icon="inline-start" className="size-4" />
            Home
          </Button>
        ) : (
            <Button
            
            variant="outline"
            onClick={() => {
              window.history.back();
            }}
          >
            <ChevronLeftIcon data-icon="inline-start" className="size-4" />
            Go Back
          </Button>
        )}
      </div>
    </div>
  );
}
