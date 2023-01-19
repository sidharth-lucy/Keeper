import { StrictMode } from "react";

import Header from "./heading";
import Footer from "./footer";
import Notes from "./notes";

import Allnotes from "./noteList";

// console.log(Allnotes);

function cretaeNote(data){
  return (
    <Notes 
      key={data.id}
      title={data.title}
      desc={data.desc}
    />
  );
}


function App(){
  return (
    <StrictMode>
      <Header/>
      <div className="all-notes">
        { Allnotes.map(cretaeNote) }
      </div>
      <Footer/>
    </StrictMode>
    
  );
}


export default App;