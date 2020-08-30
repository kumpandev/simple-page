import React from "react";
import { AddIcon } from "../icons";

const AddButton = () => {
  return (
    <div className='add-button-container d-flex flex-column justify-content-center align-items-center'> 
        <div className=' border-dark add-button rounded-circle icon-lg d-flex justify-content-center align-items-center'>
            <AddIcon className="icon-md"/>
        </div>
        <div className='title-gray text-center mt-2'>
            Add
        </div>
    </div>
  );
};

export default AddButton;
