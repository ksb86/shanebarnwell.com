import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import React from 'react';
import cors from "cors";
import tz from 'moment-timezone';
import md5 from 'md5';
import SlackBots from 'slackbots';
import request from 'request';
import 'regenerator-runtime/runtime.js';
import {renderToString} from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import favicon from 'serve-favicon';
import compression from 'compression';
import morgan from 'morgan';
import useragent from 'useragent';
import fetch from 'isomorphic-fetch';

import config from '../config.json';
import App from './shared/App';
import Template from './Template';

// https://my.slack.com/services/new/bot
const slackBot = new SlackBots({
    token: config.slackToken,
    name: 'shanebarnwell.com'
});

import { _get } from './helpers/_.js';

const server = express();

server.use(morgan((tokens, req, res) => {
    return [
        _get(() => useragent.parse(req.headers['user-agent']).toString()) || 'unknownUA',
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms'
    ].join(' ');
}));
server.use(compression());

server.use(cors());
server.use(bodyParser.json());       // to support JSON-encoded bodies
server.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

server.use(express.static('dist/public'));
server.use(favicon(path.join('favicon.ico')));

server.get('/testApi', function(req, res, next) {
    return res.status(200).json({
        number: Date.now()
    });
});

server.get('/assetChecker', (req, res, next) => {
    var url = decodeURIComponent(req.query.url);
    // TODO: use fetch
    request(url, (error, response, body) => {
        const jsonResponse = {};
        if (error) {
            jsonResponse['status'] = 'request failed';
            jsonResponse['path'] = url;
        } else {

            if (response.statusCode !== 200) {
                jsonResponse['status'] = response.statusCode;
                jsonResponse['path'] = url;
                jsonResponse['length'] = '';
                jsonResponse['md5'] = '';
            } else {
                // compression screws up the content-length header name
                var length = response.headers['content-length'] || response.headers['cteonnt-length'];
                jsonResponse['status'] = response.statusCode;
                jsonResponse['path'] = url;
                jsonResponse['length'] = (length / 1000) + 'kb';
                jsonResponse['md5'] = md5(response.body);
            }
        }

        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.send(jsonResponse);
    });
});

server.get('*', (req, res, next) => {
    const title = 'Shane Barnwell - Senior Javascript Developer';
    // create html string of app body to insert into html template
    const body = renderToString(
        <StaticRouter location={req.url} context={{}}>
            <App />
        </StaticRouter>
    );

    const cssPath = (process.env.NODE_ENV === 'production' ? '/shanebarnwell.1.0.0.min.css' : '/styles.css');
    const jsPath = (process.env.NODE_ENV === 'production' ? '/shanebarnwell.1.0.0.min.js' : '/browser.js');

    res.send(
        Template({
            path: (req.path === '/') ? 'home' : req.path.replace('/', ''),
            title,
            body,
            cssPath,
            jsPath
        })
    );
});

/* POST a post handler. */
server.post('/contact', async (req, res, next) => {
    const captchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${config.recaptchaSecret}&response=${req.body.token}`,
    });
    const result = await captchaResponse.json();

    console.log({result});

    slackBot.postMessageToUser('shane', `${req.body.email} said: "${req.body.message}"\n\nscore: ${(result.score)}`, (data) => {
        if (req.body.js) {
            return res.json({
                sent: true
            });
        }

        return {};
    });
});

const port = (process.env.NODE_ENV === 'production') ? 5000 : 3000;
server.listen(port, function() {
    console.log(`Listening on port ${port} @ ${tz().tz('America/Boise').format('MMM DD, YYYY - hh:mm:ssa')} (mt)`);
});
