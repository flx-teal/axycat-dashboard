import React from 'react';
import Popup from "./Popup";

const NewProjectPopUp = (props) => {
  const {onClick, closePopup} = props;

  return (
    <div>
      <Popup onClick={onClick}
             closePopup={closePopup}/>
    </div>


  )
};

export default NewProjectPopUp;