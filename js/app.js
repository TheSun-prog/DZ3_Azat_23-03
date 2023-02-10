let example = []
let lenghtOfArray = 20

// Этот switch case нужен для генерации массива
for (let i = 0; i < lenghtOfArray; i++){
    switch (Math.floor(Math.random() * 10)) {
        case 1:
            // number
            example.push(0)
            break
        case 2:
            // number
            example.push(1)
            break
        case 3:
            // number
            example.push(NaN)
            break
        case 4:
            // object
            example.push(null)
            break
        case 5:
            // object
            example.push({object: true})
            break
        case 6:
            // object
            example.push(['array'])
            break
        case 7:
            // undefined
            example.push(undefined)
            break
        case 8:
            // bigInt
            example.push(1n)
            break
        case 9:
            // string
            example.push('string')
            break
        case 0:
            // string
            example.push('text')
            break
    }
}

// Разделил на 2 console.log, потому что если писать в одном, то массив выводится неправильно
console.log(`Пример массива для задачи:`)
console.log(example)

// 0 - number, 1 - object, 2 - undefined, 3 - bigInt, 4 - string
let solution = [[], [], [], [], []]

for (let i = 0; i < example.length; i++) {
    switch (typeof(example[i])) {
        case "number":
            solution[0].push(example[i])
            break
        case "object":
            solution[1].push(example[i])
            break
        case "undefined":
            solution[2].push(example[i])
            break
        case "bigint":
            solution[3].push(example[i])
            break
        case "string":
            solution[4].push(example[i])
            break
    }
}


while (solution.length !== 0) {
    // переменная для записи размера массива и номера массива для удаление из общего
    let biggestArrayLen = [0, null]
    for (let i = 0; i < solution.length; i++) {
         if (solution[i].length > biggestArrayLen[0]) {
             biggestArrayLen[0] = solution[i].length
             biggestArrayLen[1] = i
         }
    }
    console.log(solution[biggestArrayLen[1]])
    solution.splice(biggestArrayLen[1], 1)
}

