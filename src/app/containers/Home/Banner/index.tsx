import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { api } from '../../../../apis';
import s from './banner.module.css';

const settingSliders = {
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export const Banner: React.FC = () => {
  const [banners, setBannsers] = useState<any>(); //FIXME: type: <any> just for demo | waiting api decription

  useEffect(() => {
    api.getBannersHome().then((_banner) => setBannsers(_banner));
  }, []);

  return (
    <div>
      <Slider className={s.slider} {...settingSliders}>
        {banners?.map((banner: any, index: number) => {
          <div>
            <img src={banner.mobile_url} key={`banner-${index}`}></img>;
          </div>;
        })}
      </Slider>
    </div>
  );
};
