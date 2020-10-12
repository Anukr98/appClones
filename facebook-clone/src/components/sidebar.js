import React from 'react'
import '../css/sidebar.css'
import SidebarRow from './SidebarRow'
import Hospital from '@material-ui/icons/LocalHospital'
import EmojiFlags from '@material-ui/icons/EmojiFlags'
import People from '@material-ui/icons/People'
import Chat from '@material-ui/icons/Chat'
import Storefront from '@material-ui/icons/Storefront'
import VideoLibrary from '@material-ui/icons/VideoLibrary'
import { useStateValue } from '../StateProvider'

function Sidebar() {

    const [{ user } , dispatch] = useStateValue()
    return (
        <div className='sidebar'>
            <SidebarRow
                src={user.photoURL}
                title={user.displayName}
            />
            <SidebarRow
                Icon={Hospital}
                title='COVID Information center'
            />
            <SidebarRow
                Icon={EmojiFlags}
                title='Pages'
            />
            <SidebarRow
                Icon={People}
                title='Friends'
            />
            <SidebarRow
                Icon={Chat}
                title='Messenger'
            />
            <SidebarRow
                Icon={Storefront}
                title='Marketplace'
            />
            <SidebarRow
                Icon={VideoLibrary}
                title='Videos'
            />
        </div>
    )
}

export default Sidebar
