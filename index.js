document.querySelector(".menu").addEventListener("click", menu_bar_click)

function menu_bar_click(){
    var menu_bar = document.querySelector(".menu_bar");
    var menu_items = document.querySelector(".menu_items");
    
    if(menu_bar.style.backgroundColor === "black"){
        menu_bar.style.backgroundColor = "grey";
        menu_items.style.visibility = "visible";
    }
    else{
        menu_bar.style.backgroundColor = "black";
        menu_items.style.visibility = "hidden";
    }
}