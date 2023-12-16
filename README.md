# Pokemon Cards Generator

A simple web page to generate awesome Pokemon cards.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Files](#files)
- [JavaScript Code](#javascript-code)
- [CSS Styling](#css-styling)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)

## Introduction

This project provides a basic web page for generating Pokemon cards. Click the "Generate" button to see an awesome Pokemon card.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/pokemon-cards.git
    ```

2. Open the `index.html` file in your web browser.

## Usage

1. Open the `index.html` file in your web browser.
2. Click the "Generate" button to see a randomly generated Pokemon card.

## Files

- `index.html`: The main HTML file that contains the structure of the web page.
- `Style.css`: The stylesheet file for styling the web page.
- `Script.js`: The JavaScript file for handling the card generation functionality.

## JavaScript Code

Here's a breakdown of the JavaScript code responsible for generating Pokemon cards:

```javascript
const free_color = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    // ... (other Pokemon types and colors)
}

const url = "https://pokeapi.co/api/v2/pokemon/";

let get_pokemon = () => {
    // ... (code for fetching random Pokemon)
};

let pokemon = data => {
    // ... (code for displaying Pokemon card based on fetched data)
};

let pok_types = (types) => {
    // ... (code for displaying Pokemon types on the card)
};

let pok_style = (color) => {
    // ... (code for styling the card based on Pokemon type color)
};

btn.addEventListener("click", get_pokemon);
