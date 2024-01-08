const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

const animalSounds = 'moo neigh meeh oink kukuruku';
const [cowSound, horseSound, sheepSound, pigSound, chickenSound] = animalSounds.split(' ');
console.log(cowSound, horseSound, sheepSound, pigSound, chickenSound);


// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

const animalNames = 'bessie bolt dolly babe little';
const animalNamesArray = animalNames.split(' ');
const [animal1, , animal3, animal4, animal5] = animalNamesArray;
console.log(animal1, animal3, animal4, animal5);

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

const animalColors = 'blackAndWhite black pink';
const [bessie, dolly ,babe] = animalColors.split(' ');
console.log(bessie, dolly ,babe);

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

//const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [color1, color2, color3, color4, color5, color6, color7] = colors;
console.log(color1, color2, color3, color4, color5, color6, color7);

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

let newColorNames = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [r, o, y, g, b, , v] = newColorNames;
console.log(r, o, y, g, b, v);


// 6. But wait! Indigo is now feeling super left out. Let's only assign indigo using indg.

let [  ...i] = newColorNames;
console.log(i);


// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

const { muppetName, color, song, job, partner } = muppet;
console.log(muppetName, color, song, job, partner);

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner

const {song2, song4 } = nestedMuppet.album.theMuppetMovie;
console.log(song2, song4);

const {nestedJob, nestedPartner } = nestedMuppet;
console.log(nestedJob, nestedPartner);