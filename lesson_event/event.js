const text = document.querySelector('textarea');
function onKey(event) {
    console.log(event.type, event.code, event.key);
}

text.addEventListener('keydown', onKey)
text.addEventListener('keyup', onKey)

function onClick() {
    console.log('click Button');
}

const button2 = document.getElementById('button2');
button2.onclick = onClick;

const button3 = document.getElementById('button3');
button3.addEventListener('click', onClick);



let volumeStatus = 0;

let volumeRects = Array.from(document.querySelectorAll('.volume-rect'));

let upButton = document.querySelector('.volume-up');
let downButton = document.querySelector('.volume-down');

console.log(upButton);

upButton.onclick = function() {
    if (volumeStatus < 10) {
        volumeStatus++;
        document.querySelector('.indicator').textContent = volumeStatus;

        for (let i = volumeStatus; i > 0 && i <= volumeRects.length; i--) {
            console.log('+');
            volumeRects[i - 1].classList.add('volume-rect__active');
        }
    }
}

downButton.onclick = function() {
    if (volumeStatus > 0) {
        volumeStatus--;
        document.querySelector('.indicator').textContent = volumeStatus;

        for (let i = volumeStatus + 1; i <= volumeRects.length; i++) {
            if (volumeRects[i - 1].classList.contains('volume-rect__active')) {
                volumeRects[i - 1].classList.remove('volume-rect__active');
            }
        }
    }
};

//старые домашние задания (работа с объектами и массивами)
/*
let sum = (...args) => args.reduce((acc, item) => acc + item, 0);

function loggerDecorator(func) {
    return function(...args) {
        console.log(args);
        return func(...args);
    }
}

function spyDecorator(func) {

    function wrapper(...args) {
        wrapper.history.push(args);
        return func(...args);
    }

    wrapper.history = [];
    console.log(wrapper.history);
    return wrapper;
}





function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.count = 0;
    wrapper.allCount = 0;
  
    function wrapper(...args) {
        setTimeout(() => {
            wrapper.count += 1;
            func(...args);
            console.log(wrapper.count, 'считаю по таймеру');
        }, delay);


      wrapper.count += 1;
      console.log(wrapper.count, 'считаю сразу');
      return func(...args);
    }
    
    wrapper.allCount += 1;
    console.log(wrapper.allCount);
    return wrapper;
  }




  let test = debounceDecoratorNew(sum, 1000);
  //test(2, 3);
  //test(2, 3);
  //test(2, 3);
  //let a = debounceDecoratorNew(sum, 3000);
  //a(1, 1);
  //let b = debounceDecoratorNew(sum, 2000);
  //b(1, 1);








/*

const people = [
  {firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"},
  {firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"},
  {firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"},
  {firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"},
  {firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"},
  {firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"},
  {firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской"},
  {firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской"},
  {firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской"},
  {firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский"},
  {firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской"},
  {firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской"},
  {firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской"},
  {firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской"},
]


function getUsersNamesInAgeRange(users, gender) {
    return users.
      filter(user => user.gender === gender).
      map(user => user.age).
      reduce((average, userAge, index, array) => average + userAge / array.length, 0);
  }

//console.log(getUsersNamesInAgeRange(people, "инопланетянин"));

console.log('step 1');

setTimeout(function() {
    console.log('step 2');
}, 2000);

console.log('step 3');




function Obj(color, width, height) {
  let n = color;
  switch (n) {
      case "красный": 
          this.color = "оранжевый";
          break;
      case "жёлтый": 
          this.color = "зелёный";
          break;
      case "синий": 
          this.color = "фиолетовый";
          break;
      case "фиолетовый": 
          this.color = "красный";
          break;
  };

  this.size = {
      width: width,
      height: height,
  }
}

let newObj = new Obj(prompt(), prompt(), prompt());

console.log(`${newObj.color}\n${newObj.size.width}\n${newObj.size.height});
*/