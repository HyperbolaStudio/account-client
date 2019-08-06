export interface AbstractResponse{
    status:string;
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
export type UnValidatedRegisterRequest = {
    [P in keyof RegisterRequest]?:RegisterRequest[P];
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
    loginType:number; //1: username, 2: userid
    passwordSHA256:string;
}
export type UnValidatedLoginRequest = {
    [P in keyof LoginRequest]?:LoginRequest[P];
}
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
    regtime:Date;
}

/****** follow *******/
export interface FollowRequest{
    targetID:number;
}
export type UnValidatedFollowRequest = {
    [P in keyof FollowRequest]?:FollowRequest[P]
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
export type UnValidatedGetFollowListRequest = {
    [P in keyof GetFollowListRequest]?:GetFollowListRequest[P];
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