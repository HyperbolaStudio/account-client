export interface AbstractResponse{
    status:string;
}

export type UnValidated<RequestT> = {
    [P in keyof RequestT]?:RequestT[P];
}

/****** register *******/
export interface RegisterRequest{
    username:string;
    passwordSHA256:string;
    inviteCode:string;
    nickname?:string;
    gender?:string;
    birthDate?:number[];
}

export interface RegisterResponse extends AbstractResponse{
    status:
        'Success'| //注册成功
        'Invalid'| //注册信息非法
        'User Already Registered'| //用户已注册
        'Unexpected Error'; //意料之外的错误
    userID:number;
}

/****** login *******/
export interface LoginRequest{
    loginName:string|number;
    loginType:1|2;
    passwordSHA256:string;
}
export const LOGIN_REQUEST_LOGIN_TYPE_USERNAME = 1;
export const LOGIN_REQUEST_LOGIN_TYPE_USERID = 2;
export interface LoginResponse extends AbstractResponse{
    status:
        'Success'| //登录成功
        'Failed'| //登录失败
        'User Not Found'| //用户未找到
        'Invalid'| //登录信息非法
        'Unexpected Error'; //意料之外的错误
    sessionID:string;
}

/****** user info *******/
export interface UserInfoDB{
    userid:number;
    username:string;
    passwordSHA256:string;
    nickname:string;
    gender:number;
    birthdate:Date;
    regTime:Date;
}

/****** follow *******/
export interface FollowRequest{
    targetID:number;
}
export interface FollowResponse extends AbstractResponse{
    status:
        'Success'|//关注成功
        'Invalid'|
        'Target User Not Exist'|
        'Not Logged In'|//未登录
        'Unexpected Error';//意料之外的错误
}

/****** follow list *******/
export interface GetFollowListRequest{
    offset:number;
    amount:number;
}
export interface GetFollowListResponse extends AbstractResponse{
    status:
        'Success'|
        'Not Logged In'|
        'Invalid'|
        'Unexpected Error';
    list:number[];
}

/****** follow amount *******/
export interface GetFollowAmountResponse extends AbstractResponse{
    status:
        'Success'|
        'Not Logged In'|
        'Unexpected Error';
    amount:number;
}

/****** Query User *******/
export interface QueryUserRequest{
    queryName:string|number;
    queryCol:1|2;
}
export let QUERY_USER_REQUEST_QUERY_COL_USERNAME:1 = 1;
export let QUERY_USER_REQUEST_QUERY_COL_USERID:2 = 2;
export interface QueryUserResponse{
    status:'Success'|'Invalid'|'User Not Found'|'Unexpected Error';
    user?:{
        username:string;
        userID:number;
        gender:string;
        birthdate:number[];
        nickname:string;
        regTime:number;
    }
}

