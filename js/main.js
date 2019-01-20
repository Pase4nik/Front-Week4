function task1() {
			var days = 365, earth = "Земля", population = "7 млрд.", sun = "Солнце";
			var home = "Мы живём на планете " + earth + ", она делает один оборот вокруг " + sun + " за " + days + " дней. Население нашей планеты составляет примерно " + population + " человек."
			document.write( home );
		}


function task2() {
			var a = 5;
			var b, c;
			b = a * 5;
			b = c = b/2;
			document.write("Ответ: с=" + c )
		}


function task3() {
	var city = ["Украина", "Польша", "США", "Италия", "Франция"];
	var count = [44.83, 37.97, 325.7, 60.59, 67.12];
	for (var i = 0; i < city.length; i++) {
		document.write (city[i] + " \- " + count[i] + " млн. <br />"
	)}
}


function task4() {
			var fruits = [" апельсин ", " банан ", " груша "];
			document.write("На данный момент у Вас фруктов: " + fruits.length + " шт. " + "(" + fruits + ")" + "<br />");

			fruits.push (' яблоко ', ' ананас ');
			fruits.unshift(' грейпфрут ');
			document.write("Добавим 2 фрукта в начало и 1 в конец: " + fruits.length + " шт. " + "(" + fruits + ")" + "<br />");

			fruits.pop ();
			fruits.shift ();
			document.write("Уберём по 1 фрукту с начала и конца: " + fruits.length + " шт. " + "( " + fruits + " )" + "<br />");
		}
function task5() {
			var fruits = [" Яблоко", " апельсин ", " груша ", " гранат " + "<br />"];
			fruits.splice(fruits.length - 2, 1, " ананас ");
			document.write (fruits);


			var fruits = [" Банан ", " мандарин ", " манго " + "<br />"];
			fruits.splice(fruits.length - 2, 1, " ананас ");
			document.write(fruits);
		}
function task6() {
			var students = [" Сергей ", " Матвей ", " Лейла ", " Алина ", " Иоган "];
			if(students.length >= 3) {
				document.write(" Это большой массив, в котором как минимум 3 элемента.<br />");
			}
			else {
				document.write(" Это маленький массив, в котором менее 3-х элементов. <br />");
			}
		}
function task7() {
			var students = ["Дмитрий", "Алексей", "Петр", "Виктор"];
			if(students.length == 4 && students[students.length - 1] == "Виктор") {
				document.write(" Этот массив мне подходит<br />");
			}
			else {
				document.write(" Этот массив мне не подходит<br />");
			}
		}
function task8() {
			a=1;
			b=8;
			result = (a + b < 4) ? 'Мало' : 'Много';
			document.write (result);
		}
function task9() {
			var login = prompt('Task 9, Вася или Директор?');
			var message = (login == 'Вася') ? 'Привет' 
						: (login == 'Директор') ? 'Здравствуйте' 
						: (login == '') ? 'Нет логина' 
						: '';
			alert ( message );
		}
function task10() {
			var value = prompt('Каково "официальное" название JavaScript?', '');
			if (value == 'ECMAScript') {
				alert('Верно!');
			}
			else {
				alert('Не знаете? "EcmaScript"!');
			}
		}