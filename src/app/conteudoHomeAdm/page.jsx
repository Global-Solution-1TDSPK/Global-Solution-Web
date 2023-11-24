import Nav from "@/components/nav/Nav"
import Footer from "@/components/footer/Footer"
import "./conteudoHomeAdm.scss"

export default function ConteudoHomeAdm() {
    return(
        <>
        <Nav />
        <main>
            <div className="titulo-centro"> 
            <h1>Formulários <span>Pacientes</span></h1>
            </div>
        </main>
        <Footer />
        </>
    )
}