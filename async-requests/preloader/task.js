const valutesList = document.getElementById('items');
const imgPreloader = document.getElementById('loader');

let xhrValute = new XMLHttpRequest();
xhrValute.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhrValute.addEventListener('readystatechange', function() {
    if (this.readyState === this.DONE && this.status === 200) {
        let valuteData = JSON.parse(this.responseText);
        console.log(valuteData);
        console.log(valuteData.response.Valute);
        let valutes = Object.values(valuteData.response.Valute);
        imgPreloader.classList.remove('loader_active');
        for (let elem of valutes) {
            setValuteItem(elem);
        }        
    }
});
xhrValute.send();

function setValuteItem(elem) {
    console.log(elem);
    let valuteCode = elem.CharCode;
    let valuteValue = elem.Value;
    valutesList.insertAdjacentHTML('beforeend', `<div class="item">
    <div class="item__code">
    ${valuteCode}
    </div>
    <div class="item__value">
    ${valuteValue}
    </div>
    <div class="item__currency">
    руб.
    </div>
    </div>`);    
}