import express from 'express';
const app = express();
const port = 3000;
import render from "./render";

app.use(express.static('./public'));

app.get('*',render);

app.listen(port,() => {
    console.log(`正在监听http://localhost:${port}`);
})


