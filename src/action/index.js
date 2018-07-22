import * as type from '../constant/ActionType'

export const add = (key)=>{return {
    type: type.ADD,
    index: key
}}

export const sub = (key)=>{return {
    type: type.SUB,
    index: key
}}

export const mul = (key, multiplier)=>{return {
    type: type.MUL,
    index: key,
    multiplier,
}}