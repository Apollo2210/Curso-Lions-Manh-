import { Router } from "express";

import AgendamentoController from "../controllers/agendamento.controller.js";

const router = Router();

router.post("/api/agendamento", AgendamentoController.cadastrar);

export default router;