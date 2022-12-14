import React, { useEffect, useState } from 'react';
import TarefaService from './service/Tarefa.service';
import './App.css'
import { TarefaModel } from './model/TarefaModel';
import { message } from 'antd';
import Tarefa from './components/Tarefa/Tarefa';

const App: React.FC = () => {

  const [tarefas, setTarefas] = useState<TarefaModel[]>([])
  const [descricao, setDescricao] = useState<string>('');

  useEffect(() => {
    TarefaService.get().then((resp: any) => {
      setTarefas(resp)
    })
  }, [])

  function adicionarTarefa() {   
    let tarefa = {
      id: 0,
      descricao: descricao,
      finalizada: false,
    }

    
    TarefaService.post(tarefa).then((resp) => {
      setDescricao('')
      message.success("Tarefa cadastrada com sucesso")
      buscar()
    })
  }

  function buscar() {
    TarefaService.get().then((resp: any) => {
      setTarefas(resp)
    })
  }

  return (
    <div className="container">
      <h3>To Do List</h3>
      <div className="tasks">
        <input placeholder="Adicione uma tarefa..." className="input" id="campo" onChange={(e)=> setDescricao(e.target.value)} value={descricao}/>
        <button className="btn" onClick={adicionarTarefa}>Adicionar</button>
        {tarefas?.map((t, index) => {
          return <Tarefa descricao={t.descricao} key={index} finalizada={t.finalizada} id={t.id} atualizarParent={buscar}/>
        })}
      </div>
    </div>
  )

}

export default App;
