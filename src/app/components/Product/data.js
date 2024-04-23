import Orange from "../../asset/images/orange.svg"
import Rice from "../../asset/images/grain.svg"
import Cucumber from "../../asset/images/cucumber.svg"
import Millet from "../../asset/images/millet.svg"
import Beans from "../../asset/images/beans.svg"
import Egg from "../../asset/images/eg.svg"
import Pineapple from "../../asset/images/pineapple.svg"
import Apple from "../../asset/images/apple.svg"
import  Banana from "../../asset/images/banana.svg"
import Mangoes from "../../asset/images/mangoes.svg"
import Berry from "../../asset/images/berry.svg"
import Tomatoes from "../../asset/images/tomatoes.svg"
import { CustomButton } from "../Button"

export const Products  = [
    {
        image: Rice,
        title:"Bag of Rice",
        description:"80 Units left",
        price:"N 100,000",
        state: 'Lagos',
        button:  <CustomButton  className='cart' onClick={()=> ('signup')} type='cart'>
        Add to Cart
       </CustomButton>,
    },

    {
        image:Egg,
        title:"Crates of Eggs",
        description:"80 Units left",
        price:"N 100,000",
        state: 'Ogun',
        button:  <CustomButton  className='cart' onClick={()=> ('signup')} type='cart'>
        Add to Cart
       </CustomButton>,
    },

    {
        image: Orange,
        title:"Bag of Oranges",
        description:"40 Units left",
        price:"N 40,000",
        state: 'Delta',
        button:  <CustomButton  className='cart' onClick={()=> ('signup')} type='cart'>
        Add to Cart
       </CustomButton>,
    },

    {
        image: Cucumber,
        title:"Bag of Cucumbers",
        description:"40 Units left",
        price:"N 40,000",
        state: 'Kogi',
        button:  <CustomButton  className='cart' onClick={()=> ('signup')} type='cart'>
        Add to Cart
       </CustomButton>,
    },

    {
        image: Millet,
        title:"Bag of Millet",
        description:"30 Units left",
        price:"N 30,000",
        state: 'Kano ',
        button:  <CustomButton  className='cart' onClick={()=> ('signup')} type='cart'>
        Add to Cart
       </CustomButton>,
    },

    {
        image:Beans,
        title:"Bag of Beans",
        description:"50 Units left",
        price:"N 190,000",
        state: 'Kogi',
        button:  <CustomButton  className='cart' onClick={()=> ('signup')} type='cart'>
        Add to Cart
       </CustomButton>,
    },
    {
        image: Banana,
        title:"Bag of Banana",
        description:"80 Units left",
        price:"N 20,000",
        state: 'Ibadan',
        button:  <CustomButton  className='cart' onClick={()=> ('signup')} type='cart'>
        Add to Cart
       </CustomButton>,
    },

    {
        image: Berry,
        title:"Bag of Berry",
        description:"30 Units left",
        price:"N 40,000",
        state: 'Kogi',
        button:  <CustomButton  className='cart' onClick={()=> ('signup')} type='cart'>
        Add to Cart
       </CustomButton>,
    },

    {
        image: Mangoes,
        title:"Bag of Mangoes",
        description:"10 Units left",
        price:"N 10,000",
        state: 'Lagos',
        button:  <CustomButton  className='cart' onClick={()=> ('signup')} type='cart'>
        Add to Cart
       </CustomButton>,
    },

    {
        image: Tomatoes,
        title:"Bag of Tomatoes",
        description:"8 Units left",
        price:"N 15,000",
        state: 'Kano',
        button:  <CustomButton  className='cart' onClick={()=> ('signup')} type='cart'>
        Add to Cart
       </CustomButton>,
    },

    {
        image: Apple,
        title:"Bag of Apples",
        description:"90 Units left",
        price:"N 200,000",
        state: 'Ibadan',
        button:  <CustomButton  className='cart' onClick={()=> ('signup')} type='cart'>
        Add to Cart
       </CustomButton>,
    },

    {
        image: Pineapple,
        title:"Bag of Pineapple",
        description:"60 Units left",
        price:"N 300,000",
        state: 'Lagos',
        button:  <CustomButton  className='cart' onClick={()=> ('signup')} type='cart'>
        Add to Cart
       </CustomButton>,
    },
];

