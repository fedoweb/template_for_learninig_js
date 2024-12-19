//получаем форму с id=message

var message = document.getElementById('message');
message.addEventListener('submit', (e) => {

    var formData = new FormData(message);
    var request = new XMLHttpRequest();

    request.open('POST', 'process.php');
    request.addEventListener('readystatechange', function() {
        if(this.readyState === request.DONE && this.status === 200) {
            var data = JSON.parse(this.responseText);
            var output = '<ul>';
            for (var key in data) {
                output += '<li><b>' + key + '</b>:' + data[key] + '</li>';
            }
            output += '</ul>';
            document.getElementById('result').innerHTML = output;
        }
    });

    request.send(formData);
    e.preventDefault();
});




/*
var xhr = new XMLHttpRequest(); //экземпляр объекта XMLHttpRequest
xhr.open('GET', 'http://example.com/', true); //создаем асинхронный запрос
xhr.withCredentials = true;
//xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //устанавливаем значение заголовка
xhr.send(null); //отправляем запрос

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
        console.log(xhr.responseText);
    };
};

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) console.log(xhr.responseText)
});


console.log(xhr);

var formData = new FormData(document.forms.person); //создаем объект для формы
formData.append('key', 'value1');
formData.append('key', 'value2');
console.log(formData);


let formData = new FormData();
formData.append('name', 'Alex');
formData.append('age', '25');

let xhr = new XMLHttpRequest();
xhr.open('POST', '/handler.php', true);
xhr.send(formData);
*/