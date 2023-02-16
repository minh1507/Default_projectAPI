import Log4js from "log4js";

Log4js.configure({
  appenders: { log: { type: "file", filename: "log.log" } },
  categories: { default: { appenders: ["log"], level: "error" } },
});

const interceptor = (req: any, res: any, next: any) => {
  const logger = Log4js.getLogger(req.method);
  logger.fatal("Host: " + req.headers["host"] + ", path: " + req.url);
  next();
};

export default interceptor