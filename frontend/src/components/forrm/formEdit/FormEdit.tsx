import axios from 'axios';
import Link, { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function Visualizar() {

    const [data, setData] = useState([]);    
    const [message, setMessage] = useState("");
   
    const { id } = useParams();  
    
    const getUser = async () => {

        // Retornar erro quando não tiver o id do usuário
        if (id === undefined) {
            setMessage("Erro: Usuário não encontrado!");
            return
        }

        // Realizar a requisição para API com axios para a rota recuperar os usuários
        await axios.get(`http://localhost:3000/client/${id}`)
            .then((response) => {  
                setData(response.data);                
            }).catch((err) => { 
                if (err.response) {
                    
                    setMessage(err.response.data.mensagem);
                } else {
                    
                    setMessage("Erro: Tente mais tarde!");
                }
            });
    }

    // useEffect é usado para lidar com efeitos colaterais em um componente. Por exemplo, atualizar o estado do componente, fazer chamadas a APIs, manipular eventos, entre outros.
    useEffect(() => {
        // Chamar a função com requisição para API
        getUser();
    },[id]);

    return (
        <>
            
            <main>             

                <h2>Detalhes do Usuário</h2>

                {message ? <p>{message}</p> : ""}

                <span>ID: {data.id}</span><br />
                <span>Nome: {data.name}</span><br />
                <span>E-mail: {data.email}</span><br />

            </main>
        </>
    )
}
