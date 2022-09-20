let obj1 = [{
    "name": "person1",
    "age": "5"
}]

let obj2 = [{
    "age": "5",
    "name": "person1"
}];


for (let i = 0; i < obj1.length; i++) {
    for (let key in obj1[i]) {
        console.log(key, obj1[i][key]);
    }
}
for (let i = 0; i < obj2.length; i++) {
    for (let key in obj2[i]) {
        console.log(key, obj2[i][key]);
    }
}


let xml = new XMLHttpRequest();

xml.open("get", "https://restcountries.com/v2/all")
xml.send();

xml.onload = function () {
    let result = JSON.parse(xml.response);
    for (let i = 0; i < result.length; i++) {
        //! display all country flages    

        console.log(result[i].flag);
    }

}
