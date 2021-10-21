import { serverHttp } from "../src/app";

// Inicia o servidor na porta 4000
serverHttp.listen(4000, () => console.log(`🚀 Servidor rodando na porta 4000 👊`));