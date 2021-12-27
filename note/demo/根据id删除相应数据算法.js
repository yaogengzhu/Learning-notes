const raw = [[{ id: 0 }], [{ id: 1 }, { id: 2 }], [{ id: 3 }]]

// 根据传入的id移除对应的item
function removeById(row, id) {
    row = JSON.parse(JSON.stringify(row));
    for(var i = 0;i < row.length;i++){
        let item = row[i]
        for(var j = 0; j < item.length; j++){
            if (item[j].id === id) {
                item.splice(j,1)
                j--
            }
        }
        if (item.length==0){
            row.splice(i,1)
            i--
        }}
        return row
}
// function removeById(raw, id) {
//     raw = JSON.parse(JSON.stringify(raw))
//     const newList = []
//     raw.forEach((item) => {
//         const index = item.findIndex((v) => v.id === id)
//         if (index !== -1) {
//             item.splice(index, 1)
//             if (item.length > 0) {
//                 newList.push(item)
//             }
//         } else {
//             newList.push(item)
//         }
//     })

//     return newList
// }

// function removeById(raw, id) {
//     const target = JSON.parse(JSON.stringify(raw));
//     return target.map(item => {
//         item.forEach((it, i) => {
//             if (it.id === id) {
//                 item.splice(i, 1)
//             }
//         })
//         return item
//     }).filter(item => item.length)
// }

const demo1 = removeById(raw, 0) // [ [ { id: 1 }, { id: 2 } ], [ { id: 3 } ] ]
const demo2 = removeById(raw, 1) // [ [{ id: 0 }], [{ id: 2 }], [{ id: 3 }] ];
const demo3 = removeById(raw, 3) // [ [{ id: 0 }], [{ id: 1 }, { id: 2 }] ];
console.log(demo1)
console.log(demo2)
console.log(demo3)
