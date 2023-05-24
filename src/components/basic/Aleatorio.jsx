import React from "react";

export default (props) => {
    const min = Math.ceil(props.min);
    const max = Math.floor(props.max);

    return (
        <div>
            <h1>Números Aleatórios</h1>
            <p>Valor máximo: { props.max }</p>
            <p>Valor minimo: { props.min }  </p>
            <p>Valor sorteado: { Math.floor(Math.random() * (max - min) + min) } </p>
        </div>
    );
}