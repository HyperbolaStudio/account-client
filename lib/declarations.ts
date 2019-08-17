export interface AbstractResponse{
    status:string;
}
export namespace StatusCollection{
    //200
    export type success = 'Success';
    export const SUCCESS = 'Success';

    //403
    export type failed = 'Failed';
    export const FAILED = 'Failed'
    export type notLoggedIn = 'Not Logged In';
    export const NOT_LOGGED_IN = 'Not Logged In';

    //400
    export type invalid = 'Invalid';
    export const INVALID = 'Invalid';
    export type userAlreadyRegistered = 'User Already Registered';
    export const USER_ALREADY_REGISTERED = 'User Already Registered';

    //404
    export type userNotFound = 'User Not Found';
    export const USER_NOT_FOUND = 'User Not Found';
    export type targetUserNotExist = 'Target User Not Exist';
    export const TARGET_USER_NOT_EXIST = 'Target User Not Exist';

    //500
    export type unexpectedError = 'Unexpected Error';
    export const UNEXPECTED_ERROR = 'Unexpected Error';

}
export namespace QueryUserCol{
    export type username = 1;
    export const USERNAME:username = 1;
    export type userID = 2;
    export const USERID:userID = 2;
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
    birthDate?:[number,number,number];
}

export interface RegisterResponse extends AbstractResponse{
    status:
        StatusCollection.success| //注册成功
        StatusCollection.invalid| //注册信息非法
        StatusCollection.userAlreadyRegistered| //用户已注册
        StatusCollection.unexpectedError; //意料之外的错误
    userID:number;
}

/****** login *******/
export interface LoginRequest{
    loginName:string|number;
    loginType:QueryUserCol.username|QueryUserCol.userID;
    passwordSHA256:string;
}
export interface LoginResponse extends AbstractResponse{
    status:
        StatusCollection.success| //登录成功
        StatusCollection.failed| //登录失败
        StatusCollection.userNotFound| //用户未找到
        StatusCollection.invalid| //登录信息非法
        StatusCollection.unexpectedError; //意料之外的错误
    sessionID:string;
}

/****** user info *******/
export interface UserInfoDB{
    userid:number;
    username:string;
    passwordSHA256:string;
    nickname:string;
    gender:number;
    birthdate?:Date;
    regtime:Date;
}

/****** follow *******/
export interface FollowRequest{
    targetID:number;
}
export interface FollowResponse extends AbstractResponse{
    status:
        StatusCollection.success|//关注成功
        StatusCollection.invalid|
        StatusCollection.targetUserNotExist|
        StatusCollection.notLoggedIn|//未登录
        StatusCollection.unexpectedError;//意料之外的错误
}

/****** follow list *******/
export interface GetFollowListRequest{
    offset:number;
    amount:number;
}
export interface GetFollowListResponse extends AbstractResponse{
    status:
        StatusCollection.success|
        StatusCollection.notLoggedIn|
        StatusCollection.invalid|
        StatusCollection.unexpectedError;
    list:number[];
}

/****** follow amount *******/
export interface GetFollowAmountResponse extends AbstractResponse{
    status:
        StatusCollection.success|
        StatusCollection.notLoggedIn|
        StatusCollection.unexpectedError;
    amount:number;
}

/****** Query User *******/
export interface QueryUserRequest{
    queryName:string|number;
    queryCol:QueryUserCol.username|QueryUserCol.userID;
}
export interface QueryUserResponse{
    status:StatusCollection.success|StatusCollection.invalid|StatusCollection.userNotFound|StatusCollection.unexpectedError;
    user?:{
        username:string;
        userID:number;
        gender:string;
        birthdate?:number[];
        nickname:string;
        regTime:number;
    }
}
export interface UserUpdateRequest{

}
export interface UserCoreInfUpdateRequest{
    username?:string;
    nickname?:string;
    originPswSHA256?:string
    passwordSHA256?:string;
    gender?:string;
    birthdate?:[number,number,number];
}
export interface UserUpdateResponse extends AbstractResponse{
    status:StatusCollection.success|StatusCollection.invalid|StatusCollection.notLoggedIn|StatusCollection.unexpectedError;
}
export interface WhoamiResponse{
    status:StatusCollection.success|StatusCollection.notLoggedIn|StatusCollection.unexpectedError;
    userID:number;
}
export interface UpdateAvatarResponse{
    status:StatusCollection.success|StatusCollection.invalid|StatusCollection.notLoggedIn|StatusCollection.unexpectedError;
}