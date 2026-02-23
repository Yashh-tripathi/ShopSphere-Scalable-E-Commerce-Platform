import Container from "@/components/container";
import Navbar from "@/components/Navbar"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  )
}

export default MainLayout;
