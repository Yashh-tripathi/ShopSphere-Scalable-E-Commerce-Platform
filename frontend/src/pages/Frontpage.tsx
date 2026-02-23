import Container from "@/components/container";
import "../Frontpage.css";
import Top from "@/components/Top";
import Hero from "@/components/Hero";

export default function Frontpage(){
    return (
        <div className="layout">
            <Container>
                <div className="left-line"/>
                <div className="right-line"/>
                <Top/>
                <Hero/>    
            </Container>
        </div>
    );
}