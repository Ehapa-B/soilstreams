import Pineapple from "../../asset/images/pineapple.svg";
import Mangoes from "../../asset/images/mangoes.svg";

export const Carts = [
  {
    image: Pineapple,
    title: "Pineapple",
    price: 20000, // Changed to a numeric value for easier calculation
    text: "12 units",
  },
  {
    image: Mangoes,
    title: "Mangoes",
    price: 8000,
    text: "20 units",
  },
];

// Calculate the total items in the cart
const totalItems = Carts.reduce((total, item) => total + parseInt(item.text), 0);

// Calculate the total cost of items in the cart
const totalCostOfItems = Carts.reduce((total, item) => total + (item.price * parseInt(item.text)), 0);

// Calculate the delivery cost (for demonstration purposes, I'm setting it to a constant value)
const deliveryCost = 20000;

// Calculate the total cost by adding the delivery cost to the total cost of items
const totalCost = totalCostOfItems + deliveryCost;

export const Summary = [
  {
    total: `Total Items: ${totalItems}`, // Display total items in the summary
    delivery: `Delivery: N ${deliveryCost.toLocaleString()}`, // Display delivery cost
    cost: `Total Cost: N ${totalCost.toLocaleString()}`, // Display total cost
  },
];
