export class TitleBarElement extends HTMLElement{
    constructor(){
        super();
        let shadow:ShadowRoot = this.attachShadow({mode:'open'});
        shadow.appendChild(
            this.leftBar
                .appendChild(
                    this.logoBlock
                        .appendChild(this.logo)
                )
                .appendChild(this.mainNav)
        ).appendChild(
            this.rightBar
                .appendChild(this.buttonNav)
        )
    }
    leftBar = document.createElement('div');
    rightBar = document.createElement('div');
    logoBlock = document.createElement('div');
    logo = document.createElement('img');
    mainNav = document.createElement('nav');
    buttonNav = document.createElement('nav');
    
}
customElements.define('title-bar',TitleBarElement);