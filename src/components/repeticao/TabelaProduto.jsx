import React from "react";
import produtos from "../../data/produtos.js";

export default () => {
    const produtosTB = produtos.map((produto) => {
        return (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R${produto.preco.toFixed(2)}</td>
            </tr>
        )
    })
    
        return (
        <table className="Tabela">
            <thead>
                <tr>
                    <td><strong>Id</strong></td>
                    <td><strong>Nome</strong></td>
                    <td><strong>Preço</strong></td>
                </tr>
            </thead>
            <tbody>
                {produtosTB}
            </tbody>
            
        </table>
    )
}