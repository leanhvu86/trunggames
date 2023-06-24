import { useSelector } from 'react-redux';
import AboutUsEn from './AboutUsEn';
import AboutUsVi from './AboutUsVi';

const AboutUs = () => {
  const language = useSelector((state) => state.language);

  if (language === 'vi') {
    return <AboutUsVi />;
  }

  return <AboutUsEn />;
};

export default AboutUs;
