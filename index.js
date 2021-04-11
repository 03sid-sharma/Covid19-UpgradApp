const btn = document.getElementById("submit");
var div = document.getElementsByClassName("cases")[0];

btn.onclick = function() {

}

btn.addEventListener("click", apiCall);

function apiCall() {
    const dateOne = document.getElementById('start').value;
    const dateTwo = document.getElementById('end').value;
    const country = document.getElementById('country').value;

    const xhr = new XMLHttpRequest();

    xhr.open("GET",
        `https://api.covid19api.com/country/${country}?from=${dateOne}T00:00:00Z&to=${dateTwo}T00:00:00Z`,
        true);

    xhr.onload = function() {
        if (this.status === 200) {

            var obj = JSON.parse(this.responseText);

            var list = document.getElementById("list");

            var confirm = "";
            var active = "";
            var die = "";
            // caseByDiv.setAttribute('class', 'caseByDiv');            
            const caseObj = element => ([`Confirmed Cases : ${element.Confirmed}`, `Active Cases : ${element.Active}`, `Death Cases : ${element.Deaths}`]);
            for (let index = 0; index < obj.length; index++) {
                const element = obj[index];
                var caseByDiv = document.createElement('div');
                caseByDiv.className = 'caseByDiv';
                const renderArr = caseObj(element);
                for (let i = 0; i < renderArr.length; i++) {
                    const span = document.createElement('span');
                    span.className = 'caseDesc';
                    span.textContent = renderArr[i];
                    caseByDiv.append(span);
                }
                list.append(caseByDiv);
                // confirm += `<li>Confirmed Cases : ${element.Confirmed}</li>`;
                // active += `<li>Active Cases : ${element.Active}</li>`;
                // die += `<li>Death Cases : ${element.Deaths}</li>`;
            }
            // list.innerHTML += confirm;
            // list.innerHTML += active;
            // list.innerHTML += die;
        } else
            console.log("404 not found");
    }

    xhr.send();
}