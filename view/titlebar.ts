import { UserInfElement } from "./userinf";
import { ButtonA, ListA } from "./button_like_a";

export class TitleBarElement extends HTMLElement{
    private init(){
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
        this.buttonNav.appendChild(this.loggedInUserPart);
        this.loggedInUserPart.appendChild(this.loginPart);
        this.loggedInUserPart.appendChild(this.logoutButton);
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
        this.loggedInUserPart.id = 'loggedin-user-part';
        this.logoutButton.a.id = 'logout-button';
        this.logoutButton.a.className = 'button';
        this.logoutButton.a.innerText = '退出登录';
        this.usersPart.id = 'users-part';
        let style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = '/dist/css/titlebar.css';
        shadow.appendChild(style);
        shadow.appendChild(this.mainDiv);
        this.titleH1.innerText = '破站'
        for(let x of this.navItems){
            let li = document.createElement('li');
            let a = document.createElement('l-a') as ListA;
            a.a.innerText = x.innerText;
            a.a.href = x.href;
            li.id = x.id;
            li.appendChild(a);
            this.mainNavUl.appendChild(li);
        }
        for(let x of this.userItems){
            let li = document.createElement('div');
            let a = document.createElement('b-a') as ButtonA;
            a.a.innerText = x.title;
            a.a.href = x.href;
            li.id = x.id;
            li.appendChild(a);
            this.usersPart.appendChild(li);
        }
    }
    constructor(){
        super();
        this.init();
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
                loggedInUserPart = document.createElement('div');
                    loginPart = document.createElement('user-inf') as UserInfElement;
                    logoutButton = document.createElement('b-a') as ButtonA;
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
            let uid = this.getAttribute('uid');
            if(uid){
                this.loginPart.setAttribute('uid',uid);
                this.usersPart.style.display = 'none';
                this.loggedInUserPart.style.display = '';
            }else{
                this.loginPart.removeAttribute('uid');
                this.usersPart.style.display = '';
                this.loggedInUserPart.style.display = 'none';
            }
        }
    }
    connectedCallback(){
        this.attributeChangedCallback('uid',null,this.getAttribute('uid'));
    }
    
}
customElements.define('title-bar',TitleBarElement);