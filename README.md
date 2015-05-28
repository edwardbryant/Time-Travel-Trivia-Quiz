# Time-Travel-Trivia-Quiz

The original version of this project was completed for Thinkful's Frontend Developer Program. The project demonstrates the use of HTML, CSS, JavaScript, JSON, and jQuery as the basis of a simple web-based trivia game. In completing the assignment, I selected a theme focused on trivia concerning time travel in popular media (e.g., movies, television, books). The complete code is provided below for anyone who may find it useful.  

## Table of contents

- [Demo](#demo)
- [Download](#download)
- [Documentation](#documentation)
- [Copyright and license](#copyright-and-license)

## Demo

For a demo, check out <http://edwardbryant.github.io/Time-Travel-Trivia-Quiz/>!

## Download

The files for the project, may be [downloaded here](https://github.com/edwardbryant/time-travel-trivia-quiz/archive/master.zip).

### What's included

Within the download you'll find the following directories and files:

```
time-travel-trivia-quiz-master.zip/
├── css/
│   └── main.css
│   └── main.css.map
│   └── main.scss
│   └── normalize.min.css
├── img/
│   └── blueprint.png
├── js/
│   └── app.js
├── lib/
│   └── font-awesome-4.3.0./
├── index.html
└── README.md
```

## Documentation

#### Content

The questions used by the quiz app are pulled from the JSON object quiz_questions, which is declared at the end of [js/app.js](https://github.com/edwardbryant/Time-Travel-Trivia-Quiz/blob/master/js/app.js). Each question requires five pieces of information (icon, question, options, answer, and answer-exp). What is needed for each should be fairly obvious from the sample time travel questions already included, however, below is a brief explanation of each.

```
4: {
        "icon": "bolt",
        "question": "In the movie <strong>Back to the Future (1985)</strong>, how many gigawatts of electricity does it take to travel in time?",
        "options": {
            1: "9.21",
            2: "1.81",
            3: "10.31",
            4: "1.21",
            5: "2.21"
        },
        "answer": 4,
        "answer-exp": "In Back to the Future (1985), Dr. Brown's DeLorean needed to be traveling at 88 mph, and required 1.21 gigawatts of power. In vehicle originally had its power supplied by a plutonium-powered nuclear reactor."
    },
```

##### icon

This is the identifier of the font-awesome icon to be shown above the question (no leading 'fa-' prefix is needed). For example, 'bolt' designates the font-aweson icon of a lightening bolt. All the font-awesome icons available with ver. 4.3.0 should be available to use. The use of font-awesome icons was a design decision to avoid copyright issues, inconsistent third-party images, and other issues. If you would like to have this field designate something else, such as an image filename, the html generated from the icon field is located within the loadQuestion function (see below).  

##### question

This is the text of the question itself. There is no set maximum length, but font size and space should be considered when using very long questions. 

##### options

This is a 

##### answer

##### answer-exp


#### Functions

The functions used to run the trivia quiz are located in [js/app.js](https://github.com/edwardbryant/Time-Travel-Trivia-Quiz/blob/master/js/app.js) and are explained in more fully below. 

##### replaceHeading()

This function is purely cosmetic and is used to reduce the size of the existing pages's header to allow more space for displaying question/answer content.

##### cycleTestimonials(index, prev)

This function is another cosmetic extra which is used to cycle the joke 'testimonials' that appear on the start page. 

##### newGame()

##### findQuestion()

##### pickQuestion()

##### wasAsked()

##### loadQuestion()

##### correct()

##### updateScore()

##### updateRank()


This function resets game environment vars (e.g., the user's score, question history, etc.).  

## Copyright and License

- Project code contributed by [Edward Bryant](http://www.edwardbryant.com) is offered under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).

