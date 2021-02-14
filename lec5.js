const yamada = { id: 123, 'name': 'Taro', age: 23 }

console.log(yamada.id)
console.log(yamada.name)

function printUser(yamada) {
    console.log(`['name']さん['id']は['age']際です`)

}

printUser(yamada)

const users = [
    { id: 1, name: 'Taro', comments: ['hello', 'world'] },
    { id: 2, name: 'Jiro', comments: ['looks good to me'] },
    { id: 3, name: 'Saburo', comments: ['hi', 'yes', ':)'] },
]

const json = JSON.stringify(users)
console.log(users[1])