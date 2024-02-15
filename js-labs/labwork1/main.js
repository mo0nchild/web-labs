var userData = false;

const str = 'string';
const num = 100;
const comb = 'string' + 100;

function promptAction() {
    const result = window.prompt('Значение:', 'Пусто');
    window.alert(`Ввод: ${result}`);
}

function confirmAction() {
    const result = window.confirm('Вы человек?');
    window.alert(`Вы${result ? ' ' : ' не '}человек`);
}

function printAction(text) { window.alert(text);}

const startWelcome = () => {
    window.alert('Привет пользователь');
    window.alert(`Вы${window.confirm('Вы хотите жить?') ? '' : ' не'} хотите жить`);
}

document.getElementById('mainButton').addEventListener('click', () => {
    if(userData) {
        if(window.confirm('Вам не надоело?')) return;
    }
    else userData = !userData;

    const result = window.prompt('Введите ваше имя: ', 'null');
    if (result != 'null') {
        document.getElementById('userName').textContent = result;
    }
    document.getElementById('userData')
        .style = `opacity: ${result == 'null' ? '0' : '1'}`;
});
document.getElementById('num').textContent = num;
document.getElementById('str').textContent = str;
document.getElementById('comb').textContent = comb;

document.getElementById('intParsed').textContent = parseInt('244');
document.getElementById('floatParsed').textContent = parseFloat('1.56');

document.getElementById('errorParsed').textContent = parseFloat('error');
startWelcome();