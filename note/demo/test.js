let company = {
    sales: [
        {
            name: 'John',
            salary: 1000,
        },
        {
            name: 'Alice',
            salary: 1600,
        },
    ],

    development: {
        sites: [
            {
                name: 'Peter',
                salary: 2000,
            },
            {
                name: 'Alex',
                salary: 1800,
            },
        ],

        internals: [
            {
                name: 'Jack',
                salary: 1300,
            },
        ],
    },
}


function computedMoney(department) {
    if (Array.isArray(department)) {
        return department.reduce((acc, cur) => acc + cur.salary, 0)
    } else {
        let sum = 0 
        for (let subdep of Object.values(department)) {
            sum += computedMoney(subdep)
        }

        return sum
    }
}

const result = computedMoney(company)