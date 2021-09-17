import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import s from './banner.module.css';
import { api } from '@apis/index';

const settingSliders = {
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  autoplay: true,
  swipeToSlide: true
};

export const Banner: React.FC = () => {
  const [banners, setBannsers] = useState<any>(); // FIXME: type: <any> just for demo | waiting api decription

  useEffect(() => {
    api.getBannersHome().then(setBannsers);
  }, []);

  return (
    <div>
      <Slider className={s.slider} {...settingSliders}>
        {banners?.map((banner: any, index: number) => (
          <img src={banner.mobile_url} key={`banner-${index}`}></img>
        ))}
      </Slider>
    </div>
  );
};
