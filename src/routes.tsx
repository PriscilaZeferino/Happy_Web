import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';


import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanages from './pages/CreateOrphanage';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/app" component={OrphanagesMap}/>
                <Route path="/orphanages/create" component={CreateOrphanages}/>
                <Route path="/orphanages/:id" component={Orphanage}/>

            </Switch>
        </BrowserRouter>
    );
}

export default Routes;

{
    /**
     * Notas:
     * 
     * instalação do pacote react-router-dom e a biblioteca dele em typescript
     * comando: yarn add react-router-dom e yarn add @types/react-router-dom -D
     * 
     * path define o caminho
     * component define qual componente deve ser mostrado quando a rota for acessada
     * exact compara se a rota eh igual ao endereco path
     * 
     * Switch faz comm que apenas uma rota seja chamada por vez
     */}
