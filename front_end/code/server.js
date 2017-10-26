//server.js

var path = require('path'); 
var express = require('express'); 
var webpack = require('webpack'); 
var axios = require('axios'); 

//var webpackDevMiddleware = require('webpackDevMiddleware'); 
//var webpackHotMiddleware = require('webpackHotMiddleware'); 
//var express = require('express'); 

 
//import webpack from "webpack";  
//import webpackDevMiddleware from "webpack-dev-middleware";  
//import webpackHotMiddleware from "webpack-hot-middleware";  
var config  = require('./webpack.config.js');// "./webpack.config.js";

const app           = express(),  
      DIST_DIR      = path.join(__dirname, "dist"),
      HTML_FILE     = path.join(__dirname, "index.html"),
      isDevelopment = process.env.NODE_ENV !== "production",
      DEFAULT_PORT  = 8080,
      compiler      = webpack(config);

      
      console.log("DIST DIR -- " + __dirname);
      console.log("HTML_FILE -- " + HTML_FILE);
      
app.set("port", process.env.PORT || DEFAULT_PORT);

/*
if (isDevelopment) {  
    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    }));

    app.use(webpackHotMiddleware(compiler));

    app.get("*", (req, res, next) => {
        compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
            if (err) {
                return next(err);
            }
            res.set('content-type', 'text/html');
            res.send(result);
            res.end();
        });
    });
}


else */ {  
    app.use('/dist',express.static(DIST_DIR));
    app.get("/", (req, res) => res.sendFile(HTML_FILE));
    app.get("/search", somefunction);
}

app.listen(8080);

function somefunction(req , res) {
    console.log(req.query.q)

    var config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Content-Type' : 'application/json'
        }
    };

    var searchText = req.query.q
    
    axios.get('http://mule-app.default.svc.cluster.local:8081/search?q='+searchText , config)
    .then(response => {
        res.send(response.data)
    })
    .catch(function (error) {
        console.log(error);
        res.send('Error occured in fetching data')
    });
}