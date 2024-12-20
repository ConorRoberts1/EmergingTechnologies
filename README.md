# Emerging Technologies Project

## Overview

This project, developed as part of the Emerging Technologies module at ATU, explores two main areas:

1. **Tasks 1-4**: Implementation of a third-order text approximation system using trigrams, including text processing from classic literature, statistical model building, text generation, and analysis of generated text authenticity against a dictionary of English words.

2. **ELIZA Chatbot**: A modern web-based implementation of the classic ELIZA psychotherapist chatbot.

---

## Table of Contents

- [Trigrams: A Brief History](#trigrams-a-brief-history)
- [Project Components](#project-components)
   - [1. Trigram Analysis](#1-trigram-analysis)
      - [Implementation Details](#implementation-details)
   - [2. ELIZA Chatbot](#2-eliza-chatbot)
      - [Historical Context](#historical-context)
      - [Features](#features)
- [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
- [How to Run the Code](#how-to-run-the-code)
   - [Trigram Analysis](#trigram-analysis)
   - [ELIZA Chatbot](#eliza-chatbot)
- [Link to GitHub Pages](#link-to-github-pages)
- [Outputs and Results](#outputs-and-results)
- [References](#references)


---

## Trigrams: A Brief History

Trigrams are sequences of three consecutive characters in text. They were first used in cryptography and later became fundamental in:

- Natural Language Processing
- Text Analysis
- Pattern Recognition
- Machine Learning

The third-order approximation model used in this project builds on Claude Shannon's work in information theory (1948), demonstrating how character sequences can model language patterns.

---

## Project Components

### 1. Trigram Analysis
Located in [trigrams.ipynb](trigrams.ipynb), this component:
- Processes classic texts from Project Gutenberg.
- Creates a statistical model of English letter patterns.
- Generates text using trigram frequencies.
- Analyzes text authenticity using word matching.

#### Implementation Details
- **Text Cleaning and Normalization**: Removes non-essential characters and standardizes text.
- **Trigram Extraction and Counting**: Identifies and counts all trigrams in the text.
- **Statistical Model Building**: Constructs a frequency-based trigram model.
- **Text Generation Using Probability Distributions**: Generates new text based on trigram probabilities.

### 2. ELIZA Chatbot
The [eliza](eliza/) directory contains a modern implementation of Joseph Weizenbaum's ELIZA (1966).

#### Historical Context
ELIZA, created at MIT, was one of the first chatbots to implement:
- Pattern matching.
- Response templates.
- Conversation state management.
- Natural language processing concepts.

#### Features
- **Natural Language Pattern Matching**: Recognizes user input patterns.
- **Contextual Responses**: Provides responses based on recognized patterns.
- **Modern Web Interface**: User-friendly interface built with HTML and CSS.
- **Real-time Interaction**: Instantaneous chatbot responses without server-side processing.

---

## Getting Started

### Prerequisites
- **Python 3.x**: Ensure Python is installed on your system.
- **Jupyter Notebook**: For running the trigram analysis.
- **Web Browser**: To interact with the ELIZA chatbot.
- **Git**: For cloning the repository.

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ConorRoberts1/EmergingTechnologies.git
   
   cd EmergingTechnologies

   code .
   ```

## How to Run the Code

### Trigram Analysis

The Trigrams Notebook (`trigrams.ipynb`) can be executed in any IDE that supports Jupyter Notebooks, such as Visual Studio Code or Jupyter Notebook itself. Follow these steps:

1. **Open the Notebook**
   - Launch your IDE and open `trigrams.ipynb`.

2. **Run the Notebook Cells**
   - Execute the cells sequentially to perform the trigram analysis, text generation, model evaluation, and export the trigram model as a JSON file.

3. **Provide Input Texts**
   - Ensure that you have placed five UTF-8 encoded plain text files from Project Gutenberg in the `/texts/` directory.

### ELIZA Chatbot

The ELIZA chatbot is located in the `eliza` directory and can be accessed as follows:

1. **Access the ELIZA Chatbot on my GitHub Pages**
   - Click the link below to access the chatbot in your web browser
2. **Interact with ELIZA**
   - Use the text input box to type messages and receive responses from the chatbot.

## Link to GitHub Pages

### [https://conorroberts1.github.io/EmergingTechnologies](https://conorroberts1.github.io/EmergingTechnologies/)


   ## Outputs and Results

   ### Trigram Analysis
   - **trigrams.json**: A JSON file containing the trigram frequency model generated from the input texts.
   - **Generated Text**: A 10,000-character string created using the trigram model, simulating English-like text.

   ### ELIZA Chatbot
   - **ELIZA Chatbot Interface**: A web-based interface allowing real-time interaction with the chatbot.

## References

- [Python File Input/Output](https://docs.python.org/3/tutorial/inputoutput.html)
- [Python OS Module](https://docs.python.org/3/library/os.html)
- [Python String Slicing](https://docs.python.org/3/tutorial/introduction.html#strings)
- [Python re (Regex) Module](https://docs.python.org/3/library/re.html)
- [Python String Methods](https://docs.python.org/3/library/stdtypes.html#string-methods)
- [Python random.choices](https://docs.python.org/3/library/random.html#random.choices)
- [Python JSON Module](https://docs.python.org/3/library/json.html)
- [Project Gutenberg Terms of Use](https://www.gutenberg.org/wiki/Gutenberg:Terms_of_Use)
- [Joseph Weizenbaum and ELIZA](https://www.theguardian.com/technology/2023/jul/25/joseph-weizenbaum-inventor-eliza-chatbot-turned-against-artificial-intelligence-ai)
- [ELIZA on Wikipedia](https://en.wikipedia.org/wiki/ELIZA)
- [Python PEP 8](https://peps.python.org/pep-0008/)

---

*Note: Some of this notebook was created with the help of ianmcloughlin/2425_emerging_technologies lecture notes & AI.*