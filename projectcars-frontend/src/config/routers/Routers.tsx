import App from "../../App";

interface Router {
    path: string,
    component: any
}

/**
 * Adicionar aqui todas as rotas
 */
export const routers: Router[] = [
    {
        component: App,
        path: '/'
    }
]