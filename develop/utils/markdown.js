// Function to generate markdown for readme file

const licenseMap = {
    'MIT':'[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)', 
    'GPL v3':'[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)', 
    'AGPL':'[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)',
    'None': ''
}

function markdown(response) {
    console.log(licenseMap)
    return `

# ${response.title}


## Table of Contents

* [Decription](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Collabarators](#collabarators)
* [License](#licenses)

## Description
${response.description}

## Installation
${response.install_steps}

## Usage
${response.usage}

## Collaborators
${response.collaborators}

## License
${licenseMap[response.licenses]}


`;}

module.exports = markdown