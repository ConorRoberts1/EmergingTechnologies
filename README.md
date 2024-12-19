# Emerging Technologies: Trigrams Project

This repository contains a program for submission in the module "Emerging Technologies." The program is a Trigrams Notebook, explained in detail below.

---

## Trigrams

The Trigrams Notebook (`trigrams.ipynb`) processes a set of texts to create a dictionary of trigrams, which are sequences of three consecutive characters. This dictionary is then used to generate a Third-Order Letter Approximation, simulating the structure of the original texts.


| Task | Description | Input | Output |
|------|-------------|--------|--------|
| 1. Third-order Letter Approximation Model | Creates a statistical model of English letter patterns by analyzing 5 classic texts from Project Gutenberg. Removes non-letter characters (except spaces and periods) and converts to uppercase. | - 5 text files in `/Texts/`<br>- Plain Text UTF-8 format | Dictionary of trigram frequencies |
| 2. Text Generation | Generates a 10,000 character text string using the trigram model. Starting with "TH", each next character is selected based on statistical probability from the model. | - Trigram model from Task 1<br>- Initial "TH" sequence | 10,000 character generated text |
| 3. Model Analysis | Evaluates the quality of generated text by checking what percentage are valid English words. | - Generated text from Task 2<br>- `words.txt` dictionary | Percentage of valid English words |
| 4. Model Export | Saves the trigram frequency model in JSON format for future use or analysis. | Trigram model from Task 1 | `trigrams.json` file |

### Input
Texts for this notebook were obtained from [Project Gutenberg](https://www.gutenberg.org/) and are stored in the `/texts/` folder. 

`words.txt` is used to determine the percentage of words that are actually in the English language from the 10,000 charcters from the generated text from task 2.



### Output
- **trigrams.json**: A JSON file containing the trigram dictionary generated from the input texts. This file can be reused for other tasks or analysis.
- **Generated Text**: A 10,000-character string created using the trigram model. This represents a statistical approximation of the input text structure.

---

## Execution

### Running the Notebook
The Trigrams Notebook is a Jupyter Notebook and can be run in any IDE that supports `.ipynb` files, such as Jupyter Notebook or Visual Studio Code. Follow these steps:

1. **Clone the Repository**
   Clone this repository to your local machine:
   ```bash
   git clone https://github.com/ConorRoberts1/EmergingTechnologies.git
 
