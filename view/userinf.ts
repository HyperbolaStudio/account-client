// import { TitleBarElement } from "./titlebar";
import { queryUser } from "../lib/query_user";
import { QUERY_USER_REQUEST_QUERY_COL_USERID } from "../lib/declarations";

export class UserInfElement extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode:'open'});
        shadow.appendChild(this.mainDiv);
        this.styleLink.rel = 'stylesheet';
        this.styleLink.href = '/dist/css/userinf.css';
        shadow.appendChild(this.styleLink);
        this.mainDiv.appendChild(this.avatar);
        this.mainDiv.appendChild(this.usernameDiv);
        this.mainDiv.id = 'main-div';
        this.avatar.id = 'avatar';
        this.usernameDiv.id = 'username-div';
    }
    styleLink = document.createElement('link');
    mainDiv = document.createElement('div');
        avatar = document.createElement('img');
        usernameDiv = document.createElement('a');
    static get observedAttributes():string[]{
        return ['uid'];
    }
    attributeChangedCallback(name:string,oldVal:string,newVal:string){
        if(name == 'uid' && newVal){
            this.avatar.src = `/api/avatar/${newVal}`;
            this.usernameDiv.href =`/user/${newVal}`
            this.avatar.onclick = ()=>{
                location.href = `/user/${newVal}`;
            }
            queryUser({
                queryName:Number(newVal),
                queryCol:QUERY_USER_REQUEST_QUERY_COL_USERID,
            },'/api/user/query').then((res)=>{
                if(res.status == 'Success' && res.user){
                    this.usernameDiv.innerText = res.user.username;
                }
            })
        }
    }
}
customElements.define('user-inf',UserInfElement);