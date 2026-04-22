import type { AuthTokens, MigrationTask, Platform, TaskStatus } from "@/types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "https://playlistzinha.duckdns.org";

async function request<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ detail: "Unknown error" }));
    throw new Error(error.detail ?? `HTTP ${res.status}`);
  }

  return res.json();
}

// ── Auth ──
export async function getAuthUrl(
  platform: Platform
): Promise<{ auth_url: string; state: string }> {
  return request(`/api/v1/auth/${platform}/login`);
}

export async function refreshToken(
  platform: Platform,
  refresh_token: string
): Promise<AuthTokens> {
  return request(`/api/v1/auth/${platform}/refresh`, {
    method: "POST",
    body: JSON.stringify({ refresh_token }),
  });
}

// ── Playlists ──
export async function uploadPlaylist(
  accessToken: string,
  platform: Platform,
  file: File,
  playlistName: string
): Promise<MigrationTask> {
  const form = new FormData();
  form.append("file", file);
  form.append("platform", platform);
  form.append("playlist_name", playlistName);

  const res = await fetch(`${API_BASE}/api/v1/playlists/upload`, {
    method: "POST",
    headers: { Authorization: `Bearer ${accessToken}` },
    body: form,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ detail: "Unknown error" }));
    throw new Error(error.detail ?? `HTTP ${res.status}`);
  }

  return res.json();
}

export async function getTaskStatus(taskId: string): Promise<TaskStatus> {
  return request(`/api/v1/playlists/tasks/${taskId}`);
}

export async function getTaskReport(
  taskId: string
): Promise<{ report: string }> {
  return request(`/api/v1/playlists/tasks/${taskId}/report/text`);
}

// ── Waitlist ──
export async function joinWaitlist(data: {
  name: string;
  contact_email: string;
  spotify_email: string;
}): Promise<{ message: string }> {
  return request("/api/v1/waitlist", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
