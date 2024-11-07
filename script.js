// // for (let i=1; i < 10; i++) {
//     console.log("Иттерация"+i)
// }

// let j = 1; 
// while (j < 10) {
//     j++
//     console.log("While-Иттерация"+j)

// }

// do
// {
//     console.log("Do-Иттерация"+j)
//     j--
// }while (j > 10)


// let a = Number(prompt("Введите числот a"))

//     for(let b = 1; b < 11; b++) {
//         console.log(a + "*" + b + "=" + a*b)
//     }

// for (let a = 1; a <11; a++) {
//     for(let b = 1; b < 11; b++)
//         console.log(a + "*" + b + "=" + a*b)
//     }    

// let a = 0
// while (a < 10) {
// a++
// let b = 0
// while (b < 10){ 
//     b++
//     console.log(a + "*" + b + "=" + a*b)
// }}

// let fruit = ["apple", "banana", "orange"]
//     console.log(fruit.length)

// for (let i = 0; i<fruit.length ; i++){
//     console.log(fruit[i])
// } 

// let search_fruit = prompt("Введите фрукт")
// let fruit = ["apple", "banana", "orange"]
// for (let i = 0; i < fruit.length; i++) {
//     if (fruit[i] == search_fruit){
//         console.log("Фрукт найден")
//     break
//     }
// } 
let fruit = ["apple", "banana", "orange"]

// while (true) {
//     let search_fruit = prompt("Введите фрукт поиска")
//     let message = "Фрукт не наден"
//     if (search_fruit === "break") {
//         break
//     }
//     else if (search_fruit === "add") {
//         fruit.push(prompt("Введите фрукт для добавления"))
//     }
//     else {

//         for (let i = 0; i < fruit.length; i++)
//             if (fruit[i] == search_fruit) {
//                 message = "Фрукт найден"
//                 break
//             }
//     }
//     console.log(message)
// }

let nums = []
let a = Number(prompt("Введите числот a"))
for (let i = 0; i < a; i++) {
    let imput_number = Number(prompt("Введите число"))
    nums.push(imput_number)

}
let sum = 0
for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
}
console.log(sum/nums.length)