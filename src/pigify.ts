export const pigify = (english: string) : string => {
    return english.split(' ').map(word => {
        const firstLetter = word.substring(0,1).toLowerCase();
        return (firstLetter <= 'z' && firstLetter >= 'a') ? `${word.substring(1)}${word.substring(0,1)}ay` : word; 

    }).join(' ');
}