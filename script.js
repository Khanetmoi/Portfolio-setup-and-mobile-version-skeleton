var toggleButton = document.getElementsByClassName("toggleButton");

var hcontent = document.getElementsByClassName('hcontent');

// document.write (toggleButton)
// console.log(toggleButton)
// console.log('hi')
// console.log(hcontent)
// console.log('hi')
// console.log(ik)

// document.write('hihk')

toggleButton.onclick = function() {

  if(hcontent.className == "active"){
    //show the list
    //hcontent.className = "";
    toggleButton.innerHTML = "X";
  }
  else {
    hcontent.className="active"
    
  }
};

// console.log('ll')