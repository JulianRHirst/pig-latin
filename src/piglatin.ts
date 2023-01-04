

export const pigify = (english: string) : string => english.split(' ').map(word => ( /^[a-zA-Z]+$/.test(word.substring(0,1)) ? `${word.substring(1)}${word.substring(0,1)}ay` : word)).join(' ');