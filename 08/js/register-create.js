var btn = document.querySelector('#btn');
btn.addEventListener("click",function(){
    var input_box = document.querySelector('#input_box');

    var newP = document.createElement("p")
    var newText = document.createTextNode(input_box.value)
    newP.appendChild(newText)
    document.body.appendChild(newP)
    newP.setAttribute("class","accent")

    //
    var delBtn = document.createElement("span");
    var delText = document.createTextNode("X");
    delBtn.setAttribute("class","del");
    delBtn.appendChild(delText);
    newP.appendChild(delBtn);

    //

    input_box.value = "";

    var div1 = document.querySelector('#nameList');
    //div1.appendChild(newP);
    div1.insertBefore(newP,div1.childNodes[0]);

})