import React from 'react';
import './CreateNewProject.scss';

 function CreateNewProject(props){
        return (
            <div className='createNewProject'>
            <div className='createNewProjectContent'>
               {props.buttonContent && <button><span>{props.buttonContent}</span></button>}
               {props.buttonName && 
               <p>{props.buttonName}</p>
               }
            </div>
         </div>
        );
    }
export default CreateNewProject;