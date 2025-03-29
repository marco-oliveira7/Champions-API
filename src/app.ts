import express, { json } from "express";
import router from "./routes";
import cors from "cors"

function createApp() {
  const app = express();

  const corsOptions = {
    methods: ["GET", "POST", "DELETE", "PATCH",]
  }

  app.use(json());
  app.use("/api", router);
  app.use(cors(corsOptions))
  return app
}

export default createApp
