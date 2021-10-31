module.exports = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    loader: 'imgix',
    path: '',
    domains: ['l4zy-p.github.io', 'localhost']
  },
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
}