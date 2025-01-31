var calculation = "";

function button_name(element){
    calculation += element.name; 
}

function result(){
    alert(eval(calculation));
    calculation = "";
}