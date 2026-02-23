import { useEffect, useState } from "react"
import { useAuthStore } from "../store/auth.store";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth.api";
import { CardContainer } from "@/components/ui/3d-card";
import { NoiseBackground } from "@/components/ui/noise-background";
import toast from "react-hot-toast";
import "../Frontpage.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setAuth = useAuthStore((s) => s.setAuth)
    const navigate = useNavigate();
    const token = useAuthStore((s) => s.token)
    
    useEffect(() => {
      if (token) {
        navigate("/home")
      }
    }, [token])
    
    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();
        try {
            const data = await loginUser(email,password);
            setAuth(data.token, data.user.role);
                navigate("/home")
        } catch (error) {
            toast.error("Invalid credentials");
        }
    }

  return (
    <div className="">
      <hr className=" justify-center"/>
      <div className="left-line"/>
      <div className="right-line"/>
    <CardContainer>
    <div className="login">
      <h2 className="text-lg font-semibold ">
        Log in
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 login-form">
        <label htmlFor="" className="label text-sm font-medium text-[#646464] ml-2 ">Email</label>
        <input
          type="email"
          className="w-70 border border-gray-300 rounded px-2 py-2.5 focus:outline-none focus:ring-2 focus:to-blue-500 ib"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="" className="label text-sm font-medium text-[#646464] ml-2">Password</label>
        <input
          type="password"
          className="w-70 border border-gray-300 rounded px-2 py-2.5 focus:outline-none focus:ring-2 focus:to-blue-500 ib"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="btn logb"
        >
          Log in
        </button>
       
      </form>
    </div>
    </CardContainer>
    </div>
  )
}

export default Login