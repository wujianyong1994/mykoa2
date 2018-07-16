const Koa = require('koa');
const app = new Koa();
const port = 3008
// response
app.use(ctx => {
    
    ctx.body = 'Hello Koa2';
});

app.listen(port);
console.log('koa started '+port)