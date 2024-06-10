import React, { useState } from "react";
import "./../App.css";

// exportTo: set to track selections
// nameKeys: array of selection nameKeys
export default function ButtonList({ exportTo, nameKeys, nameDict, prompt }) {
  // Clicked state of each button, default to all false
  const [clicked, setClicked] = useState(Array(nameKeys.length).fill(false));

  const handleClick = (i) => {
    // ... creates shallow copy of clicked
    const newClicked = [...clicked];

    // flips state of clicked[i]
    newClicked[i] = !newClicked[i];

    // updates state of clicked
    setClicked(newClicked);

    // Update the exportTo set based on the new state
    if (newClicked[i]) {
      exportTo.add(nameKeys[i]);
    } else {
      exportTo.delete(nameKeys[i]);
    }
    console.log(exportTo);
  };

  let buttons = nameKeys.map((name, i, buttons_ref) => (
    /* Map can take three arguments: element, index, array it is calling */
    <button
      key={i}
      type="button"
      /* If button is clicked, set style to clicked, else set to unclicked */
      className={clicked[i] ? "button-74-clicked" : "button-74-unclicked"}
      onClick={() => handleClick(i)}
    >
      {nameDict.get(name)}
    </button>
  ));

  return (
    <div onSubmit={setClicked}>
      <h3 className="question-prompt">{prompt}</h3>
      {/* Initialize each button in the list with its own clicked state, style */}

      {buttons}
    </div>
  );
}
