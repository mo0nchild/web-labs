/** @type { () => string } */
function getCurrentPath() {
    const pathArray = window.location.href.split('/');
    return pathArray.slice(0, pathArray.length - 1).join('/');
}
document.getElementById('task1-button').onclick = function() {
    /** @type { (info: { root: HTMLElement }) => void } */
    const setContent = function({root}) {
        root.innerHTML = `
        <form style="margin: 10px 0px;" name="task1">
            <label>Оформление текста:</label>
            <select name="text-decor">
                <option value="0" selected>Не выбрано</option>
                <option value="1">Подчеркнутый</option>
                <option value="2">Зачеркнутый</option>
            </select>
            <p id="task1-format">Текст для форматирования</p>
        </form>
        `;
        /** @type { HTMLElement } */
        const text = root.querySelector('#task1-format');
        /** @type { HTMLSelectElement } */
        const select = document.forms['task1']['text-decor'];
        select.addEventListener('change', function(event) {
            switch(select.selectedOptions[0].text) {
                case 'Подчеркнутый': text.style.textDecoration = 'underline'; break;
                case 'Зачеркнутый': text.style.textDecoration = 'line-through'; break;
                default: text.style.textDecoration = 'none';
            }
        });
    }
    setContent({
        root: document.getElementById("task1-content"),
    });
};
document.getElementById('task2-button').onclick = function() {
    /** @type { (info: { root: HTMLElement }) => void } */
    const setContent = function({root}) {
        root.innerHTML = `
        <form style="margin: 10px 0px;" name="task2" >
            <button name="btn">Нажмите на меня!</button>
            <p name="info" style="display: none; margin: 10px 0px;"></p>
        </form>
        `;
        /** @type { HTMLParagraphElement } */
        const textinfo = root.querySelector('form > p');;
        /** @type { HTMLButtonElement } */
        const btn = document.forms['task2'].elements['btn'];
        document.forms.namedItem('task2').addEventListener('submit', function(event) {
            event.preventDefault();
            textinfo.style.display = 'block';
            textinfo.textContent = `${btn}: ${btn.outerHTML}`
        })
    }
    setContent({
        root: document.getElementById("task2-content"),
    });
};
document.getElementById('task3-button').onclick = function() {
    /** @type { (info: { root: HTMLElement }) => void } */
    const setContent = function({root}) {
        root.innerHTML = `
        <form style="margin: 10px 0px;" >
            <fieldset>
                <legend style="margin: 0px;">Элементы страницы:</legend>
                <input type="checkbox" value="show-title" name="show-title"/>
                <label>Show title</label>
                <br/>
                <input type="checkbox" value="show-lines" name="show-lines"/>
                <label>Show horizontal lines</label>
                <br/>
                <input type="checkbox" value="show-table" name="show-table"/>
                <label>Table view</label>
            </fieldset>
            <fieldset>
                <legend style="margin: 0px;">Цвет текста:</legend>
                <input type="radio" value="red" checked name="text-color" />
                <label>Red</label>
                <br/>
                <input type="radio" value="green" name="text-color"/>
                <label>Green</label>
                <br/>
                <input type="radio" value="blue" name="text-color"/>
                <label>Blue</label>
            </fieldset>
            <input type="submit" value="Создать" />
            <input type="button" value="Сбросить"/>
        </form>
        `;
        /** @type { HTMLFormElement } */
        const form = root.querySelector('form');
        root.querySelector('input[type="submit"]').addEventListener('click', function(event) {
            event.preventDefault();
            const data = new FormData(form, event.target);
            for (const [key, value] of data) {
                console.log(`${key}: ${value}`)
            }
            console.log(data);
        })
        root.querySelector('input[value="Сбросить"]').onclick = () => {
            
        }
    }
    setContent({
        root: document.getElementById("task3-content"),
    });
};