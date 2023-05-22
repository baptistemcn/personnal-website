import fs from "fs";

export default () => {
  return {
    name: "vite-plugin-robots-txt",
    generateBundle() {
      const robotsTxtContent = `User-agent: *
Disallow: /
# Sitemap
Sitemap: https://www.example.com/sitemap.xml

# Allow crawling of all content
Allow: /`;

      fs.writeFileSync("dist/robots.txt", robotsTxtContent);
    },
  };
};
