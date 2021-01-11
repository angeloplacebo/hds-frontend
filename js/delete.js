// --------------------DELETE FUNCTIONS------------------------
function del_img_bkp(id) {
  var authToken = sessionStorage.getItem("auth-token");

  if (authToken) {
    // let url = 'http://192.168.1.10/cmsti-hds/api/delete.php?item=imgbkp&id='+id
    let url = 'https://hds-backend.herokuapp.com/api?item=imgbkp&id='+id
    // let url = "http://localhost:3333/api?item=imgbkp&id=" + id;

    const http = new XMLHttpRequest();

    http.open("DELETE", url);
    http.setRequestHeader("auth-token", authToken);

    http.send();

    http.onload = () => {
      if (http.responseText == "success") {
        del_success();
      } else {
        del_error();
      }
    };
  }
}
function del_hd(id) {
  var authToken = sessionStorage.getItem("auth-token");

  if (authToken) {
    // let url = 'http://192.168.1.10/cmsti-hds/api/delete.php?item=hd&id='+id
    let url = 'https://hds-backend.herokuapp.com/api?item=hd&id='+id
    // let url = "http://localhost:3333/api?item=hd&id=" + id;

    const http = new XMLHttpRequest();

    http.open("DELETE", url);
    http.setRequestHeader("auth-token", authToken);

    http.send();

    http.onload = () => {
      if (http.responseText == "success") {
        del_success();
      } else {
        del_error();
      }
    };
  }
}
// -------------------TABLES FUNCTIONS-------------------------
function clearTable() {
  const tablediv = document.querySelector("#data");
  tablediv.innerHTML = "";
}

function hdTable(json) {
  const tablediv = document.querySelector("#data");
  tablediv.innerHTML = "";
  table = `<table class="table table-striped table-hover table-responsive-md" id="table">
    <thead class="thead-dark" id="cab_tab">
        <tr>
            <th style="border-top-left-radius:15px;border-top: 0px">#</th>
            <th>HD</th>
            <th>N/S</th>
            <th>Capacidade</th>
            <th>Modelo</th>
            <th style="border-top-right-radius:15px;border-top: 0px"></th>
        </tr>
    </thead>
    <tbody>`;
  i = 1;
  json.forEach((item) => {
    table += `<tr>
                <th scope="row">${i}</th>
                <td>${item.TAG}</td>
                <td>${item.SN}</td>
                <td>${item.Capacidade}</td>
                <td>${item.Fabricante} : ${item.Modelo}</td>
                <td><a href="#" onclick="del_confirm('${item._id}','${item.TAG}','hd') "><i class=\"far fa-trash-alt\"></i></a></td>
            </tr>`;
    i++;
  });
  tablediv.insertAdjacentHTML("beforeend", table + `</tbody></table>`);
  checkTheme();
}

function ImgBkpTable(json) {
  const tablediv = document.querySelector("#data");
  tablediv.innerHTML = "";
  table = `<table class="table table-striped table-hover table-responsive-md" id="table2">
            <thead class="thead-dark" id="cab_tab2">
                <tr>
                    <th style="border-top-left-radius:15px">#</th>
                    <th>Nome</th>
                    <th>Tamanho</th>
                    <th>Local</th>
                    <th>Data</th>
                    <th style="border-top-right-radius:15px"></th>
                    </tr>
            </thead>
            <tbody>`;
  i = 1;
  json.forEach((item) => {
    table += `<tr>
                    <th scope="row">${i}</th>
                    <td>${item.Name}</td>
                    <td>${item.Size}</td>
                    <td>${item.Local}</td>
                    <td>${item.Date}</td>
                    <td><a href="#" onclick="del_confirm('${item._id}','${item.Name}','imgbkp') "><i class=\"far fa-trash-alt\"></i></a></td>
                    </tr>`;
    i++;
  });

  tablediv.insertAdjacentHTML("beforeend", table + `</tbody></table>`);
  checkTheme();
}

function bothTable(hds, imgbkp) {
  const tablediv = document.querySelector("#data");
  tablediv.innerHTML = "";

  table = `<table class="table table-striped table-hover table-responsive-md" id="table">
    <thead class="thead-dark" id="cab_tab">
        <tr>
            <th style="border-top-left-radius:15px;border-top: 0px">#</th>
            <th>HD</th>
            <th>N/S</th>
            <th>Capacidade</th>
            <th>Modelo</th>
            <th style="border-top-right-radius:15px;border-top: 0px"></th>
        </tr>
    </thead>
    <tbody>`;
  i = 1;
  hds.forEach((item) => {
    table += `<tr>
                <th scope="row">${i}</th>
                <td>${item.TAG}</td>
                <td>${item.SN}</td>
                <td>${item.Capacidade}</td>
                <td>${item.Fabricante} : ${item.Modelo}</td>
                <td><a href="#" onclick="del_confirm('${item._id}','${item.TAG}','hd') "><i class=\"far fa-trash-alt\"></i></a></td>
            </tr>`;
    i++;
  });
  tablediv.insertAdjacentHTML("beforeend", table + `</tbody></table>`);

  table = `<table class="table table-striped table-hover table-responsive-md" id="table2">
    <thead class="thead-dark" id="cab_tab2">
        <tr>
            <th style="border-top-left-radius:15px">#</th>
            <th>Nome</th>
            <th>Tamanho</th>
            <th>Local</th>
            <th>Data</th>
            <th style="border-top-right-radius:15px"></th>
            </tr>
    </thead>
    <tbody>`;
  i = 1;
  imgbkp.forEach((item) => {
    table += `<tr>
            <th scope="row">${i}</th>
            <td>${item.Name}</td>
            <td>${item.Size}</td>
            <td>${item.Local}</td>
            <td>${item.Date}</td>
            <td><a href="#" onclick="del_confirm('${item._id}','${item.Name}','imgbkp') "><i class=\"far fa-trash-alt\"></i></a></td>
            </tr>`;
    i++;
  });

  tablediv.insertAdjacentHTML("beforeend", table + `</tbody></table>`);
  checkTheme();
}

window.onload = load;
