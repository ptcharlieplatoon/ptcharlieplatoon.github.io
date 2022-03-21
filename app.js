console.log("HELLO CHARLIE PLATOON!")

let randomNumber = 0;

const randomNumberGenerator = () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  return randomNumber;
}

const addEventToForm = () => {
  let form = document.getElementById('input-form');
  form.addEventListener('submit', getInputNumber)
}

const getInputNumber = (evt) => {
  evt.preventDefault();
  let guessedNumber = evt.target.inputNumber.value;
  checkNumber(Number(guessedNumber));
  return evt.target.inputNumber.value = '';
}

const checkNumber = (guessedNumber) => {
  let gameMessage = document.getElementById('game-message');
  addNumberToList(guessedNumber)
  if (guessedNumber === randomNumber) {
    gameMessage.innerHTML = 'YOU WON!';
    let numberList = document.getElementById('number-list').lastChild;
    numberList.style.fontSize = '80px';
    numberList.style.backgroundColor = 'red';
    numberList.style.color = 'white';
    document.body.style.backgroundImage = 'url(https://thumbs.dreamstime.com/b/colorful-party-carnival-birthday-celebration-background-empty-streamer-air-balloon-garland-isolated-white-84958825.jpg)'
  } else if (guessedNumber < randomNumber) {
    gameMessage.innerHTML = 'Pick a HIGHER number!';
  } else {
    gameMessage.innerHTML = 'Pick a LOWER number!';
  }
}

const addNumberToList = (guessedNumber) => {
  const list = document.createElement('LI');
  const numberNode = document.createTextNode(guessedNumber);
  const orderedList = document.getElementById('number-list');
  list.appendChild(numberNode);
  orderedList.appendChild(list);
}

randomNumberGenerator();
addEventToForm();
console.log(randomNumber);

const doesUserExist = () => {
  if (localStorage.getItem('user-name')) {
    let userName = localStorage.getItem('user-name');
    document.getElementById('welcome').innerHTML = `Welcome ${userName}!`
    document.getElementById('get-username').remove();
  }
}


document.getElementById('submit-username').onclick = () => {
  let userName = document.getElementById('user-name').value
  localStorage.setItem('user-name', userName);
  doesUserExist();
}

doesUserExist()
