import React from "react";
import { useState } from "react";
import Button from "./Button";
import Input from "./Input";


const Deletebutton=()=> {
  console.log("Deletebutton");
}
const UpdateButton=()=> {
  console.log("updateClicK");
}
const Removebutton =()=>{
    console.log("Removebutton")
}

const Todo = () => {
  const [editbtn, setEditbtn] = useState(false);
const [todo,setTodo] = useState("")

  const additem =(e)=> {
    setTodo(e.target.value)    
    // console.log(e.target.value)
  }
  const EditButton=()=> {
    setEditbtn(Input)
  }
  const AddTodo =(e)=>{
    console.log(e.target.value)
  }
  return (
    <div>
      <Input
        type={"text"}
        placeholder={"Add Your Todo Item"}
        onKeyPress={(e) => e.key === "Enter" && AddTodo()}
        onChange={additem}
      />
      <Button value={"Add Button"} onClick={AddTodo} button={"AddBtn"} />
      <Button
        value={"Remove"}
        button={"RemoveBtn"}
        onClick={Removebutton}
      />
      <div>
        {editbtn ? (
          <Button
            value={"Update Button"}
            button={"UpdateBtn"}
            onClick={UpdateButton}
          />
        ) : (
          <Button
            value={"Edit Button"}
            button={"EditBtn"}
            onClick={EditButton}
          />
        )}
         <li style={{listStyle:"none"}}>{todo}</li>
      </div>
         <Button value={"Delete Button"} button={"DeleteBtn"} onClick={Deletebutton}/> 
        
       
    </div>
  );
};

export default Todo;
