import indexCtroller from './indexCtroller'
const controlerinit = {
  getAllrouters(app,router){
    app.use(router(_ =>{
      _.get('/index', indexCtroller.indexAction());
    }))
  }
}
export default controlerinit;