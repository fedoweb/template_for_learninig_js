
/*
//const name = document.getElementById('name');
//const feedback = document.getElementById('feedback');
//const button = document.querySelector('button');
const form = document.getElementById('form');
const content = document.querySelector('.content');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    content.innerHTML = `<p>Имя: ${form.name.value}</p><p>Текст: ${form.feedback.value}</p>`;
    form.reset();
});

*/

/*
решение эксперта

const form = document.querySelector('form');
const content = document.querySelector('.content');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.elements['name'].value;
    const feedback = form.elements['feedback'].value;
    createElements(name, feedback)
    form.reset();
});


const createElements = (name, feedback) => {
    const nameElement = document.createElement('p');
    const feedbackElement = document.createElement('p');
    nameElement.textContent = `Имя: ${name}`;
    feedbackElement.textContent = `Текст: ${feedback}`;
    content.appendChild(nameElement);
    content.appendChild(feedbackElement);
}

*/



const pizza = document.getElementById('main-checkbox');
const subs = document.querySelectorAll('.sub-checkbox');


const checkCheckbox = () => {
    for (const checkbox of subs) {
        if (!checkbox.checked) {
            console.log('no');
            return false;
        } 
    }
    return true;
}


console.log(subs);

for (const checkbox of subs) {
    checkbox.addEventListener('change', (e) => {
        if (checkCheckbox()) {
            pizza.checked = true;
        } else {
            pizza.checked = false;
        }
            
    })
}

pizza.addEventListener('change', () => {
    if (pizza.checked) {
        for (const checkbox of subs) {
            checkbox.checked = true;
        }
    } else {
        for (const checkbox of subs) {
            checkbox.checked = false;
        }
    }
})

/*
решение эксперта

const mainCheckbox = document.getElementById("main-checkbox");
const subCheckboxes = document.querySelectorAll(".sub-checkbox");

subCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("click", function () {
        mainCheckbox.checked = [...subCheckboxes].every(e => e.checked);
    });
});

mainCheckbox.addEventListener('click', () => {
    subCheckboxes.forEach((checkbox) => {
        checkbox.checked = mainCheckbox.checked;
    });
});

*/



const form2 = document.getElementById('form2');
const select = document.getElementById('genre');
const content = document.querySelector('.content');



console.log(select.options);

const createElements = (label, value, selected = false) => {
    const option = document.createElement('option');
    
    option.text = label;
    option.value = value;
    option.selected = selected;

    select.appendChild(option);
}

createElements('Драма', 'drama', true);
createElements('Комедия', 'comedy');
createElements('Фантастика', 'sci-fi');

const filmName = document.getElementById('name');


form2.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameElement = document.createElement('p');
    const genreElement = document.createElement('p');
    const genre = select.options[select.selectedIndex].label;
    nameElement.textContent = `Название фильма: ${filmName.value}`;
    genreElement.textContent = `Жанр: ${genre}`;
    content.appendChild(nameElement);
    content.appendChild(genreElement);
    
    form2.reset();
});

/*
решение эксперта


const selectElement = document.getElementById('genre');
const form = document.querySelector('form');
const inputElement = document.getElementById('name');
const contentElement = document.querySelector('.content');

const options = [
    {label: 'Драма', value: 'drama'},
    {label: 'Комедия', value: 'comedy'},
    {label: 'Фантастика', value: 'sci-fi'}
];

options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.text = option.label;
    selectElement.add(optionElement);
});

form.addEventListener('submit', event => {
    event.preventDefault();

    const selectedOption = selectElement.options[selectElement.selectedIndex].text;
    const inputValue = inputElement.value;
    createElements(inputValue, selectedOption)
    inputElement.value = '';
});

const createElements = (title, genre) => {
    const titleElement = document.createElement('p');
    const genreElement = document.createElement('p');
    titleElement.textContent = `Название фильма: ${title}`;
    genreElement.textContent = `Жанр: ${genre}`;
    contentElement.appendChild(titleElement);
    contentElement.appendChild(genreElement);
}



*/