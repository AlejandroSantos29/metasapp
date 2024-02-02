import estilos from './Encabezado.module.css';
import { ReactComponent as LogoSVG } from "../../img/logo.svg";
import { ReactComponent as PerfilSVG } from "../../img/perfil.svg";
import Vinculo from './Vinculo';
function Encabezado() {
    return (
        <header className={estilos.encabezado}>
            <div className={estilos.contenedor_header}>
                <LogoSVG className={estilos.logo} />
                <a href="/" className={estilos.titulo}>Metasapp</a>
            </div>
            <nav>
                <Vinculo
                    href="/perfil"
                    Icono={PerfilSVG} />
            </nav>
        </header>
    );
}

export default Encabezado;
