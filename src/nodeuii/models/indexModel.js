import { resolve } from "dns";
export default class IndexModel{
  constructor(app) {}
  getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Hello IndexAction");
      }, 1000);
      //throw new Error("")
      //reject("")
    });
  }
}