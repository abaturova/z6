// 1
const city1 = {}
city1.name = 'ГородN'
city1.population = 10000000

// 2
const city2 = {
    name: 'ГородM',
    population: 1e6
}

// 3
city1.getName = () => {
    return city1.name
}

city2.getName = () => {
    return city2.name
}

// 4
city1.exportStr = () => {
    let a = 'name = ' + city1.name + '\npopulation: ' + city1.population + '\n'
    return a
}

city2.exportStr = () => {
    let a = 'name = ' + city2.name + '\npopulation: ' + city2.population + '\n'
    return a
}

// 5
Object.prototype.getObj = function() {
        return this
    }
    //console.log(city2.getObj())

city1.getCity = function() {
        return getObj()
    }
    //console.log(city1.getCity())

city2.getCity = function() {
    return getObj()
}

// 6
const obj = {
        method1: function() { return this },
        method2: function() { return this },
        method3: function() { return 'Метод 3' }
    }
    //console.log(obj.method1().method2().method3())

// 7
const d1 = [43, 78, 10, 3]
d1[7] = 100
    //console.log(d1)
    //console.log(d1[6] + ',' + d1[7])

// 8 
const d2 = [43, 78, 10, 3]
let sum2 = 0
for (let i = 0; i < d2.length; i++) {
    sum2 += d2[i]
}
//console.log(sum2)

// 9
const d3 = [43, 78, 10, 3]
d3[7] = 100
let sum3 = 0
for (let i = 0; i < d3.length; i++) {
    sum3 += d3[i]
}
//console.log(sum3)

// 10
const d4 = [43, 78, 10, 3]

const my = (a, b) => {
        if (a === b) {
            return 0;
        }
        if (a < b) {
            return 1;
        } else return -1;
    }
    //console.log(d4.sort(my))

// 11
const d5 = []
let n = 3
let m = 4
for (let i = 0; i < n; i++) {
    d5[i] = []
    for (let j = 0; j < m; j++) {
        d5[i][j] = 5
    }
}
console.log(d5)