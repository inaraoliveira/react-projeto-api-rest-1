import React, { useEffect, useState } from "react";
import ApiCadastros from '../services/ApiCadastros';

export default function Cadastro(){
    const [dados, setDados] = useState([]);
    const [botao, setBotao] = useState(true)
    var conteudo = [];

    useEffect(() => {
        ApiCadastros.get('')
        .then((Response) => {
            setDados(Response.data.results);
        }).catch((Error) => {
            console.log('erro' + Error);
        });
    }, [botao]);

    conteudo = dados.slice(0, 10);

    return(
        <section className='cadastros'>
            <h1>Pessoas Cadastradas</h1>
            <button onClick={() => {botao? setBotao(false) : setBotao(true)}}>Novos perfis</button>
            <div className='containerPerfis'>
                {conteudo.map(dados => {
                    return  <div className='perfis'>
                                <img src={dados.picture.medium} alt='Perfil' />
                                <p>{dados.name.first} {dados.name.last} </p>
                            </div>
                    })
                }
            </div>
        </section>
    )
}