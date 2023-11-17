
import { Link } from "react-router-dom";
import "./login.scss";

export const Login = () => {
    
    return (
        <div className="container-login">
            <div className="container-Logo">
                <div className="login-logo">
                    <img src="agenda_service.png" alt="" />
                    <p>Organizando seu Negócio</p>
                </div>
            </div>

            <div className="content">
                <div className="form-login">
                     <h2>Login</h2>

                    <input
                        type="text"                               
                        placeholder="Digite seu e-mail"
                    />
                    <input
                        type="password"                
                        placeholder="Digite sua senha"
                    />
                                        
                        <button type="submit" className="btn-login" ><Link to="/home">Entrar</Link></button>             
                    
                </div>
               
            </div>
            
        </div>
    );
}