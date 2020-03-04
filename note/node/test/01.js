function test() {
    console.log(1)

    setTimeout(() => {
        console.log(23)
    }, 1000);

    console.log(3)
    process.nextTick(test())
}


test()
