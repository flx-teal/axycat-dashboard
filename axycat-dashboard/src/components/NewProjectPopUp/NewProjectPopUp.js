import React from 'react';
import Popup from "./Popup";

const NewProjectPopUp = (props) => {
  const {closePopup} = props;

  return (
    <div>
      <Popup closePopup={closePopup}/>
    </div>
  )
};

export default NewProjectPopUp;