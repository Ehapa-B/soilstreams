import { ProductHeader } from "../ProductHeader/ProductHeader"
import style from './style.module.css'
import { CustomButton } from "../Button"
import { Footer } from "../Footer"

export const UploadProduct = () => {
    return (
        <section>
            <ProductHeader />
            <div className={style.containers}>
              <h2>Post Product</h2>
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
              <CustomButton onClick={()=>{}} type='register'>
                Post
             </CustomButton>
            </div>
            </div>
            </div>
            <Footer />
        </section>
    )
}