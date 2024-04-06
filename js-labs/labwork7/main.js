document.getElementById('task2_1-button').onclick = function() {
    /**  
     * @typedef {{ root: HTMLElement, callback: () => void }} Content
     * @type { (content: Content) => void } 
    */
    const setContent = function({root, callback}) {
        root.innerHTML = `
        <div style="margin: 10px 0px;" >
            <input id="input-test" type="text" placeholder="Введите данные"/>
            <input id="output-test" type="text" placeholder="Вывод"/>
            <button id="btn-test">Проверить данные</button>
        </div>
        `;
        document.getElementById('btn-test').onclick = () => callback();
    };
    setContent({
        root: document.getElementById('task2_1-content'),
        callback: () => {
            if(!window.confirm('Подтверждение')) return;
            /** @type { HTMLInputElement } */
            const input = document.getElementById('input-test');
            /** @type { HTMLInputElement } */
            const output = document.getElementById('output-test');
            output.value = input.value;
        }
    })
};
document.getElementById('task4_1-button').onclick = function() {
    /** @type { (data: {root: HTMLElement}) => void } */
    const setContent = function({root, callback}) {
        root.innerHTML = `
        <div style="margin: 10px 0px;" >
            <input id="hello-text" type="text" placeholder="Пусто"/>
        </div>
        `;
        document.getElementById('hello-text').onfocus = function() {
            this.value = 'Привет';
        }
        document.getElementById('hello-text').addEventListener('blur', function() {
            this.value = 'До свидания'
        });
    };
    setContent({
        root: document.getElementById('task4_1-content'),
    })
};
document.getElementById('task4_2-button').onclick = function() {
    /** @type { (data: {root: HTMLElement}) => void } */
    const setContent = function({root, callback}) {
        root.innerHTML = `
        <div style="margin: 10px 0px;" >
            <button id="share-btn" style="margin: 0px 0px 10px;">Поделиться</button>
            <input id="share-text" type="text" placeholder="Пусто"/>
        </div>
        `;
        /** @type { HTMLInputElement } */
        const input = document.getElementById('share-text');
        document.getElementById('share-btn').addEventListener('click', function() {
            input.value = this.innerText; 
        });
    };
    setContent({
        root: document.getElementById('task4_2-content'),
    })
};
document.getElementById('task4_3-button').onclick = function() {
    /** @typedef {{ num1: number, num2: number, op: string }} CalcInfo */
    /** @typedef { (result: number) => void } ShareResult */
    /** @typedef { (info: CalcInfo, share: ShareResult) => void } CalcFunc */
    
    /** @type { (data: {root: HTMLElement, calc: CalcFunc }) => void } */
    const setContent = function({root, calc}) {
        const containerStyle = `
            display: inline-block;
            margin: 10px 0px;
        `
        root.innerHTML = `
        <div style="${containerStyle.replace(/(\r\n|\n|\r)/gm, '')}" >
            <input id="calc-input1" type="text" placeholder="Первое число"/>
            <select id="calc-op">
                <option selected> + </option>
                <option> - </option>
                <option> / </option>
                <option> * </option>
            </select>
            <input id="calc-input2" type="text" placeholder="Второе число"/>
            <button id="calc-btn"> = </button>
            <input disabled id="calc-result" type="text" placeholder="Результат"/>
        </div>
        `;
        /** @type { HTMLInputElement } */
        const num1 = document.getElementById('calc-input1');
        /** @type { HTMLInputElement } */
        const num2 = document.getElementById('calc-input2');
        /** @type { HTMLSelectElement } */
        const op = document.getElementById('calc-op');

        /** @type { (result: number) => CustomEvent } */
        const getEvent = (result) => {
            return new CustomEvent('setResult', { 
                detail: { result: result } 
            });
        }
        const output = document.getElementById('calc-result')
        output.addEventListener('setResult', function(event) {
            output.value = event.detail.result;
        });
        document.getElementById('calc-btn').addEventListener('click', function() {
            /** @type { CalcInfo } */
            const calcInfo = {
                num1: Number(num1.value),
                num2: Number(num2.value),
                op: op.value
            };
            calc(calcInfo, (result) => output.dispatchEvent(getEvent(result)));
        });
    };
    setContent({
        root: document.getElementById('task4_3-content'),
        calc: ({ num1, num2, op }, share) => {
            switch(op) {
                case '+': share((num1 + num2).toFixed(2)); return;
                case '-': share((num1 - num2).toFixed(2)); return;
                case '*': share((num1 * num2).toFixed(2)); return;
                case '/': share((num1 / num2).toFixed(2)); return;
            }
        },

    })
};
document.getElementById('task4_4-button').onclick = function() {
    /** @type { (data: {root: HTMLElement }) => void } */
    const setContent = function({root, calc}) {
        const containerStyle = `
            display: inline-block;
            margin: 10px 0px;
        `.replace(/(\r\n|\n|\r)/gm, '')
        root.innerHTML = `
        <div style="${containerStyle}" >
            <p id="action-text">Текст для изменения<p>
        </div>
        `;
        /** @type { HTMLElement } */
        const text = document.getElementById('action-text');
        text.addEventListener('click', function(event) {
            event.target.style = 'background-color: blue';
        });
        text.addEventListener('mouseenter', function(event) {
            event.target.style = 'color: blue';
        });
        text.addEventListener('mouseleave', function(event) {
            event.target.style = 'color: green';
        });
    };
    setContent({
        root: document.getElementById('task4_4-content'),
    })
};