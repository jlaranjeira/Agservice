import "./formView.scss"
import { useState, useEffect } from 'react'; 
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

type Props = {  
    slug: string;
  };

const FormView1 = (props: Props) => {
  const { id } = useParams();  

  //Estados do componente
  const [data, setData] = useState([]);

// Declarar a variável para receber a mensagem
const [message, setMessage] = useState("");

  
  const [showEditForm, setShowEditForm] = useState(false);

  const getUser = async () => {
        
    if (id === undefined) {
        setMessage("Erro: Usuário não encontrado!");
        return
    }
   
    await axios
    .get(`http://localhost:3000/client/${id}`)
        .then((response) => { 
            setData(response.data);
        }).catch((err) => { 
            
            if (err.response) {
                // Atribuir a mensagem no state message
                setMessage(err.response.data.mensagem);
            } else {
                // Atribuir a mensagem no state message
                setMessage("Erro: Tente mais tarde!");
            }
        });
  }

        useEffect(() => {
            // Chamar a função com requisição para API
            getUser();
        }, [id]);
    
        // Receber os dados dos campos do formulário
       





  //const navigate = useNavigate();

  //const handleClick = () => {
    //return navigate("/home");
  //};

  const toggleEditForm = () => {
    setShowEditForm(!showEditForm);
  };

  // Receber os dados dos campos do formulário
  //const valueInput = (e) => setData({ ...data, [e.target.name]: e.target.value });

    
  const editClient = async (e) => {       
      e.preventDefault();

      const headers = {
          'headers': {              
              'Content-Type': 'application/json'
          }
      }
      
      await axios.put(`http://localhost:3000/${props.slug}/${id}`, data, headers)
            .then((response) => { 
                setMessage(response.data.mensagem);
            }).catch((err) => { 
                
                if (err.response) {
                    setMessage(err.response.data.mensagem);
                } else {
                    setMessage("Erro: Tente novamente mais tarde ou entre contato com ...!");
                }
            });

  }

  return (
    <div className="container-form-view">           
        

            {!showEditForm ? (
            <div>
                <div className="form-view">
                
                    <div className="content-view">
                                              
                    
                    <div className="content-view">
                        <h2>Dados do {props.slug}</h2>

                        <span>ID: {data.id}</span>

                        <label>
                        Nome: <span>{data.nome}</span>
                        </label>

                        <label>
                        Email: <span>{data.email}</span>
                        </label>

                        <label>
                        Telefome: <span>{data.telefone}</span>
                        </label>

                        <label>
                        Endereço: <span>{data.endereco}</span>
                        </label>
                    </div>
                    
                
                
                    </div>
                   
                </div>
            </div>
            ) : (
            <div className="content-edit">
                <h2>Editar dados do {props.slug}</h2>
                <form className="forme-edit" onSubmit={editClient}>
                
                    <div className="content-form-edit">
                        
                        <input type="hidden" name="id" onChange={valueInput} value={data.id}/>
                        <label>Nome:</label>
                        <input type="text" name="nome" onChange={valueInput} value={data.nome} />
                        <label>E-mail:</label>
                        <input type="text" name="email" onChange={valueInput} value={data.email}/>
                        <label>Telefone:</label>
                        <input type="text" name="telefone" onChange={valueInput} value={data.telefone}/>
                        <label>Endereço:</label>
                        <input type="text" name="endereco" onChange={valueInput} value={data.endereco}/>
                        <button type="submit">Atualizar</button>
                    </div>
                
                    
                    
                </form>
            </div>
            )}

            <div className="div-btn-formView">
                <button className="btn-form-view-edit" onClick={toggleEditForm}>
                    {!showEditForm ? "Editar" : "Fechar"}
                </button>
                
                
            </div>

        

            {/* */}
        


    </div>

      
      
    
  );
};

export default FormView1;

