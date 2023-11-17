import roseta from "../../../public/roseta.svg"
import Image from "next/image";
import "./PaginaInicial.scss"

export default function PaginaInicial(){
   
    return(
        <main>

            <div className="container">
                <div className="roseta-centro">
                <Image src={roseta}/>
                <h1>Diga adeus às salas de espera</h1>
                <button>Começe Agora</button>
                <button>Saiba mais</button>
                </div>
                


            </div>
        </main>
    );
}