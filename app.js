'use strict';
 let sum=0;

 let userNAme = prompt('what is your Name ?');
 console.log(userNAme);
alert('Welcome  to my website')
function questions (favoriteSeason, travel , favoriteAnimal , speakEnglish ,favoriteColor){

   favoriteSeason = prompt('Is the spring my favorite season?').toLowerCase();


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

  travel = prompt('Do I like traveling?').toLowerCase();





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

 favoriteAnimal = prompt('Is the horse my favorite animal ?').toLowerCase();



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

 speakEnglish = prompt('can i speak english?').toLowerCase();



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

 favoriteColor = prompt('Is my favorite color pink?').toLowerCase();

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

}
questions();


//==========  today   ===========\\
//==========  today   ===========\\
//==========  today   ===========\\















function g (num){

for (let i = 4; i >= 0; i--) {
    num= prompt('guss num if the num <10?(you have only ['+i+'] attemt)')
  
  if ('6' === num) {
    alert("You are right :)");
    i=0
  }
  
}

alert("the right answer is 6 :)");


}
g();




//function s (sportName){}


  //  sportName = ['running', 'swimming', 'walk', 'basketball', 'Climbing', 'Boxing', 'football', 'Tennis', 'Cycling', 'Skydiving'];

  //console.log(sportName[2]);
  //console.log('swimming '.length);


//for(let i = 0; i < sportName.length; i++) {
  //console.log(sportName[i]);
//}






function a(Amman){

 Amman = prompt('Am I live in Amman?').toLowerCase();
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
 }
 else {

   alert('nop');
   sum=sum+1
 }
 
 alert("the right answer is yes :)")

}
a();
 alert('the num of fals answer is'+ sum)



alert(`Welcome a gain and have anice day ${userNAme}`);
console.log(`Welcome a gain and have anice day ${userNAme}`);
