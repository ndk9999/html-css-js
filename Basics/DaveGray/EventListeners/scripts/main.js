// Syntax: addEventListener(event, function, useCapture)
// useCapture = true: Handle event on most outer element first

// const doSomething = () => {
//     alert('Do something');
// };

// h2.addEventListener('click', doSomething, false);
// h2.removeEventListener('click', doSomething, false);

// h2.addEventListener('click', (event) => {
//     console.log(event.target);
//     event.target.textContent = 'Clicked';
// });

document.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === 'complete') {
        console.log('readyState: complete');
        //initApp();
        initFormApp();
    } else {
        console.log(`readyState: ${event.target.readyState}`);
    }
});

const initApp = () => {
    const view = document.querySelector('#view2');
    const div = view.querySelector('div');
    const h2 = div.querySelector('h2');

    view.addEventListener('click', (event) => {
        // view.style.backgroundColor = 'purple';
        // view.classList.add('purple');
        // view.classList.remove('darkblue');
        view.classList.toggle('purple');
        view.classList.toggle('darkblue');
        console.log('view2 is clicked');
    }, false);
    
    div.addEventListener('click', (event) => {
        // div.style.backgroundColor = 'blue';
        // div.classList.add('blue');
        // div.classList.remove('black');
        div.classList.toggle('blue');
        div.classList.toggle('black');
        console.log('div is clicked');
        //event.stopPropagation();
    }, false);
    
    h2.addEventListener('click', (event) => {
        //event.target.textContent = 'Clicked';
        let content = event.target.textContent;
        content = content === "My 2nd View" ? "Clicked" : "My 2nd View";
        event.target.textContent = content;
        console.log('h2 is clicked');
    }, false);

    const nav = document.querySelector('nav');
    
    nav.addEventListener('mouseover', (event) => {
        event.target.classList.add('height-100');
    });

    nav.addEventListener('mouseout', (event) => {
        event.target.classList.remove('height-100');
    });
};

const initFormApp = () => {
    const view3 = document.querySelector('#view3');
    const myForm = view3.querySelector('#myForm');

    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('Submit event');
        console.log('Submit data: ' + event.target.querySelector('input').value);
    });
};