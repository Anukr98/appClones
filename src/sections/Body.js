import React from 'react'
import Product from '../components/Product'
import '../css/body.css'

function Body() {
    return (
        <div className = 'body'>

            <div className="home__container">
                <img 
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                    alt=""
                    className = 'home__image'
                />

                <div className="home__row">
                    <Product 
                        id = '123454321' 
                        title = 'The Lean Startup: How Constant Innovation Creates Radically Successful Businesses ' 
                        price = {300} 
                        image = 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' 
                        rating = {5}
                    />
                    <Product 
                        id = '123454322' 
                        title = 'OnePlus 8 Pro (Glacial Green 12GB RAM+256GB Storage) ' 
                        price = {60000}
                        image = 'https://image01.oneplus.net/ebp/202003/30/1-m00-12-6c-rb8lb16bky-azrapaag4rrgwpdm208_840_840.png' 
                        rating = {4}
                    /> 
                </div>
                
                <div className="home__row">
                    <Product 
                        id = '129908'
                        title = 'Apple iPhone 11 Pro Max (64GB) - Midnight Green'
                        price = {107100}
                        rating = {5}
                        image = 'https://images-na.ssl-images-amazon.com/images/I/61tuQdl2yLL._SL1024_.jpg'
                    />
                    <Product 
                        id = '23252312'
                        title = 'Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey '
                        price = {199900}
                        rating = {5}
                        image = 'https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg'
                    />
                    <Product 
                        id = '45535434534'
                        title = 'HyperX Cloud HX-HSCEB-RD Earbuds Gaming Headphones with Mic (Red) '
                        price= {5499}
                        rating = {4}
                        image = 'https://images-na.ssl-images-amazon.com/images/I/6151ZBxilNL._SL1428_.jpg'
                    />
                </div>
                
                <div className="home__row">
                    <Product 
                        id = '908732042'
                        title = 'Sony Bravia 138 cm (55 inches) 4K Ultra HD Certified Android Smart OLED TV KD-55A8G (Black) (2019 Model) '
                        price = {158090}
                        rating = {5}
                        image = 'https://images-na.ssl-images-amazon.com/images/I/91vpNsKYq%2BL._SL1500_.jpg'
                    />
                </div>

            </div>

        </div>
    )
}

export default Body
