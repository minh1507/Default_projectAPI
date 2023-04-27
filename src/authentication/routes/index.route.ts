import authRoute from "./auth.route.js";

export const animalRoutes = (app: any) => {
  authRoute(app);
};
