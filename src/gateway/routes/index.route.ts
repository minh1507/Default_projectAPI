import app1 from "./app1.route.ts";
import authRoute from "./authentication.route.ts";
export const direct = (app: any) => {
  app1(app);
  authRoute(app)
};


