module.exports = {
  default: {
    requireModule: ["ts-node/register"],

    require: [
      "src/test/steps/**/*.ts",
      //"src/test/hooks/**/*.ts",
      "src/hooks/**/*.ts",
      "src/test/support/**/*.ts"
    ],

    paths: [
      "src/test/features/**/*.feature"
    ],

    publishQuiet: true,
    dryRun: false,

    format: [
      "progress-bar",
      "json:reports/cucumber-report.json",
      "html:reports/cucumber-report.html",
     // "allure-cucumberjs/reporter:allure-results"
      
      
    ],

    formatOptions: {
      snippetInterface: "async-await"
    }
  }
};