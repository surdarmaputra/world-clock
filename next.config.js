const isBuildGhPage = Boolean(process.env.BUILD_GH_PAGE);

const ghPageBuildConfig = {
  distDir: 'docs',
  basePath: '/world-clock',
  assetPrefix: '/world-clock',
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  ...(isBuildGhPage ? ghPageBuildConfig : {}),
};

module.exports = nextConfig;
