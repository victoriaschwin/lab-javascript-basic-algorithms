// Iteration 1: Names and Input
//

let hacker1 = "Domenico";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Geo";

console.log(`The navigator's name is ${hacker2} `);

// Iteration 2: Conditionals

function compareLength(hacker1, hacker2) {
  if (hacker1.length > hacker2.length) {
    console.log(
      `The driver has the longest name, it has ${hacker1.length} characters.`
    );
  } else if (hacker2.length === hacker1.length) {
    console.log(
      `Wow, you both have equally long names, ${hacker2.length} characters!`
    );
  } else {
    console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );
  }
}

compareLength(hacker1, hacker2);

// Iteration 3: Loops

function printName(string) {
  let name = "";

  for (let i = 0; i < string.length; i++) {
    let letter = string[i].toUpperCase();

    name = name.concat(" ", letter);
  }
  console.log(name);
}

printName(hacker1);

function reverse(string) {
  let name = "";

  for (let i = string.length -1; i >= 0; i--) {
    let letter = string[i];

    name = name.concat(" ", letter);
  }
  console.log(name);
}

reverse(hacker1);

//Bonus 1

let lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus metus metus, dignissim ut luctus quis, tincidunt in nisi. Proin viverra elit id elit tincidunt auctor. Curabitur et facilisis erat. Nam mattis risus mauris, eleifend tristique dui facilisis vel. Curabitur vel scelerisque nibh. Nunc et neque a justo pretium dignissim id at eros. Nam vel commodo nunc. Duis vitae hendrerit augue. Suspendisse porta hendrerit neque nec congue. Pellentesque vel dolor mattis, molestie eros a, porta ipsum. Donec quis purus at turpis rhoncus feugiat at at turpis. Fusce tempor nisl vitae feugiat vehicula. Mauris rutrum justo ornare arcu volutpat fringilla. Donec eu blandit eros, non blandit sem. Etiam semper ante eu dui consequat convallis sit amet et ante. Nam vitae vulputate ex. Vestibulum fringilla felis sit amet tincidunt bibendum. Suspendisse id magna sit amet augue pharetra scelerisque facilisis eu mauris. Ut rutrum leo risus. Mauris condimentum, ex at dapibus vestibulum, tortor justo vestibulum odio, dictum aliquam justo diam nec mi. Aliquam facilisis aliquam tellus eget sodales. Maecenas pulvinar at eros sit amet pulvinar. Duis nec luctus ipsum. Phasellus lacinia sed odio eu hendrerit. Ut id mauris at nisi tincidunt venenatis et laoreet turpis. Nullam vitae mattis odio, in imperdiet lorem. Donec egestas sodales nisl, vulputate ultrices lectus fermentum id. Nulla id metus neque. Aenean vitae eleifend nulla, eu sollicitudin lacus. Integer a porttitor magna, ac dignissim libero. Sed ut suscipit tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam lobortis ligula ex, ut mattis eros lacinia in.";

function countWords(string) {
  console.log(string.split(" ").length);
}

countWords(lorem);

function countSpecificWord(string) {
  let count = 0;

  let words = string.split(" ");

  for (let i = 0; i < words.length; i++) {

    if (words[i] === "et") {
      count += 1;
    }
  
  }

  console.log(count);
}

countSpecificWord(lorem);

//Bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama!";

let noPalindrom = 'hola'

function checkPalindrome(string){
  let phraseForward = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let phraseBackward = "";

  for (let i = phraseForward.length -1; i >= 0; i--) {
    let letter = phraseForward[i];

    phraseBackward = phraseBackward.concat("", letter).toLowerCase();
  }

  for(let i = 0; i < string.length; i++){

    if(phraseForward[i] != phraseBackward[i]){
      console.log('no es palindromo')
      break;
      
     }
  }
}

checkPalindrome(phraseToCheck)