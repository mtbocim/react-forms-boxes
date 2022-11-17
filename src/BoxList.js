import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm';

/**
 * State: [ 
 *           {
 *              height:height, 
 *              width:width, 
 *              backgroundColor:backgroundColor 
 *           },
 *           ...
 *        ]
 *     
 * 
 * Props: None
 * 
 * App -> Boxlist -> Box
 *                -> NewBoxForm
 */

function BoxList() {
    const [boxes, setBoxes] = useState([])



    return(
        <div>
            <NewBoxForm getBoxData = {setBoxes}/>
        </div>
    )

}