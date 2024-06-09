//1.1 Основые команды для консоли

// document.write("Java Script says hello");
// console.log("Hello world");
// console.info("Hello world");
// console.error("Ошибка номер 1");
// console.warn("Предупреждение");

//1.2 Массивы

// var arr = [
//     [1, 2, 3],
//     [4, 5, 6]
// ]
// console.log(arr)

//1.3 Циклы

// for(var i = 0; i <= 10; i++){
//     console.log(i);
// }

// var i = 0;
// while(i < 10){
//     console.log(j);
//     i++
// }

// var x = 100;
// do {
//     console.log(x)
//     x--
// } while(x > 0)

//1.4 Перебор массива в цикле

// var arr = [1, 2, 3, 4, 5, 10]
// for(var i = 0; i < arr.length; i++){
//     console.log((i+1) + " элемент массива = " + arr[i]);
// }

//1.5 Всплывающие окна(alert, prompt, confirm)

// alert("Какая хорошая погода");
// confirm("Вы сейчас дома?");
// var age = prompt("Введите свой возраст", 18)
// console.log(age)

//1.6 Функции

// function info(word){
//     console.log(word + "!");
// }

// function summa(a, b){
//     var res = a + b;
//     return res;
// }   

// info(summa(5, 10))

//1.7 Преобразование данных

// const number1 = "56";
// const number2 = 4;
// const result = parseInt(number1) + number2;
// console.log(result);

// const num1 = "123hello";
// const num2 = parseInt(num1);
// console.log(num2); // 123

// const num1 = "javascript";
// const num2 = "22";
// let result = isNaN(num1);
// console.log(result); // true - num1 не является числом
     
// result = isNaN(num2);
// console.log(result); //  false - num2 - это число


// const number1 = "46.07";
// const number2 = "4.98";
// let result = parseFloat(number1) + parseFloat(number2);
// console.log(result); //51.05

// const number1 = "56";
// const number2 = 4;
// const result = -number1 - number2;  // -56 - 4 = -60
// console.log(result); // -60

// const number1 = "56hek";
// console.log(+number1); // NaN

//1.8 Обработчик событий

// <button onclick="onClickButton(this)">Нажми на меня</button> // В HTML
// var ClickScore = 0;

// function OnClickButton(el){
//     ClickScore++;
//     el.innerHTML = "Счётчик: " + ClickScore;
//     el.style.background = "red";
// }

//1.9 Управление HTML 

// var textView = document.getElementById("text");
// textView.style.color = 'red';
// textView.style.backgroundColor = 'blue';

// textView.innerHTML = "New<br>String";

// // document.getElementById("text").style.color = 'white'

// // var spans = document.getElementsByTagName('span');

// var spans = document.getElementsByClassName('SimpleText');

// for(var i = 0; i < spans.length; i++){
//     console.log(spans[i].textContent)
// }

//1.10 Обработка форм


//HTML
//<form id="main-form", onsubmit="checkFrom(this)", method="post">
    // <label for="name">Имя:</label>
    // <input type="text", name="name", placeholder="Имя", id="name"><br><br>

    // <label for="password">Пароль:</label>
    // <input type="password", name="pass", placeholder="Пароль", id="pass"><br><br>

    // <label for="repass">Проверка пароля:</label>
    // <input type="password", name="repass", placeholder="Проверка пароля", id="repass"><br><br>

    // <span>Пол:</span>  

    // <input type="radio", name="state", id="male", value="Мужской">
    // <label for="male">Мужской</label>

    // <input type="radio", name="state", id="female", value="Женский">
    // <label for="male">Женский</label><br><br>

    // <input type="button", name="submit", value="Готово">
//</form>

//JS
// document.getElementById('main-form').addEventListener("submit", checkForm);

// function checkForm(event){
//     event.preventDefault();
//     var element = document.getElementById('main-form');

//     var name = element.name.value;
//     var pass = element.pass.value;
//     var repass = element.repass.value;
//     var state = element.state.value;

//     var fail = "";

//     if (name == '' || pass == '' || state == ''){
//         fail = "Не все поля заполнены";
//     }
//     else if(name.length <=1 || name.length >=50){
//         fail = "Введите корректное имя";
//     }
//     else if(pass != repass){
//         fail = "Пароли должны совпадать";
//     }

//     if (fail != ""){
//         document.getElementById('error').innerHTML = fail;

//         return false;
//     } else{
//         alert("Все данные корректно заполнены");
//         return True;
//     }

//     return false;
// }

