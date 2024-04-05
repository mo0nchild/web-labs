document.getElementById('task1-button').onclick = function() {
    const greetings = function () {
        window.alert("Приветствую пользователь");
    }
    greetings();
};
document.getElementById('task2-button').onclick = function() {
    /** @type {(a: number, b: number) => number} */
    const calculate = function (a, b) {
        return a + b;
    }
    const num1 = parseInt(window.prompt('Введите первое число:', 0));
    const num2 = parseInt(window.prompt('Введите второе число:', 0));
    window.alert(`Результат: ${calculate(num1, num2)}`);
};
document.getElementById('task3-button').onclick = function() {
    /** @type {(arr: number[]) => number} */
    const getArraySummary = function (arr) {
        let result = 0;
        for(let item in arr.map(x => x).reverse()) result += arr[item];
        return result;
    }
    const array1 = [ 20, 10, 256, 25, -63 ];
    const array2 = new Array(5);
    for(let index = 0; index < array2.length; index++) {
        array2[index] = parseInt(window.prompt('Введите число: '));
    }
    window.alert(
        `Установленный массив: ${getArraySummary(array1)}\n` +
        `Введенный массив: ${getArraySummary(array2)}`);
};
document.getElementById('task4-button').onclick = function() {
    /** @type {(arr: string[], item: number) => string[]} */
    const addItemToArray = function (arr, item) {
        const arrClone = arr.map(x => x);
        arrClone.push(item);
        return arrClone;
    }
    const array = [ 'item1', 'item2', 'item3' ];
    const newItem = window.prompt('Введите новый элемент: ', ' ');
    const newArray = addItemToArray(array, newItem);
    window.alert(
        `До добавления: ${array}\nПосле добавления: ${newArray}`);
};
document.getElementById('task5-button').onclick = function() {
    /** 
     * @typedef { {array: string[], element: HTMLElement} } RequestInfo
     * @type {(info: RequestInfo) => void} 
     * */
    const setItemsToElement = function ({array, element}) {
        element.innerHTML = `<ul style="margin: 10px 0px">`
        array.forEach((value, index) => element.innerHTML += `<li>[${index}]: ${value}</li<`);
        element.innerHTML += `</ul>`
    }
    setItemsToElement({
        array: [ 'item1', 'item2', 'item3' ],
        element: document.getElementById('task5-content')
    });
};
document.getElementById('task6-button').onclick = function() {
    /** 
     * @type { (num: number = 1) => void } 
     * */
    const factorial = function (num = 1) {
        if(num <= 1) return num;
        else return num * factorial(num - 1);
    }
    window.alert("Factorial: " + factorial(parseInt(window.prompt("Введите число: ", 4))));
};
document.getElementById('task7-button').onclick = function() {
    /** 
     * @typedef { { index: number, value: number } } NumberInfo
     * @typedef { { positive: NumberInfo[], negative: NumberInfo[] } } ResultData
     * 
     * @type { (array: number[]) => ResultData } 
     * */
    const divideArrayBySign = function (array) {
        /** @type { ResultData } */
        const result = { negative: [], positive: [] };
        array.forEach((value, index) => {
            if (value === 0) return;
            
            /** @type { NumberInfo } */
            const currentNumber = { value: value, index: index };

            if(value < 0) result.negative.push(currentNumber);
            else result.positive.push(currentNumber);
        });
        return result;
    }
    /** 
     * @typedef { {info: ResultData, element: HTMLElement} } RequestInfo
     * @type {(info: RequestInfo) => void} 
     * */
    const setItemsToElement = function ({info, element}) {
        element.innerHTML = `<span>Положительные:</span><ul>`
        info.positive.forEach((value, index) => {
            element.innerHTML += `<li>[${value.index}]: ${value.value}</li>`;
        })

        element.innerHTML += `</ul><span>Отрицательные:</span><ul>`
        info.negative.forEach((value, index) => {
            element.innerHTML += `<li>[${value.index}]: ${value.value}</li>`;
        });
    }
    const array = new Array(5);
    for (let index = 0; index < array.length; index++) {
        array[index] = parseInt(window.prompt('Введите число:', 0));
    }
    setItemsToElement({
        info: divideArrayBySign(array),
        element: document.getElementById('task7-content')
    });
};
document.getElementById('task8-button').onclick = function() {
    /** 
     * @typedef { { positive: number, negative: number, zero: number } } ResultData
     * @type { (array: number[]) => ResultData } 
     * */
    const calculateNumbersType = function (array) {
        /** @type { ResultData } */
        const result = { negative: 0, positive: 0, zero: 0 };
        array.forEach((value, index) => {
            if(value > 0) result.positive++;
            else if(value < 0) result.negative++;
            else result.zero++;
        });
        return result;
    }
    const array = new Array(5);
    for (let index = 0; index < array.length; index++) {
        array[index] = parseInt(window.prompt('Введите число:', 0));
    }
    const result = calculateNumbersType(array);
    window.alert(`Кол-во положительных чисел: ${result.positive}\n` 
        + `Кол-во отрицательных чисел: ${result.negative}\n`
        + `Кол-во нулей: ${result.zero}`);
};