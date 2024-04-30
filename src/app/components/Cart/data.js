import Pineapple from "../../asset/images/pineapple.svg";
import Mangoes from "../../asset/images/mangoes.svg";

export const Carts = [
  {
    image: Pineapple,
    title: "Pineapple",
    price: 20000, 
    text: "12 units",
  },
  {
    image: Mangoes,
    title: "Mangoes",
    price: 8000,
    text: "20 units",
  },
];


const totalItems = Carts.reduce((total, item) => total + parseInt(item.text), 0);


const totalCostOfItems = Carts.reduce((total, item) => total + (item.price * parseInt(item.text)), 0);

const deliveryCost = 20000;

const totalCost = totalCostOfItems + deliveryCost;

export const Summary = [
  {
    total: `Total Items: ${totalItems}`, 
    delivery: `Delivery: N ${deliveryCost.toLocaleString()}`, 
    cost: `Total Cost: N ${totalCost.toLocaleString()}`, 
  },
];
