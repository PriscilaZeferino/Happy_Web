import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import mapMarkerImg from '../images/map.svg' ;

import '../styles/components/sidebar.css';

export default function SideBar()
{
    const {goBack} = useHistory();
    return(
        <aside className="app-sidebar">
            <header>
                <img src={mapMarkerImg} alt="Happy"/>
            </header>

            <footer>
                <button type="button" onClick={goBack}>
                    <FiArrowLeft size={24} color="#FFF"/>
                </button>
            </footer>
        </aside>
    );
}

