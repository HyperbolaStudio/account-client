import { UserInfElement } from "./userinf";

export class TitleBarElement extends HTMLElement{
    constructor(){
        super();
        let shadow:ShadowRoot = this.attachShadow({mode:'open'});
        this.mainDiv.appendChild(this.leftBar)
        this.mainDiv.appendChild(this.rightBar);
        this.leftBar.appendChild(this.logoBlock);
        this.leftBar.appendChild(this.titleH1);
        this.leftBar.appendChild(this.mainNav);
        this.logoBlock.appendChild(this.logoImg);
        this.rightBar.appendChild(this.buttonNav);
        this.buttonNav.appendChild(this.usersPart);
        this.mainNav.appendChild(this.mainNavUl);
        this.logoImg.src = '/assets/logo0.svg';
        this.logoImg.id = 'logo-img';
        this.logoBlock.id = 'logo-block';
        this.mainNav.id = 'main-nav';
        this.buttonNav.id = 'button-nav';
        this.leftBar.id = 'left-bar';
        this.rightBar.id = 'right-bar';
        this.mainDiv.id = 'main-div';
        this.mainNavUl.id = 'main-nav-ul';
        this.buttonNav.id = 'button-nav';
        this.usersPart.id = 'users-part';
        let style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = '/dist/css/titlebar.css';
        shadow.appendChild(style);
        shadow.appendChild(this.mainDiv);
        this.titleH1.innerText = '破站'
        for(let x of this.navItems){
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.innerText = x.innerText;
            a.href = x.href;
            li.id = x.id;
            li.appendChild(a);
            this.mainNavUl.appendChild(li);
        }
        for(let x of this.userItems){
            let li = document.createElement('div');
            let a = document.createElement('a');
            a.innerText = x.title;
            a.href = x.href;
            li.id = x.id;
            li.appendChild(a);
            this.usersPart.appendChild(li);
        }
    }
    mainDiv = document.createElement('header');
        leftBar = document.createElement('div');
            logoBlock = document.createElement('div');
                logoImg = document.createElement('img');
            titleH1 = document.createElement('h1');
            mainNav = document.createElement('nav');
                mainNavUl = document.createElement('ul');
        rightBar = document.createElement('div');
            buttonNav = document.createElement('nav');
                usersPart = document.createElement('div');
                loginPart = document.createElement('user-inf') as UserInfElement;
    navItems = [{
        innerText:'主页',
        id:'homepage',
        href:'/',
    },{
        innerText:'动态',
        id:'trend',
        href:'/trend',
    },{
        innerText:'-1娘的破站',
        id:'nega1',
        href:'https://nega1.hyperbola.studio/',
    },{
        innerText:'关于',
        id:'about',
        href:'/about',
    }];
    userItems = [{
        title:'登录',
        id:'login',
        href:'/login',
    },{
        title:'注册',
        id:'login',
        href:'/register'
    }];
    static get observedAttributes():string[]{
        return ['uid'];
    }
    attributeChangedCallback(name:string,oldVal:string|null,newVal:string|null){
        if(name == 'uid'){
            if(this.getAttribute('uid')){
                this.usersPart.style.display = 'none';
                this.loginPart.style.display = '';
            }else{
                this.usersPart.style.display = '';
                this.loginPart.style.display = 'none';
            }
        }
    }
    
}
customElements.define('title-bar',TitleBarElement);