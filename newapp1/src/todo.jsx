import React from "react";
function Todo(){
    var [list,setList]=React.useState([
        "maruthi",
        "naga",
        "gopi",
        "vamsi",
        "govind",
    ]);
    console.log(list);
   
    function abc(){
        var ip=document.getElementById("kl").value;
        alert(ip);
        setList([...list,ip])
    };
    function bca(i){
     list.splice(i,1),
     setList([...list])  
    }
    function op(i){
        
    }
    return(
        <div>
            <h1>Todo List</h1>
            <input  placeholder="Enter any name" id="kl"></input>
            <button onClick={abc} >submit</button>
            {
                list.map((lists,i)=>{
                    return(<li>{lists}
                    <button onClick={()=>{bca(i)}}>deleted</button>
                    <button onClick={()=>{op(i)}}>Edit</button></li>
                    )
                })
            }
        </div>
    )
}
export default Todo;