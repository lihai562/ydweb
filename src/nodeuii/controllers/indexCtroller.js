import indexModel from '../models/indexModel';
const indexController = {
  indexAction(){
    return async (ctx, next) => {    
      const indexModelIns = new indexModel();
      const result = await indexModelIns.getData();
      ctx.body = await ctx.render('index',{data:result});
    }
  }
}
export default indexController