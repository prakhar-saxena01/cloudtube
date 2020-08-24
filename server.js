const {Pinski} = require("pinski")
const {setInstance} = require("pinski/plugins")

const server = new Pinski({
	port: 8080,
	relativeRoot: __dirname,
	filesDir: "html"
})

setInstance(server)

server.addSassDir("sass", ["sass/includes"])
server.addRoute("/static/css/main.css", "sass/main.sass", "sass")

server.addPugDir("pug", ["pug/includes"])
server.addRoute("/", "pug/home.pug", "pug")

server.addStaticHashTableDir("html/static/js")
server.addStaticHashTableDir("html/static/js/elemjs")

server.addAPIDir("api")

server.startServer()