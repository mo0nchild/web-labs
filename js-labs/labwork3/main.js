const task1 = {
    regex: new RegExp('(т|Т){1}екст\\d?'),
    check: function() {
        const input = window.prompt('Проверить текст:');
        window.alert(`Текст ${this.regex.test(input) ? '' : 'не'}верный`);
    }
};
const task2 = {
    regex: /\(\d{3}\)\d{3}-\d{4}/,
    check: function() {
        const input = window.prompt('Проверить номер:');
        window.alert(`Номер ${this.regex.exec(input) != null ? '' : 'не'}верный`);
    }
};
const task3 = {
    regex: new RegExp('^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})$'),
    check: function() {
        let checked = false;
        while(!checked) {
            checked = this.regex.exec(window.prompt('Проверить адрес:')) != null;
            window.alert(`Адрес ${checked ? '' : 'не'}верный`);
        }
    }
};
const task4 = {
    regex: /^(\d){5}$/,
    check: function() {
        const input = window.prompt('Проверить индекс:');
        if (this.regex.test(input)) {
            window.alert('Правильный почтовый индекс (^(\d){5}$)');
        }
        else window.alert('Неверный почтовый индекс');
    }
};
window.addEventListener('load', (event) => {
    document.getElementById('task1-button')
        .addEventListener('click', () => task1.check());
    document.getElementById('task2-button')
        .addEventListener('click', () => task2.check());

    document.getElementById('task3-button')
        .addEventListener('click', () => task3.check());
    document.getElementById('task4-button')
        .addEventListener('click', () => task4.check());
});