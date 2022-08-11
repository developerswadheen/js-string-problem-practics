const lyrics = 'tmi bondhu kala pakhi. ami jano ki bosonto kale tomay bolte parini. kala kala sada sada rup jomeche sada kala';
const parts = lyrics.split(' ');
const sentence = lyrics.split('.');
const chars = lyrics.split('');
// console.log(chars);

const partial = lyrics.slice(3, 8);
console.log(partial);
const partial2 = lyrics.substring(3, 8);
console.log(partial2);

// at
console.log(lyrics.at(5));

const item1 = "ami vat";
const item2 = "khabo";
console.log(item1.concat(' ', 'mach', ' ', item2));

const lines = [
    'tmi bondhu kala pakhi',
    'ami jano ki bosonto kale tomay bolte parini',
    'kala kala sada sada rup jomeche sada kala'
];

const newSong = lines.join(':');
console.log(newSong);
