import express from "express";
import cors from "cors";
import "dotenv/config";
import { clerkClient, clerkMiddleware, getAuth } from "@clerk/express";
import type { User } from "@clerk/express";

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

const app = express();

app.use(clerkMiddleware());

app.use(cors(corsOptions));

app.get("/", async (req: express.Request, res: express.Response) => {
  const { userId } = getAuth(req);

  let user: User | null = null;
  let nombre: string | null | undefined = null;

  if (userId) {
    user = await clerkClient.users.getUser(userId);
    nombre = user.raw?.first_name;
  }
  console.log(nombre);
  return res.json(
    userId
      ? { message: `Hola ${nombre}! 👋` }
      : { message: "No tienes poder aquí 😢" }
  );
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
