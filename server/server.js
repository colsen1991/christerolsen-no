const express = require('express');
const fs = require('fs');
const http = require('http');
const https = require('https');
const path = require('path');
const bodyParser = require('body-parser');
const loggerMiddleware = require('./middleware/log');
const wadsworth = require('./logging/wadsworth');

process.env.NODE_ENV = JSON.stringify(process.argv[2]);

// ======================================================================================================================

const httpsApp = express();

httpsApp.set('credentials', {
  cert: fs.readFileSync(path.resolve(`${__dirname}/config/ssl/certificate.cert`)),
  key: fs.readFileSync(path.resolve(`${__dirname}/config/ssl/private_key.key`))
});

httpsApp.use(bodyParser.urlencoded({ extended: true }));
httpsApp.use(bodyParser.json());
httpsApp.use(loggerMiddleware.logFile);
httpsApp.use(loggerMiddleware.logConsole);

httpsApp.use('/src', express.static(path.resolve(`${__dirname}/../web/src`)));
httpsApp.use('/img', express.static(path.resolve(`${__dirname}/../web/img`)));
httpsApp.use('/style', express.static(path.resolve(`${__dirname}/../web/style`)));
httpsApp.get('*', (req, res) => res.sendFile(path.resolve(`${__dirname}/../web/index.html`)));
httpsApp.use((error, req, res, ignore) => { // eslint-disable-line
  wadsworth.logError(error);

  res.status(500);

  if (req.xhr)
    res.json({ error: 'A thing happened...' });
  else
    res.sendFile(path.resolve(path.resolve(`${__dirname}/../web/error.html`)));
});

const httpsServer = https.createServer(httpsApp.get('credentials'), httpsApp);

httpsServer.listen(443, () => {
  const host = httpsServer.address().address;
  const port = httpsServer.address().port;

  wadsworth.logInfo(`Node server listening at https://${host}:${port}`);
});

// ======================================================================================================================

const httpApp = express();

httpApp.use(loggerMiddleware.logFile);
httpApp.use(loggerMiddleware.logConsole);
httpApp.get('*', (req, res) => res.redirect(`https://${req.hostname}${req.url}`));

const httpServer = http.createServer(httpApp);

httpServer.listen(80, () => {
  const host = httpServer.address().address;
  const port = httpServer.address().port;

  wadsworth.logInfo(`Node server listening at http://${host}:${port}`);
});
