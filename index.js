fetch("https://restcountries.com/v3.1/all").then((res) => {
    console.log(res);
    return res.json();
}).then((resData) => {
    let box = document.getElementById("box");
    resData.forEach(element => {
        console.log(element);
        let con = document.createElement("div");
        let but = document.createElement('button');
        // creating image element and add to the box
        let img = document.createElement("img");
        img.src = element.flags.png;
        con.appendChild(img);
        // country names and details
        let cou = document.createElement("div2");

        cou.innerText = `Country Name: ${
            element.name.common
        }\n Code No: ${
            element.cca2
        }\n`;
        con.appendChild(cou);
        // Get Weather button creating
        but.innerText = "Get Weather";

        but.addEventListener("click", alerting);
        function alerting() {  
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${
                element.name.official
            }&appid=7505054b1380f858510f2db88fd0d7f1`).then((res) => {
                console.log(res);
                return res.json();
            }).then((resData) => {
                console.log(resData);

                alert(`Country Name   : ${
                    resData.name
                }
Ground Level     : ${
                    resData.main.grnd_level
                }
Humidity         : ${
                    resData.main.humidity
                }
Pressure         : ${
                    resData.main.pressure
                }
Sea Level        : ${
                    resData.main.sea_level
                }
Temperature      : ${
                    resData.main.temp
                }
Max Temperature  : ${
                    resData.main.temp_max
                }
Min Temperature  : ${
                    resData.main.temp_min
                }`);
                

            }).catch((rej) => {
                console.error(`${rej} Country name is not found`);
                alert(`Country name is not found`);
            });
        }
        
        
        
        con.appendChild(but);

        box.appendChild(con);

    });
    console.log(resData.length);
  

}).catch((rej) => {
    console.error(`${rej} Something went wrong!!!`);
})
