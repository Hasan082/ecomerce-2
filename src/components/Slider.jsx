import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { useEffect, useState } from 'react';

const Slider = () => {

    const [slide, setSlide] = useState([]);

   

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=4')
            .then(res => res.json())
            .then(json => setSlide(json))
    }, []);




    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >

            {
                slide.map((item, index) => {
                    return (
                        <SwiperSlide key={index} className='border-2 box-border py-5'>
                            <div className='grid grid-cols-2 px-8 bg-white'>
                                <div className='flex justify-center items-start flex-col px-4'>
                                    <h4 className='mb-3'>{item.price}</h4>
                                    <h2 className='text-[30px]'>{item.title}</h2>
                                    <p>{item.description}</p>
                                    
                                </div>
                                <div className='flex justify-center'>
                                    <img className='max-h-[600px]' src={item.image} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
};

export default Slider;