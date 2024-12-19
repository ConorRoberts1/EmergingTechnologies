const reflections = {
    "I": "you",
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

console.log(reflect("I am your friend"));     // Expected: "you are my friend"
console.log(reflect("my dog likes me"));      // Expected: "your dog likes you"
console.log(reflect("you are happy"));        // Expected: "I am happy"


