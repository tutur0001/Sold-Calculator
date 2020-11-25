import React, { Fragment } from 'react'
import './type.css'

const CalcbyP = ({price, pourcent, calc, changing}) => {
      
    return(
        <Fragment>
            <div class="container">
            <h2>Calculate by pourcentage:</h2>
            <form>
                <div>
                    <label>
                        The price: 
                        <input type="text" name="price" placeholder="Enter price" value={price} onChange={changing}/>
                    </label>
                </div>
                <div>
                    <label>
                        Value of solde: 
                        <input type="text" name="pourcent" placeholder="Enter solde" value={pourcent} onChange={changing}/>
                    </label>
                </div>
            </form>
            <div id="hello"> 
                <button onClick={calc} >Calculate</button>
            </div>
            
            </div>
        </Fragment>
    )
}

export default CalcbyP; 