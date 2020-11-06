let curDate = new Date();

let sum = 0;
for( let i = 0; i < 100000000;i++){
    sum += i;
}

let elaps = new Date() - curDate;

console.log( elaps + "초 걸렸습니다.");