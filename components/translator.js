const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    americanToBritish(text) {
        let translatedText = text;
        // Translate American to British English
        // Translate Mangoes are my favorite fruit. to British English
        // Translate I ate yogurt for breakfast. to British English
        // Translate We had a party at my friend's condo. to British English
        // Translate Can you toss this in the trashcan for me? to British English
        // Translate The parking lot was full. to British English
        // Translate Like a high tech Rube Goldberg machine. to British English
        // Translate To play hooky means to skip class or work. to British English
        // Translate No Mr. Bond, I expect you to die. to British English
        // Translate Dr. Grosh will see you now. to British English
        for (let key in americanOnly) {
            let regex = new RegExp(`\\b${key}\\b`, 'gi');
            translatedText = translatedText.replace(regex, americanOnly[key]);
            // console.log(translatedText);
        }
        
        for (let key in americanToBritishSpelling) {
            let regex = new RegExp(`\\b${key}\\b`, 'gi');
            translatedText = translatedText.replace(regex, americanToBritishSpelling[key]);
            // console.log(translatedText);
        }
        for (let key in americanToBritishTitles) {
            let regex = new RegExp(`\\b${key}\\b`, 'gi');
            translatedText = translatedText.replace(regex, americanToBritishTitles[key]);

        }
        return translatedText;
    }
    
    britishToAmerican(text) {
        let translatedText = text;
        // Translate British to American English
        // Translate We watched the footie match for a while. to American English
        // Translate Paracetamol takes up to an hour to work. to American English
        // Translate First, caramelise the onions. to American English
        // Translate I spent the bank holiday at the funfair. to American English
        // Translate I had a bicky then went to the chippy. to American English
        // Translate I've just got bits and bobs in my bum bag. to American English
        // Translate The car boot sale at Boxted Airfield was called off. to American English
        // Translate Have you met Mrs Kalyani? to American English
        // Translate Prof Joyner of King's College, London. to American English
        for (let key in britishOnly) {
            let regex = new RegExp(`\\b${key}\\b`, 'gi');
            translatedText = translatedText.replace(regex, britishOnly[key]);
        }
        for (let key in americanToBritishSpelling) {
            let regex = new RegExp(`\\b${americanToBritishSpelling[key]}\\b`, 'gi');
            translatedText = translatedText.replace(regex, key);
        }
        for (let key in americanToBritishTitles) {
            let regex = new RegExp(`\\b${americanToBritishTitles[key]}\\b`, 'gi');
            translatedText = translatedText.replace(regex, key);
        }
        return translatedText;
    }
}

module.exports = Translator;