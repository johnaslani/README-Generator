// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenseBadge
  if (license === 'The Unlicense') {
    licenseBadge = ''
  };
  else
  licenseBadge = 'https://img.shields.io/badge/license-' + ${license} + '-blue.svg';
  return licenseBadge 
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink
  if (license === 'The Unlicense') {
    licenseLink = ''
  }; 
  else
  licenseLink = 'https://img.shields.io/badge/license-' + ${license} + '-blue';
  return licenseLink 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${licenseBadge} 
  # ${data.title}
  ## Description
  ${'data.description'}
  ## Table of Contents 
- [Insttallaion](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## License

${data.license}

## Questions

For further information see <a href='https://api.github.com/users/' + ${data.gitHUb} + '/repos'>License link</a>.

Should you have a questions, reach me at ${data.email}

## Tests

${data.tests}

`;
}

module.exports = generateMarkdown;

