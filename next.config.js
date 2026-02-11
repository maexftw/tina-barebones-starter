/** @type {import('next').NextConfig} */

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

module.exports = {
  ...(isGitHubPages && {
    output: 'export',
    basePath: '/dr.d',
  }),
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
}
