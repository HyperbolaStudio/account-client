import axios from 'axios';
import {FollowRequest,UnValidated,FollowResponse, GetFollowListRequest, GetFollowListResponse, GetFollowAmountResponse} from './declarations';
import { accessor } from './accessor';
export function followValidate(req:UnValidated<FollowRequest>):req is FollowRequest{
    return typeof(req.targetID) == 'number';
}
export function qFollowListValidate(req:UnValidated<GetFollowListRequest>):req is GetFollowListRequest{
    return typeof(req.amount) == 'number' && typeof(req.offset) == 'number';
}
export function follow(
    req:FollowRequest,
    path:string
):Promise<FollowResponse>{
    return accessor<FollowRequest,FollowResponse>(req,path,followValidate);
}
export function queryFollowList(
    req:GetFollowListRequest,
    path:string
):Promise<GetFollowListResponse>{
    return accessor<GetFollowListRequest,GetFollowListResponse>(req,path,qFollowListValidate);
}
export function queryFollowAmount(
    path:string
):Promise<GetFollowAmountResponse>{
    return accessor<void,GetFollowAmountResponse>(undefined,path);
}