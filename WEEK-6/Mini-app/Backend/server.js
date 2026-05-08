import exp from "express";
import { config } from "dotenv";
import { empApp } from "./API/EmployeeAPI.js";
import { connect } from "mongoose";
import cors from "cors";
config();

const app = exp();
app.use(exp.json());

// simple request logger to see all incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// health-check route
app.get("/", (req, res) => res.status(200).json({ status: "ok" }));

// Allow requests from the Vite dev server(s) and handle preflight
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    optionsSuccessStatus: 200,
  }),
);

app.use("/emp-api", empApp);

const connectDB = async () => {
  try {
    await connect(process.env.DB_URL);
    const port = process.env.PORT;
    app.listen(port, () => console.log(`server running on port ${port}`));
  } catch (err) {
    console.error("Error in connecting to database", err);
  }
};
connectDB();

app.use((req, res, next) => {
  console.log(req.url);
  res
    .status(404)
    .json({
      message: "error occured",
      error: `the path ${req.url} is not found`,
    });
});
