;
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>    
    __                         ___          
   / /__  ____  ____  __  __  / (_)   _____ 
  / / _ \\/ __ \\/ __ \\/ / / / / / / | / / _ \\
 / /  __/ / / / / / / /_/ / / / /| |/ /  __/  
/_/\\___/_/ /_/_/ /_/\\__, (_)_/_/ |___/\\___/
                   /____/ 
                              </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
