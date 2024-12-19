const reflections = {
    "i": "you",
    "me": "you",
    "my": "your",
    "am": "are",
    "you": "I",
    "your": "my",
    "yours": "mine",
    "are": "am",
    "i'm": "you are",
    "you're": "I am",
    "was": "were",
    "i'd": "you would",
    "i've": "you have",
    "i'll": "you will",
    "you'd": "I would",
    "you've": "I have",
    "you'll": "I will",
    "myself": "yourself",

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

    "yes|yeah": [
        "Why do you say yes?",
        "Can you tell me more about that?",
        "What makes you agree?"
    ],
    "no|nah": [
        "Why do you say no?",
        "Can you explain why you feel that way?",
        "What makes you disagree?"
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

    "I need (.*)": [
        "Why do you need {1}?",
        "Would getting {1} really help you?",
        "What if you didn't need {1}?"
    ],

    "I am (.*)": [
        "Why do you think you are {1}?",
        "How long have you felt that way?",
        "What made you feel like {1}?"
    ],
    "I feel (.*)": [
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
        "Please tell me more.",
        "Let's explore that together.",
        "How does that make you feel?",
        "Can you elaborate on that?"
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
            // Fix: Use match[2] for second capture group in "I feel" pattern
            if (match.length > 1) {
                const capturedText = match[1] || match[2] || '';
                response = response.replace(/\{(\d+)\}/g, reflect(capturedText));
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
const conversationElement = document.getElementById('messages');

sendButton.addEventListener('click', () => {
    const userText = userInputElement.value.trim();
    if (userText !== '') {
        const responseObj = sendMessage(userText);
        displayConversation(responseObj);
        userInputElement.value = '';
    }
});

userInputElement.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});


function displayConversation({ user, eliza }) {
    if (user) {
        const userMsg = document.createElement('div');
        userMsg.classList.add('user-message');
        userMsg.textContent = user;
        conversationElement.appendChild(userMsg);
    }
    
    const elizaMsg = document.createElement('div');
    elizaMsg.classList.add('eliza-message');
    elizaMsg.textContent = eliza;
    conversationElement.appendChild(elizaMsg);

    // Scroll to the bottom of the conversation
    conversationElement.scrollTop = conversationElement.scrollHeight;
}
