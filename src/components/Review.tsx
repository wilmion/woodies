import React,{useState} from 'react'
import { AiOutlineStar , AiFillStar } from 'react-icons/ai';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'

import "../assets/scss/components/review.scss";

const Review = () => {
    const [ writing , setWriting ] = useState<boolean>(false)
    const handleControl = (next:boolean):void => {
        setWriting(true);
        const message = "Hola a todos esta es una reseña";
        const arrMessagge = message.split('');

        const descContain = document.querySelector('.review-content__desc')
        const reviewsIndicators = document.querySelector('.review-indicators').children;
        const indicator = document.querySelector('.review-indicators__indicator--active') as HTMLElement;

        let count:number = 0;
        let actual:string[] = [];
        const interval = setInterval(() => {
            if(count > arrMessagge.length) {
                clearInterval(interval);
                setWriting(false);
            }       
            actual.push(arrMessagge[count]);
            count++;
            descContain.textContent = actual.join('');
        },100)

        const childrens = [...reviewsIndicators] as Array<HTMLElement>;
        const index = childrens.indexOf(indicator);

        indicator.className = "review-indicators__indicator"

        if(next) {
            if(index + 1 === 4) {
                childrens[0].className = "review-indicators__indicator review-indicators__indicator--active";
                return null;
            }
            childrens[index + 1].className = "review-indicators__indicator review-indicators__indicator--active";
        } else {
            if(index - 1 === -1) {
                childrens[3].className = "review-indicators__indicator review-indicators__indicator--active";
                return null;
            }
            childrens[index - 1].className = "review-indicators__indicator review-indicators__indicator--active";
        }
        
        
        
    }
    return (
        <section className="review">
            <div className="review-content">
                <div className="review-content__stars">
                    <AiFillStar className="review-content__stars__star" />
                    <AiFillStar className="review-content__stars__star" />
                    <AiFillStar className="review-content__stars__star" />
                    <AiFillStar className="review-content__stars__star" />
                    <AiFillStar className="review-content__stars__star" />
                </div>
                <p className="review-content__desc">Hola</p>
                <div className="review-content-user">
                    <picture className="review-content-user__img">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAADR0dGpqamDg4PLy8vs7OwUFBT8/PyHh4eKiopjY2MEBATt7e3y8vL4+Pi4uLhMTEzd3d1dXV3GxsadnZ1ra2tGRkaPj49TU1MTExM0NDTi4uJ5eXmsrKxCQkKXl5chISG9vb0oKCgrKyuHsKrmAAADq0lEQVR4nO2cC1PiMBRGU54BS4EqL0VR3P//G7epVAYauFFT3Ns9Z5xRZyifZxJLcnPBGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+AfJ+4EMfp5lO2FRnf7k52GfjJNAuhHC7kPD+hHCKsZJGhb6EiHsLtSwEyGsYh1qGGMMf8XwprMUQwy/BYYYfgkMMfwWGGL4JTDE8Fu033Dk2T2lvg1VHMP0PMmbFXl/WFf0hjY0hs0bjjzP35Sh9VUxGjfcj84Zb7ypMcawWwtb73yCUQ09vHhDYxh68M2hxg27tzTsYdgEGEYFw0bA8CLWUf3svuzVh5doMzRm8LAY915nuTVH22voMjSmv6yWQ5uZCRlCZYbZ0j2wcpznIRNVj2ExJfO3s3X03pqpFKbI0OTD2jUP8kzVY2iy1dmWxP2Wi2GKDNe+izZimB7DifciN0+vo8dw4d+s30lhegzn/nrEMBPClBgWN8wLBRfxb1VjmF0omiUzIUyJYbEc9Y9hKrbhqDHM/JM0bc8Ytv3/sOB8RXPgUWr4U2JoL74e3kthSgxNuaapnbok8q1UkaG/BXDXor2FzZ58f6lYyVBkaPL67bQrFzI0GZqOe1i1tHHfFwFhegxdGWO7Kt0OF7yJOyeHHsOP+mj3859xOJqYkHKiHsMD0856OZ/f9/bSrqlCnaEJq5IeUWhYTs2ggn6JQsMPghXVGgaDYSNgGBUMGwHDqGDYCBhGRZmhPfkxaN2my7DsL7F5p5NPTptrrqDKsPCZzg6NzrvFoI3dJmZfbvEPpZrXlo3htNgvPZ9eMd8GDKMeQ1vrxE+T94E8ipoMn5OzgmmavE3FapQeQzM7Lwi7N4s8t6mq/+Q9fBJbhvQYPvhP13pSmB7Dpe8QOE3+SK17SgyL28mldzBJ01SJYfFy6L0mkdu+1BgOihnpGcPW9GLYS/00LeoYspc+5kb6tCAthtb4zrgdWyFMj+HIP01XUpgSw+qI+xRnLB50KzF01N4BW74+igeligxz3xi+tGnlXbusEFzKR/mKDK1ZJMe7TeoWAHfi+0k0GbpRfEk+V6fu27hdlajSZrA8Pn7Xb1m3if04ut8uNk/D4fuq1zdBgooMj2STSRbecaLRsCRYUaVh6JFFiUrDktZ3DAWDYSP8r4YxPmW3hv0tw2GdZgzdGNazHqN+UrKH6cBHwCr661ib3S7smNros5+H3TQNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH6bv5OENGNLw4GyAAAAAElFTkSuQmCC" alt="User image" />
                    </picture>
                    <div className="review-content-user-info">
                        <h4 className="review-content-user-info__title">Sandra Dewi</h4>
                        <h4 className="review-content-user-info__title">Jakarta Selatan</h4>
                    </div>
                </div>
            </div>
            <div className="review-controls">
                <div className="review-controls__preview" onClick={!writing && (() => handleControl(false))}>
                    <HiOutlineArrowNarrowLeft className="review-controls__preview__arrow" />
                    <h6 className="review-controls__preview__text">Preview</h6>
                </div>
                <div className="review-controls__next" onClick={!writing && (() => handleControl(true))}>
                    <h6 className="review-controls__next__text">Next</h6>
                    <HiOutlineArrowNarrowLeft className="review-controls__next__arrow" />
                </div>
            </div>  
            <div className="review-indicators">
                <div className="review-indicators__indicator review-indicators__indicator--active"></div>
                <div className="review-indicators__indicator"></div>
                <div className="review-indicators__indicator"></div>
                <div className="review-indicators__indicator"></div>
            </div>
        </section>
    )
}

export default Review
