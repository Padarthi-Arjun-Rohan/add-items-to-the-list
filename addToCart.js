let rC = document.getElementById("rowContainer");

let column1 = document.createElement("div");
column1.setAttribute("class", "col-12");
rC.appendChild(column1);

let heading = document.createElement("h1");
heading.textContent = "Add To Cart";
heading.classList = "heading";
column1.appendChild(heading);

let column2 = document.createElement("div");
column2.setAttribute("class", "col-6 p-4");
rC.appendChild(column2);

let inp = document.createElement("input");
column2.appendChild(inp);
inp.id = "cartItemTextInput";
inp.setAttribute("type", "text");

let column3 = document.createElement("div");
column3.setAttribute("class", "col-6 pt-4");
rC.appendChild(column3);

let btn = document.createElement("button");
column3.appendChild(btn);
btn.id = "addBtn";
btn.textContent = "Add";
btn.setAttribute("class", "btn btn-primary ");
btn.setAttribute("onclick", "adds()");

let column4 = document.createElement("div");
column4.setAttribute("class", "col-12 p-2");
rC.appendChild(column4);

let para = document.createElement("p");
para.textContent = "My Cart Items";
para.classList = "heading";
column4.appendChild(para);


let column5 = document.createElement("div");
column5.setAttribute("class", "col-12 p-3");
rC.appendChild(column5);

let unorderedList = document.createElement("ul");
column5.appendChild(unorderedList);
unorderedList.style.listStyleType = "none";

let value = inp.value;
let test = "hello";

function adds() {
    let list = document.createElement("li");
    unorderedList.appendChild(list);
    list.textContent = value;
}


console.log(rC);