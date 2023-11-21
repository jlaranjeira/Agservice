import "./formView.scss"
import { useState, useEffect } from 'react'; 
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";



type Props = {  
    slug: string;
  };

const FormView = (props: Props) => {
  const { id } = useParams();

  //Estados do componente
  const [data, setData] = useState([]);
    
  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/${props.slug}/${id}`)
      .then((res) => setData(res.data))
      .then((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    return navigate("/home");
  };

  const toggleEditForm = () => {
    setShowEditForm(!showEditForm);
  };

  const valueInput = (e) => 
  setData({value: e.target.value });
  

  const editPost = () => {
    e.preventDefault()
    return (
        fetch(`http://localhost:3000/${props.slug}/${id}`, {
             method: 'PUT',
             headers: {
                'Content-type' : 'application/json',
             },
             body: JSON.stringify(data),
        })
            .then((resp) => resp.json(data))
            .then((data) => {
                setData(data)
                setShowEditForm(false)
            })
            .catch((err) => console.log(err))
    )
    
  }

  

  return (
    <div className="container-form-view">           
        

            {!showEditForm ? (
            <div>
                <div className="form-view">
                {
                  data.map((data, index) => {
                    return (
                    <div className="content-view" key={index}>
                      <div className="div-header-view">
                        <h2>Visualizar dados do {props.slug}</h2>
                        <button className="btn-form-view-edit" onClick= {toggleEditForm}>
                        {!showEditForm ? "Editar" : "Fechar"}
                        </button>
                      </div>                       
                        
                        <span><strong>ID:</strong> {data.id}</span>                    
                        <span><strong>Nome:</strong> {data.nome}</span>                 
                        <span><strong>Descrição:</strong>  {data.description}</span>              
                        <span><strong>Preço:</strong> {data.price}</span>        
                       
                        
                    </div>
                    );
                }
                )}
                </div>
            </div>
            ) : (
            <div className="content-edit">
                <div className="div-header-form-edit">
                  <h2>Editar dados do {props.slug}</h2>
                  <button className="btn-form-view-edit" onClick={toggleEditForm}>
                    {!showEditForm ? "Editar" : "Fechar"}
                  </button>
                </div>
                
                <form className="forme-edit" onSubmit={editPost}>
                {data.map((data, index) => {
                    return (
                    <div className="content-form-edit" key={index}>
                        
                        <input type="hidden" name="id" value={data.id}/>
                        <label>Nome:</label>
                        <input type="text" name="nome"  value={data.nome} onChange={data}/>
                        <label>Descrição:</label>
                        <input type="text" name="email" value={data.description}/>
                        <label>Preço:</label>
                        <input type="text" name="telefone" value={data.price}/>
                        
                        <button className="btn-update" type="submit">Atualizar</button>
                    </div>
                    );
                })}
                    
                    
                </form>
            </div>
            )}

            <div className="div-btn-formView">
                
                
                
            </div>

        

            {/* */}
        


    </div>

      
      
    
  );
};

export default FormView;

