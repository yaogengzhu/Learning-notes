var Direction;
(function (Direction) {
    Direction[(Direction['Up'] = 0)] = 'Up';
    Direction[(Direction['Down'] = 1)] = 'Down';
    Direction[(Direction['Left'] = 2)] = 'Left';
    Direction[(Direction['Right'] = 3)] = 'Right';
})(Direction || (Direction = {}));

let list = [];
const a = function () {
    console.log('ai, 就是这样')
}
new Promise((resolve, reject) => {
    for(var i = 0; i < 4; i++) {
        console.log(i)
        list.push(a)
    }
}).then(res => {
    console.log('sovler 执行')
});

console.log(list, 'a')

for (let i = 0; i < list.length; i++) {
    list[i]()
}
