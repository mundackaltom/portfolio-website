import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/projects';


function normalizeSlug(slug: string | undefined | null) {
  if (!slug || typeof slug !== 'string') return '';
  return slug.trim().toLowerCase();
}

function getProject(slug: string): Project | undefined {
  const safeSlug = normalizeSlug(slug);
  return projects.find((p) => normalizeSlug(p.slug) === safeSlug);
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] py-24 px-4">
        <div className="text-5xl mb-4">🚫</div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">Project Not Found</h1>
        <p className="text-gray-600 mb-6">Sorry, we couldn&apos;t find a project for this URL.</p>
        <Link href="/work" className="text-blue-600 underline text-base font-medium">Back to Work</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{project.title}</h1>
          <div className="flex items-center gap-2">
            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${project.status === 'Live' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-700'}`}>{project.status}</span>
            <span className="text-sm text-gray-500">{project.year}</span>
          </div>
        </div>
        <div className="text-lg text-gray-700 mb-2">{project.subtitle}</div>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs font-semibold">{tech}</span>
          ))}
        </div>
        <div className="flex gap-3 mb-2">
          <Link href={project.githubUrl} target="_blank" className="px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-800">View GitHub</Link>
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">Live Demo</Link>
          )}
        </div>
      </div>

      {/* Overview */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Overview</h2>
        <div className="text-gray-800 mb-2"><strong>Problem:</strong> {project.description}</div>
        <div className="text-gray-800"><strong>Solution:</strong> {project.longDescription}</div>
      </div>

      {/* Highlights */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Highlights</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          {project.highlights.map((h) => <li key={h}>{h}</li>)}
        </ul>
      </div>

      {/* Features */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Features</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          {project.features.map((f) => <li key={f}>{f}</li>)}
        </ul>
      </div>

      {/* Screenshots */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Screenshots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {project.images.map((img, i) => (
            <div key={img} className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border">
              <Image src={img} alt={`${project.title} screenshot ${i+1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          ))}
        </div>
      </div>

      {/* Challenges & Learnings */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Challenges & Learnings</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          {project.challenges.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </div>

      {/* Future Improvements */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Future Improvements</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          {project.futureImprovements.map((f) => <li key={f}>{f}</li>)}
        </ul>
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-8">
        <Link href="/#work" className="text-blue-600 underline">Back to Work</Link>
        {/* Next/Prev project links (optional) could go here */}
      </div>
    </div>
  );
}
