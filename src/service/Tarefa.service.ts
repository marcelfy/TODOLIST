import { Api } from '../index';
import { TarefaModel } from '../model/TarefaModel';

const TarefaService = {
    post: async (tarefa:TarefaModel): Promise<any> =>{
        return await Api.post('/tarefas', tarefa)
        .then((res:any)=>{
            return res.data
        })
    },
    get: async (): Promise<any> =>{
        return await Api.get('/tarefas')
        .then((res:any)=>{
            return res.data
        })
    },
    put: async (tarefa:TarefaModel, id:number): Promise<any> =>{
        return await Api.put(`/tarefas/${id}`, tarefa)
        .then((res:any)=>{
            return res.data
        })
    },
    delete: async (id:number): Promise<any> =>{
        return await Api.delete(`/tarefas/${id}`, )
        .then((res:any)=>{
            return res.data
        })
    }
}

export default TarefaService;