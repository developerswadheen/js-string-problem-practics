/* const lyrics = 'tmi bondhu kala pakhi ami jano ki bosonto kale tomay bolte parini. kala kala sada sada rup jomeche sada kala';

const searchString = 'Pakhi';

// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes('Pakhi');
// const doesExist = lyrics.includes('searchString');
// const lyricsLowerCase = lyrics.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchString.toLowerCase());
// const doesExist = lyrics.toLowerCase().includes(searchString.toLowerCase());

// console.log(doesExist);

// indexOf
console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('kailla'));


if (lyrics.includes('sada') !== -1) {
    console.log('Exists inside the string');
}
else {
    console.log('Not exist');
}

// stratWith
console.log(lyrics.startsWith('tumi')); */

//  endswith
const fileName = "kabir.pdf";
const imagesName = "photo.png";
console.log(fileName.endsWith('.pdf'))