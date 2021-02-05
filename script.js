document.write(`1. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти
элементы на экран.<br><br>`)

let arr = [1, 2, 3, 4, 5];

for (let key of arr) {
    document.write(key + ' ')
}

document.write('<br><br>')

document.write(`2. Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут
    быть положительными и отрицательными. Выведите на экран только отрицательные
    числа, которые больше -10, но меньше -3.<br><br>`)

arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

document.write('Первый способ: ');

for (let key of arr) {
    if (key > -10 && key < -3)
        document.write(key + ' ')
}

document.write('<br>Второй способ: ');

arr.forEach(function(item) {
    if (item > -10 && item < -3)
        document.write(item + ' ')
});

document.write('<br><br>')

document.write(`3. Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и
while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого
массива. Запишите ее в переменную result и выведите.<br><br>`)

arrWhile = [];
arrFor = [];
let i = 24;
let x = 0
let result = 0;

while (i > 23 && i < 57) {
    arrWhile[x] = i
    i++;
    x++;
}
document.write(arrWhile)

document.write('<br>')

x = 0


for (let i = 24; i > 23 && i < 57; i++) {
    arrFor[x] = i;
    result += arrFor[x]
    x++;
}

document.write(arrFor)
document.write('<br>')
document.write('Сумма чисел в массиве = ' + result)

document.write('<br><br>')


document.write(` 4. Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’].
Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.<br><br>`)

arr = ['10', '20', '30', '50', '235', '3000'];
document.write('Первый способ: ');

for (let elem of arr) {
    if (elem[0] == '1' || elem[0] == '2' || elem[0] == '5') {
        document.write(elem + ' ')
    }
}

document.write('<br>Второй способ: ');

arr.forEach(function(item) {
    if (item[0] == '1' || item[0] == '2' || item[0] == '5') {
        document.write(item + ' ')
    }
});

document.write('<br><br>')


document.write(` 5. Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все
дни недели, а выходные дни выведите жирным.<br><br>`)

let week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
document.write('Первый способ: ');
for (let elem in week) {
    if (week[elem] == 'Сб' || week[elem] == 'Вс') {
        document.write(`<b>${week[elem]}</b> `)
    } else { document.write(week[elem] + ' ') }
}

document.write('<br>Второй способ: ');

week.forEach(function(item) {
    if (item == 'Сб' || item == 'Вс') {
        document.write(`<b>${item}</b> `)
    } else { document.write(item + ' ') }
});

document.write('<br><br>')


document.write(` 6. Создайте массив с произвольными данными. Добавьте в конец массива любой элемент,
и получите последний элемент массива, используя свойство length.<br><br>`)

week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', ];
document.write(week + '<br>');
week.push('Вс');
document.write(week);
document.write(`<br>Последний элемент массива: ${week[week.length-1]}`)

document.write('<br><br>')


document.write(`7. Запросите у пользователя по очереди числовые значения при помощи prompt и
сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое
значение. Выведите получившийся массив на экран. Выполните сортировку чисел
массива, и выведите его на экран.<br><br>`)


arr = [];

function fuu() {
    let num = +prompt('Введите число');
    if (Number.isNaN(num)) {
        alert('Введите число');
        fuu();
    } else if (num === 0) {
        document.write(arr + '<br>');
    } else {
        arr.push(num);
        fuu();
    }
}
fuu();


document.write(arr.sort((a, b) => {
    return (a - b)
}));

document.write('<br><br>')

document.write(`8. Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке),
используя цикл while и метод reverse.<br><br>`)

arr = [12, false, 'Текст', 4, 2, -5, 0];
i = 0;
document.write('При  помощи метода reverse ' + arr.reverse() + '<br>');

arr = [12, false, 'Текст', 4, 2, -5, 0];

while (i < arr.length / 2) {
    let last = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = last;
    i++
}
document.write('При помощи цикла while ' + arr);


document.write('<br><br>')

document.write(`9. Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном
целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].<br><br>`)

arr = [5, 9, 21, , , 9, 78, , , , 6];
let zero = 0;
for (let elem of arr) {
    if (elem == undefined) {
        zero += 1
    }
}

document.write('количество нулевых (пустых) элементов в заданном целочисленном массиве = ' + zero)

document.write('<br><br>')

document.write(`10. Найдите сумму элементов массива между двумя нулями (первым и последним нулями
    в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть
    более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или
    [1,8,0,13,76,8,7,0,22,0,2,3,2].<br><br>`)

arr = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2];
sum = 0;
let first = arr.indexOf(0);
let last = arr.lastIndexOf(0);

if (arr.indexOf(0) == -1) {
    sum = 0;
    document.write('Сумма = 0')
}

for (let i = first; i < last; i++) {
    sum += arr[i];
}
document.write('Cуммa элементов массива между двумя нулями (первым и последним нулями в массиве) = ' + sum)

document.write('<br><br>')

document.write(`*** Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает
пользователь. Например: высота = 5, на экране:<br><br>`);

let height = prompt('Высота ранобедренного треугольника =', 5);
let space = '-';
for (let i = 1; i <= height; i++) {
    document.write('<br>');
    document.write(space.repeat(height - i));

    for (let x = 1; x <= i; x++) {

        document.write('X');
    }
    document.write(space.repeat(height - i));
}