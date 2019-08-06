import axios from 'axios';
import {FollowRequest,UnValidatedFollowRequest as UnValidatedFollowRequest,FollowResponse, GetFollowListRequest, GetFollowListResponse, UnValidatedGetFollowListRequest, GetFollowAmountResponse} from './declarations';
import { accessor } from './accessor';
export function followValidate(req:UnValidatedFollowRequest):req is FollowRequest{
    return typeof(req.targetID) == 'number';
}
export function qFollowListValidate(req:UnValidatedGetFollowListRequest):req is GetFollowListRequest{
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