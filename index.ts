import express from "express";

const app = express();

app.get("/", (req: express.Request, res: express.Response) => {
  res
    .status(200)
    .json({ success: true, message: "Hello from contest management server : server-2" });
});

app.listen(8000, () => {
  console.log("listening to port: 8000");
});
