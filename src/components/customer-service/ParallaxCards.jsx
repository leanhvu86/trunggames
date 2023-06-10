import { useIntl } from 'react-intl';
import { ParallaxCard } from './ParallaxCard';
import cmsBanner1 from './service-image/cms-banner-01.jpg';
import cmsBanner2 from './service-image/cms-banner-02.jpg';
import './CustomerService.css';
export const ParallaxCards = () => {
  const { formatMessage } = useIntl();
  const listImgSrc = [
    {
      imgSrc: cmsBanner1,
      title: formatMessage({ id: 'most popular' }),
      subTitle: 'The Battlefield 4 Naval Strike'
    },
    {
      imgSrc: cmsBanner2,
      title: formatMessage({ id: 'latest game' }),
      subTitle: "Assassin's Creed Unity Game"
    }
  ];

  return (
    <div className="row m-0 w-100 justify-content-between pl-3 pr-3">
      {listImgSrc.map((element) => (
        <div key={element.imgSrc} className="col-sm-12 col-lg-6 p-3">
          <ParallaxCard cardImgSrc={element.imgSrc} cardTitle={element.title} cardSubtitle={element.subTitle} />
        </div>
      ))}
    </div>
  );
};

