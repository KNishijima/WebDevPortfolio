function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       
       console.log(this.responseText);

      }
      else {
          //error message for user that API is down
      }
       
       
       // document.getElementById("demo").innerHTML = this.responseText;
      
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }