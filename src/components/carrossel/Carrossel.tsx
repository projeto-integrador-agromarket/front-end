import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../assets/carrossel1.jpg';
import img2 from '../../assets/carrossel2.jpg';
import img3 from '../../assets/carrossel3.jpg';
import img4 from '../../assets/carrossel4.jpg';
import img5 from '../../assets/carrossel5.jpg';
import img6 from '../../assets/carrossel6.jpg';
import img7 from '../../assets/carrossel7.jpg';
import img8 from '../../assets/carrossel8.jpg';
import img9 from '../../assets/carrossel9.jpg';


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
        { img: img1 },
        { img: img2 },
        { img: img3 },
        { img: img5 },
        { img: img6 },
        { img: img7 },
        { img: img8 }, 
        { img: img4 },
        { img: img9 } 
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
                    delay:5000
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