
import {jaduu}  from './account.js'

export default function () {
    console.log('default func called')
}

export let name = 'shubham';
let age = 26;


export function code() {
    console.log('coding start')
    jaduu ()
}

function cook() {
    console.log('cooking')
}

export function withdraw () {
    console.log('user withdraw function called')
}