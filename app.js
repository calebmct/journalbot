const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const appConfig = require('./config.json');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user has connected');
    socket.on('bot request', (msg) => {
        console.log('building a journalBot response');
        journalBot(msg);
    });
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});

async function journalBot(seed_text) {
    const deepai = require('deepai');
    deepai.setApiKey(appConfig.apiKey);

    (async () => {
        let resp = await deepai.callStandardApi("text-generator", {
            text: seed_text,
        });
        console.log('posting bot message');
        io.emit('bot response', resp);
    })();
}