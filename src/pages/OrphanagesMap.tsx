import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import {Map, TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanages-map.css';

import mapMarkerImg from '../images/map.svg';

function OrphanagesMap ()
{
    return(
        <div id="page-map">
        <aside>
            <header>
                <img src={mapMarkerImg} alt="Happy"/>

                <h2>Escolha um orfanato no mapa</h2>
                <p>Muitas crianças estão esperando suas visitas :) </p>

            </header>

            <footer>
                <strong>Rio Grande do sul</strong>
                <span>Capão da canoa</span>
            </footer>
        </aside>

        <Map 
            center={[-29.7082885,-49.9878493]}
            zoom={15}
            style={{width: '100%', height: '100%'}}
        >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>        
            {/* <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />*/}        
        </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;

{
    /**Existe diversas opções de mapa que podemos usar dentro da nossa aplicacao
     * Foi mostrado duas opções para nós, então, podemos escolher uma delas.
     * 
     * 
     * Opções
     * 
     * Leaflet - é uma biblioteca de mapas dentro do js mas ele tem uma biblioteca em react
     * Como usar: 
     * instalar tanto o leaflet quanto o react-leaflet
     * 
     * Comandos:
     * yarn add leaflet react-leaflet - instalar o pacote
     * 
     * yarn add @types/react-leaflet -D - instalar a biblioteca de 
     * tipagens como dependendencia de desenvolvimento
     * 
     * map box 
     * Criar conta, pegar token, criar uma variavel ambiente (para nao fica disponivel pra todo mundo
     * e nao subi pro github)
     * 
     * O mapa do map box nao estava sendo gerado, entao, resolvi usar o que veio no pacote leaflet
     * 
     **/
}