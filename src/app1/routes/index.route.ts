import catRoute from "./cat.route.js";
import userRoute from "./user.route.js"
import fileRoute from "./file.route.js"
import crawlRoute from "./crawl.route.js"

export const animalRoutes = (app: any) => {
  catRoute(app);
  userRoute(app)
  fileRoute(app)
  crawlRoute(app)
};


