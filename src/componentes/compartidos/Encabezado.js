import './Encabezado.css';
import { ReactComponent as LogoSVG } from "../../img/logo.svg";
import { ReactComponent as PerfilSVG } from "../../img/perfil.svg";
function Encabezado() {
    return (
        <header className="encabezado">
            <div className="contenedor-header">
                <LogoSVG className='logo' />
                <a href="/" className='titulo'>Metasapp</a>
            </div>
            <nav>
                <a href="/perfil" className="vinculo">
                    <PerfilSVG />
                </a>
            </nav>
        </header>
    );
}

export default Encabezado;
