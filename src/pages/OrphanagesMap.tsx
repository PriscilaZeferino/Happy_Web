  
import React, { useEffect, useState } from 'react'
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet';

import mapMarkerImg from '../images/map.svg'

import '../styles/pages/orphanages-map.css';
import api from '../services/api';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [58,68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
  });

interface Orphanage 
{
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function OrphanagesMap ()
{

    const [orphanages, setOrphanages] = useState<Orphanage[]> ([]);

    useEffect(() => {
        api.get('orphanages').then(response => 
            {
                setOrphanages(response.data);
            });
    },[]);


    return(
        <div id="page-map">
        <aside>
            <header>
                <img src={mapMarkerImg} alt="Happy"/>

                <h2>Escolha um orfanato no mapa</h2>
                <p>Muitas crianças estão esperando suas visitas {':)'} </p>

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
           {
               orphanages.map(orphanage => (
                <Marker 
                icon={mapIcon}
                position={[orphanage.latitude, orphanage.longitude]}>
                    <Popup closeButton={false} minWidth={240} maxWidth={248} className="map-popup">
                    Lar das meninas
    
                        <Link to={`/orphanages/${orphanage.id}`}>
                            <FiArrowRight size={20} color="#FFF"/>
                        </Link>
                    </Popup>
                    </Marker>
               ))}
        </Map>

            <Link to="/orphanages/create" className="create-orphanage">
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