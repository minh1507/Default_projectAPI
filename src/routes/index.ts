import catRoute from "./cat.route.ts";
import authRoute from "./auth.route.ts";

export const animalRoutes = (app: any) => {
  catRoute(app);
};

export const authRoutes = (app: any) => {
  authRoute(app)
};


