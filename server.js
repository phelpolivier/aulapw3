// req = request
// res = response

const http = require('http')

// server é a variável 
// => é um arrow function
const server = http.createServer((req, res) => {
    const {url, method} = req // desestruturação do objeto req
    /* req = {
        url: "string",
        method: "GET",
        body:  "",
        params: ""
    } */

    if (method == "GET" && url == "/list"){
        const musica = {
            id: 1,
            banda: "Black Sabbath",
            estilo: "Heavy Metal"
        }
        console.log("Método GET selecionado!")
        res.end(JSON.stringify(musica))
    }
    console.log ("url: ", url)
    console.log ("method: ", method)

    res.end(JSON.stringify("capitei a mensagem"))

} )

server.listen(3000, () => console.log("Servidor rodando na porta 3000"))


