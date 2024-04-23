import style from './style.module.css'
import { CustomButton } from "../Button"
import { Footer } from "../Footer"
import { AgentHeader } from "../AgentHeader/AgentHeader"

export const AgentUpload = () => {
    return (
        <section>
         <AgentHeader />
            <div className={style.containers}>
              <h2>Agent Upload</h2>
              <div className={style.container}>
               <div className={style.form} >
                <form className={style.farm}>
                    <input type="name" placeholder="Name of Farm"  required />
                    <br />
                    <br />
                    <input type="location" placeholder="Farm Location"  required/>
                    <br />
                    <br />
                    <input type="name" placeholder="Type of farm produce" required/>
                    <br />
                    <br />
                    <input type="name" placeholder="Name of farmer's Association"  required/>
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
                Add farm
             </CustomButton>
            </div>
            </div>
            </div>
            <Footer />
        </section>
    )
}