import {} from 'react'
import Sonic from './assets/sonic.png'
import './Conteudo.css'
function Conteudo(){
    const aluno = "Wellington";
    const curso = "Engenharia";
    return(
        <>
        <p>{aluno}</p>
        <p>{curso}</p>
        <img src={Sonic} title='Sonic'/>
        </>
    )

}

export default Conteudo