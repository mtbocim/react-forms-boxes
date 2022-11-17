import React, { useState } from "react";

/**
 * State: {height: "", width:"", backgroundColor:""}
 *
 * Properties: setBoxes, the callback received from BoxList
 *
 * App -> BoxList -> NewBoxForm
 */
export default function NewBoxForm({ setBoxes }) {
  const [formData, setFormData] = useState({
    height: "",
    width: "",
    backgroundColor: "",
  });

  function handleChange(evt) {
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData((currData) => {
      currData[fieldName] = value;
      return { ...currData };
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const id = Math.random();
    const newBox = {
      ...formData,
      height: formData.height + "px",
      width: formData.width + "px",
      id,
    };
    setBoxes((prevBoxes) => [...prevBoxes, newBox]);
    setFormData({
      height: "",
      width: "",
      backgroundColor: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height-input">Height:</label>
      <input
        id="height-input"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="width-input">Width:</label>
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
  );
}
