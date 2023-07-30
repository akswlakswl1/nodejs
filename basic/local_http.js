const http = require('http');
const fs = require('fs').promises;
const html = "./local_http.html"
// const server = http.createServer((req, res) => {
//   //한글 추가시 사용
//   res.writeHead(200,{'Content-type':'text/html; charset=utf-8'});
//   res.write('<h1>Hello Hyewon!</h1>');
//   res.write('<p>Hello server</p>');
//   res.end('<p>Bye Hyewon!</p>');
// })

const server = http.createServer(async (req, res) => {
  try {
    res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
    const data = await fs.readFile(html);
    res.end(data);

  } catch (error) {
    console.error(error);
    res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
    res.end(error.message);
  }

})

  .listen(8080);
server.on('listening',() =>{
    console.log('8080번 포트에서 서버 대기 중입니다.');
});

server.on('error',(error) =>
{
    console.error(error);
});