/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "i.postimg.cc",
      "avatars.mds.yandex.net",
      "i.ibb.co",
      "eda.yandex",
    ],
  },
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
};

export default nextConfig;
