// const myPromise = new Promise((resolve, reject) => {
//     const error = false;
//     if (!error) {
//         resolve('Yes, resolved the promise!');
//     } else {
//         reject('No, rejected the promise!');
//     }
// });

// console.log(myPromise);

// myPromise
//     .then(val => val + 1)
//     .then(val2 => console.log(val2))
//     .catch(err => console.error(err));

// const myNextPromise = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         resolve('myNextPromise resolved!')
//     }, 3000);
// });

// myNextPromise.then(val => console.log(val));
// myPromise.then(val => console.log(val));

// const usersRequest = fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => {
//         console.log(response);
//         console.log(usersRequest); // --> Fulfilled
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//         data.forEach(user => {
//             console.log(user);
//         });
//     });

// console.log(usersRequest); // --> Pending

const myUsers = {
    userList: []
};

const myCoolFunction = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonUsers = await response.json();
    console.log('In myCoolFunction: ', jsonUsers);
    return jsonUsers;
}

//myCoolFunction();

const anotherFunction = async () => {
    const users = await myCoolFunction();
    console.log('In anotherFunction: ', users);
    myUsers.userList = users;
};

// anotherFunction();
// console.log(myUsers.userList); // --> []

await anotherFunction();
console.log('Final: ', myUsers.userList); // --> []

const getAllUserEmails = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonUsers = await response.json();
    const userEmailArray = jsonUsers.map(user => user.email);

    //console.log(userEmailArray);
    //return userEmailArray;

    postToWebPage(userEmailArray);
};

const postToWebPage = (data) => {
    console.log(data);
};

//console.log(await getAllUserEmails());

const getDadJoke = async () => {
    const response = await fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    });
    const jokeData = await response.json();
    console.log(jokeData.joke);
};

getDadJoke();

const getTextDadJoke = async () => {
    const response = await fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
            Accept: 'text/plain'
        }
    });
    const jokeData = await response.text();
    console.log(jokeData);
};

getTextDadJoke();

const jokeObject = {
    id: '12345676890',
    joke: 'Where do cats write notes? Scratch paper!'
};

const postData = async (payload) => {
    const response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse);
};

postData(jokeObject);

const requestAJoke = async (fname, lname) => {
    const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${fname}&lastName=${lname}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    });
    const jokeData = await response.json();
    console.log(jokeData.value.joke);
};

requestAJoke('James', 'Bond');