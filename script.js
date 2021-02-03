document.write(`1. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти
элементы на экран.<br><br>`)

let arr = [1, 2, 3, 4, 5];

for (let key in arr) {
    document.write(arr[key] + ' ')
}

document.write('<br><br>')

document.write(`2. Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут
    быть положительными и отрицательными. Выведите на экран только отрицательные
    числа, которые больше -10, но меньше -3.<br><br>`)

arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let key in arr) {
    if (arr[key] > -10 && arr[key] < -3)
        document.write(arr[key] + ' ')
}
document.write('<br><br>')

document.write(`3. Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и
while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого
массива. Запишите ее в переменную result и выведите.<br><br>`)

arrWhile = [];
arrFor = [];
let i = 24;
let x = 0

while (i > 23 && i < 57) {
    arrWhile[x] = i
    i++;
    x++;
}
document.write(arrWhile)

document.write('<br>')

x = 0

for (let i = 24; i > 23 && i < 57; i++) {
    arrFor[x] = i
    x++;
}

document.write(arrFor)

document.write('<br><br>')


document.write(` 4. Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’].
Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.<br><br>`)

arr = ['10', '20', '30', '50', '235', '3000'];

for (let elem in arr) {
    if (arr[elem][0] == '1' || arr[elem][0] == '2' || arr[elem][0] == '5') {
        document.write(arr[elem] + ' ')
    }
}

document.write('<br><br>')


document.write(` 5. Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все
дни недели, а выходные дни выведите жирным.<br><br>`)

let week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

for (let elem in week) {
    if (week[elem] == 'Сб' || week[elem] == 'Вс') {
        document.write(`<b>${week[elem]}</b><br>`)
    } else { document.write(week[elem] + '<br>') }

}

document.write('<br><br>')


document.write(` 6. Создайте массив с произвольными данными. Добавьте в конец массива любой элемент,
и получите последний элемент массива, используя свойство length.<br><br>`)

week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
document.write(`Последний элемент массива это ${week[week.length-1]}`)

document.write('<br><br>')


document.write(`  7. Запросите у пользователя по очереди числовые значения при помощи prompt и
сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое
значение. Выведите получившийся массив на экран. Выполните сортировку чисел
массива, и выведите его на экран.<br><br>`)



/*    
8. Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке),
используя цикл while и метод reverse.
9. Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном
целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].
10. Найдите сумму элементов массива между двумя нулями (первым и последним нулями
в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть
более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или
[1,8,0,13,76,8,7,0,22,0,2,3,2].
11. *** Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает
пользователь. Например: высота = 5, на экране:*/