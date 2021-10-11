var array = document.body.querySelector(".array");
var number = document.body.querySelector(".numberIncrease");

var increase = 5;


var list = [
    {
        name: "Harry",
        age: 25
    },
    {
        name: "Larry",
        age: 15
    },
    {
        name: "Bert",
        age: 45
    },
    {
        name: "Jerry",
        age: 35
    },
    {
        name: "Berry",
        age: 5
    },
    {
        name: "Bart",
        age: 55
    }
];

//For list of names and ages
for(var i=0; i<list.length; i++){
    var ele = document.createElement("div");
    var nameEle = document.createElement("h1");
    var ageEle = document.createElement("h2");

    nameEle.innerHTML="Name: " + list[i].name;
    ageEle.innerHTML="Age:" + list[i].age;

    if(list[i].age>25){
        ageEle.style.color="green";
    }

    ele.appendChild(nameEle);
    ele.appendChild(ageEle);
    array.appendChild(ele);
}

number.innerHTML=increase;

document.body.querySelector(".increase").addEventListener("click", function (){
    number.innerHTML="";
    increase=increase+1;
    number.innerHTML=increase;

})



