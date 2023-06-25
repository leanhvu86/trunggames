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

class AboutUsVi extends React.Component {
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
                  <h2 className="mb-3">Về TRUNG GAMES</h2>
                  <p>
                    Với kinh nghiệm và uy tín nhiều năm trong nghề, chúng tôi luôn lấy uy tín đặt lên hàng đầu để phục vụ và mang đến cho
                    khách hàng những giải pháp <b>NẠP TÂT CẢ GAME MOBILE </b> với giá rẻ và bảo mật thông tin. Chúng tôi còn là quản trị
                    viên của rất nhiều <b>GROUP</b> lớn về game trên Facebook để chia sẻ kinh nghiệm và tạo sân chơi cho mọi người. Hy vọng
                    các bạn tin tưởng và sử dụng dịch vụ của chúng tôi.
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
            <div className="col-12 col-lg-7">
              <article>
                <h2 className="mb-3">Dịch vụ chúng tôi cung cấp</h2>
                <div>
                  <p>
                    <b>Hàng bảo hành</b>: đây là mặt hàng nạp được tất cả các game mobile có thể down trên App Store hoặc Google Play với
                    giá rẻ hơn từ 15% - 30% tùy từng game. Nó là hàng sạch 100% có HÓA ĐƠN nếu cần và <b>BẢO HÀNH ACCOUNT</b> nếu gói nạp
                    của chúng tôi làm account của bạn bị <b>BAN</b>.
                  </p>
                  <p>
                    <b>Hàng không bảo hành</b>: đây là mặt hàng nạp được 1 số game với giá rẻ hơn từ 40% - 70% tùy từng game. Nó là hàng
                    không refund nhưng được nạp bằng nhiều cách không chính thống và không có hóa đơn vì vậy nó không an toàn 100% và có tỷ
                    lệ bị BAN account nhưng không cao và có một số game KHÔNG BAN đối với mặt hàng này.
                  </p>
                  <p>
                    <b>Hàng Refund</b>: đây là mặt hàng nạp được rất ít game với giá rẻ hơn từ 50% - 80% tùy từng game. Nó là hàng sau khi
                    nạp xong chúng tôi sẽ refund lại tiền luôn và có khả năng BAN rất cao và thậm chí là BAN luôn ngay sau khi nạp. Rất ít
                    game không BAN với mặt hàng này.
                  </p>
                </div>
              </article>
            </div>
            <div className="col-12 col-lg-5 d-flex justify-content-center">
              <div className="pt-4">
                <img data-original={servicesImg} className="art lazy" alt="" src={servicesImg} />
              </div>
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
              <h2 className="mb-3">Chính sách bảo hành</h2>
              <p>
                Trong trường hợp các bạn sau khi nạp hàng bảo hành bên chúng tôi bị BAN account. Các bạn cần liên hệ với bộ phận hỗ trợ của
                Game các bạn nạp và đang chơi để cung cấp cho chúng tôi thông tin gói nạp bị BAN và ngày giờ thực hiện gói nạp đó (để nhằm
                mục đích xác định chính xác các bạn nạp bên chúng tôi bị BAN chứ không phải là nạp qua một bên khác bị <b>BAN</b> hoặc sử
                dụng 1 phần mềm hack nào đó bị BAN hoặc bị nhiều người tố cáo dẫn đến bị BAN). Sau khi có đầy đủ thông tin chúng tôi sẽ cung
                cấp hóa đơn của gói nạp đó cho các bạn để gửi cho bộ phận hỗ trợ của game xem xét lại vì nhiều trường hợp game nhầm lẫn quét
                nhầm và BAN nhầm account của các bạn. Nếu chúng tôi không thể cung cấp hóa đơn của gói nạp đó trong trường hơp này chúng tôi
                sẽ hoàn lại toàn bộ tiền của gói nạp đó cho các bạn và hướng dẫn các bạn cách liên hệ với bộ phận hỗ trợ của game để xin nạp
                bù và mở lại tài khoản.
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

export default AboutUsVi;

