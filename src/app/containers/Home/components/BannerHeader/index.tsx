import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import s from './banner.module.css';
import { api } from '@apis/index';
import { Banner } from '@models/Banner';

const settingSliders = {
  arrows: false,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 2500,
  autoplay: true,
  swipeToSlide: true
};

export const BannerHeader: React.FC = () => {
  const [banners, setBannsers] = useState<Banner[]>([]);

  useEffect(() => {
    api.getBannersHome().then(setBannsers);
  }, []);

  return (
    <div>
      <Slider className={s.slider} {...settingSliders}>
        {banners?.map((banner, index) => (
          <img
            src={banner.mobile_url}
            key={`banner-${index}`}
            onClick={() => window.open(banner.url, '_blank')?.focus}
          />
        ))}
      </Slider>
    </div>
  );
};
