import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

// Rota authenticate
router.post("/authenticate", new AuthenticateUserController().handle)

// Rota messages
router.post("/messages", ensureAuthenticated, new CreateMessageController().handle)

// Rota messages/last3
router.get("/messages/last3", new GetLast3MessagesController().handle)

// Rota profile
router.get("/profile", ensureAuthenticated, new ProfileUserController().handle)

export { router }