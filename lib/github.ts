import { profile } from "@/lib/content";

export type GitHubRepo = {
  name: string;
  description: string | null;
  url: string;
  stars: number;
  language: string | null;
  topics: string[];
  updatedAt: string;
};

const HIDDEN_REPOS = new Set(["Shrinetaadi"]);

/** Static fallback when the GitHub API is unavailable at build time */
export const githubReposFallback: GitHubRepo[] = [
  {
    name: "Remote",
    description: "Catvision Remote — Android STB remote control application",
    url: "https://github.com/Shrinetaadi/Remote",
    stars: 0,
    language: "Java",
    topics: [],
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    name: "hotel_staff_management",
    description: "Hotel staff management web application",
    url: "https://github.com/Shrinetaadi/hotel_staff_management",
    stars: 0,
    language: "TypeScript",
    topics: [],
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    name: "Mausam",
    description: "Weather application for Android",
    url: "https://github.com/Shrinetaadi/Mausam",
    stars: 0,
    language: "Kotlin",
    topics: [],
    updatedAt: "2023-01-01T00:00:00Z",
  },
  {
    name: "Pinggg",
    description: "Real-time chat app powered by Firebase",
    url: "https://github.com/Shrinetaadi/Pinggg",
    stars: 0,
    language: "Kotlin",
    topics: [],
    updatedAt: "2023-01-01T00:00:00Z",
  },
  {
    name: "NotesApp_Kotlin",
    description: "Notes app built with Kotlin",
    url: "https://github.com/Shrinetaadi/NotesApp_Kotlin",
    stars: 0,
    language: "Kotlin",
    topics: [],
    updatedAt: "2023-01-01T00:00:00Z",
  },
  {
    name: "ATGGallery",
    description: "Android gallery application",
    url: "https://github.com/Shrinetaadi/ATGGallery",
    stars: 0,
    language: "Kotlin",
    topics: [],
    updatedAt: "2023-01-01T00:00:00Z",
  },
];

type ApiRepo = {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  topics?: string[];
  updated_at: string;
  private: boolean;
  fork: boolean;
};

function mapRepo(repo: ApiRepo): GitHubRepo {
  return {
    name: repo.name,
    description: repo.description,
    url: repo.html_url,
    stars: repo.stargazers_count,
    language: repo.language,
    topics: repo.topics ?? [],
    updatedAt: repo.updated_at,
  };
}

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  const username = profile.github.replace(/\/$/, "").split("/").pop() ?? "shrinetaadi";

  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated&type=owner`,
      {
        next: { revalidate: 3600 },
        headers: { Accept: "application/vnd.github+json" },
      },
    );

    if (!res.ok) return githubReposFallback;

    const data = (await res.json()) as ApiRepo[];
    const repos = data
      .filter((r) => !r.private && !HIDDEN_REPOS.has(r.name))
      .map(mapRepo);

    return repos.length > 0 ? repos : githubReposFallback;
  } catch {
    return githubReposFallback;
  }
}

export const languageColors: Record<string, string> = {
  Kotlin: "#7F52FF",
  Java: "#b07219",
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572A5",
  Go: "#00ADD8",
};
