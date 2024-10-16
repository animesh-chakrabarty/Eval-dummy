import express from "express";

const app = express();

app.get("/", (req: express.Request, res: express.Response) => {
  res
    .status(200)
    .json({ success: true, message: "Hello from Remote Code Execution Server : server-3" });
});

app.listen(8000, () => {
  console.log("listening to port: 8000");
});
