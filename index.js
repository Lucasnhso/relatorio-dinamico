var pdf = require("html-pdf")
var ejs = require("ejs")

let options = {
    format: 'A4',
    orientation: 'portrait',
    border: {top:'5mm',right:'5mm',bottom:'2mm',left:'5mm'},
    footer: {height:'10mm',contents:{default:'<div style="text-align:right;font-size:10px;">{{page}} / {{pages}}</div>'}}
  }
let cliente = "TESTE DISTRIBUIDORA"
let titulo = "Empresas"
//Cabeçalho das colunas
let colunas = ['Empresa', 'Fone', 'Endereço', 'Cidade', 'UF', 'Vendedor']
//Conteudo das colunas, cada array é uma coluna
let conteudo = [["Condor", "Big", "Mufatto"],
                ['(41)3234-3030', '(41)3030-9547', '(41)3521-3030'],
                ["Rua do Condor nº10", "Rua do Big nº10", "Rua do Mufatto nº10"],
                ["Curitiba", "Penha", "Sao Paulo"],
                ["PR", "SC", "SP"],
                ["Vitor", "Pedro", "Luan"]]


ejs.renderFile("./relatorio.ejs",{colunas: colunas, cliente: cliente, titulo: titulo, conteudo: conteudo}, (err, html) =>{
    if(err){
        console.log(err)
    }
    else{
        pdf.create(html,options).toFile("./Relatorio.pdf", (err, res) => {
            if(err){
                console.log("erro")
            }
            else{
                console.log(res)
            }
        })
    }
})