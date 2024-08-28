import { zxc } from "./export.js"

function c(value) { console.log(value) }

function polidrome(str) {
    str = str.toLowerCase()

    return str == str.split('').reverse().join('')
}

function descendingOrder(n) {
    const str = String(n)
    return Number(String(str.split('').sort().reverse().join('')))
}

function getMiddle(str) {
    const arr = str.split('')
    if (arr.length < 3) return arr.join('')
    if (arr.length % 2 != 0) return arr.slice(Math.floor(arr.length / 2), -Math.floor(arr.length / 2)).join('')
    return arr.slice((Math.floor(arr.length / 2)) - 1, -(Math.floor(arr.length / 2) - 1)).join('')

    return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}

// c(getMiddle('s  s s'))

const name = 'Jonh'
const age = 22

const zxc_ = {
    name, age
}

const zxc__ = {
    age: age,
    name: name
}

c(zxc_)
c(zxc__)

console.log(zxc.age)