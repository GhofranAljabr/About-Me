'use strict';
 let sum=0;

 let userNAme = prompt('what is your Name ?');
 console.log(userNAme);
alert('Welcome  to my website')

  let favoriteSeason = prompt('Is the spring my favorite season?').toLowerCase();


 favoriteSeason = favoriteSeason.toLowerCase();

 if(favoriteSeason === 'yes' || favoriteSeason === 'y') {
   alert('That is right ');
  console.log(favoriteSeason);
 } else if (favoriteSeason === 'no' || favoriteSeason === 'n') {
  alert('nop');
  sum=sum+1
 }else {
   alert('Pease type (yes) or (no) or (y) or (n)');
   sum=sum+1
 }

 let travel = prompt('Do I like traveling?').toLowerCase();





  travel = travel.toLowerCase();

 if(travel === 'yes' || travel === 'y') {
   alert('That is right');
   console.log('I hope to travel soon');
 } else if (travel === 'no' || travel === 'n') {
   alert('no no nop');
  sum=sum+1
}
 else {
   alert('Pease type (yes) or (no) or (y) or (n)');
   sum=sum+1
 }

 let favoriteAnimal = prompt('Is the horse my favorite animal ?').toLowerCase();



 console.log(favoriteAnimal);

  favoriteAnimal = favoriteAnimal.toLowerCase();

 if(favoriteAnimal === 'yes' || favoriteAnimal === 'y') {
   alert('That is right ');
   console.log(favoriteAnimal);
} else if (favoriteAnimal === 'no' || favoriteAnimal === 'n') {
 alert('nop');
 sum=sum+1
}
else {
  alert('Pease type (yes) or (no) or (y) or (n)');
  sum=sum+1
}

let speakEnglish = prompt('can i speak english?').toLowerCase();



console.log(speakEnglish );

speakEnglish = speakEnglish.toLowerCase();

 if(speakEnglish  === 'yes' || speakEnglish  === 'y') {
   alert('That is right ');
    console.log(speakEnglish );

} else if (speakEnglish  === 'no' || speakEnglish  === 'n') {
   alert('nop'); 
  sum=sum+1

 } 
 else {
  alert('Pease type (yes) or (no) or (y) or (n)');
  sum=sum+1
 }

 let favoriteColor = prompt('Is my favorite color pink?').toLowerCase();

  favoriteColor = favoriteColor.toLowerCase();

 if(favoriteColor === 'yes' || favoriteColor === 'y') {
   alert('nop ');
sum=sum+1
 }
 else if (favoriteColor === 'no' || favoriteColor === 'n') {
 alert('That is right');
  console.log(myfavoriteColorIsGreen);
 } else {
   alert('Pease type (yes) or (no) or (y) or (n)');
   sum=sum+1
 }



//==========  today   ===========\\
//==========  today   ===========\\
//==========  today   ===========\\

















for (let i = 4; i >= 0; i--) {
   let num= prompt('guss num if the num >10?(you have only ['+i+'] attemt)')
  
  if ('6' === num) {
    alert("You are right :)")
    i=0
  }
  
}

alert("the right answer is 6 :)")










   let sportName = ['running', 'swimming', 'walk', 'basketball', 'Climbing', 'Boxing', 'football', 'Tennis', 'Cycling', 'Skydiving'];

  console.log(sportName[2]);
  console.log('swimming '.length);


for(let i = 0; i < sportName.length; i++) {
  console.log(sportName[i]);
}








let Amman = prompt('Am I live in Amman?').toLowerCase();
let final = 0;
 while((Amman !== 'no' && Amman !== 'n' && Amman !== 'yes' && Amman !== 'y')) {
 Amman = prompt('Am I live in Amman?? please enter yes, no, n, y!').toLowerCase();
final=final+1;
console.log(final);
if (final===6) {
  break;
}
 }

 if(Amman === 'yes' || Amman === 'y') {
 alert('rghit ');
 } else {
   alert('nop');
   sum=sum+1
 }
 alert("the right answer is yes :)")

 alert('the num of fals answer is'+ sum)



alert(`Welcome a gain and have anice day ${userNAme}`);
console.log(`Welcome a gain and have anice day ${userNAme}`);
