let froyoFlavours = prompt(
  "Enter your Froyo order!",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
let flavourList = froyoFlavours.split(",");
let flavourObjects = {
  vanilla: 3,
  straberry: 1,
  coffee: 2,
};

function createOrder() {
  let order = {};

  //check every flavor in array using a for loop
  for (let i = 0; i < flavourList.length; i++) {
    let flavor = flavourList[i];
    if (flavor in order) {
      order[flavor]++;
    } else {
      order[flavor] = 1;
    }
  }
  //if the flavor is in the order increase count by 1
  //if the flavor is not in the order add flavor and set value to 1
  //return order
  return order;
}
console.log(flavourList);
const userOrder = createOrder();
console.log(userOrder);
