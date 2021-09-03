function one() {
    debugger
    console.log(a)
    two()
    d()
    function two () {
        let b = 'b'
        debugger
        console.log(b);
    }

}
// node inspect 文件名

one()