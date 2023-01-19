
function Notes(props){

    return (
        <div className="notes">
            
            <p className="notes-title">{props.title}</p>
            <p className="notes-body">{props.desc}</p>
            <button className="delete" 
            onClick={function(){
                props.handleDelete(props.index)
                }
                }>Delete</button>
        </div>
    );
}


export default Notes;