const reflections = {
    "i": "you",
    "me": "you",
    "my": "your",
    "am": "are",
    "you": "I",
    "your": "my",
    "yours": "mine",
    "are": "am",
}

function reflect(text) {
    const words = text.toLowerCase().split(" ");
    const reflectedWords = words.map(word => reflections[word] || word);
    return reflectedWords.join(" ");
}


const responses = {
    "hello|hi|hey": [
        "Hello! How are you feeling today?",
        "Hi there! What's on your mind?",
        "Hey! How can I help you?"
    ],
    "you remind me of (.*)": [
        "Why do you think I remind you of {0}?",
        "What makes you think of {0} when talking to me?",
        "Is it a good feeling to be reminded of {0}?"
    ],
    "(.*) (mother|father|family|parent)(.*)": [
        "Tell me more about your family.",
        "How does that make you feel about your family?",
        "What role does your family play in your thoughts?"
    ],
    "(.*) I need (.*)": [
        "Why do you need {1}?",
        "Would getting {1} really help you?",
        "What if you didn't need {1}?"
    ],
    "(.*) I am (.*)": [
        "Why do you think you are {1}?",
        "How long have you felt that way?",
        "What made you feel like {1}?"
    ],
    "(.*) I feel (.*)": [
        "Why do you feel {1}?",
        "Does feeling {1} happen often?",
        "How does that feeling affect you?"
    ],
    "(.*) (sorry|apologize)(.*)": [
        "No need to apologize.",
        "Apologies aren't necessary. Why do you feel that way?",
        "It's okay to feel that way."
    ],
    "bye|goodbye|exit": [
        "Goodbye! Take care.",
        "Thank you for sharing. Goodbye!",
        "Bye! I'm here if you need to talk again."
    ],
    "(.*)": [
        "Can you tell me more?",
        "Why do you say that?",
        "How does that make you feel?",
        "What do you mean by that?",
        "Interesting... go on."
    ]
};





function respond(userInput) {
    
    function matchPattern(input, pattern) {
        const regex = new RegExp(pattern, 'i');
        return input.match(regex);
    }
    
    
    function getRandomResponse(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

   
    for (let pattern in responses) {
        const match = matchPattern(userInput, pattern);
        if (match) {
            let response = getRandomResponse(responses[pattern]);
            if (match.length > 1 && response.includes("{0}")) {
                response = response.replace("{0}", reflect(match[1]));
            }
            return response;
        }
    }
    
   
    return "Please tell me more.";
}



function sendMessage(userInput) {
    if (!userInput || userInput.trim() === '') {
        return {
            user: '',
            eliza: 'Please say something.'
        };
    }
    
    const elizaResponse = respond(userInput);
    
    return {
        user: userInput,
        eliza: elizaResponse
    };
}

const userInputElement = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const userText = userInputElement.value.trim();
    if (userText !== '') {
        const responseObj = sendMessage(userText);
        console.log(responseObj);
        userInputElement.value = '';
    }
});

userInputElement.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});


