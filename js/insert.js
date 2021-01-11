function insertHd(data) {
  var authToken = sessionStorage.getItem("auth-token");

  if (authToken) {
    // let url = "http://localhost:3333/api/hd";
    let url = 'https://hds-backend.herokuapp.com/api/hd'

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("auth-token",authToken);

    xhr.send(JSON.stringify(data));

    xhr.onreadystatechange = function () {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        if(this.status == 201){
          add_success()
        }else{
          add_error()
        }
      }
    }
  }
}

function insertImg(data) {
  var authToken = sessionStorage.getItem("auth-token");

  if (authToken) {
    // let url = "http://localhost:3333/api/content";
    let url = 'https://hds-backend.herokuapp.com/api/content'

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("auth-token",authToken);

    xhr.send(JSON.stringify(data));

    xhr.onreadystatechange = function () {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        if(this.status == 201){
          add_success()
        }else{
          add_error()
        }
      }
    }
  }
}
