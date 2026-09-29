import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <h1 className="text-5xl font-medium tracking-tight text-slate-900 sm:text-6xl">
        Hello World
      </h1>
    </div>
  );
}
