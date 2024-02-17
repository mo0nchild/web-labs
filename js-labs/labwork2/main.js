const task1 = {
    calculateProcent: function () {
        const calculator = (sum, procent) => sum * procent / 100;
        
        const sum = parseInt(window.prompt('Сумма:'));
        const procent = parseInt(window.prompt('Процент'));
    
        if(isNaN(sum) == true || isNaN(procent) == true) {
            window.alert('Неверные значения');
        }
        else window.alert(`Результат расчета: ${calculator(sum, procent)}`);
    }
};
const task2 = {
    analyzeResult: function() {
        var number = 3;
        window.alert('Число после выполнения приращения: ' + ++number);
        window.alert('Число после выполнения отрицательного приращения: ' + number--);
        window.alert('Число после выполнения отрицания: ' + -number);
    }
};
const task3 = {
    compareNumbers: function() {
        const num1 = parseFloat(window.prompt('Первое значение'));
        const num2 = parseFloat(window.prompt('Второе значение'));
    
        if(isNaN(num1) == true || isNaN(num2) == true) window.alert('Неверные значения');
        else window.alert(num1 < num2 ? 'Второе значение больше' 
            : (num1 > num2 ? 'Первое значение больше' : 'Значения равны'));
    }
};
const task4 = {
    myName: 'Данил',
    myAge: 20,
    checkData: function() {
        const name = window.prompt('Введите имя'); 
        const age = parseInt(window.prompt('Введите возраст'));

        if(name === this.myName && age === this.myAge) {
            window.alert('Данные одинаковые');
        }
        else window.alert('Данные отличаются');
    }
};
const task5 = {
    checkAge: function() {
        const userAge = parseInt(window.prompt('Введите возраст'));
        if(isNaN(userAge) == true) {
            window.alert('Некорректные данные')
        }
        else window.alert(`Вам ${userAge >= 18 ? 'разрешено' : 'запрещено'} участвовать`)      
    }
};
const task6 = {
    divideValues: function() {
        const num1 = parseFloat(window.prompt('Делимое'));
        const num2 = parseFloat(window.prompt('Делитель'));

        if(isNaN(num1) == true || isNaN(num2) == true || num2 == 0) {
            window.alert('Неверные значения (или делитель равен нулю)');
        }
        else window.alert(`Результат реван: ${num1 / num2}`);
    }
};
const task7 = {
    fixScript: function() {
        var x, y;
        x = parseInt(window.prompt('Введите значение Х'));
        y = parseInt(window.prompt('Введите значение Y'));

        if(x < y) window.alert('Максимальное число - У');
        else if(x > y) window.alert('Максимальное число - Х');
        else window.alert('Введенные числа равны');
    }
};
const task8 = { 
    milkType1: 'Бодрая коровка (2.5%)',
    milkType2: 'Зеленая деревня (3.2%)',
    milkType3: 'Простоквашино (3.5%)',
    getMilkType: function() {
        const procent = parseFloat(window.prompt('Введите процент молока'));
        if(isNaN(procent) == true) {
            window.alert('Неверное значение');
            return;
        }
        switch(procent) {
            case 2.5: window.alert(this.milkType1); break;
            case 3.2: window.alert(this.milkType2); break;
            case 3.5: window.alert(this.milkType3); break;
            default: window.alert('Такого молока нету');
        }
    }
};
const task9 = {
    userName: 'admin',
    userPassword: 'admin123',
    checkUser: function() {
        const name = window.prompt('Введите логин');
        const password = window.prompt('Введите пароль');
        window.alert(name == this.userName && password == this.userPassword
            ? 'Данные верны' : 'Доступ запрещен');
    }
};
const task10 = {
    findMaxValue: function() {
        const value1 = parseFloat(window.prompt('Введите первое значение'));
        const value2 = parseFloat(window.prompt('Введите второе значение'));
        const value3 = parseFloat(window.prompt('Введите третье значение'));

        if(isNaN(value1) == true || isNaN(value2) == true || isNaN(value3) == true) {
            alert('Неверные значения');
            return;
        }
        var maxValue = value1;
        if(value2 > value3 && value2 > value1) maxValue = value2;
        else if((value3 > value2 && value3 > value1)) maxValue = value3;

        window.alert(`Максимальное значение: ${maxValue}`);
    }
};
const task11 = {
    calculateValue: function() {
        const value1 = parseFloat(window.prompt('Первое значение'));
        const value2 = parseFloat(window.prompt('Второе значение'));
        
        var result = 0;
        switch(prompt('Разделить или умножить?')) {
            case 'Умножить': result = value1 * value2; break;
            case 'Разделить': 
                while(true) {
                    switch(prompt('Остаток или частное?')) {
                        case 'Остаток': result = value1 % value2; break;
                        case 'Частное': result = value / value2; break;
                        default: continue;
                    }
                    break;
                }
                break;
            default: window.alert('Неверная операция'); return;
        }
        window.alert(`Результат: ${result}`);
    }
};
window.addEventListener('load', (event) => {
    document.getElementById('task1-button')
        .addEventListener('click', () => task1.calculateProcent());
    document.getElementById('task2-button')
        .addEventListener('click', () => task2.analyzeResult());
    document.getElementById('task3-button')
        .addEventListener('click', () => task3.compareNumbers());

    document.getElementById('task4-button')
        .addEventListener('click', () => task4.checkData());
    document.getElementById('task5-button')
        .addEventListener('click', () => task5.checkAge());
    document.getElementById('task6-button')
        .addEventListener('click', () => task6.divideValues());

    document.getElementById('task7-button')
        .addEventListener('click', () => task7.fixScript());
    document.getElementById('task8-button')
        .addEventListener('click', () => task8.getMilkType());
    document.getElementById('task9-button')
        .addEventListener('click', () => task9.checkUser());

    document.getElementById('task10-button')
        .addEventListener('click', () => task10.findMaxValue());
    document.getElementById('task11-button')
        .addEventListener('click', () => task11.calculateValue());
});