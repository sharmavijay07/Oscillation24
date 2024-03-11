const express = require('express');
const path = require('path')
const pubPath = path.join(__dirname,"public");
const app = express();
app.use(express.static(__dirname+'/images'));

app.get('/',(req,resp) => {
    resp.sendFile(`${pubPath}/index.html`);
});
app.get('/hackathon',(req,resp) => {
    resp.sendFile(`${pubPath}/hackathon.html`);
});
app.get('/chess',(req,resp) => {
    resp.sendFile(`${pubPath}/chess.html`);
});
app.get('/hugstobugs',(req,resp) => {
    resp.sendFile(`${pubPath}/hugstobugs.html`);
});
app.get('/treasurehunt',(req,resp) => {
    resp.sendFile(`${pubPath}/treasurehunt.html`);
});
app.get('/blindcoding',(req,resp) => {
    resp.sendFile(`${pubPath}/blindcoding.html`);
});
app.get('/projectpresent',(req,resp) => {
    resp.sendFile(`${pubPath}/projectpresent.html`);
});
app.listen(4500);