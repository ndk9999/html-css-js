// Web Storage API

// Not part of the DOM - refers to the Window API
// Available to JS via the global variable: window
// We do not have to type 'window'. It is implied.

const myArray = ['eat', 'sleep', 'code'];
const myObject = {
    name: 'Dave',
    hobbies: ['eat', 'sleep', 'code'],
    logName: function () {
        console.log(this.name);
    }
};


// sessionStorage.setItem('mySessionStore', myArray);
// const mySessionData = sessionStorage.getItem('mySessionStore');

// console.log(JSON.stringify(mySessionData));
// console.log(mySessionData);
// console.log(typeof mySessionData);

// sessionStorage.setItem('mySessionStore', JSON.stringify(myObject));
// const mySessionData = JSON.parse(sessionStorage.getItem('mySessionStore'));
// console.log(mySessionData);

localStorage.setItem('myLocalStore', JSON.stringify(myObject));
const myLocalData = JSON.parse(localStorage.getItem('myLocalStore'));

console.log(myLocalData);

for (let i = 0; i < localStorage.length; i++) {
    console.log(`Key ${i}: ${localStorage.key(i)}`);
}

// Remove an item and remove all
localStorage.removeItem('myLocalStore');
localStorage.clear();