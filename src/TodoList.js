import React, { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ListCom from './ListCom';

const TodoList = () => {

    const[item,setItem] = useState("");
    const[newItem,setNewItem] = useState([])

    function itemEvent(event){
        setItem(event.target.value);

    }
    function newItemList(){
        setNewItem((prevValue) =>{
            return [...prevValue,item]
        })
        setItem("")
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br></br>
                        <h1>TODO-LIST</h1>
                    <br></br>
                     {/* Note: What ever we store the value in setItem it comes from "value" attribute of Input tag only.  */}
                    <input type="text" value={item} placeholder="Enter an Item" onChange={itemEvent}/>
                    <Button className='newBtn' onClick={newItemList} ><AddCircleIcon /></Button>

                    
                    <ol>


                        {newItem.map((val,index) => {


                            return <ListCom key={index} text={val}/> ;


                        })}


                    </ol>

                </div>

            </div>
        </>
    )
}

export default TodoList

//Coded Practiced By me:
// import React, { useState } from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Button from '@material-ui/core/Button';
// import AddIcon from '@material-ui/icons/Add';
// import ListItem from './ListItem';



// const TodoApp = () => {


   

//     const [item, setItem] = useState("");
//     const [newItem,setNewItem] = useState([])

//     function keepItem(event) {
//         setItem(event.target.value)
//     }
//     function newItemList(){
//         setNewItem((prevValue)=>{return [...prevValue, item]});
//         setItem("");
//     }
//     return (
//         <>
//          <div className="main_div">
//             <div className="center_div">
//                 <br></br>
//                 <h1>TODO-LIST</h1>
//                 <br></br>
               
//                 <input type="text" value={item} placeholder="Enter Your Item" onChange={keepItem}/> 
                
                
//                 <Button className="newBtn" onClick={newItemList} ><AddIcon /></Button>
//                 <ol>
//                     {newItem.map((val,index) => {return(<ListItem key={index} text={val}/>)})}
                    
//                 </ol>
//             </div>
//          </div>

        
        
//         </>
       
//     )
// }

// export default TodoApp
