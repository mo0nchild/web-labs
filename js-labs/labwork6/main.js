document.getElementById('task1_1-button').onclick = function() {
    /** 
     * @typedef { Object } UserInfo 
     * @property { string } name
     * @property { string } surname
     * @property { string } patronymic
     * @property { string } group
    */
    /** @type { (user: UserInfo) => boolean } */
    const checkProperiesIsNull = function (user) {
        for(let key in user){
            if(user.hasOwnProperty(key)) return false;
        }
        return true;
    }
    /** @type { UserInfo } */
    const userInfo = {
        name: "Danil",
        surname: "Tulenev",
        patronymic: "Vaychaslavovich",
        group: "bOIS-211"
    };
    userInfo.name = 'Nikita'
    window.alert(`Имя до удаления: ${userInfo.name}`);
    delete userInfo.name;
    window.alert(`Имя после удаления: ${userInfo.name}`);
    window.alert(`Проверка свойств: ${checkProperiesIsNull(user)}`)
};
document.getElementById('task1_2-button').onclick = function() {
    const weekDays = {
        days: {
            0: "Воскресенье", 
            1: "Понедельник", 
            2: "Вторник", 
            3: "Среда",
            4: "Четверг", 
            5: "Пятница", 
            6: "Суббота"
        },
        getCurrent() {
            return this.days[(new Date(Date.now())).getDay()];
        }
    }
    window.alert(`Текущий день: ${weekDays.getCurrent()}`);
};
document.getElementById('task1_3-button').onclick = function() {
    const weekDays = {
        current: 3,
        days: {
            0: "Воскресенье", 
            1: "Понедельник", 
            2: "Вторник", 
            3: "Среда",
            4: "Четверг", 
            5: "Пятница", 
            6: "Суббота"
        },
        getCurrent() {
            return this.days[this.current];
        }
    }
    window.alert(`Установленный день: ${weekDays.getCurrent()}`);
};
document.getElementById('task1_4-button').onclick = function() {
    const writeYourGenres = (db) => {
        for(let index = 0; index < 3; index++) {
            const input = window.prompt(`Ваш любимы жанр номер ${index + 1}`);
            db.genres[index] = input;
        }
    }
    do{ var filmsCount = prompt("Сколько фильмов вы уже посмотрели?"); }
    while (filmsCount == null || !filmsCount.length);

    window.alert(`${(filmsCount >= 10 && filmsCount <= 30) 
        ? 'Вы классический зритель'
        : (filmsCount < 10 
            ? 'Мало фильмов просмотрено' 
            : (filmsCount > 30 ? 'Вы киноман' : 'Ошибка'))}`);
    const personalMovieDB = {
        count: Number(filmsCount),
        movies: { },
        actors: { },
        genres: [],
        private: false, 
        showMyDB: function() {
            console.log(this.private ? 'Доступ закрыт' : this);
        }
    }
    for(let index = 0; index < 2; index++) {
        do { 
            var lastFilm = window.prompt("Один из последних просмотренных фильмов?"); 
        }
        while (lastFilm == null || !lastFilm.length);

        do { var raiting = window.prompt("На сколько оцените его?"); }
        while (raiting == null || !raiting.length);
        personalMovieDB.movies[lastFilm] = raiting;
    }
    writeYourGenres(personalMovieDB)
    personalMovieDB.showMyDB();
};
document.getElementById('task2_1-button').onclick = function() {
    /** @type { (str: string) => string } */
    const ucFirst = function(str) {
        if (str === null || str.length <= 1) {
            throw 'Нельзя преобразовать'
        }
        return str.slice(0, str.length - 1) + str.charAt(str.length - 1).toUpperCase();;
    }
    window.alert(`Результат: ${ucFirst(window.prompt("Введите слово: "))}`);
};
document.getElementById('task2_2-button').onclick = function() {
    /** 
     * @typedef { Object } TaskResult 
     * @property { number } count
     * @property { string[] } words
     * @property { symbol } charByPos
     * @property { string[] } firstTwo
     * @property { string } upperCase
    */
    /** @type { (str: string) => TaskResult } */
    const ucFirst = function(str) {
        if(str === null || str.length < 7) {
            throw 'Строка не подходит для выполнения';
        }
        const words = str.split(' ');
        return {
            count: str.length, 
            words: words,
            charByPos: str.charAt(6),
            firstTwo: words.slice(0, 2),
            upperCase: str.toUpperCase()
        };
    }
    console.log(ucFirst(window.prompt('Введите строку:')));
    window.alert(`Результат в консоле`);
};
document.getElementById('task2_3-button').onclick = function() {

    const words = window.prompt('Введите предложение').split(' ');
    for(let index = 0; index < words.length; index++) {
        if(window.prompt(`${words[index]}`, '').length > 0) break;
    }
};
document.getElementById('task2_4-button').onclick = function() {

    const words = window.prompt('Введите предложение').split(' ');
    for(let index = 0; index < words.length; index++) {
        if(window.prompt(`${words[index]}`, '').length > 0) break;
    }
};
