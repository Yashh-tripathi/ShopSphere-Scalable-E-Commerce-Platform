import { useEffect, useState } from "react"
import { useAuthStore } from "../store/auth.store";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth.api";
import { CardContainer } from "@/components/ui/3d-card";
import { NoiseBackground } from "@/components/ui/noise-background";
import toast from "react-hot-toast";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setToken = useAuthStore((s) => s.setToken);
    const navigate = useNavigate();
    const token = useAuthStore((s) => s.token)
    
    useEffect(() => {
      if (token) {
        navigate("/")
      }
    }, [token])
    
    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();
        try {
            const data = await loginUser(email,password);
            setToken(data.token);
                navigate("/")
        } catch (error) {
            toast.error("Invalid credentials");
        }
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf7eb]">
    <CardContainer>
    <div className="bg-white border border-white  p-8 rounded-2xl shadow-xl w-96">
      <h2 className="text-3xl font-bold text-center mb-6 text-black">
        Login
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="" className="text-sm font-bold ml-2">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="" className="text-sm font-bold ml-2">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <NoiseBackground>
        <button
          type="submit"
          className="w-full cursor-pointer bg-black text-white py-2 rounded-lg hover:bg-indigo-600 transition duration-200"
        >
          Login
        </button>
        </NoiseBackground>
      </form>
    </div>
    </CardContainer>
    </div>
  )
}

export default Login