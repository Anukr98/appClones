import React from 'react'
import '../css/sidebar.css'
import SidebarOption from './SidebarOption'
import { Home , Search , LibraryMusic } from '@material-ui/icons'
import { useDataLayerValue } from '../DataLayer'


function Sidebar() {

    const [{ playlists } , dispatch] = useDataLayerValue()

    return (
        <div className = 'sidebar'>
            <img className = 'sidebar__logo' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt=""/>

            <SidebarOption title = 'Home' Icon = {Home}/>
            <SidebarOption title = 'Search' Icon = {Search}/>
            <SidebarOption title = 'Library' Icon = {LibraryMusic}/>
            
            <br/>
            <strong className = 'sidebar__title'>PLAYLISTS</strong>
            <hr/>

            {
                playlists?.items?.map(playlist => (
                    <SidebarOption 
                        title = {playlist.name}
                    />
                ))
            }

        </div>
    )
}

export default Sidebar
