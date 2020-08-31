// Function to generate markdown for readme file
function markdown(response) {
    return `

# ${response.title}


## Table of Contents

*[Decription](#description)
*[Installation](#installation)
*[Usage](#usage)
*[Collabarators](#collabarators)
*[License](#licenses)

## Description
${response.description}

## Installation
${response.install_steps}

## Usage
${response.usage}

## Collaborators
${response.collaborators}

## License
${response.license}


`;}

module.exports = markdown