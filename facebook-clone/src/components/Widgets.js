import React from 'react'
import '../css/widgets.css'

function Widgets() {
    return (
        <div className = 'widgets'>
            
            <iframe 
                src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                width = "340" 
                height = "1500" 
                style = {{ border: 'none' ,overflow : "hidden" , backgroundColor : 'black' , color : 'white'}} 
                scrolling = "no" 
                frameborder = "0" 
                allowTransparency = "true" 
                allow = "encrypted-media">
            </iframe>

        </div>
    )
}

export default Widgets
