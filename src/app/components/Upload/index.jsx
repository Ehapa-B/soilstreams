import { ProductHeader } from "../ProductHeader/ProductHeader"
import style from './style.module.css'
import { CustomButton } from "../Button"
import { Footer } from "../Footer"
import  Pawpaw  from "../../asset/images/mixed.jpg"


export const UploadProduct = () => {
    return (
        <section>
            <ProductHeader />
            <h2>Post Product</h2>
            <div className={style.containers}>
              <div className={style.container}>
               <div className={style.form} >
                <form className={style.farm}>
                    <input type="name" placeholder="Name of Product"  required />
                    <br />
                    <br />
                    <input type="quantity" placeholder="Quantity"  required/>
                    <br />
                    <br />
                    <input type="address" placeholder="Location" required/>
                    <br />
                    <br />
                    <input type="price" placeholder="Price Range"  required/>
                    <br />
                    <br />
                </form> 
            </div>
            <div className={style.photo}>
            <form>
               <input type="file" placeholder="Upload Photo"  required/>
            </form>
               <br />
              <CustomButton className={style.post} onClick={()=>{}} type='register'>
                Post
             </CustomButton>
            </div>

            </div>
            <div className={style.mix}>
              <img src={Pawpaw} />
            </div>
            </div>
            <br />
            <Footer />
        </section>
    )
}