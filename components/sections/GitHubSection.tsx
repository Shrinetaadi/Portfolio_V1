import { ExternalLink, GitBranch } from "lucide-react";
import { getGitHubRepos, languageColors } from "@/lib/github";
import { profile } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GitHubRepoCard } from "@/components/sections/GitHubRepoCard";

export async function GitHubSection() {
  const repos = await getGitHubRepos();

  return (
    <section id="github" className="section-padding">
      <div className="container-main">
        <SectionHeading
          label="Open Source"
          title="GitHub Repositories"
          subtitle="Public code — Android apps, full-stack tools, and experiments."
        />

        <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            <span className="text-foreground">{repos.length}</span> public repositories
          </p>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-card-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan"
          >
            <GitBranch size={14} />
            View profile on GitHub
            <ExternalLink size={12} />
          </a>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {repos.map((repo, index) => (
            <GitHubRepoCard
              key={repo.name}
              repo={repo}
              index={index}
              languageColors={languageColors}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
