import React, { useState } from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const ListCom = (props) => {

    const[line,setLine] = useState(false)


    function cutIt() {
        setLine(true);
    }
    return (
        <div className="todo_style">
            <span onClick={cutIt}>
                <HighlightOffIcon className="deleteIcon"/>
            </span>
            
            <li style={{ textDecoration: line ? "line-through" : "none" }}>{props.text}</li>

            
        </div>
    )
}

export default ListCom


// Coded ny me:
// import React, { useState } from 'react'
// import HighlightOffIcon from '@material-ui/icons/HighlightOff';

// const ListItem = (props) => {

//     const [line,setLine] = useState(false);

//     function Happen(){
//         setLine(true);
//     }
//     return (
//         <div className="todo_style">
//             <span onClick={Happen}><HighlightOffIcon className="deleteIcon" /></span>
//             <li style={{textDecoration: line ? "line-through" : "none"}}>{props.text}</li>
//         </div>
//     )
// }

// export default ListItem
