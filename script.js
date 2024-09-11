
//     1.
console.log('')
user = {
    hobby: 'driving',
    premium: true
}
user.mood = 'happy'
user.hobby = 'skydiving'
user.premium = false
for (let array of Object.keys(user)){
    console.log('1.'+array + ':' + user[array])
} 

const {hobby,premium,mood} = user;

//       2.
console.log('')
countProps = (obj) =>{
    let keys = 0
    for(let array of Object.keys(obj)){
        keys++
    }
    console.log('2.Властивостей:' + keys)
    return keys
}
countProps(user)


//          3.
console.log('')
employees = {
    Valera:3,
    Vlad:2,
    Igor:1
}
findBestEmployee = (employees) =>{
    bestNum = 0
    for(let array of Object.keys(employees)){
        number = employees[array]
        if (number> bestNum){
            bestNum = number
            bestName = array
        }
    }
    console.log('3.' + bestName)
    return bestName
}
findBestEmployee(employees)

const {Valera,Vlad,Igor} = employees

//        4.
console.log('')
employeesSalery = {
    Valera:30000,
    Vlad:20000,
    Igor:10000
}
countTotalSalary = (employees) => {
    let allSalary = 0
    console.log('4. Зарплата працівників:')
    for(let array of Object.keys(employees)){
        number = employees[array]
        console.log('4. ' + array + ':' + number)
        allSalary = allSalary + number
    }
    console.log('4. Сума усіх зарплат: ' + allSalary)
    return allSalary
}
countTotalSalary(employeesSalery)

const {Valerav,VladSalery,IgorSalery} = employeesSalery
//         5.
console.log('')
products = [  
    { name: 'Apple' , price: 300 , all:1},
    {name: 'Banana', price: 20 , all:2},
    { name: 'Lemon' , price: 1 , all:3}
]
getAllPropValues = (arr, prop) => {
    let props = []
    for (let array1 of arr){
        props.push(array1[prop])
    }
    console.log('5. ' + props)
    return props
} 
getAllPropValues(products,'price')

const [product1,product2,product3] = products
const {name,price,all} = product1
const {name2,price2,all2} = product2
const {name3,price3,all3} = product3
//         6.
console.log('')
calculateTotalPrice = (allProdcuts, productName) => {
    for(let array of allProdcuts){
        keysOfarray = Object.keys(array)
        if(array['name'] == productName){
        allPriceOfProduct = array.price * array.all
        console.log('6. ' + array['name'] + '=' + allPriceOfProduct)
    }
    }
}
calculateTotalPrice(products,'Apple') 

//            7.
console.log('')
account = {
    transaction:0,
    balance:10000,
    historyOftransactions:[],
    withdraw(number = 0){
        if(number> this.balance){
            console.log('7. ' + 'Недостатньо коштів')
        }
        else{

        this.balance = this.balance - number
        this.historyOftransactions.push('Знято:' + number)
        console.log('7. Баланс:' + this.balance)
        console.log('7. Історія транзакцій:  ' + this.historyOftransactions)}
    },
    add(number = 0){
        this.balance = this.balance + number
        this.historyOftransactions.push('Поповнено на:' + number)
        console.log('7. Баланс:' + this.balance)
        console.log('7. Історія транзакцій:  ' + this.historyOftransactions)
    }
}
//   Знімання грошей
account.withdraw(100)
//  Як що на балансі недостатньо коштів
account.withdraw(100000)
//   Поповнення балансу
account.add(100)
//   Поповнення на велику сумму
account.add(1000000)

const {transaction,balance,historyOftransactions,withdraw,add} = account
