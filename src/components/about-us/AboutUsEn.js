import React from 'react';
import './about-us.css';
import { Translation } from 'react-i18next';
import TopMenu from '../ui-common/TopMenu';
import NavBar from '../ui-common/NavBar';
import ParallaxImage from '../parallax/ParallaxImage';
import Footer from '../Footer';
import ScrollButton from '../ui-common/ScrollButton';
import aboutUSImg from '../../assets/images/about-us.png';
import servicesImg from '../../assets/images/services.png';

class AboutUsEn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  render() {
    const imgStyle = {
      marginRight: 'auto',
      marginLeft: 'auto'
    };
    return (
      <div>
        {/*{this.state.loaded ? null :<LoadingSpinner/>}*/}
        <Translation>{(t) => <TopMenu t={t} />}</Translation>
        <NavBar />
        <div className="container container-about-us px-4 py-5">
          <div
            className="row about-us-article"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
          >
            <div className="col-12 col-lg-4 d-flex justify-content-center">
              <img data-original={aboutUSImg} className="art lazy" alt="" src={aboutUSImg} />
            </div>
            <div className="col-12 col-lg-8 pl-4">
              <div className="d-flex align-items-center h-100">
                <div>
                  <h2 className="mb-3">About us</h2>
                  <p>
                    With many years of experience and reputation in the profession, we always put prestige on the top to serve and bring to
                    customers solutions to <b>TOP-UP ALL MOBILE GAMES</b> with cheap price and secure information. We are also the admins of
                    many large game <b>GROUP</b> on Facebook to share experiences and create playgrounds for everyone. Hope you trust and
                    use our service. Thank you!!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row about-us-article"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
            data-aos-offset="-200"
          >
            <div className="col-12 col-lg-8">
              <article>
                <h2 className="mb-3">Our Services</h2>
                <div>
                  <p>
                    <b>Warranty goods</b>: this is an item that can load all mobile games that can be downloaded on the App Store or Google
                    Play at a cheaper price of 15% - 30% depending on the game. It is 100% clean product with <b>INVOICE</b> if needed and{' '}
                    <b>ACCOUNT WARRANTY</b> if our recharge package makes your account <b>BANNED</b>.
                  </p>
                  <p>
                    <b>No warranty</b>: this is an item that can be loaded with some games for 40% - 70% cheaper depending on the game. It
                    is non-refundable but loaded in many unorthodox ways and without receipt so it's not 100% safe and has a BAN account
                    rate but not high and there are some games that are <b>NOT Banned</b> for this item.
                  </p>
                  <p>
                    <b>Refund goods</b>: this is an item that can load very few games with a cheaper price of 50% - 80% depending on the
                    game. It is a product that after loading, we will refund the money and have a very high <b>BAN</b> and even <b>BAN</b>{' '}
                    right after loading. Very few games do not <b>BAN</b> with this item.
                  </p>
                </div>
              </article>
            </div>
            <div className="col-12 col-lg-4 d-flex justify-content-center">
              <img data-original={servicesImg} className="art lazy" alt="" src={servicesImg} />
            </div>
          </div>
          <div
            className="about-us-article row"
            style={{
              flexWrap: 'wrap-reverse'
            }}
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="300"
            data-aos-offset="-100"
          >
            <div className="col-12">
              <h2 className="mb-3">Warranty Policy</h2>
              <p>
                In case your account gets banned after purchasing our warranty products, you need to contact the support department of the
                game you recharged and are playing, to provide us with information about the banned recharge package, including the date and
                time of the recharge{' '}
                <i>
                  (to accurately determine if you recharged through us and got banned, rather than recharging through another party or using
                  any hacking software that led to the ban or being falsely reported by others).
                </i>{' '}
                Once we have all the necessary information, we will provide you with the invoice for that recharge package, which you can
                send to the game's support department for further review, as there are cases where the game mistakenly scans and bans
                accounts. If we cannot provide the invoice for that recharge package in this case, we will refund the entire amount of that
                recharge package to you and guide you on how to contact the game's support department to request compensation and
                reactivation of your account.
              </p>
            </div>
          </div>
        </div>
        <ParallaxImage />
        <Footer />
        <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
      </div>
    );
  }
}

export default AboutUsEn;
