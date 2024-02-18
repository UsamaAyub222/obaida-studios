import react from 'react'
import ButtonHoverEffect5 from './ButtonHoverEffects5'


const Subscribe = ({child1, child2, child3, title, classs, idname}) => {
    return(
     <section className={`subscribe-container ${classs}`}  >
        <div className='subscribe'>
            <h2 className='subhead' id={idname}>
                {title}
            </h2>
            <div className='price-cards'>
                <div className='price-card'>
                  {child1}  

                </div>
                <div className='price-card'>
                   {child2}
                </div>
                <div className='price-card'>
                    {child3}
                </div>
            </div>
        </div>

     </section>
    )
}

export default Subscribe