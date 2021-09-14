// console.log('avdacvzcxvzx');

let obj = [{
    name: "Huzaifa",
    fName: "Rehan",
    qualification: "Intermdiate",
    age: 19,
    feild: "Programming",
    img: "https://randomuser.me/api/portraits/men/62.jpg"
},
{
    name: "Huzaifa",
    fName: "Saeed",
    qualification: "Intermdiate",
    age: 20,
    feild: "Marketer",
    img: "https://randomuser.me/api/portraits/men/63.jpg"
},
{
    name: "Taha",
    fName: "Sumeer",
    qualification: "Intermdiate",
    age: 18,
    feild: "Graphic Designer",
    img: "https://randomuser.me/api/portraits/men/64.jpg"
},
{
    name: "Hammad",
    fName: "Irfan",
    qualification: "Intermdiate",
    age: 18.5,
    feild: "UI/UX",
    img: "https://randomuser.me/api/portraits/men/65.jpg"
},
{
    name: "Aliyan",
    fName: "Ansari",
    qualification: "BSCS",
    age: 23,
    feild: "Developer",
    img: "https://randomuser.me/api/portraits/men/66.jpg"
},
]

function cvIterator(prof) {
    let index = 0;
    return {
        next: function () {
            return index <= prof.length ?
                { value: prof[index++], done: false } :
                { done: true }
        }


    }
}




let employee = cvIterator(obj);
showData();

let btn = document.getElementById('btn');
btn.addEventListener("click", showData);

function showData() {
    // console.log('dfasfsdfd');
    let employeeObj = employee.next().value;
    console.log(employeeObj);
    let data = document.getElementById('data');
    let img = document.getElementById('img');

    if (employeeObj != undefined) {
        img.innerHTML = `<img src="${employeeObj.img}" alt="" srcset="">`;
        data.innerHTML = `
    <li class="list-group-item">${employeeObj.name}</li>
    <li class="list-group-item">${employeeObj.fName}</li>
    <li class="list-group-item">${employeeObj.age}</li>
    <li class="list-group-item">${employeeObj.qualification}</li>
    <li class="list-group-item">${employeeObj.feild}</li>`;
    }
    else {

        window.location.reload();
    }

    // e.preventDefault();


}
