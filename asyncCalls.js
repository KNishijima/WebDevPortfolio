let url = "http://api.openweathermap.org/data/2.5/forecast?q=Kaysville,us&appid=19ebe0093fdc0bce8483896ad194eb25";



function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       
        console.log("Successful...");
       //console.log(this.responseText);
       
        console.log(this.response);
        let weather_data_days = JSON.parse(this.response);
        console.log(weather_data_days.list);
        console.log(weather_data_days.list.length);

        for(let counter = 0; counter < weather_data_days.list.length; counter+=8) {
          let current_day = weather_data_days.list[counter];
          console.log(current_day);
        }
      }
      else {
        console.log("Failure...");
          //error message for user that API is down
      }      
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }

  loadDoc();