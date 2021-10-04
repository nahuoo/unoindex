import React from "react"
import Image from 'next/image'

//https://res.cloudinary.com/uno-electromedicina/image/upload/v1633365862/logos/zeiss_fmbctj.png

export const SliderSection = () => {
    return(
        
        <Splide
            options={{
                type: 'loop',
                gap: '1rem',
                autoplay: true,
                pauseOnHover: false,
                resetProgress: false,
                arrows: 'slider',
            }}>   
            <SplideSlide>                             
             <Image
              src="https://res.cloudinary.com/fay/image/upload/v1617047570/galaxy_ne5p8f.jpg"
               alt="Galaxy"
                width={1000}
                height={750}
             />             
            </SplideSlide>
            
        </Splide>
      
    )
} 