// ── Platform ──
export type Platform = "spotify" | "youtube_music";

export interface PlatformConfig {
  id: Platform;
  name: string;
  color: string;
  icon: string;
}

// ── Auth ──
export interface AuthTokens {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
}

// ── Playlist ──
export interface TrackResult {
  raw_input: string;
  status: "found" | "not_found" | "error";
  platform_id: string | null;
  platform_uri: string | null;
  confidence: number;
}

export interface MigrationResult {
  total: number;
  found: number;
  not_found: number;
  errors: number;
  success_rate: number;
  playlist_url: string | null;
  tracks: TrackResult[];
}

export interface MigrationTask {
  task_id: string;
  message: string;
}

export interface TaskStatus {
  task_id: string;
  status: "pending" | "processing" | "completed" | "failed";
  result: MigrationResult | null;
}
