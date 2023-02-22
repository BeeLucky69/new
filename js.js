let s1 = document.getElementById("s1")
let s2 = document.getElementById("s2")
let s3 = document.getElementById("s3")
let s4 = document.getElementById("s4")

let today = new Date()

let day = `${today.getDate() < 10 ? "0" : ""} ${today.getDate()}`
let month = `${(today.getMonth() + 1) < 10 ? "0" : ""} ${today.getMonth() + 1}`
let year = `${today.getFullYear()}`

s1.innerHTML = `${day}/${month}/${year}`
s2.innerHTML = `${day}/${month}/${year}`
s3.innerHTML = `${day}/${month}/${year}`
s4.innerHTML = `${day}/${month}/${year}`