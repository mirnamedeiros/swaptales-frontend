export function menuToggle () { 
    var menuHolder = document.getElementById('menuHolder')
      if(menuHolder.className === "drawMenu") menuHolder.className = ""
      else menuHolder.className = "drawMenu"
};

export default menuToggle;
