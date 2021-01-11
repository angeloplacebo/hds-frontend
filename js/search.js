// -------------------TABLES FUNCTIONS-------------------------
function clearTable() {
    const tablediv = document.querySelector('#data')
    tablediv.innerHTML = ''
}

function hdTable(json) {

    const tablediv = document.querySelector('#data')
    tablediv.innerHTML = ''
    table = `<table class="table table-striped table-hover table-responsive-md" id="table">
    <thead class="thead-dark" id="cab_tab">
        <tr>
            <th style="border-top-left-radius:15px;border-top: 0px">#</th>
            <th>HD</th>
            <th>N/S</th>
            <th>Capacidade</th>
            <th style="border-top-right-radius:15px;border-top: 0px">Modelo</th>
        </tr>
    </thead>
    <tbody>`
    i = 1
    json.forEach(item => {

        table += `<tr>
                <th scope="row">${i}</th>
                <td>${item.TAG}</td>
                <td>${item.SN}</td>
                <td>${item.Capacidade}</td>
                <td>${item.Fabricante} : ${item.Modelo}</td>
            </tr>`
        i++
    });
    tablediv.insertAdjacentHTML('beforeend', table + `</tbody></table>`)
    checkTheme()
}

function ImgBkpTable(json) {
    const tablediv = document.querySelector('#data')
    tablediv.innerHTML = ''
    table = `<table class="table table-striped table-hover table-responsive-md" id="table2">
            <thead class="thead-dark" id="cab_tab2">
                <tr>
                    <th style="border-top-left-radius:15px">#</th>
                    <th>Nome</th>
                    <th>Tamanho</th>
                    <th>Local</th>
                    <th style="border-top-right-radius:15px">Data</th>
                </tr>
            </thead>
            <tbody>`
    i = 1
    json.forEach(item => {
        table += `<tr>
                    <th scope="row">${i}</th>
                    <td>${item.Name}</td>
                    <td>${item.Size}</td>
                    <td>${item.Local}</td>
                    <td>${item.Date}</td>
                    </tr>`
        i++
    });

    tablediv.insertAdjacentHTML('beforeend', table + `</tbody></table>`)
    checkTheme()
}

function bothTable(hds, imgbkp) {
    const tablediv = document.querySelector('#data')
    tablediv.innerHTML = ''

    table = `<table class="table table-striped table-hover table-responsive-md" id="table">
    <thead class="thead-dark" id="cab_tab">
        <tr>
            <th style="border-top-left-radius:15px;border-top: 0px">#</th>
            <th>HD</th>
            <th>N/S</th>
            <th>Capacidade</th>
            <th style="border-top-right-radius:15px;border-top: 0px">Modelo</th>
        </tr>
    </thead>
    <tbody>`
    i = 1
    hds.forEach(item => {

        table += `<tr>
                <th scope="row">${i}</th>
                <td>${item.TAG}</td>
                <td>${item.SN}</td>
                <td>${item.Capacidade}</td>
                <td>${item.Fabricante} : ${item.Modelo}</td>
            </tr>`
        i++
    });
    tablediv.insertAdjacentHTML('beforeend', table + `</tbody></table>`)

    table = `<table class="table table-striped table-hover table-responsive-md" id="table2">
            <thead class="thead-dark" id="cab_tab2">
                <tr>
                    <th style="border-top-left-radius:15px">#</th>
                    <th>Nome</th>
                    <th>Tamanho</th>
                    <th>Local</th>
                    <th style="border-top-right-radius:15px">Data</th>
                </tr>
            </thead>
            <tbody>`
    i = 1
    imgbkp.forEach(item => {
        table += `<tr>
                    <th scope="row">${i}</th>
                    <td>${item.Name}</td>
                    <td>${item.Size}</td>
                    <td>${item.Local}</td>
                    <td>${item.Date}</td>
                    </tr>`
        i++
    });

    tablediv.insertAdjacentHTML('beforeend', table + `</tbody></table>`)
    checkTheme()
}

window.onload = load;