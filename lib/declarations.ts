export interface RegisterRequest{
    username:string;
    passwordSHA256:string;
    inviteCode:string;
    nickname?:string;
    gender?:string;
    birthDate?:Date;
}
export interface RegisterResponse{
    status:
        'Success'| //注册成功
        'Invalid'| //注册信息非法
        'User Already Registered'| //用户已注册
        'Unexpected Error'; //意料之外的错误
    userID:number;
}