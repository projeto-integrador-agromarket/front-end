import { Swiper, SwiperSlide } from "swiper/react";
import fundo from "../../assets/fundo1.png"

// Importando os estilos Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importando SEU CSS
import "./Carrossel.css";

// Importando Modulos do Carrossel
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function Carrossel() {

    var items = [
        { img: "https://www.riotgames.com/darkroom/1440/b540da2b9afe5ec83e842a2d84f6dbb1:e95535ecd35e48592908762c9353926a/arcane-final-poster-16x9-no-text-no-border.jpg" },
        { img: fundo },
    ]

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    hideOnClick: true,
                    hiddenClass: 'swiper-button-hidden',
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
                autoplay={{
                    delay:6000
                }}
            >

                {
                    items.map((item) => (

                        <SwiperSlide>
                            <img src={item.img} alt="Imagem" />
                        </SwiperSlide>                        
                    ))
                }

            </Swiper>
        </>
    )
}

export default Carrossel