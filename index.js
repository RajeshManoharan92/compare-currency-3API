
var button = document.querySelector("#btn")
button.addEventListener("click", CRUD)


async function CRUD() {

    var text1 = document.querySelector('#txt1').value
    var text2 = document.querySelector('#txt2').value

    var url = new URL(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${text1}/${text2}.json`);
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)

    var tbody = document.querySelector('#tbody')

    const filteredByKey = Object.fromEntries(
        Object.entries(data).filter(([key, value]) => key !== 'date'))


    Object.entries(filteredByKey).forEach(([key, value]) => {

        let tr = document.createElement('tr');
        let td1 = document.querySelector('#td1')
        let td2 = document.querySelector('#td2');
        td1.innerText = `One ${text1} Currency Value in  ${key} is` 
        td2.innerText = `${value}`
        tr.append(td1)
        tr.append(td2)
        tbody.append(tr)
    }
    );

    button.disabled = true;

}


//Got currency details from below API

// -> Free Currency Rates API
// -> https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json

