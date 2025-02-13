'use client'

import { useEffect } from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Image from 'next/image';
import image1 from '../../../public/as.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function page() {
     useEffect(()=>{
            AOS.init({
              duration: 700,
             
            })
          },[])
    let settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div  data-aos="fade-up" className="relative">
            <Slider {...settings}  className="ml-[470px]">
                <div className="w-fit mt-8">
                    <Link href={`/`} passHref legacyBehavior>
                      <a> {/* <a> tag inside Link */}
                        <Image
                            src={image1}
                            alt="Arduino"
                            width={500}
                            height={400}
                            style={{ objectFit: 'cover' }}
                            quality={75}
                            className="w-[500px] h-[400px]"
                        />
                      </a>
                    </Link>
                </div>
                <div  className="w-fit mt-8">
                    <Link href={`/`} passHref legacyBehavior>
                      <a> {/* <a> tag inside Link */}
                        <Image
                            src={image1}
                            alt="Arduino"
                            width={400}
                            height={300}
                            style={{ objectFit: 'cover' }}
                            quality={75}
                            className="w-[500px] h-[400px] rounded"
                        />
                      </a>
                    </Link>
                </div>
                <div  className="w-fit mt-8">
                    <Link href={`/`} passHref legacyBehavior>
                      <a> {/* <a> tag inside Link */}
                        <Image
                            src={image1}
                            alt="Arduino"
                            width={400}
                            height={300}
                            style={{ objectFit: 'cover' }}
                            quality={75}
                            className="w-[500px] h-[400px]"
                        />
                      </a>
                    </Link>
                </div>
            </Slider>
        </div>
    );
}