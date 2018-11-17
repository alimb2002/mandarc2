document.getElementsByTagName('div')[1].style.height ="100%";

var sections = document.getElementsByTagName('h3');
for (var i=0; i < sections.length ; i++){
  sections[i].addEventListener('click', handleClick);
}

function handleClick(e){
  var selected = e.target.nextElementSibling;

if( selected.style.height == "100%" ){
  selected.style.height = 0;
}
else{
  selected.style.height = '100%';

}

}
