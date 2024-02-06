import express from "express";

async function globalSetup() {
  const app: express.Express = express();
  app.use(express.static("dist"));
  app.listen(3000);
}

export default globalSetup;
