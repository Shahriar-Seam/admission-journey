//Formulas
//Physics
//Physics 1st Paper
function Physics1() {
  var phy1 = document.getElementById("phy1");
  if (phy1.style.display === "block") {
    phy1.style.display = "none";
  } else {
    phy1.style.display = "block";
  }
}
//Physics 2nd Paper
function Physics2() {
  var phy2 = document.getElementById("phy2");
  if (phy2.style.display === "block") {
    phy2.style.display = "none";
  } else {
    phy2.style.display = "block";
  }
}

//Mathematics
//Mathematics 1st Paper
function Mathematics1() {
  var math1 = document.getElementById("math1");
  if (math1.style.display === "block") {
    math1.style.display = "none";
  } else {
    math1.style.display = "block";
  }
}
//Mathematics 2nd Paper
function Mathematics2() {
  var math2 = document.getElementById("math2");
  if (math2.style.display === "block") {
    math2.style.display = "none";
  } else {
    math2.style.display = "block";
  }
}

//Chemistry
//Chemistry 1st Paper
function Chemistry1() {
  var chem1 = document.getElementById("chem1");
  if (chem1.style.display === "block") {
    chem1.style.display = "none";
  } else {
    chem1.style.display = "block";
  }
}
//Chemistry 2nd Paper
function Chemistry2() {
  var chem2 = document.getElementById("chem2");
  if (chem2.style.display === "block") {
    chem2.style.display = "none";
  } else {
    chem2.style.display = "block";
  }
}

// Navigation Bar
function Navigation(){
  var nav = document.getElementById("nav");
  if (nav.className === "topnav"){
    nav.className += " responsive";
  } else{
    nav.className = "topnav";
  }
}

//Footer
function Footer(){
    var footer = document.getElementById("footer");
    if (footer.style.display === "block"){
        footer.style.display = "none";
    }
    else{
        footer.style.display = "block";
    }
}