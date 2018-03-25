import Koa from "Koa";
import config from "./config";
import log4js from 'log4js';
import errorHandler from "./middlewares/errorHandler";
import router from "koa-simple-router";
import controllerinit from './controllers/controllerinit'
import render from 'koa-swig'
import co from 'co'
import serve from "koa-static";
const app = new Koa();
app.context.render = co.wrap(render({
  root: config.viewDir,
  autoescape: true,
  cache: 'memory', // disable, set to false 
  ext: 'html',
  varControls: ["[[", "]]"],
  writeBody: false
}));
log4js.configure({
  appenders: { cheese: { type: 'file', filename: './logs/yd.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});
const logger = log4js.getLogger('cheese');
errorHandler.error(app, logger);
controllerinit.getAllrouters(app, router);
app.use(serve(config.staticDir));
app.listen(config.port, () => {
  console.log(`ydstys listen on R${config.port}`);
})
module.exports = app;