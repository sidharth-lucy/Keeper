import React from "react";
import { StrictMode } from "react";

import Header from "./heading";
import Footer from "./footer";
import Notes from "./notes";
import InputArea from "./inputArea";


function cretaeNote(data,index){
  console.log(index);
  return (
    <Notes 
      key={index}
      title={data.title}
      desc={data.content}
    />
  );
}


function App(){
  var [Allnotes , setAllNotes] = React.useState([]);

  function handleClick(newitem){
    
    setAllNotes(function (){
      return [newitem , ...Allnotes];
    });
  }


  return (
    <StrictMode>
      <Header/>
      <InputArea handleAdd={handleClick} />

      <div className="all-notes">
        { Allnotes.map(cretaeNote) }
      </div>
      <Footer/>
    </StrictMode>
    
  );
}


export default App;