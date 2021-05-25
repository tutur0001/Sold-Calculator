import React, { Fragment } from 'react'
import './type.css'

const CalcbyP = ({price, pourcent, calc, changing}) => {
      
    return(
        <Fragment>
            <div class="container">
            <h2>Calculer une promotion :</h2>
            <form>
                <div>
                    <label>
                        Le prix: 
                        <input type="text" name="price" placeholder="Entrer le prix" value={price} onChange={changing} required />
                    </label>
                </div>
                <div>
                    <label>
                    Pourcentage de la reduction: 
                        <input type="text" name="pourcent" placeholder="Entrer le pourcentage de reduction" value={pourcent} onChange={changing}/>
                    </label>
                </div>
            </form>
            <div id="hello"> 
                <button onClick={calc} >Calculer</button>
            </div>
            
            </div>
        </Fragment>
    )
}

export default CalcbyP; 