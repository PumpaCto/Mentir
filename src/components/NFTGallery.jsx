import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { nftData } from "@/data/nftData";
import Image from "next/image";
import { motion } from "framer-motion";

const NFTGallery = () => {
  return (
    <section id="nft" className="py-20 bg-secondary text-white relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-heading text-center text-primary mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          MiraVerse NFT Gallery
        </motion.h2>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full max-w-4xl mx-auto"
        >
          {nftData.map((nft, index) => (
            <SwiperSlide key={index} className="w-64 h-80 bg-black rounded-xl overflow-hidden shadow-lg">
              <Image
                src={nft.image}
                alt={nft.name}
                width={400}
                height={500}
                className="object-cover w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NFTGallery;
