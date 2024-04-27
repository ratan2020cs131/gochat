export const capitalizeSentence = (sentence) => {
    return sentence
        .split(' ') // Split the sentence into words
        .map(word => {
            // Capitalize the first letter and keep the rest in lowercase
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(' '); // Join the words back into a sentence
}