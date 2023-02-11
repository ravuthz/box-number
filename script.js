// const boxes = ['', '☝','✌','👌','👍','🤚'];
const boxes = [
    "<span class='square-1'><div class='box'></div></span>",
    "<span class='square-2'><div class='box'></div></span>",
    "<span class='square-3'><div class='box'></div></span>",
    "<span class='square-4'><div class='box'></div></span>",
    "<span class='square-5'><div class='box'></div></span>"
];

const number = parseInt(document.querySelector('#number').innerText || 15);
console.log('number: ', number);

function findBoxNumbers(total, num, lastItems) {
  const [result, remain] = [Math.floor(total / num), total % num];
  const items = lastItems ? lastItems : [];
  items[num] = result;
  return remain > 0 && remain <= num-1 ? findBoxNumbers(remain, num-1, items) : items;
}

function fillBoxNumbers(boxItems, boxes) {
  return boxItems.map((box, key) => {
    let logos = [];
    for (let i=0; i<box; i++) {
        logos.push(boxes[key]);
    }
    console.log(logos);
    return logos.join('');
  });
}

const allBoxes = findBoxNumbers(number, 5);

console.log(allBoxes);
         
const allNumbers = fillBoxNumbers(allBoxes, boxes).reverse().join('');

console.log(allNumbers);

document.querySelector('#result').innerHTML = allNumbers;
// document.write(allNumbers);