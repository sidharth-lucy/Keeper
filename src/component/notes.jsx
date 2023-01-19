
function Notes(props){

    return (
        <div className="notes">
            
            <p className="notes-title">{props.title}</p>
            <p className="notes-body">{props.desc}</p>

        </div>
    );
}


export default Notes;