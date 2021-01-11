// --------------------- SWAL FUNCTIONS-----------------
function add_success() {
    swal({
        text: "Inserido com Sucesso!",
        icon: "success",
        button: null,
    }).then(() => {
        // ask_add_again();
    });
};
function ask_add_again() {
    swal({
        title: "Deseja adicionar mais?",
        icon: "info",
        buttons: {
            confirm:{
                text:"Sim",
                value:"confirm"
            },
            cancel:"Não",
        }
    })
        .then((value) => {
            switch (value) {
                case "confirm":
                        javascript:history.go(-1);
                    break;
            }
        });
}
function add_error() {
    swal({
        text: "Erro ao inserir!",
        icon: "error",
        button: null,
    }).then(() => {
        // javascript:history.go(-1)
    });
};
function date_error() {
    swal({
        text: "Preencha a data no formato DD-MM-AAAA",
        icon: "error",
        button: null,
    }).then(() => {
        javascript:history.go(-1)
    });
};
function missing_data() {
    swal({
        text: "Preencha todos os Campos antes de adicionar",
        icon: "error",
        button: null,
    }).then(() => {
        javascript:history.go(-1)
    });
};
function showerror() {
    swal({
        text: "Algo de errado não está certo!",
        icon: "error",
        button: null,
    });
};
function error() {
    swal({
        text: "Ainda não implementado!",
        icon: "error",
        button: null,
    });
};
function search_warning() {
    swal({
        text: "Para tornar a busca mais eficiente insira um filtro clicando no botão no lado esquerdo",
        icon: "info",
        button: null,
        timer:2500,
    })
};
function inserterror() {
    swal({
        text: "Marque o que deseja buscar!",
        icon: "error",
        button: null,
    })
};
function del_error() {
    swal({
        text: "Erro ao deletar\nTente novamente mais tarde!",
        icon: "error",
        button: null,
    }).then(() => {
        reload();
    });
};
function del_success() {
    swal({
        text: ("Deletado com Sucesso!"),
        icon: "success",
        button: null,
    }).then(() => {
        reload();
    });
};
function foundNothing() {
    swal({
        text: "Desculpe!\nNão encontramos nada com o termo inserido",
        icon: "error",
        button: null,
    }).then(() => {
        swal({
            text: ("Nossos sistemas não são Case-Sensitive!\nNão sendo necessário diferenciar letras Maiúsculas e Minúsculas"),
            icon: "warning",
            button: null,
        });
    });;
}
function del_confirm(id,name,item) {
    swal({
        title: "Tem certeza que deseja remover "+name+"?",
        text: "Não será possivel reverter esta ação!",
        icon: "warning",
        buttons: {
            confirm:{
                text:"Sim",
                value:"confirm"
            },
            cancel:"Não",
        },
        dangermode:true
    })
        .then((value) => {
            switch (value) {
                case "confirm":
                    if(item=="imgbkp")
                        del_img_bkp(id);
                    if(item=="hd")
                        del_hd(id);
                    break;
            }
        });
}
