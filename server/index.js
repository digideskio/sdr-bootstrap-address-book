/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');
const http = require('http');

const argv = require('minimist')(process.argv.slice(2));
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();
const request = require('request');

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json({type: 'application/json'});
app.use(bodyParser.urlencoded({ extended: true }));

app.use(jsonParser);


var Data={};

app.get('/init', function(req,res){

    //GET to external server

    var promise = new Promise(function(resolve,reject){
        const optionsGet = {
            'url': "https://pacific-harbor-20731.herokuapp.com/data",
            'method': 'POST',
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };

        request.get(optionsGet, function(error,response,body){
            resolve(JSON.parse(body));
        });
    });
    promise.then(
        result => {
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        }
    );

});




app.post('/post', function(req, res) {

    const author = req.body.author;
    const text = req.body.text;
    const newComment = {

        author: author,
        text: text
    };

    const options = {
        'url': "https://pacific-harbor-20731.herokuapp.com/postData",
        'method': 'POST',
        'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(newComment)
    };

    request.post(options,function(error,response,body){

    });


    res.send("Reseived");
    res.end();
});





// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});




// get the intended port number, use port 3000 if not provided
const port = argv.port || process.env.PORT || 3000;

// Start your app.
app.listen(port, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, url);
    });
  } else {
    logger.appStarted(port);
  }
});
