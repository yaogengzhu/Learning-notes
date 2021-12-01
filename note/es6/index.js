function a() {
    for (let i = 0; i < 10; i++) {
        if (i === 4) {
            // continue
            return;
        }
        console.log(i);
    }
}
a()
{
    const arr = Array.from({ length: 10 }, (v, i) => i + 1);
    console.log(arr)

    arr.forEach((v) => {
        if (v === 4) {
            return;
        }
        console.log(v);
    });
}
