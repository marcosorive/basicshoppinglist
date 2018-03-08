function addElement(){
	var list = document.getElementById("list");
	var string = document.getElementById("empty");
	var name=document.getElementById("product").value;
	var number=document.getElementById("quantity").value;

	empty.innerHTML="";
	var item = document.createElement("li");
	item.innerHTML=name + " " + number;
	var button = document.createElement('button');
  	button.innerHTML = 'Borrar';
  	button.onclick = function(){
    	button.parentNode.parentNode.removeChild(item)
  	};
	var separator=document.createTextNode(" - ")

	item.appendChild(separator);
	item.appendChild(button);

	list.appendChild(item);

	item.value="";
}