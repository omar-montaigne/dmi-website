const withSass = require("@zeit/next-sass");
module.exports = withSass({
  target: "serverless",
  sassLoaderOptions: {
    includePaths: ["absolute/path/a", "absolute/path/b"]
  }
});
// module.exports = {
//   target: "serverless"
// };
