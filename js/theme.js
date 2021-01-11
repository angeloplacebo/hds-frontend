function enableTheme() {
    document.body.classList.add('dark')
    
    if(document.getElementById('btn') !=null){
        document.getElementById('btn').classList.remove('btn-dark')
        document.getElementById('btn').classList.add('btn-light')
    }

    if(document.getElementById('btn_search') !=null){
        document.getElementById('btn_search').classList.remove('btn-dark')
        document.getElementById('btn_search').classList.add('btn-light')
    }

    if(document.getElementById('btn_filter') !=null){
        document.getElementById('btn_filter').classList.remove('btn-dark')
        document.getElementById('btn_filter').classList.add('btn-light')
    }

    if (document.getElementById('word') != null) {
        document.getElementById('word').classList.add('dark')
    }

    if (document.getElementById('ns') != null) {
        document.getElementById('tag').classList.add('dark')
        document.getElementById('ns').classList.add('dark')
        document.getElementById('pn').classList.add('dark')
        document.getElementById('size').classList.add('dark')
        document.getElementById('fab').classList.add('dark')
        document.getElementById('loc').classList.add('dark')
        document.getElementById('model').classList.add('dark')
    }

    if (document.getElementById('date') != null) {
        document.getElementById('name').classList.add('dark')
        document.getElementById('size').classList.add('dark')
        document.getElementById('tag').classList.add('dark')
        document.getElementById('date').classList.add('dark')
    }

    if (document.getElementById('cab_tab') != null) {
        document.getElementById('cab_tab').classList.add('thead-light')
        document.getElementById('table').classList.add('table-dark')
    }
    if (document.getElementById('cab_tab2') != null) {
        document.getElementById('cab_tab2').classList.add('thead-light')
        document.getElementById('table2').classList.add('table-dark')
    }
}

function disableTheme() {
    document.body.classList.remove('dark')

    if (document.getElementById('btn')!=null){
        document.getElementById('btn').classList.remove('btn-light')
        document.getElementById('btn').classList.add('btn-dark')
    }
    
    if (document.getElementById('btn_search')!=null){
        document.getElementById('btn_search').classList.remove('btn-light')
        document.getElementById('btn_search').classList.add('btn-dark')
    }

    if (document.getElementById('btn_filter')!=null){
        document.getElementById('btn_filter').classList.remove('btn-light')
        document.getElementById('btn_filter').classList.add('btn-dark')
    }

    if (document.getElementById('ns') != null) {
        document.getElementById('tag').classList.remove('dark')
        document.getElementById('ns').classList.remove('dark')
        document.getElementById('pn').classList.remove('dark')
        document.getElementById('size').classList.remove('dark')
        document.getElementById('fab').classList.remove('dark')
        document.getElementById('loc').classList.remove('dark')
        document.getElementById('model').classList.remove('dark')
    }

    if (document.getElementById('date') != null) {
        document.getElementById('name').classList.remove('dark')
        document.getElementById('size').classList.remove('dark')
        document.getElementById('tag').classList.remove('dark')
        document.getElementById('date').classList.remove('dark')
    }

    if (document.getElementById('word') != null) {
        document.getElementById('word').classList.remove('dark')
    }
    if (document.getElementById('cab_tab') != null) {
        document.getElementById('cab_tab').classList.remove('thead-light')
        document.getElementById('table').classList.remove('table-dark')
    }
    if (document.getElementById('cab_tab2') != null) {
        document.getElementById('cab_tab2').classList.remove('thead-light')
        document.getElementById('table2').classList.remove('table-dark')
    }
}

const Theme = {
    
    setMode: function(){ 
        m = document.getElementById('thememode').checked
        if (m==true){
            sessionStorage.setItem('Theme',"dark")
            Theme.checkMode()
        }else{
            sessionStorage.setItem('Theme',"white")
            Theme.checkMode()
        }
    },
    checkMode: function(){
        current = sessionStorage.getItem('Theme')
        if (current == "dark"){
            document.getElementById('thememode').checked = true
            enableTheme()
        }else{
            document.getElementById('thememode').checked = false
            disableTheme()
        }
    }
}
const themeToggle = Theme.setMode
const checkTheme = Theme.checkMode
window.onload = checkTheme;