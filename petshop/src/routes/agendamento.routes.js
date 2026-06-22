import { Router } from "express";

import AgendamentoController from "../controllers/agendamento.controller";

const router = Router();

router.post("/api/agendamento", AgendamentoController.cadastrar);

export default router;