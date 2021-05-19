var arr = new Map([
  ['x1', 'y1'],
  ['x2', 'y2'],
  ['x3', 'y3']
]);  

for (let x of arr.keys()) {
  console.log(x);
}

for (let y of arr.values()) {
  console.log(y);
}