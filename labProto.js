//PROTOTYPES
// var o = {model: "BMW"};
// var car = {};
// car.__proto__ =0;
//
//  car = Object.create(o);
//
//
//  //xЗначення по замовчуванню
//  var defaultOptions = {
//    name: "Valera",age:-1
//  };
//
//  var result = Object.assign(defaultOptions,{
//     name: "Andriy"
//  });
//
//  //
// var o= {
//     name: "My name",
//     age:1,
//     lname: "Last name"
// }
//
// for(var key in o){
//     console.log(key);
// }
//
// for (var z in o){
//     if(o.hasOwnProperty(z))
//     {
//         values.push(o[z]);
//     }
// }
//
// Object.keys(o);
// Object.values(o);
//
// var cache = Object.create(null);//Object withaut prototype

var obj = {};
var key;
var value;
var prop;

for(;;){
    key = prompt("Enter key");
    value = prompt("Enter values");

    if( key ===  "q" || value === "q"){
        break;
    }
    obj[key] = value;

}
alert(JSON.stringify(obj));
for(;;){
    prop = prompt("Enter the Key what you whant to delete");
    if(prop === "q"){
        break;
    }
    if(prop in obj) {
        delete obj[prop];
    }else{
        alert("No such property!");
    };

}
alert(JSON.stringify(obj));