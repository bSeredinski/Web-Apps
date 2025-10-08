let http = require('http');
const fs = require("node:fs");

const url = require('url');


const server = http.createServer((req, res) => {
    switch (req.url.split('?')[0]) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write('Hello World!');
            res.end('\n');
            break;
        case '/1':
            res.writeHead(200, { 'Content-Type': 'application/json' });
            const jsonText = "This is json text";
            res.end(JSON.stringify(jsonText));
            break;
        case '/2':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Text HTML!</h1>');
            break;
        case '/3':
            res.writeHead(200, { 'Content-Type': 'text/html' });

            try{
                const data = fs.readFileSync('./main.html');
                console.log(data);
                res.end(data);
            } catch(e) {
                console.error(e);
                res.end(e);
            }
            break;
        case '/getparams':
            const parsedURL = url.parse(req.url, true);
            console.log(parsedURL);
            const query =parsedURL.query;
            try{
                const timeStamp = Date.now();
                const filename = `params_${timeStamp}.json`;
                fs.writeFileSync(filename, JSON.stringify(query, null, 2), "utf-8");
                console.log('nice');
            }
            catch(err) {
                console.error('bad: ', err);
            }
            const ok = {ok: 'ok'}
            res.end(JSON.stringify(ok));
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('\n');
    }

});

const PORT = 3000;

server.listen(PORT, 'localhost', () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});