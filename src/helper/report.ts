const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "reports",
  reportPath: "reports/html",
  reportName: "Playwright BDD Report",
  pageTitle: "Tutorials Ninja App Test Report",
  displayDuration: true,
  openReportInBrowser: true,

  metadata: {
    browser: {
      name: "chrome",
      version: "118",
    },
    device: "Vithya Machine",
    platform: {
      name: "Windows",
      version: "11",
    },
  },

  customData: {
    title: "Test Info",
    data: [
      {
        label: "Project",
        value: "Tutorials Ninja",
      },
    ],
  },
});