import "./App.css";
import React from "react";

import Primeiro from "./components/basic/Primeiro";
import ComParametro from "./components/basic/ComParametro";
import Fragmento from "./components/basic/Fragmento";
import Aleatorio from "./components/basic/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basic/Familia";
import Membro from "./components/basic/Membro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProduto from "./components/repeticao/TabelaProduto";


export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo="#07 - Repetição - Produtos" color="#DC7633">
                    <TabelaProduto></TabelaProduto>
                </Card> 

                <Card titulo="#06 - Repetição - Alunos" color="#DC7633">
                    <ListaAlunos></ListaAlunos>
                </Card> 

                <Card titulo="#05 - Componente com Filhos" color="#34495E">
                    <Familia sobrenome="Silva">
                        <Membro nome="Pedro" />
                        <Membro nome="Ana" />
                        <Membro nome="Gustavo"/>


                    </Familia>
                </Card> 

                <Card titulo="04# - Desafio Aleatório" color="#080" >
                    <Aleatorio max={10} min={0} /> 
                </Card>

                <Card titulo="#03 - Fragmento" color="#F1C40F">
                    <Fragmento />   
                </Card>

                <Card titulo="#02 - Com Parametro" color="#6C3483">
                    <ComParametro 
                        titulo='Situação do Aluno'
                        aluno='Thiago' 
                        nota={9.5}
                    /> 
                </Card>

                <Card titulo="#01 - Primeiro" color="#5DADE2">
                    <Primeiro/> 
                </Card>
            </div>
        </div>
    )
}