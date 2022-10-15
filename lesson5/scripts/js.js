document.getElementById("my-btn").addEventListener("click", function(){
    // reference to the input value
    const chapInput = document.getElementById("favchap").value;
    //reference to the list itmes
    const listItems = document.getElementById("list");
    
    // do something if the chat input is empty
    if (chapInput !== ""){
      // create a button
      const newBTN = document.createElement("button");
      
      // append the new button to the  list of items
      listItems.appendChild(newBTN);
      // change the inner html of the button
      newBTN.innerHTML = "\u274C";

      //create a new list item
      const newLI = document.createElement("li");
      // change the text content of the list item to the value of the input myitem
      newLI.innerHTML = chapInput;
      //append the button next to the list item
      newLI.appendChild(newBTN);
      // append the list item with the button to the list items
      listItems.appendChild(newLI);
      // clear the list item input
      document.getElementById("favchap").value = "";
      //delete the list item input
      newBTN.addEventListener("click", () => {
      listItems.removeChild(newLI);
      //send the focus to the list item
      document.getElementById("favchap").value.focus();
      
    });
    
    
    }
  
   });