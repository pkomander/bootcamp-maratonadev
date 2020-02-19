//configurando o servidor
const express = require("express")//pedindo ao node pegar no nodemodels o express
const server = express()//express e uma funcionalidade que vai para o server

//configurar o servidor para apresentar arquivos extras estáticos
server.use(express.static('public'))


//habilitar body do formulario
server.use(express.urlencoded({extended: true}))

//configurando a template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {//objeto
    express: server
    noCache: true,//boolean ou booleano
})


//lista de doadores: vetor ou array
const donors = [//array
    {objeto
        name: "Paulo Ricardo",
        blood: "AB+"
    },
    {objeto
        name: "Diego Fernandes",
        blood: "B+"
    },
    {objeto
        name: "João Vitor",
        blood: "A+"
    },
    {objeto
        name: "Caio Felipe",
        blood: "O+"
    }
]







//configurar a apresentação da página
server.get("/", function(req, res) {
    return res.render("index.html", { donors })
})

server.post("/", function(req, res)){
    //pegar dados do formulario
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood


    //coloco valores dentro do array
    donors.push({
        name: name,
        blood: blood,
    })

    return res.redirect("/")
}


//ligar o servidor e permitir o acesso na porta 3000
server.listen(3000, function() {
    console.log("iniciei o servidor.")
})