export interface RegisterRequest{
    username:string;
    passwordSHA256:string;
    inviteCode:string;
    nickname?:string;
    gender?:string;
    birthDate?:number[];
}
export interface RegisterResponse{
    status:
        'Success'| //注册成功
        'Invalid'| //注册信息非法
        'User Already Registered'| //用户已注册
        'Unexpected Error'; //意料之外的错误
    userID:number;
}
export interface LoginRequest{
    loginName:string|number;
    loginType:number; //1: username, 2: userid
    passwordSHA256:string;
}
export interface LoginResponse{
    status:
        'Success'| //登录成功
        'Failed'| //登录失败
        'User Not Found'| //用户未找到
        'Invalid'| //登录信息非法
        'Unexpected Error'; //意料之外的错误
    sessionID:string;
}
export type ResponseHandler<Req,Res> = (err:Error|null,request:Req,response:Res|null)=>void;
export interface UserInfoDB{
    userid:number;
    username:string;
    passwordSHA256:string;
    nickname:string;
    gender:number;
    birthdate:Date;
    regtime:Date;
}
export interface FollowRequest{
    targetID:number;
}
export interface FollowResponse{
    status:
        'Success'|//关注成功
        'Invalid'|
        'Target User Not Exist'|
        'Not Logged In'|//未登录
        'Unexpected Error';//意料之外的错误
}
export interface GetFollowListRequest{
    offset:number;
    amount:number;
}
export interface GetFollowListResponse{
    status:
        'Success'|
        'Not Logged In'|
        'Invalid'|
        'Unexpected Error';
    list:number[];
}
export interface GetFollowAmountResponse{
    status:
        'Success'|
        'Not Logged In'|
        'Unexpected Error';
    amount:number;
}