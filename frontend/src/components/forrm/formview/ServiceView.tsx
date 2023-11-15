import "./formView.scss"
import { useState, useEffect } from 'react'; 
import axios from "axios";
import { useParams } from "react-router-dom";

type Props = {  
    slug: string;
  };


const ServiceView = (props: Props) => { 
 
const {id} = useParams();   

const [data, setData] = useState([])
useEffect(() => {
    axios.get(`http://localhost:3000/${props.slug}/${id}`)
    .then(res => setData(res.data))
    .then(err => console.log(err));
}, []) 
    
    return (

        <div className="container-form-view">
            <div className="head-form-view">
                <h2>Dados do {props.slug}</h2>
            </div>

            <form className="form-view" >
                    
                    {
                        
                        data.map((data, index) => {
                            return <div className="content-view"key={index}>
                                <label>Cod: <span>{data.id}</span> </label>
                    
                    
                                <label>Nome: <span>{data.nome}</span></label>
                    
                                <label>Descrição: <span>{data.description}</span></label>
                    
                                <label>Preço: <span>{data.price}</span></label>
                    
                                
                    
                    
                                
                    
                        <div className="div-btn-view">
                            <button className="btn-form-view-edit"  type="submit">Editar</button>
                            <button className="btn-form-view-close" type="submit">Fechar</button>  
                        </div>

                    </div>
                    

                        })
                    }
                    
                                           

                </form>

        </div>
    )
}

export default ServiceView;

