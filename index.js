let fetchBtn = document.getElementById("submit");


fetchBtn.addEventListener("click", buttonclickhandler);

var fromDate = document.getElementById('start').value;
var toDate = document.getElementById('end').value;
console.log(fromDate + "  " + toDate);

function format(input) {
    var date = new Date(input);
    return [
        ("0" + date.getDate()).slice(-2),
        ("0" + (date.getMonth() + 1)).slice(-2),
        date.getFullYear()
    ].join('-');
}

function buttonclickhandler() {
    console.log(fromDate + "  " + toDate);

    // // Instantiate an new XHR Object
    // const xhr = new XMLHttpRequest();


    // // Open an obejct (GET/POST, PATH,
    // // ASYN-TRUE/FALSE)
    // xhr.open("GET",
    //     "https://api.covid19api.com/country/$%7bcountry%7d?from=$%7bdateOne%7dT00:00:00Z&to=$%7bdateTwo%7dT00:00:00Z", true);

    // // When response is ready
    // xhr.onload = function() {
    //     if (this.status === 200) {

    //         // Changing string data into JSON Object
    //         obj = JSON.parse(this.responseText);

    //         // Getting the ul element
    //         let list = document.getElementById("list");
    //         str = ""
    //         for (key in obj.data) {
    //             str += `<li>${obj.data[key].employee_name}</li>`;
    //         }
    //         list.innerHTML = str;
    //     } else {
    //         console.log("File not found");
    //     }
    // }

    // // At last send the request
    // xhr.send();
}