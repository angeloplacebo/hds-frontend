function updateAlert() {
  var login = sessionStorage.getItem('login')

  if (login) {
    document.querySelector('#alert').classList.add('alert', 'alert-danger')
    document.querySelector('#alert').innerText = `${login}`
  } else {
    document.querySelector('#alert').classList.remove('alert', 'alert-danger')
    document.querySelector('#alert').innerText = ``
  }
}

function redirectLoggedUser() {
  if (sessionStorage.getItem('auth-token')) {
    verifyToken()
      .then(function (response) {
        window.location = '/pages/home.html'
      })
      .catch(function (error) {
        console.warn('Access Denied')
      })
  }
}

function redirectUnloggedUser(){
  if (sessionStorage.getItem('auth-token')) {
    verifyToken()
      .then(function (response) {
        return
      })
      .catch(function (error) {
        logout()
      })
  }else{
    logout()
  }
}

function verifyToken() {
  return new Promise(function (resolve, reject) {
    // let url = 'http://localhost:3333/api/user/verify'
    let url = 'https://hds-backend.herokuapp.com/api/user/verify'

    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.setRequestHeader("auth-token", sessionStorage.getItem('auth-token'))
    xhr.send(null)

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4)
        if (this.responseText == 'Access Granted' ){
          resolve('Granted')
        } else {
          reject('Denied')
        }
    }
  })
}

function login(data) {

  // let url = 'http://localhost:3333/api/user/login'
  let url = 'https://hds-backend.herokuapp.com/api/user/login'

  var xhr = new XMLHttpRequest()
  xhr.open('POST', url, true)
  xhr.setRequestHeader("Content-Type", "application/json")
  xhr.send(JSON.stringify(data))

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.responseText == "logged in") {
      const authToken = this.getResponseHeader("auth-token")
      sessionStorage.setItem('auth-token', authToken)
      sessionStorage.removeItem('login')
      redirectLoggedUser()
    } else {
      sessionStorage.setItem('login', this.responseText)
    }
    updateAlert()
  }
}

function logout() {
  localStorage.clear();
  sessionStorage.clear();
  window.location.href = "../index.html";
}
