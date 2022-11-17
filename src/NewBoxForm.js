import React, { useState } from 'react';

/**
 * State: {height: "", width:"", backgroundColor:""}
 * 
 * Properties: TBD callback to send up data
 * 
 * App -> BoxList -> NewBoxForm
 */
export default function NewBoxForm() {
    const [formData, setFormData] = useState({
        height: "",
        width: "",
        backgroundColor: ""
    });

    function handleChange(evt){
        const fieldName = evt.target.name;
        const value = evt.target.value;

        setFormData(currData => {
            currData[fieldName] = value;
            return {...currData};
        })
    }

    return (
        <form>
            <label htmlFor="height-input">Height:</label>
            <input
                id="height-input"
                name="height"
                value={formData.height}
                onChange={handleChange}
            />

            <label htlmFor="width-input">Width:</label>
            <input
                id="width-input"
                name="width"
                value={formData.width}
                onChange={handleChange}
            />

            <label htmlFor="background-color-input">Background Color:</label>
            <input
                id="background-color-input"
                name="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}
            />

            <button type="submit">Add a new box!</button>
        </form>
    )

}

