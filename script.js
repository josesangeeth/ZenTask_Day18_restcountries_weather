async function getCountriesData(){
        let res = await fetch('https://restcountries.com/v2/all')
        let data = await res.json()
        showCountryDetails(data)
}
getCountriesData()
        
function showCountryDetails(data){
    var row = document.getElementById('row')
    for(var i=0;i<3;i++){
            row.innerHTML += (
                `<div class="card col-lg-3 col-sm-3 item mt-3 mb-3">
                    <div class="card-header text-light bg-dark">
                        ${data[i].name}
                    </div>
                    <div class="card-body text-light align-items-center">
                        <img src=${data[i].flag} class="img-fluid">
                        <p>Capital: ${data[i].capital}</p>
                        <p>region: ${data[i].region}</p>
                        <p>Country code: ${data[i].alpha3Code}</p>
                        <button id=btn${i}>Click for weather</button>
                    </div>
                </div>` 
            )
            var btn = document.getElementById(`btn${i}`)
            console.log(btn)
            btn.addEventListener("click",(e)=>{
                console.log(e)
                dummy(data[i].name)
            })
    }
}

async function dummy(cname){
    var weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cname}&appid=07284452d2baaf8d9574a7a9bcae338b`)
    var data1 =  weather.json()
    console.log(data1)
} 



