import React from 'react'
import '../css/footer.css'
import { Repeat , Shuffle , SkipNext , SkipPrevious , PlayCircleOutline } from '@material-ui/icons'
import { Grid, Slider } from '@material-ui/core'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'

function Footer() {
    return (
        <div className = 'footer'>
            
            <div className="footer__left">
                 <img className = 'footer__albumLogo' src="" alt="dsf"/>
                 <div className="footer__songInfo">
                     <h4>Senorita</h4>
                     <p>Shawn Mendes</p>
                 </div>
            </div>

            <div className="footer__center">
                <Shuffle className = 'footer__green' />
                <SkipPrevious className = 'footer__icon' />
                <PlayCircleOutline className = 'footer__icon' fontSize = 'large' />
                <SkipNext className = 'footer__icon'/>
                <Repeat className = 'footer__green' />
            </div>

            <div className="footer__right">
                <Grid container spacing = {2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby = 'continuous-slide' />
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default Footer
