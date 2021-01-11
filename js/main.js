function setUrl(item, word) {
    // url = 'http://192.168.1.10/cmsti-hds/api/getData.php?item=' + item + '&text=' + word
    url = 'https://hds-backend.herokuapp.com/api?item=' + item + '&text=' + word
}

function start() {

    text = document.getElementById('word').value
    sessionStorage.setItem('word', text)
    item = sessionStorage.getItem('searchItem')
    sessionStorage.setItem('searchItem', item)

    currentItem = sessionStorage.getItem('searchItem')
    
    if ((currentItem == "null") || currentItem == "both") {
        search_warning()
        item='both'
    }
    search(item)
}

function toggle(item) {

    switch(item) {
        case "hd":
            if (sessionStorage.getItem('searchItem') != "hd"){
                sessionStorage.setItem('searchItem', 'hd')
                document.getElementById('img-bkp').checked = false
            }else{
                sessionStorage.setItem('searchItem', 'both')
                document.getElementById('hd').checked = false
                document.getElementById('img-bkp').checked = false
            }
            break
        case "img-bkp":
            if (sessionStorage.getItem('searchItem') != "img-bkp"){
                sessionStorage.setItem('searchItem', 'img-bkp')
                document.getElementById('hd').checked = false
            }else{
                sessionStorage.setItem('searchItem', 'both')
                document.getElementById('hd').checked = false
                document.getElementById('img-bkp').checked = false
            }
            break
    }

}

function checkStorage() {

    status = sessionStorage.getItem('searchItem')
    word = sessionStorage.getItem('word')

    if (word === null) {
        text = " "
    } else {
        text = word
        document.getElementById('word').value = text
    }
    if (status == 'hd') {
        document.getElementById('hd').checked = true
        search('hd')
    } if (status == 'img-bkp') {
        document.getElementById('img-bkp').checked = true
        search('img-bkp')
    } if (status == 'both') {
        document.getElementById('hd').checked = false
        document.getElementById('img-bkp').checked = false
        search('both')
    }
}

function search(item) {

    word = sessionStorage.getItem('word')

    if (word === null) {
        text = " "
    } else {
        text = word
    }

    setUrl(item, text)
    fetchData()
}

function reload(){
    checkStorage()
    checkTheme()
    
    text = document.getElementById('word').value
    sessionStorage.setItem('word', text)
    item = sessionStorage.getItem('searchItem')
    sessionStorage.setItem('searchItem', item)

    currentItem = sessionStorage.getItem('searchItem')
    
    if ((currentItem == "null") || currentItem == "both") {
        item='both'
    }
    search(item)
}

function load() {
    checkStorage()
    checkTheme()
    if(sessionStorage.getItem('word')){
        start()
    }
}

// --------------------FETCH FUNCTION ----------------------
function fetchData() {
    var headers = new Headers()
    headers.append("auth-token",sessionStorage.getItem('auth-token'))
    const options = {
        method: 'GET',
        headers: headers
    }
    fetch(url,options)
        .then(res => res.json())
        .then((out) => {
            if (out['hds'] && out['img-bkp']) {
                if (!Object.keys(out['hds']).length && !Object.keys(out['img-bkp']).length) {
                    clearTable()
                    foundNothing()
                } else if (Object.keys(out['hds']).length && !Object.keys(out['img-bkp']).length) {
                    hdTable(out['hds'])
                } else if (!Object.keys(out['hds']).length && Object.keys(out['img-bkp']).length) {
                    ImgBkpTable(out['img-bkp'])
                } else {
                    bothTable(out['hds'], out['img-bkp'])
                }
            } else if (out['hds']) {
                if (!Object.keys(out['hds']).length) {
                    foundNothing()
                } else {
                    hdTable(out['hds'])
                }
            } else if (out['img-bkp']) {
                if (!Object.keys(out['img-bkp']).length) {
                    foundNothing()
                } else {
                    ImgBkpTable(out['img-bkp'])
                }
            }

        })
        .catch(err => { throw err });
}

// --------------------LOGIN FUNCTION ----------------------
// function checkLoggedUser(){
//     $.ajax({
//         url: "verifyLoggedUser.php",
//         success: function(data) {
//             if( data == "no user logged"){
//                 location.href = "logout.php";
//             }else{
//                 username = data
//             }
//         },
//         async:true
//     });
// }
// function logout(){
//     localStorage.clear();
//     sessionStorage.clear();
//     window.location.href = 'index.html';
// }


