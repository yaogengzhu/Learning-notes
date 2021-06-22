// const files = [ 'foo.txt ', '.bar', '   ', 'baz.foo' ];
// let filePaths = [];

// for (let file of files) {
//   const fileName = file.trim();
//   if(fileName) {
//     const filePath = `~/cool_app/${fileName}`;
//     filePaths.push(filePath);
//   }
// }
// console.log(filePaths)

// const filePaths = files.reduce((acc, file) => {
//     const fileName = file.trim();
//     if (fileName) {
//         const filePath = `~/cool_app/${fileName}`;
//         acc.push(filePath);
//     }
//     return acc;
// }, [])



// const filePaths = files.filter(item => item.trim()).map( item => {
//     const filePath = `~/cool_app/${item}`;
//     return filePath;
// })
const files = [ 'foo.txt ', '.bar', '   ', 'baz.foo' ];
const filePaths = files
  .map(file => file.trim())
  .filter(Boolean)
  .map(fileName => `~/cool_app/${fileName}`);

console.log(filePaths);
