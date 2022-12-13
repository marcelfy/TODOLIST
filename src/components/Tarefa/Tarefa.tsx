import { DeleteOutlined } from '@ant-design/icons'
import { message } from 'antd'
import React from 'react'
import TarefaService from '../../service/Tarefa.service'
import Styles from './Tarefa.module.css'


interface TarefaProps {
  id: number | 0,
  descricao: string | undefined,
  finalizada: boolean,
  atualizarParent: Function,
}

const Tarefa: React.FC<TarefaProps> = (props) => {

  function excluirTarefa() {
    TarefaService.delete(props.id).then(() => {
      message.success("Tarefa excluida com sucesso")
      props.atualizarParent()
    })
  }

  function finalizar(e: any) {
    let tarefa = {
      id: props.id,
      descricao: props.descricao,
      finalizada: e.target.checked,
    }

    TarefaService.put(tarefa, tarefa.id).then((resp) => {
      message.success("Tarefa atualizada com sucesso")
      props.atualizarParent()
    })
  }

  function atualizar(e: React.FocusEvent<HTMLInputElement>) {
    var tarefa = {
      id: props.id,
      descricao: e.target.value,
      finalizada: props.finalizada,
    }

    TarefaService.put(tarefa, tarefa.id).then((resp) => {
      message.success("Tarefa atualizada com sucesso")
      props.atualizarParent()
    })

  }

  return (
    <div className={Styles.area}>
      <input className={Styles.input} defaultValue={props?.descricao} onBlur={(e) => atualizar(e)} id="inputText"  disabled={props.finalizada} />
      <DeleteOutlined className={Styles.deleteIcon} onClick={excluirTarefa} />
      <input type="checkbox" className={Styles.checkbox} checked={props.finalizada} onChange={(e) => finalizar(e)}/>
    </div>
  )
}

export default Tarefa