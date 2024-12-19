/*
//1.2 Способы поиска нужного HTML-элемента


const listClass = document.getElementsByClassName('list__item');
const listTag = document.getElementsByTagName('li');
const listSelector = document.querySelectorAll('.list__item');

console.log(listClass, listTag, listSelector);

const listItem2 = listClass.item(2);

listItem2.addEventListener('click', () => {
    alert('click third!')
});

const link = Array.from(document.getElementsByTagName('a'));

link.forEach(item => {
    item.onclick = function(event) {
        event.preventDefault();
        alert('links is clicked');
    }
})

const element = document.querySelector('ul');
//const elementAttr = element.setAttribute('class', 'list__new');

//console.log(elementAttr);


console.log(listSelector.item(2));




//1.3 Объект события


window.onload = function() {
    console.log('...LOADED...');
}





//2.1 Навигация по DOM-элементам


const button = document.querySelector('button');

function toggleSelectClass() {
    button.classList.toggle('select');
}
button.addEventListener('click', toggleSelectClass);

var isInViewPort = function(element) {
    const viewporHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    console.log(elementTop, viewporHeight);
    return elementTop < viewporHeight ? true : false;
}
isInViewPort(button);


const closeModal = function() {
    const modalParent = this.closest('.modal');
    modalParent.classList.add('hidden');
}

const modalButtons = document.querySelectorAll('.modal button');
//console.log(modalButtons)

for (const button of modalButtons) {
    button.addEventListener('click', closeModal);
}
const openModal = function() {
    document.querySelector('.modal').classList.remove('hidden');
}
button.addEventListener('click', openModal);

const changeText = function() {
    const modalParent = this.closest('.modal2');
    console.log(modalParent);
    const modalParagraph = modalParent.querySelector('p');
    modalParagraph.textContent = 'Вы нажали кнопку!';
};

const modalButtons2 = document.querySelectorAll('.modal2 button');

for (const button2 of modalButtons2) { 
    button2.addEventListener('click', changeText);
} 
*/






//2.2

const registerButton = document.getElementById('registerButton');
const fio = document.getElementById('fio');

registerButton.addEventListener('click', () => {
    const user = fio.value;
    console.log(`Привет, ${user}!`)
})

fio.oninput = () => {
    document.getElementById('result').innerHTML = fio.value;
}

fio.onchange = () => {
    document.getElementById('result').innerHTML = fio.value;
}


const email = document.getElementById('email');
const div = document.querySelector('.hint');

registerButton.addEventListener('click', () => {
    email.value = email.value.trim();
    console.log(`Пользователь ${email.value} зарегистрирован!`);
})

email.addEventListener('focus', () => {
    div.classList.remove('hidden');
});


email.addEventListener('blur', () => {
    div.classList.add('hidden');
});

email.addEventListener('input', () => {
    if (email.value.includes('@')) {
        div.classList.add('hidden');
    } else {
        div.classList.remove('hidden');
    }   
});

const select = document.querySelector('select');

select.addEventListener('change', () => {
    console.log(select.value);
    console.log(select.selectedIndex);
})

const nextCountry = document.getElementById('nextCountry');

nextCountry.addEventListener('click', () => {
    select.selectedIndex = (select.selectedIndex + 1) % select.options.length;
    console.log(select.selectedIndex);
})


const payMethods = document.getElementById('payMethod');

payMethods.addEventListener('change', event => {
    const {value, options, selectedIndex} = event.currentTarget;
    console.log(event.target);
    console.log(value);
    console.log(options[selectedIndex].text);
});


const radios = document.getElementsByName('type');

for (const radio of radios) {
    radio.addEventListener('change', (e) => {
        console.log(e.currentTarget.value);
        console.log(e.target.value);
        
        const {value} = e.target;
        document.getElementById('result').innerHTML = value;
    })
}

const nextRadio = document.getElementById('nextRadio');

nextRadio.addEventListener('click', () => {
    const currentIndex = Array.from(radios).findIndex((el) => el.checked);

    radios[(currentIndex + 1) % radios.length].checked = true;
})


const checkbox = document.getElementById('private');

checkbox.addEventListener('change', () => {
    console.log(checkbox.checked);
    document.getElementById('result').innerHTML = checkbox.checked;
})

const blockCheck = document.getElementById('blockCheck');

blockCheck.addEventListener('click', () => {
    checkbox.disabled = !checkbox.disabled;

    blockCheck.textContent = checkbox.disabled ? 'unblock' : 'block';
})

const form = document.forms['registration'];

form.addEventListener('submit', (e) => {
    //e.preventDefault();
})

form.addEventListener('reset', (e) => {
   // e.preventDefault();
})


 const number = document.getElementById('number');

 number.addEventListener('input', () => {
    if (!number.checkValidity()) {
        alert('Avalible!');
    }
 })

 const validate = function() {
    let txt = '';

    if (!email.checkValidity()) {
        txt = "E-mail должен быть длиной от 5 до 30 символов"; 
    } else {
        txt = "Валидация прошла успешно"; 
    } 

    document.getElementById("result").innerHTML = txt;
 }

 registerButton.addEventListener('click', () => {
    console.log(document.forms['registration']);
    validate();
    form.reset();
 })