import React from "react";
import { StrictMode } from "react";

import Header from "./heading";
import Footer from "./footer";
import Notes from "./notes";
import InputArea from "./inputArea";



var aa={title:'gregeer' , content:'rgeetg4gteg'}

function App(){
  var [Allnotes , setAllNotes] = React.useState([aa]);

  function handleClick(newitem){
    
    setAllNotes(function (){
      return [newitem , ...Allnotes];
    });
  }

  function handleDelete(id){
    // console.log(id);

    setAllNotes( function (pre){
      return (pre.filter(function(data , index){
        return id!==index;
      }));
    });
  }


  return (
    <StrictMode>
      <Header/>
      <InputArea handleAdd={handleClick} />

      <div className="all-notes">
        { Allnotes.map( function(data ,index){
          return (
            <Notes 
              key={index}
              title={data.title}
              desc={data.content}
              handleDelete= {handleDelete}
              index={index}
            />
          );
        }) }
      </div>
      <Footer/>
    </StrictMode>
    
  );
}


export default App;