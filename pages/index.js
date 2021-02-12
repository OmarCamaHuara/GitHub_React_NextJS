import React from 'react';
import { lazy, Suspense } from 'react';

const Imagem = lazy(() => import('./Imagen'));
const Rodape = lazy(() => import('./Rodape'))
const Texto = lazy(() => import('./Texto'))

import "isomorphic-fetch";

const HomeGitHub = ({ usuarios }) => (
    <div>

        <h1>Fotos dos usuarios de GitHub</h1>

        <Suspense fallback={ <p>Carregando ...</p> }>
            <Imagem />
        </Suspense>

        <Suspense fallback={ <p>Carregando ...</p> }>
            <Texto />
        </Suspense>

        { usuarios.map(usr => 
            <div>
                <img style={{ width: 150, borderRadius: 75 }} src={usr.avatar_url} alt="Foto de Usuario"/>
                <h2 style={{ textAlign: "center" }} key={usr.id}>{usr.login}</h2> 
            </div>
        )}
        <Suspense fallback={ <p>Carregando ...</p> }>
            <Rodape />   
        </Suspense>    
    </div>
)

HomeGitHub.getInitialProps = async () => {
    const usuario = await fetch("https://api.github.com/users")
    const usuarios = await usuario.json();
    return { usuarios };
}

export default HomeGitHub;
