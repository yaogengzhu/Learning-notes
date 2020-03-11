// console.log(global)

// console.log(process.env)
process.env.NODE_ENV = 'dev'

console.log(process.env.NODE_ENV)
let url = ''
if (!process.env.NODE_ENV) {
    url = 'localhost:3000'
} else {
    url = 'yaogeng.top'
}

console.log(url)