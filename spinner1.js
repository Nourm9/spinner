
let spinArr = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   "];
let time = 100;

for (let spin of spinArr) {
  setTimeout(() => {
    process.stdout.write(spin);
  }, time);
  time+=100
};
setTimeout(() => {
  console.log();
}, time); 