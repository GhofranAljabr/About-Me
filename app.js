'use strict';
let userNAme = prompt('what is your Name ?');
console.log(userNAme);
alert('Welcome  to my website')

 let favoriteSeason = prompt('Is the spring my favorite season?').toLowerCase();
// yes
// YES Yes YEs yeS

favoriteSeason = favoriteSeason.toLowerCase();

if(favoriteSeason === 'yes' || favoriteSeason === 'y') {
  alert('That is right ');
  console.log(favoriteSeason);
} else if (favoriteSeason === 'no' || favoriteSeason === 'n') {
  alert('nop');
} else {
  alert('Pease type (yes) or (no) or (y) or (n)');
}

let travel = prompt('Do I like traveling?').toLowerCase();

// yes
// YES Yes YEs yeS



 travel = travel.toLowerCase();

if(travel === 'yes' || travel === 'y') {
  alert('That is right');
  console.log('I hope to travel soon');
} else if (travel === 'no' || travel === 'n') {
  alert('no no nop');
} else {
  alert('Pease type (yes) or (no) or (y) or (n)');
}

let favoriteAnimal = prompt('Is the horse my favorite animal ?').toLowerCase();

// yes
// YES Yes YEs yeS

console.log(favoriteAnimal);

 favoriteAnimal = favoriteAnimal.toLowerCase();

if(favoriteAnimal === 'yes' || favoriteAnimal === 'y') {
  alert('That is right ');
  console.log(favoriteAnimal);
} else if (favoriteAnimal === 'no' || favoriteAnimal === 'n') {
  alert('nop');
} else {
  alert('Pease type (yes) or (no) or (y) or (n)');
}

let speakEnglish = prompt('can i speak english?').toLowerCase();

// yes
// YES Yes YEs yeS

console.log(speakEnglish );

speakEnglish = speakEnglish.toLowerCase();

if(speakEnglish  === 'yes' || speakEnglish  === 'y') {
  alert('That is right ');
  console.log(speakEnglish );

} else if (speakEnglish  === 'no' || speakEnglish  === 'n') {
  alert('nop');
} else {
  alert('Pease type (yes) or (no) or (y) or (n)');
}

let favoriteColor = prompt('Is my favorite color pink?').toLowerCase();

// yes
// YES Yes YEs yeS


 favoriteColor = favoriteColor.toLowerCase();

if(favoriteColor === 'yes' || favoriteColor === 'y') {
  alert('nop ');
} else if (favoriteColor === 'no' || favoriteColor === 'n') {
  alert('That is right');
  console.log(myfavoriteColorIsGreen);
} else {
  alert('Pease type (yes) or (no) or (y) or (n)');
}
alert(`Welcome ${userNAme}`);
console.log(`Welcome ${userNAme}`);