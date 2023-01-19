import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./component/App";
// import Header from "./component/heading"


const root = createRoot(document.getElementById('root'));

root.render(

  <StrictMode>
    <div>
      <App />
    </div>
  </StrictMode>

  );

