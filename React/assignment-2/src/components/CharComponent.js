import React from 'react';

const charcomponent = (props) =>{

    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    }
    
    return(
        <div className="CharComponent" style={style}>
            <p onClick={props.click}>{props.char}</p>
        </div>
    )
}

export default charcomponent