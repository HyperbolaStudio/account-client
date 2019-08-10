export abstract class ButtonLikeA extends HTMLElement{
    constructor(){
        super();
        let shadow = this.attachShadow({mode:'open'});
        this.link.rel = 'stylesheet';
        shadow.appendChild(this.link);
        shadow.appendChild(this.container);
        this.container.appendChild(this.a);
    }
    link = document.createElement('link');
    container = document.createElement('div');
    a = document.createElement('a');
}
export class ListA extends ButtonLikeA{
    constructor(){
        super();
        this.link.href = '/dist/css/list_a.css';
    }
}
customElements.define('l-a',ListA);
export class ButtonA extends ButtonLikeA{
    constructor(){
        super();
        this.link.href = '/dist/css/button_a.css';
    }
}
customElements.define('b-a',ButtonA);