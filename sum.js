const args = process.argv;
args.slice(2);
let first = Number(args.slice(2)[0]);
let second = Number(args.slice(2)[1]);
console.log(first + second);
