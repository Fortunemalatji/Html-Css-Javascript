const inputbox = document.getElementById("SearchBox"); 
const container = document.getElementById("list-container"); 

function messagealert(){
    if(inputbox.value ===''){
        alert("Text cannot be empty!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        container.appendChild(li);
    }
    inputbox.value='';
    localstorage();
}
container.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        localstorage();
    }else if(e.target.tagName==="LI"){
        container.addEventListener("dblclick", function(){
            container.removeChild(li)
        });
        localstorage();
    }
    
},false);


function localstorage(){
    localStorage.setItem("data", container.innerHTML);
}
function displayData(){
    container.innerHTML = localStorage.getItem("data");
}
displayData();

function myFunction() {
	// Declare variables
	var input, filter, ul, li, a, i;
	input = document.getElementById("SearchBox");
	filter = input.value.toUpperCase();
	ul = document.getElementById("list-container");
	li = ul.getElementsByTagName("li");
  
	// Loop through all list items, and hide those who don't match the search query
	for (i = 0; i < li.length; i++) {
	  a = li[i].getElementsByTagName("li")[0];
	  if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
		li[i].style.display = "";
	  } else {
		li[i].style.display = "none";
	  }
	}
  }
