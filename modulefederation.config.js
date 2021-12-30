const { dependencies } = require("./package.json");

module.exports = {
  name: "container",
  remotes: {
    cats: "cats@http://localhost:3001/remoteEntry.js",
    dogs: "dogs@http://localhost:3002/remoteEntry.js",
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      eager: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      eager: true,
      requiredVersion: dependencies["react-dom"],
    },
  },

};
