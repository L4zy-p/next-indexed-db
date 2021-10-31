module.exports = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    loader: 'imgix',
    path: process.env.NEXT_PUBLIC_BASE_PATH,
    domain: ['l4zy-p.github.io']
  },
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
}