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