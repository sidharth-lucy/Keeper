import React from "react";

function InputArea(props){
    var [task , setTask] = React.useState({title:'' , content:''});

    function handleChange(e){
        setTask(function (pre){
            if(e.target.name==='title'){
                return {title:e.target.value , content: pre.content}
            }
            else{
                return {title:pre.title , content: e.target.value}
            }
        });
        
    }

    return (
        <div className="task-input">
            <input type='text' className="task-title" 
                onChange={ handleChange } placeholder="Title" name="title" value={task.title} />
            <input type='text' className="task-content" 
                onChange={ handleChange } placeholder="Take a note..." name='content' value={task.content} />
            <button className="task-add" onClick={()=>{
                props.handleAdd(task);
                setTask({title:'' , content:''});

            } }>+</button>
        </div>     
    );
}

export default InputArea;