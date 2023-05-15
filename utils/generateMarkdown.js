function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case "Apache 2.0":
      return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    case "GPLv3":
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    default:
      return "";
  }
}
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "[MIT License](https://opensource.org/licenses/MIT)";
    case "Apache 2.0":
      return "[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)";
    case "GPLv3":
      return "[GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)";
    default:
      return "";
  }
}

function renderLicenseSection(license) {
  if (license) {
    return `This application is covered under the ${license} license. ${renderLicenseLink(
      license
    )}`;
  } else {
    return "";
  }
}
