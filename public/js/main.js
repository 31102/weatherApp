console.log("hello JS is loading");

const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector(".middle_layer")


const getInfo = async (event) => {
    event.preventDefault();
    const cityValue = cityName.value;

    if (cityValue == "") {
        city_name.innerText = "Please Write the Name Before the Search"
        datahide.classList.add("data_hide");
    }
    else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=f3d9e82c435ac0c6e543630dd54e2400`
            const responce = await fetch(url);
            const data = await responce.json();
            // console.log(data);
            const arrData = [data];
            temp_real_val.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;
            
            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;

            const tempMood = arrData[0].weather[0].main;
            // console.log(tempMood);

            //condition to check sunny or cloudy
            if (tempMood == "Clear") {
                temp_status.innerHTML =
                    "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
            }

            datahide.classList.remove("data_hide");

        }
        catch {
            city_name.innerText = "Please Enter Correct City Name"
            datahide.classList.add("data_hide");
        }

    }
}
submitBtn.addEventListener("click", getInfo);