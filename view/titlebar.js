"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TitleBarElement = (function (_super) {
    __extends(TitleBarElement, _super);
    function TitleBarElement() {
        var _this = _super.call(this) || this;
        _this.mainDiv = document.createElement('header');
        _this.leftBar = document.createElement('div');
        _this.logoBlock = document.createElement('div');
        _this.logoImg = document.createElement('img');
        _this.titleH1 = document.createElement('h1');
        _this.mainNav = document.createElement('nav');
        _this.mainNavUl = document.createElement('ul');
        _this.rightBar = document.createElement('div');
        _this.buttonNav = document.createElement('nav');
        _this.usersPart = document.createElement('div');
        _this.loggedInUserPart = document.createElement('div');
        _this.loginPart = document.createElement('user-inf');
        _this.logoutButton = document.createElement('b-a');
        _this.navItems = [{
                innerText: '主页',
                id: 'homepage',
                href: '/',
            }, {
                innerText: '动态',
                id: 'trend',
                href: '/trend',
            }, {
                innerText: '-1娘的破站',
                id: 'nega1',
                href: 'https://nega1.hyperbola.studio/',
            }, {
                innerText: '关于',
                id: 'about',
                href: '/about',
            }];
        _this.userItems = [{
                title: '登录',
                id: 'login',
                href: '/login',
            }, {
                title: '注册',
                id: 'login',
                href: '/register'
            }];
        _this.init();
        return _this;
    }
    TitleBarElement.prototype.init = function () {
        var shadow = this.attachShadow({ mode: 'open' });
        this.mainDiv.appendChild(this.leftBar);
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
        var style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = '/dist/css/titlebar.css';
        shadow.appendChild(style);
        shadow.appendChild(this.mainDiv);
        this.titleH1.innerText = '破站';
        for (var _i = 0, _a = this.navItems; _i < _a.length; _i++) {
            var x = _a[_i];
            var li = document.createElement('li');
            var a = document.createElement('l-a');
            a.a.innerText = x.innerText;
            a.a.href = x.href;
            li.id = x.id;
            li.appendChild(a);
            this.mainNavUl.appendChild(li);
        }
        for (var _b = 0, _c = this.userItems; _b < _c.length; _b++) {
            var x = _c[_b];
            var li = document.createElement('div');
            var a = document.createElement('b-a');
            a.a.innerText = x.title;
            a.a.href = x.href;
            li.id = x.id;
            li.appendChild(a);
            this.usersPart.appendChild(li);
        }
    };
    Object.defineProperty(TitleBarElement, "observedAttributes", {
        get: function () {
            return ['uid'];
        },
        enumerable: true,
        configurable: true
    });
    TitleBarElement.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        if (name == 'uid') {
            var uid = this.getAttribute('uid');
            if (uid) {
                this.loginPart.setAttribute('uid', uid);
                this.usersPart.style.display = 'none';
                this.loggedInUserPart.style.display = '';
            }
            else {
                this.loginPart.removeAttribute('uid');
                this.usersPart.style.display = '';
                this.loggedInUserPart.style.display = 'none';
            }
        }
    };
    TitleBarElement.prototype.connectedCallback = function () {
        this.attributeChangedCallback('uid', null, this.getAttribute('uid'));
    };
    return TitleBarElement;
}(HTMLElement));
exports.TitleBarElement = TitleBarElement;
customElements.define('title-bar', TitleBarElement);
