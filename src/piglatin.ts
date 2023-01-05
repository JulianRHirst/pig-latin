

/*
 * function: pigify (english: string) : string
 * conversts a sentence in English into pig latin - moving the first letter of each word to the end of the word and adding 'ay', after it.
 * 
 * parameter:
 * english: string - a sentence in English with words and punctuation marks separated by spaces
 * 
 * returns:
 * string : sentence converted to piug latin
 * 
 * assumptions:
 * empty string as parameter returns empty string
 * any 'word' containing characters other than alphabetical will be ignored
 * 
 */

export const pigify = (english: string) : string => english
    .split(' ') 
    .map(word => ( /^[a-zA-Z]+$/.test(word) ? `${word.substring(1)}${word.substring(0,1)}ay` : word))
    .join(' ');