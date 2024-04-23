import Garri from "../../asset/images/garri.svg"
import Rice from "../../asset/images/rice.svg"
import Corn from "../../asset/images/corn.svg"
import Potatoes from "../../asset/images/potatoes.svg"
import Coconut from "../../asset/images/coconut.svg"
import Egg from "../../asset/images/egg.svg"
import Banana from '../../asset/images/banana.svg'
import Berry from '../../asset/images/berry.svg'
import Tomatoes from '../../asset/images/tomatoes.svg'
import { CustomButton } from "../Button"

export const availableProducts  = [
    {
        image: Garri,
        title:"Bag of Garri",
        price:"N 220,000",
        state: 'Edo State',
        button:  <CustomButton  className='cart' onClick={()=> ('signup')} type='cart'>
        Add to Cart
       </CustomButton>,
    },

    {
        image: Rice,
        title:"Bag of Rice",
        price:"N 220,000",
        state: 'Lagos State',
        button:  <CustomButton  className='cart' onClick={()=> ('signup')} type='cart'>
        Add to Cart
       </CustomButton>,
    },

    {
        image: Corn,
        title:"Bag of Corn",
        price:"N 130,000",
        state: 'Kano State',
        button:  <CustomButton  className='cart' onClick={()=> ('signup')} type='cart'>
        Add to Cart
       </CustomButton>,
    },

    {
        image: Potatoes,
        title:"Bag of Irish Potatoes",
        price:"N 280,000",
        state: 'Jos State',
        button:  <CustomButton  className='cart' onClick={()=> ('signup')} type='cart'>
        Add to Cart
       </CustomButton>,
    },

    {
        image: Coconut,
        title:"Bag of Coconuts",
        price:"N 280,000",
        state: 'Delta State',
        button:  <CustomButton  className='cart' onClick={()=> ('signup')} type='cart'>
        Add to Cart
       </CustomButton>,
    },

    {
        image:Egg,
        title:"Crate of Eggs",
        price:"N 3,000",
        state: 'Niger State',
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
        image: Tomatoes,
        title:"Bag of Tomatoes",
        description:"8 Units left",
        price:"N 15,000",
        state: 'Kano',
        button:  <CustomButton  className='cart' onClick={()=> ('signup')} type='cart'>
        Add to Cart
       </CustomButton>,
    },
];

