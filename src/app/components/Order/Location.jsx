import "./Location.css"
import { MapContents } from "./Map"

export const Location = () =>{
    return (
        <section>
           <div className="main">
             <div className="map">
               <div className="maps">
               <MapContents />
                </div>
             </div>
           </div>
        </section>
    )
}