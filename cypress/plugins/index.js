const cypressNuxt = require("cypress-nuxt");

module.exports = async (on, config) => {
  on("file:preprocessor", await cypressNuxt.plugin());
  return config;
};
