document.getElementById('task1-button').onclick = () => {
    const array = [];
    while(true) {
        const value = parseInt(window.prompt('Введите число:'));
        if (isNaN(value)) break;

        array.push(value);
    }
    let summary = 0;
    for (let index = 0; index < array.length; index++) {
        summary += array[index];
    }
    window.alert(`Среднее арифметическое: ${summary / array.length}`);
};
document.getElementById('task2-button').onclick = () => {
    const getMaxFromList = function(array) {
        let maxValue = -Infinity;
        for (let index = 0; index < array.length; index++) {
            if(maxValue < array[index]) maxValue = array[index];
        }
        return maxValue;
    };
    const numbersList = [];
    for (let index = 0; index < 12; index++) {
        const value = parseInt(window.prompt('Введите число:'));
        if(isNaN(value)) return;

        numbersList.push(value);
    }
    window.alert(`Максимальное значение: ${getMaxFromList(numbersList)}`);
};
document.getElementById('task3-button').onclick = function() {
    const students = [ 
        [ 'Данил', 20, 'Воронеж' ],
        [ 'Слава', 18, 'Липецк' ],
        [ 'Никита', 25, 'Москва' ],
    ]
    const setContent = (content) => `<table border="1" style="margin: 10px;"> `+
        `<tr> <th> Name </th> <th> Age</th> <th> Place</th></tr>${content}</table>`  
    let content = '';
    for (let item of students) {
        content += '<tr>';
        for (let index = 0; index < item.length; index++) {
            content += `<td>${item[index]}</td>`
        }
        content += '</tr>';
    }
    const taskContent = document.getElementById('task3-content');
    taskContent.innerHTML = setContent(content);
}
document.getElementById('task4-button').onclick = function() {
    const data = new Array(3);
    let min = Number.MAX_VALUE;
    for(let i = 0; i < data.length; i++){
        data[i] = new Array(4);
        for(let j = 0; j < data[i].length; j++)
        {
            data[i][j] = parseInt(window.prompt("Введите число: "));
            if(Number(data[i][j] < min)) min = Number(data[i][j]);
        }
    }
    const setContent = (arr) => {
        let content = `<ul style="margin: 10px 0px;">`;
        for (let index = 0; index < arr.length; index++) {
            for(let i = 0; i < arr[index].length; i++) {
                content += `<li>[${index}, ${i}]: ${arr[index][i]}</li>`
            }
        }
        return (content += '</ul>');
    };
    const taskContent = document.getElementById('task4-content');
    taskContent.innerHTML = setContent(data);

    window.alert("Минимальное число массива: " + min);
}
document.getElementById('task5-button').onclick = function() {
    const items = new Array(6);
    const results = [];
    for(let index = 0; index < items.length; index++) {
        items[index] = parseInt(window.prompt("Введите число:"));
        if(Number(items[index]) % 2 != 0) continue;
        results.push(items[index]);
    }
    /** @type {(arr: number[]) => string)} */
    const setContent = (arr) => {
        let content = `<ul style="margin: 10px 0px;">`;
        for (let index = 0; index < arr.length; index++) {
            content += `<li>[${index}]: ${arr[index]}</li>`
        }
        return (content += '</ul>');
    };
    const taskContent = document.getElementById('task5-content');
    taskContent.innerHTML = setContent(results);
}
document.getElementById('task6-button').onclick = function() {
    const items = new Array(5);
    const positive = [], negative = [];
    for(let index = 0; index < items.length; index++){   

        items[index] = parseInt(window.prompt("Введите число:"));
        if(Number(items[index]) > 0) {
            positive.push({ index: index, value: items[index] });
        }
        else if(Number(items[index] < 0)){
            negative.push({ index: index, value: items[index] });
        }
    }
    /** 
     * @typedef {{index: number, value: number}} RequestData 
     * @type {(pos: RequestData[], neg: RequestData[]) => string)} 
     */
    const setContent = (pos, neg) => {
        let content = `<span style="margin: 10px 0px 0px;">Положительные:</span><ul>`;
        for (let index = 0; index < pos.length; index++) {
            const current = pos[index];
            content += `<li>[${current.index}]: ${current.value}</li>`
        }
        content += '</ul><span style="margin: 10px 0px 0px;">Отрицательные:</span><ul>'
        for (let index = 0; index < neg.length; index++) {
            content += `<li>[${neg[index].index}]: ${neg[index].value}</li>`
        }
        return (content += '</ul>');
    };
    const taskContent = document.getElementById('task6-content');
    taskContent.innerHTML = setContent(positive, negative);
}
document.getElementById('task7-button').onclick = function() {
    const items = new Array(4);
    for(let i = 0; i < items.length; i++){
        items[i] = parseInt(window.prompt("Введите число:"));
    }
    const begin = items.map(x => x);
    items.sort((a, b) => a < b ? -1 : (a > b ? 1 : 0));

    /** @type {(data: number[], begin: number[]) => string)} */
    const setContent = (data, begin) => {
        let content = `<span>Сортированные: [`;
        for (let index = 0; index < data.length; index++) {
            content += `${data[index]}, `
        }
        content += `]</span><br><span>Без сортировки: [`
        for (let index = 0; index < begin.length; index++) {
            content += `${begin[index]}, `
        }
        return (content += ']</span>');
    };
    const taskContent = document.getElementById('task7-content');
    taskContent.innerHTML = setContent(items, begin);
}
document.getElementById('task7-button').onclick = function() {
    const items = new Array(4);
    for(let i = 0; i < items.length; i++){
        items[i] = parseInt(window.prompt("Введите число:"));
    }
    const begin = items.map(x => x);
    items.sort((a, b) => a < b ? -1 : (a > b ? 1 : 0));

    /** @type {(data: number[], begin: number[]) => string)} */
    const setContent = (data, begin) => {
        let content = `<span>Сортированные: [`;
        for (let index = 0; index < data.length; index++) {
            content += `${data[index]}, `
        }
        content += `]</span><br><span>Без сортировки: [`
        for (let index = 0; index < begin.length; index++) {
            content += `${begin[index]}, `
        }
        return (content += ']</span>');
    };
    const taskContent = document.getElementById('task7-content');
    taskContent.innerHTML = setContent(items, begin);
}
document.getElementById('task8-button').onclick = function() {
    const colors = new Array(5);
    for(var i = 0; i < colors.length; i++){
        colors[i] = prompt("Введите цвета: ", " ");
    }
    /** @type {(colors: string[]) => string)} */
    const setContent = (colors) => {
        let content = `<ul style="margin: 10px 0px">`;

        for (let index in colors) content += `<li>${colors[index]}</li>`
        return (content += '</ul>');
    };
    const taskContent = document.getElementById('task8-content');
    taskContent.innerHTML = setContent(colors);
}
document.getElementById('task9-button').onclick = function() {
    /** @type {(num: number, num2: number) => number} */
    const getResult = (num1, num2) => {
        switch(window.prompt('Тип операции: (+, -, /, *)')) {
            case '+': return num1 + num2; 
            case '-': return num1 - num2; 
            case '/': return num1 / num2; 
            case '*': return num1 * num2; 
            default: throw 'Операция не найдена';
        }
    }
    do {
        const num1 = parseInt(window.prompt('Введите первое число:'));
        const num2 = parseInt(window.prompt('Введите второе число:'));

        try { window.alert(`Результат: ${getResult(num1, num2).toFixed(2)}`); }
        catch (error) { window.alert(`Ошибка: ${error}`); }
    }
    while (window.confirm('Продолжить?'));
}
document.getElementById('task10-button').onclick = function() {
    const emp1 = ["Данил", "Никита", "Олег"];
    const emp = emp1.concat("Егор", "Максим", "Репер");
    window.alert(`emp: ${emp}`);

    emp.sort((a, b) => a[0] < b[0] ? -1 : (a[0] > b[0] ? 1 : 0));
    window.alert(`emp: ${emp}`);

    let empA = new Array(10);
    window.alert(`empA: ${(empA = emp.concat())}`);
    empA.reverse();

    let empA1 = new Array(10);
    window.alert(`empA1: ${empA1 = empA.concat()}`);
}