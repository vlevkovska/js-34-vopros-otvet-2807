const logMessage = () => {
  console.log('Лог при вызове callback-функции через 3 секунды');
};

console.log('До вызова setTimeout');

setTimeout(() => {
  console.log('Внутри callback для setTimeout');
}, 2000);

console.log('После вызова setTimeout');

for (let index = 0; index < 10000; index++) {
  console.log(index);
}
