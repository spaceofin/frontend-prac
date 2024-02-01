var inputs = document.querySelectorAll('.input-box');
var outputs = document.querySelectorAll('.output-box');
var check_box = document.querySelector('#check_box');

// console.log(inputs);
// console.log(check_box);


console.log(is_checked);
var is_checked = check_box.checked;

check_box.addEventListener("click",function(){
    
    if(is_checked===true)
    {
        alert('출력한 것을 삭제합니다.');
        for(var i=0;i<outputs.length;i++){
            outputs[i].value = "";
        }
    }
    else
    {
        alert('입력한 것을 출력합니다.');
        for(var i=0;i<inputs.length;i++){
            outputs[i].value = inputs[i].value;
            inputs[i].value = "";
        }
    }
    is_checked = check_box.checked;
    
});

console.log(outputs);
