import { registerUser } from "@/api/auth.api"
import { CardContainer } from "@/components/ui/3d-card"
import { NoiseBackground } from "@/components/ui/noise-background"
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();
        try {
            await registerUser(name,email,password);
            navigate("/login");
        } catch (error) {
            toast.error("Please enter valid details.")
        }
    }
  return (
    <div className="">
      <hr className="justify-center"/>
      <div className="left-line"/>
      <div className="right-line"/>
    <CardContainer>
    <div className="login">
      <h2 className="text-lg font-semibold ">
        Register
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 login-form">
        <label htmlFor="" className="label text-sm font-medium text-[#646464] ml-2">Name</label>
        <input
          type="text"
          placeholder="Name"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ib"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="" className=" label text-sm font-medium text-[#646464] ml-2">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ib"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="" className="label text-sm font-medium text-[#646464] ml-2">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ib"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="btn logb w-full  bg-black text-white py-2 rounded-3xl p-2 cursor-pointer hover:bg-black/70"
          >
            Register
        
        </button>
        <p className="text-sm ">Already have an account? <span className="cursor-pointer text-blue-500" onClick={() => navigate("/login")}>login</span></p>
      </form>
    </div>
    </CardContainer>
    </div>
  )
}

export default Register