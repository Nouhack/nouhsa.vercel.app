const sitemap = require("nextjs-sitemap-generator");
const path = require("path");

sitemap({
  baseUrl: "https://nouhsa.vercel.app",
  pagesDirectory: path.resolve(__dirname, "../out/"),
  targetDirectory: path.resolve(__dirname, "../out/"),
  ignoredExtensions: ["js", "map", "xml", "png", "css", "jpeg", "icon"],
  ignoredPaths: ["404", "favicon", "index"],
  extraPaths: ["/"],
});
