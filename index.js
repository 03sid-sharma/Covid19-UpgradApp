const fetchBtn = document.getElementById("submit");


fetchBtn.addEventListener("click", buttonclickhandler);



function buttonclickhandler() {
    const dateOne = document.getElementById('start').value;
    const dateTwo = document.getElementById('end').value;
    const country = document.getElementById('country').value;

    // Instantiate an new XHR Object
    const xhr = new XMLHttpRequest();


    // Open an obejct (GET/POST, PATH,
    // ASYN-TRUE/FALSE)
    xhr.open("GET",
        `https://api.covid19api.com/country/${country}?from=${dateOne}T00:00:00Z&to=${dateTwo}T00:00:00Z`,
        true);

    // When response is ready
    xhr.onload = function() {
        if (this.status === 200) {

            // Changing string data into JSON Object
            obj = JSON.parse(this.responseText);
            console.log(obj);
            // Getting the ul element
            let list = document.getElementById("list");
            str = ""
            for (key in obj.data) {
                str += `<li>${obj.data[key].cases}</li>`;
            }
            list.innerHTML = str;
        } else {
            console.log("File not found");
        }
    }

    // At last send the request
    xhr.send();
}