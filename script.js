// lowercase

var originalText = "I love my country Pakistan.<br/>I love my city Faisalabad.<br/>I love my Homeland."
var cities = ["Faisalabad", "Karachi", "Lahore", "Gojra"]


function lowerCase() {
    let lowerCaseText = originalText.toLowerCase();
    console.log(lowerCaseText)
    document.getElementById('output').innerHTML = lowerCaseText
}

// uppercase

function upperCase() {
    let upperCaseText = originalText.toUpperCase();
    console.log(upperCaseText)
    document.getElementById('output').innerHTML = upperCaseText
}

// capitalize

function capitalizetext() {
    //    let capitalize =' <span style="text-transform:capitalize;">'+ originalText +'</span>'
    document.getElementById('output').style.textTransform = 'capitalize';
    document.getElementById('output').innerHTML = originalText
}

// better formatting

function betterFormating() {
    let text = document.getElementById('inputName').value;

    if (!text) {
        alert('please Enter some Text!')
        return;
    }
    text = text.toLowerCase();
    document.getElementById('output').style.textTransform = 'capitalize'
    document.getElementById('output').innerHTML = text;

}

// print all cities
function printAllCities() {
    document.getElementById('output').innerHTML = '';

    for (let i = 0; i < cities.length; i++) {
        let num = i + 1;
        document.getElementById('output').innerHTML += num + ']' + ' ' + cities[i] + '<br/>';

    }

}

//  Addcity in list
function addCity() {
    let city = document.getElementById('inputName').value;
    if (!city) {
        alert('Enter city Name');
        return

    }
    if (city.length < 3) {
        alert('Please Enter Correct spelling ⚠');
        return
    }


    // let cityFirstLetter = city.slice(0, 1).toUpperCase();     
    // OR
    let cityFirstLetter = city.charAt(0).toUpperCase();
    // console.log(cityFirstLetter);
    let cityAllLetter = city.slice(1).toLowerCase();
    // console.log(cityAllLetter);
    let cityFullName = cityFirstLetter + cityAllLetter;
    console.log(cityFullName)

    // cityfound
    let cityFound = false;
    for (let i = 0; i < cities.length; i++) {
        if (cities[i] === cityFullName) {
            cityFound = true
            let html = '<span style="color: red;font-size:20px;">"' + cityFullName + '"</span> is already in list'
            document.getElementById('output').innerHTML = html
        }

    }
    if (cityFound === false) {
        cities.push(cityFullName);
        let html = '<span style="color: green;font-size:20px;">"' + cityFullName + '"</span> has been successfully added into list.'
        document.getElementById('output').innerHTML = html
    }
}
// check city in list 

function checkCity() {
    let checkCity = document.getElementById('inputName').value;

    if (!checkCity) {
        alert('Please enter city name');
        return;

    }
    if (checkCity.length < 3) {
        alert('Enter correct spelling')
        return;
    }

    let firtLetter = checkCity.charAt(0).toUpperCase();
    let nextAll = checkCity.slice(1).toLowerCase();
    let cityName = firtLetter + nextAll;
    console.log(cityName);

    let takeCity = false
    for (let i = 0; i < cities.length; i++) {

        if (cities[i] === cityName) {
            takeCity = true

            document.getElementById('output').innerHTML = '😊 yes'
        }
        if (takeCity === false) {
            document.getElementById('output').innerHTML = '📌 No'

        }
    }
}

// Find this word

function findWord() {
    // let myName = 'My name is Ahmed.'
    // myName = myName.toLowerCase()
    // let wordInputField ='ahm12'
    // wordInputField =  wordInputField.toLowerCase()

    // let findLetter = myName.indexOf( wordInputField)
    // console.log(findLetter)


    let newOriginalText = originalText.toLowerCase();
    let word = document.getElementById('inputName').value;
    word = word.toLowerCase();
    if (!word) {
        alert('Please Enter Some Text!');
        return;

    }

    let findWord = newOriginalText.indexOf(word);
    console.log(findWord);

    if (findWord !== -1) {
        let html = 'Your Word <span style="color: green; font-weight:bold;">"' + word + '"</span> found at index: ' + findWord;
        document.getElementById('output').innerHTML = html
    }
    else {
        let html = 'Your Word <span style="color: red; font-weight:bold;">"' + word + '"</span> Not Found in Original Text'
        document.getElementById('output').innerHTML = html
    }
}

// Replace word with original text 

function replaceWord() {
    //  let cnic =" 33100-2738371-9"
    //  let word = '-'
    //  let replceWith = ''
      
    //  word = new RegExp(word, 'g')
    //   let cnicWithOutDaches = cnic.replace(word, replceWith)
    //   console.log(cnicWithOutDaches);


    let newOriginalText = originalText.toLowerCase();
    let word = document.getElementById('inputName').value;

    if(!word){
        alert('Please Type a Word for replacing!')
        return;
    }

    word = word.toLowerCase();

    let replceWith = prompt('Type a word to replace with')

    if(!replceWith){
        alert('Please type a word to replace with ' +"("+ word +")")
        return

    }
    word = new RegExp(word, 'g')
    replceWith = replceWith.toLowerCase();

    let replaceWord = newOriginalText.replace(word, replceWith);
    document.getElementById('output').innerHTML= replaceWord;




}



















// emoji 
// -------------------------
// function addEmoji(amad){
//     console.log(amad)

// }










// clear input
function clearInput() {
    document.getElementById('inputName').value = ''
}

// clear output

function clear2() {
    document.getElementById('output').innerHTML = '';
}