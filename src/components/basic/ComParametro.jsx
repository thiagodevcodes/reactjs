import React from "react"

export default (props) => {
    const situacao = props.nota >= 7 ? 'Aprovado' : 'Reprovado';
    return (
        <div>
            <h1>{props.titulo}</h1>
            <p>
                O aluno 
                <strong> { props.aluno } </strong>tem a nota
                <strong> { props.nota } </strong>e está 
                <strong> { situacao } </strong>
            </p>
        </div>
    )
}