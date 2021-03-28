import React, { useState } from 'react';

function NavBar() {
  // Declare a new state variable, which we'll call , fittingly in two ways, link
  const [link, setsetLink] = useState("home");

  return (
    <div id="container">
     <a>home</a>
     <a>atari</a>
     <a>n64</a>
     <a>gamecube</a>
     <a>ps1</a>
     <a>ps2</a>
     <a>icon log in</a>
     <a>icon something</a>
    </div>
  );
}
export default NavBar();