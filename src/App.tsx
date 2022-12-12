import React, { useEffect, useState } from 'react';
import TarefaService from './service/TarefaService';
import './App.css'
import { TarefaModel } from './model/TarefaModel';
import { message } from 'antd';
import Tarefa from './components/Tarefa/Tarefa';

const App: React.FC = () => {

  const [tarefas, setTarefas] = useState<TarefaModel[]>([])

  useEffect(() => {
    TarefaService.get().then((resp: any) => {
      setTarefas(resp)
    })
  }, [])

  function adicionarTarefa() {
    let descricao = (document.querySelector("input")?.value);
    let tarefa = {
      id: 0,
      descricao: descricao,
      finalizada: false,
    }

    TarefaService.post(tarefa).then((resp) => {
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
        <input placeholder="Adicione uma tarefa..." className="input" id="input" />
        <button className="btn" onClick={adicionarTarefa}>Adicionar</button>
        {tarefas?.map((t, index) => {
          return <Tarefa descricao={t.descricao} key={index} finalizada={t.finalizada} id={t.id} atualizarParent={buscar}/>
        })}
      </div>
    </div>
  )

}

export default App;
