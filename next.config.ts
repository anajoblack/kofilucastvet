import type { NextConfig } from "next";
import fs from "node:fs";
import path from "node:path";

// Purge any stale Cloudflare OpenNext assets or cached bundles from previous builds
try {
  const openNextDir = path.join(process.cwd(), ".open-next");
  if (fs.existsSync(openNextDir)) {
    fs.rmSync(openNextDir, { recursive: true, force: true });
  }
} catch {
  // ignore
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
