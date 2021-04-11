const btn = document.getElementById("submit");

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

            var arr = JSON.parse(this.responseText);

            var list = document.getElementById("list");

            const caseObj = element => ([`Confirmed Cases : ${element.Confirmed}`, `Active Cases : ${element.Active}`, `Death Cases : ${element.Deaths}`]);

            for (let index = 0; index < arr.length; index++) {
                const element = arr[index];

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
            }
        } else
            console.log("404: not found");
    }

    xhr.send();
}