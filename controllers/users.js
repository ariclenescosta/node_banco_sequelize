const express = require('express');

const router = express.Router();

//incluir arquivo que possui a conexao com o banco de dados
const db = require('./../db/models');

router.get("/users", async (req, res) => {
    const users = await db.Users.findAll({

        //indicar quais colunas recuperar do banco de dados
        attributes: ['id', 'name', 'email'],

        //Ordernar os registro pela coluna ID
        order:[['id', 'DESC']]
    })

    if(users){
        return res.json({
            users: users
        })
    }else{
        return res.status(400).json({
            mensagem: "Não foi possivel consultar os usuários!"
        })
    }
})

router.post("/users", async (req, res) =>{

    //receber dados enviados no corpo da requisição
    var dados = req.body;
    console.log(dados)

    //salvar no banco de dados
    await db.Users.create(dados).then((dadosUsuario) => {
        //Pausar o processamento e retornar os dados em formato de objeto

        return res.json({
            mensagem: "Usuario cadastrado com sucesso!",
            dadosUsuario
        })

    }).catch(()=>{
        //Pausar o processamento e retornar mensagem de erro

        return res.json({
            mensagem: "Não foi possivel cadastrar o usuário!"
        })
    })
})

module.exports = router;