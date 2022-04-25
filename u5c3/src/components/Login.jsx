import { useContext, useState } from "react";
import { AuthContext } from "../Context/authContext";
import { useNavigate } from "react-router-dom";


export const Login = () => {
  const [user, setUser] = useState({username:"", password:""});
    const {handleAuth, isLogin, setIsLogin} = useContext(AuthContext);
    const [token, setToken] = useState("");

    const handleChange = (e)=>{
        let {name, value} = e.target;
        setUser({...user, [name]:value});
    }
    // }
    const handleSubmit = (e)=>{

    }
   

  return (
    <form className="loginform" onSubmit={handleSubmit}>
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
        onChange={handleChange}
        
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
        onChange={handleChange}
        
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};