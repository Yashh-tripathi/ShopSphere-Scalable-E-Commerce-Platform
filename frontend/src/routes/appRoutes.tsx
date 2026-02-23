import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cart from "@/pages/Cart";
import ProtectedRoute from "./ProtectedRoute";
import Orders from "@/pages/Orders";
import Register from "@/pages/Register";
import AdminRoutes from "./AdminRoutes";
import Admin from "@/pages/Admin";
import MainLayout from "@/layouts/MainLayout";
import FrontLayout from "@/layouts/FrontLayout";
import Frontpage from "@/pages/Frontpage";
import AdminLayout from "@/layouts/AdminLayout";
import AdminProducts from "@/pages/admin/AdminProducts";
import AdminOrders from "@/pages/admin/AdminOrders";
import AdminHome from "@/pages/admin/AdminHome";

const AppRoutes = () => {
    return (
        
            <Routes>
                <Route element={<MainLayout/>}>
                <Route path="/home" element={
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

                <Route 
                path="/admin-dashboard"
                element={
                    <AdminRoutes>
                        <Admin/>
                    </AdminRoutes>
                }
                />
                </Route>

                <Route element={<FrontLayout/>}>
                    <Route path="/" element={<Frontpage/>} />
                </Route>

                <Route
                path="/admin"
                element={
                    <AdminRoutes>
                    <AdminLayout />
                    </AdminRoutes>
                }
                >
                <Route index element={<AdminHome />} />
                <Route path="products" element={<AdminProducts />} />
                <Route path="orders" element={<AdminOrders />} />
                </Route>
            </Routes>

            
    )
}

export default AppRoutes;