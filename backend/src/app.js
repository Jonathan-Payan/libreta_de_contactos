import express from "express";
import morgan from "morgan";
import { setAssociations } from "./config/database-associations.js";
import contactsRoutes from "./routes/contact.routes.js";
import usersRoutes from "./routes/user.routes.js";
import cors from "cors";



const app = express();

setAssociations();

// Middleware de CORS
app.use(cors()); // Habilita CORS para todas las rutas

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/contacts", contactsRoutes);
app.use("/api/", usersRoutes);

export default app;
