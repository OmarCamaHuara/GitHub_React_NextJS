import React from 'react';


import Texto from './Texto';
import Rodape from './Rodape';


import "isomorphic-fetch";

const HomeGitHub = ({ usuarios }) => (
    <div>
        <h1 style={{
            textAlign: 'center'
        }}>Fotos dos usuarios de GitHub</h1>
        <Texto />
        <div style={{
            margin:0,
            flexDirection: 'row',
            display: 'flex',
            flexWrap: 'wrap',
            height: '100%',
            width: '80%',
            alignItems: 'center'
        }}>
            <div style={{
                display: 'inline-block',
                width: '25%',
                flex: '0 1 25%',
                textAlign: 'center',
                margin: '0 auto',
                display: "inline-block" 
            }}>
            
                { usuarios.map(usr => 
                    <div>
                        <img style={{ width: 150, borderRadius: 75 }} src={usr.avatar_url} alt="Foto de Usuario"/>
                        <h2 style={{ textAlign: "center" }} key={usr.id}>{usr.login}</h2> 
                    </div>
                )}
                
            </div>
        </div>
        <Rodape />   
    </div>
)

HomeGitHub.getInitialProps = async () => {
    const usuario = await fetch("https://api.github.com/users")
    const usuarios = await usuario.json();
    return { usuarios };
}

export default HomeGitHub;
