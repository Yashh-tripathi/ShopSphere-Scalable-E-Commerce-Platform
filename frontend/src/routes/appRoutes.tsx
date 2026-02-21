import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cart from "@/pages/Cart";
import ProtectedRoute from "./ProtectedRoute";
import Orders from "@/pages/Orders";
import Register from "@/pages/Register";

const AppRoutes = () => {
    return (
        
            <Routes>
                <Route path="/" element={
                    <ProtectedRoute>
                        <Home/>
                    </ProtectedRoute>
                } />

                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />

                <Route path="/cart" element={
                    <ProtectedRoute>
                        <Cart/>
                    </ProtectedRoute>
                } />

                <Route
                path="/orders"
                element={
                    <ProtectedRoute>
                    <Orders />
                    </ProtectedRoute>
                }
                />

                
            </Routes>

            
    )
}

export default AppRoutes;