import React from 'react';
import './blog.css';
import { Translation } from 'react-i18next';
import TopMenu from '../ui-common/TopMenu';
import NavBar from '../ui-common/NavBar';
import ParallaxImage from '../parallax/ParallaxImage';
import Footer from '../Footer';
import ScrollButton from '../ui-common/ScrollButton';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { logout } from '../../constants/userActions';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const blogs = [
  {
    id: 1,
    title: 'LMHT dự kiến 27/07 : Pantheon sắp được Riot hồi sinh thành "Thần Rừng" ở bản 12.14 sắp tới',
    imageUrl: 'https://bloggame.net/uploads/worigin/2022/07/21/lmht162d8d7f92b5c0_d89be1a268a683d9300be7d63724365e.jpeg',
    author: 'admin',
    postDate: '21/07/2022',
    contentEn:
      'LMHT Pantheon sắp được Riot hồi sinh thành "Thần Rừng" ở phiên bản 12.14 dự kiến sẽ được ra mắt vào ngày 27/7 tới.\n' +
      'Nếu các bạn còn nhớ thì vào thời điểm mới được làm lại, Pantheon là một trong những tướng mạnh nhất LMHT và có tỷ lệ cấm chọn 100% tại CKTG 2019. Kể cả khi sang tới CKTG 2020 một năm sau đó thì Pantheon vẫn là một tướng mạnh, đa dụng và có thể chơi được nhiều vị trí từ Đường Giữa, Đi Rừng cho tới Hỗ Trợ.',
    contentVi:
      'LMHT Pantheon sắp được Riot hồi sinh thành "Thần Rừng" ở phiên bản 12.14 dự kiến sẽ được ra mắt vào ngày 27/7 tới.\n' +
      'Nếu các bạn còn nhớ thì vào thời điểm mới được làm lại, Pantheon là một trong những tướng mạnh nhất LMHT và có tỷ lệ cấm chọn 100% tại CKTG 2019. Kể cả khi sang tới CKTG 2020 một năm sau đó thì Pantheon vẫn là một tướng mạnh, đa dụng và có thể chơi được nhiều vị trí từ Đường Giữa, Đi Rừng cho tới Hỗ Trợ.'
  },
  {
    id: 2,
    title: '[Hot] Cho rằng Free Fire đạo nhái PUBG Mobile kiện cả Garena, Apple lẫn Google',
    imageUrl: 'https://bloggame.net/uploads/worigin/2022/01/17/5819449_Cover_PUBG61e4c8cf8c587_8af01a07dca585d755d0a04ffcb1a515.jpeg',
    author: 'admin',
    postDate: '21/07/2021',
    contentEn: `Krafton và PUBG Santa Monica, những đơn vị sở hữu bản quyền PUBG Mobile vừa đệ đơn kiện Garena Online với cáo buộc phiên bản game mobile Free Fire Max ăn cắp ý tưởng game battle royale phiên bản mobile của họ. Nhân tiện, Krafton và chi nhánh ở California của hãng game Hàn Quốc cũng kiện luôn cả Google và Apple vì Play Store và App Store đã tiếp tay phân phối tác phẩm đạo nhái ý tưởng.
        Trước đó hồi năm 2017, Krafton cũng đã kiện Garena ở tòa án Singapore sau khi Free Fire: Battlegrounds được phát hành. Dù khi ấy, cả hai bên đã đạt được thỏa thuận chung, nhà phát hành PUBG Mobile (tên cũ là Bluehole) cho biết họ không hề bán bản quyền bất kỳ ý tưởng gameplay hay tính năng nào cho Free Fire cả, ý của họ nghĩa là sau này không được ứng dụng những tính năng copy đó nữa.

    Còn bây giờ Krafton lại đem đơn kiện dài 100 trang lên tòa án quận trung tâm bang California, đòi Garena phải trả cho họ 150.000 USD khoản bồi thường cho mỗi chi tiết trong Free Fire Max bị tòa kết luận là copy của PUBG Mobile. Còn về phần Apple và Google, Krafton cáo buộc hai ông lớn này đã phân phối ứng dụng copy ý tưởng trên App Store và Play Store, cùng lúc YouTube cũng chia sẻ những video gameplay của Free Fire Max. Trong đơn kiện, những chi tiết họ cho rằng Garena copy bao gồm tính năng cho phép người chơi tụ họp ở một điểm nhất định trước trận đấu, tính năng nhảy dù ở đầu trận đấu, những vật phẩm như “mũ 3" hay chiếc chảo, hoặc tính năng “thùng thính” với những vật phẩm cao cấp thả bằng máy bay. Cái khó của Krafton là những tính năng này giờ game battle royale nào cũng có, từ Fortnite đến Warzone.

Trước đó hồi tháng 5/2018, Krafton cũng khởi kiện Epic Games, chủ sở hữu Fortnite cũng vì những cáo buộc tương tự tại tòa án Hàn Quốc, nhưng chỉ sau đó 1 tháng họ đã rút đơn kiện mà không nêu rõ nguyên do.`,
    contentVi: `Krafton và PUBG Santa Monica, những đơn vị sở hữu bản quyền PUBG Mobile vừa đệ đơn kiện Garena Online với cáo buộc phiên bản game mobile Free Fire Max ăn cắp ý tưởng game battle royale phiên bản mobile của họ. Nhân tiện, Krafton và chi nhánh ở California của hãng game Hàn Quốc cũng kiện luôn cả Google và Apple vì Play Store và App Store đã tiếp tay phân phối tác phẩm đạo nhái ý tưởng.
Trước đó hồi năm 2017, Krafton cũng đã kiện Garena ở tòa án Singapore sau khi Free Fire: Battlegrounds được phát hành. Dù khi ấy, cả hai bên đã đạt được thỏa thuận chung, nhà phát hành PUBG Mobile (tên cũ là Bluehole) cho biết họ không hề bán bản quyền bất kỳ ý tưởng gameplay hay tính năng nào cho Free Fire cả, ý của họ nghĩa là sau này không được ứng dụng những tính năng copy đó nữa.

Còn bây giờ Krafton lại đem đơn kiện dài 100 trang lên tòa án quận trung tâm bang California, đòi Garena phải trả cho họ 150.000 USD khoản bồi thường cho mỗi chi tiết trong Free Fire Max bị tòa kết luận là copy của PUBG Mobile. Còn về phần Apple và Google, Krafton cáo buộc hai ông lớn này đã phân phối ứng dụng copy ý tưởng trên App Store và Play Store, cùng lúc YouTube cũng chia sẻ những video gameplay của Free Fire Max. Trong đơn kiện, những chi tiết họ cho rằng Garena copy bao gồm tính năng cho phép người chơi tụ họp ở một điểm nhất định trước trận đấu, tính năng nhảy dù ở đầu trận đấu, những vật phẩm như “mũ 3" hay chiếc chảo, hoặc tính năng “thùng thính” với những vật phẩm cao cấp thả bằng máy bay. Cái khó của Krafton là những tính năng này giờ game battle royale nào cũng có, từ Fortnite đến Warzone.

Trước đó hồi tháng 5/2018, Krafton cũng khởi kiện Epic Games, chủ sở hữu Fortnite cũng vì những cáo buộc tương tự tại tòa án Hàn Quốc, nhưng chỉ sau đó 1 tháng họ đã rút đơn kiện mà không nêu rõ nguyên do.`
  },
  {
    id: 3,
    title: 'Total War Saga: Troy - Game chiến thuật mới đang gây "Sốt" trên toàn thế giới',
    imageUrl: 'https://bloggame.net/uploads/worigin/2020/08/14/totalwarsagatroy45f35f77e10059_9be254fb0902c6752774fbc49b2b2881.jpg',
    author: 'admin',
    postDate: '21/07/2022',
    contentEn: `Mới đây, tựa game Total War Saga: Troy tựa game mới nhất của dòng game chiến thuật huyền thoại đã chính thức có mặt trên Epic Games Store dưới dạng độc quyền với thời hạn một năm, đồng thời cho phép người dùng tải về miễn phí trong vòng 24 giờ đầu tiên được phát hành.
        Total War Saga: Troy - Game chiến thuật mới đang gây

        A Total War Saga: TROY - Tựa game chiến thuật đang cực hot

Total War là một sê-ri trò chơi dành cho PC thể loại chiến lược được phát triển bởi hãng The Creative Assembly có trụ sở tại Horsham, Anh. Dòng game bao gồm cả chiến lượt theo lượt và quản lý tài nguyên kết hợp với các trận chiến dưới dạng chiến thuật thời gian thực. Phiên bản đầu tiên của sê-ri là Shogun: Total War được phát hành vào năm 2000. Phiên bản mới nhất ra mắt vào tháng 5 năm 2019 là Total war: Three Kingdoms. Ngoài ra, tựa game này còn nổi tiếng với một số bản mod lấy nội dung về một số sự kiện có thực trong lịch sử như Europa Barbarorum và Roma Surrectum, cho đến những thế giới hư cấu huyền bí kì ảo như Third Age: Total War dựa trên thiên sử thi đồ sộ Lord of the Rings.
    A Total War Saga: TROY sẽ dựng lại một trong những câu chuyện vĩ đại nhất từng được kể. A Total War Saga: TROY sẽ dựng lại một trong những câu chuyện vĩ đại nhất từng được kể. Lấy cảm hứng từ Iliad của Homer, TROY sẽ cho phép bạn tạo nên một di sản anh hùng vào cuối thời kỳ đồ đồng, xa nhất trong quá khứ mà loạt phim Total War từng đi qua.

    Total War Saga: Troy - Game chiến thuật mới đang gây

Tải miễn phí game A Total War Saga: TROY trong hôm nay

Iliad của Homer rất phong phú với thần thoại, truyền thuyết, các vị thần và quái vật. TROY đưa những câu chuyện này qua lăng kính lịch sử để xem xét điều gì có thể đã thực sự xảy ra nhưng cuối cùng cho phép bạn quyết định anh hùng nào sẽ ngã trong trận chiến và anh hùng nào sẽ bất tử trong truyền thuyết.

    Trong TROY, số phận của nền văn minh Aegean sẽ nằm trong tay bạn - mỗi lựa chọn bạn đưa ra sẽ định hình các vùng đất từ ​​đỉnh cao thần thoại của đỉnh Olympus đến sa mạc khô cằn ở Lemnos. Trải nghiệm lịch sử như nó có thể đã xảy ra hoặc định hình huyền thoại cho chính bạn trong chương độc đáo này của Total War.




    Các chiến trường sẽ run rẩy dưới bàn chân của những chiến binh lừng danh như Achilles và Hector nhưng sẽ không cần đến vũ lực một mình để tuyên bố chủ quyền với thành phố Troy huyền thoại. Bạn sẽ cần phải khéo léo quản lý một nền kinh tế đổi chác, tiến hành ngoại giao giữa bạn bè và kẻ thù, và dành sự ưu ái của chính các vị thần trước khi khắc tên bạn vào biên niên sử.



    CHỌN ANH HÙNG CỦA BẠN

Với phiên bản Total War Saga: Troy, bạn sẽ được tham gia vào cuộc chiến thành Troia (Troy) dựa trên những sự kiện được mô phỏng lại thông qua những câu chuyện thần thoại Hy Lạp. Chiến đấu để cứu hoặc chinh phục vương quốc thành Troy với tư cách là một trong tám anh hùng mang tính biểu tượng, bao gồm chiến binh vĩ đại nhất của quân Hy Lạp Achilles, hoặc hai vị hoàng tử Hector và Paris tùy theo sự lựa chọn phe phái khi bắt đầu.`,
    contentVi: `Mới đây, tựa game Total War Saga: Troy tựa game mới nhất của dòng game chiến thuật huyền thoại đã chính thức có mặt trên Epic Games Store dưới dạng độc quyền với thời hạn một năm, đồng thời cho phép người dùng tải về miễn phí trong vòng 24 giờ đầu tiên được phát hành.
        Total War Saga: Troy - Game chiến thuật mới đang gây

        A Total War Saga: TROY - Tựa game chiến thuật đang cực hot

Total War là một sê-ri trò chơi dành cho PC thể loại chiến lược được phát triển bởi hãng The Creative Assembly có trụ sở tại Horsham, Anh. Dòng game bao gồm cả chiến lượt theo lượt và quản lý tài nguyên kết hợp với các trận chiến dưới dạng chiến thuật thời gian thực. Phiên bản đầu tiên của sê-ri là Shogun: Total War được phát hành vào năm 2000. Phiên bản mới nhất ra mắt vào tháng 5 năm 2019 là Total war: Three Kingdoms. Ngoài ra, tựa game này còn nổi tiếng với một số bản mod lấy nội dung về một số sự kiện có thực trong lịch sử như Europa Barbarorum và Roma Surrectum, cho đến những thế giới hư cấu huyền bí kì ảo như Third Age: Total War dựa trên thiên sử thi đồ sộ Lord of the Rings.
    A Total War Saga: TROY sẽ dựng lại một trong những câu chuyện vĩ đại nhất từng được kể. A Total War Saga: TROY sẽ dựng lại một trong những câu chuyện vĩ đại nhất từng được kể. Lấy cảm hứng từ Iliad của Homer, TROY sẽ cho phép bạn tạo nên một di sản anh hùng vào cuối thời kỳ đồ đồng, xa nhất trong quá khứ mà loạt phim Total War từng đi qua.

    Total War Saga: Troy - Game chiến thuật mới đang gây

Tải miễn phí game A Total War Saga: TROY trong hôm nay

Iliad của Homer rất phong phú với thần thoại, truyền thuyết, các vị thần và quái vật. TROY đưa những câu chuyện này qua lăng kính lịch sử để xem xét điều gì có thể đã thực sự xảy ra nhưng cuối cùng cho phép bạn quyết định anh hùng nào sẽ ngã trong trận chiến và anh hùng nào sẽ bất tử trong truyền thuyết.

    Trong TROY, số phận của nền văn minh Aegean sẽ nằm trong tay bạn - mỗi lựa chọn bạn đưa ra sẽ định hình các vùng đất từ ​​đỉnh cao thần thoại của đỉnh Olympus đến sa mạc khô cằn ở Lemnos. Trải nghiệm lịch sử như nó có thể đã xảy ra hoặc định hình huyền thoại cho chính bạn trong chương độc đáo này của Total War.




    Các chiến trường sẽ run rẩy dưới bàn chân của những chiến binh lừng danh như Achilles và Hector nhưng sẽ không cần đến vũ lực một mình để tuyên bố chủ quyền với thành phố Troy huyền thoại. Bạn sẽ cần phải khéo léo quản lý một nền kinh tế đổi chác, tiến hành ngoại giao giữa bạn bè và kẻ thù, và dành sự ưu ái của chính các vị thần trước khi khắc tên bạn vào biên niên sử.



    CHỌN ANH HÙNG CỦA BẠN

Với phiên bản Total War Saga: Troy, bạn sẽ được tham gia vào cuộc chiến thành Troia (Troy) dựa trên những sự kiện được mô phỏng lại thông qua những câu chuyện thần thoại Hy Lạp. Chiến đấu để cứu hoặc chinh phục vương quốc thành Troy với tư cách là một trong tám anh hùng mang tính biểu tượng, bao gồm chiến binh vĩ đại nhất của quân Hy Lạp Achilles, hoặc hai vị hoàng tử Hector và Paris tùy theo sự lựa chọn phe phái khi bắt đầu.`
  },
  {
    id: 5,
    title: 'LMHT dự kiến 27/07 : Pantheon sắp được Riot hồi sinh thành "Thần Rừng" ở bản 12.14 sắp tới',
    imageUrl: 'https://bloggame.net/uploads/worigin/2022/07/21/lmht162d8d7f92b5c0_d89be1a268a683d9300be7d63724365e.jpeg',
    author: 'admin',
    postDate: '21/07/2022',
    contentEn:
      'LMHT Pantheon sắp được Riot hồi sinh thành "Thần Rừng" ở phiên bản 12.14 dự kiến sẽ được ra mắt vào ngày 27/7 tới.\n' +
      'Nếu các bạn còn nhớ thì vào thời điểm mới được làm lại, Pantheon là một trong những tướng mạnh nhất LMHT và có tỷ lệ cấm chọn 100% tại CKTG 2019. Kể cả khi sang tới CKTG 2020 một năm sau đó thì Pantheon vẫn là một tướng mạnh, đa dụng và có thể chơi được nhiều vị trí từ Đường Giữa, Đi Rừng cho tới Hỗ Trợ.',
    contentVi:
      'LMHT Pantheon sắp được Riot hồi sinh thành "Thần Rừng" ở phiên bản 12.14 dự kiến sẽ được ra mắt vào ngày 27/7 tới.\n' +
      'Nếu các bạn còn nhớ thì vào thời điểm mới được làm lại, Pantheon là một trong những tướng mạnh nhất LMHT và có tỷ lệ cấm chọn 100% tại CKTG 2019. Kể cả khi sang tới CKTG 2020 một năm sau đó thì Pantheon vẫn là một tướng mạnh, đa dụng và có thể chơi được nhiều vị trí từ Đường Giữa, Đi Rừng cho tới Hỗ Trợ.'
  },
  {
    id: 4,
    title: 'Fortnite bị cả Apple, Google xoá khỏi cửa hàng ứng dụng của mình',
    imageUrl: 'https://bloggame.net/uploads/worigin/2020/08/14/fort15f3635e117565_bf357ff79a8f19c680d9badf09b41c5b.jpg',
    author: 'admin',
    postDate: '21/07/2020',
    contentEn: `Cả Apple, Google đồng loạt xóa Fortnite khỏi cửa hàng ứng dụng của mình, động thái này diễn ra không lâu sau khi Epic Games ra mắt hệ thống thanh toán riêng trong tựa game Fortnite
        Hãng Epic Games, cha đẻ của tựa game đình đám Fortnite vừa giới thiệu cơ chế thanh toán mới thông qua máy chủ của công ty, cho phép game thủ mua hàng trực tiếp trong Fortnite. Điều này cho phép Fortnite qua mặt hệ thống mua hàng trong ứng dụng (in-app purchase) của Apple lẫn Google và không phải trả mức hoa hồng 30%. Không lâu sau đó, Apple thẳng tay xóa bỏ tựa game đình đám này ra khỏi App Store.`,
    contentVi: `Cả Apple, Google đồng loạt xóa Fortnite khỏi cửa hàng ứng dụng của mình, động thái này diễn ra không lâu sau khi Epic Games ra mắt hệ thống thanh toán riêng trong tựa game Fortnite
        Hãng Epic Games, cha đẻ của tựa game đình đám Fortnite vừa giới thiệu cơ chế thanh toán mới thông qua máy chủ của công ty, cho phép game thủ mua hàng trực tiếp trong Fortnite. Điều này cho phép Fortnite qua mặt hệ thống mua hàng trong ứng dụng (in-app purchase) của Apple lẫn Google và không phải trả mức hoa hồng 30%. Không lâu sau đó, Apple thẳng tay xóa bỏ tựa game đình đám này ra khỏi App Store.`
  }
];

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      blogView: undefined,
      viewType: true
    };
    this.returnBlog = this.returnBlog.bind(this);
    this.viewContent = this.viewContent.bind(this);
  }

  viewContent(blog) {
    if (this.state.viewType) this.returnBlog();
    this.setState({ blogView: blog });
    console.log(blog);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  returnBlog() {
    this.setState({ viewType: !this.state.viewType });
  }

  renderList() {
    return (
      <div className="container">
        <br />
        <br />
        <div className="row">
          {this.props.blogs.map((bl) => {
            return (
              <div className="col-lg-4 col-md-6 col-12" key={bl.id}>
                <div className="content-blog" onClick={() => this.viewContent(bl)}>
                  <img style={{ width: '100%', height: '200px' }} className="art lazy" alt="" src={bl.imageUrl} />
                  <br />
                  <div className="blog-title">{bl.title}</div>
                  <br />
                  <span className="blog-info">
                    {bl.postDate} | {bl.author}
                  </span>
                  <br />
                  <br />

                  {/*<div className="blog-content">{bl.contentVI}</div>*/}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  renderDetail() {
    return (
      <div className="container">
        <div className="row">
          <div className="container col-lg-7 col-12">
            <br />
            <br />
            <div className="blog-title-detail">{this.state.blogView.title}</div>
            <span className="blog-info">
              {this.state.blogView.postDate} | {this.state.blogView.author}
            </span>
            <br />
            <div className="mt-4">
              <CKEditor
                editor={ClassicEditor}
                disabled
                data={this.state.blogView.contentVI}
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  // console.log( 'Editor is ready to use!', editor );
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  // console.log( { event, editor, data } );
                }}
                onBlur={(event, editor) => {
                  // console.log( 'Blur.', editor );
                }}
                onFocus={(event, editor) => {
                  // console.log( 'Focus.', editor );
                }}
              />
            </div>
            {/*<img style={{width: '100%', height: 'auto'}}*/}
            {/*     className="art lazy" alt=""*/}
            {/*     src={this.state.blogView.imageUrl}/>*/}
          </div>
          <div className="col-lg-5">
            <div className="row">
              {this.props.blogs.map((blog) => {
                return (
                  <div className="col-md-6 col-lg-12 col-12 p-2" key={blog.id}>
                    <div className="content-blog" onClick={() => this.viewContent(blog)}>
                      <img style={{ width: '100%', height: '200px' }} className="art lazy" alt="" src={blog.imageUrl} />
                      <br />
                      <div className="p-2">
                        <div>
                          <div className="blog-title ellipsis-text">{blog.title}</div>
                        </div>
                        <span className="blog-info">
                          {blog.postDate} | {blog.author}
                        </span>
                        <br />
                        <div className="mt-2">
                          <div className="blog-content ellipsis-text">{this.props.language === 'en' ? blog.contentEn : blog.contentVi}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {/*{this.state.loaded ? null :<LoadingSpinner/>}*/}
        <Translation>{(t) => <TopMenu t={t} />}</Translation>
        <NavBar />
        <h2 style={{ textAlign: 'center', color: 'white' }}>
          <FormattedMessage id="blog-game" />
        </h2>
        <span style={{ marginLeft: '10%', color: 'white' }}>
          <Link to="/" style={{ color: 'white' }}>
            {' '}
            <FormattedMessage id="home" />{' '}
          </Link>{' '}
          &nbsp;>&nbsp;<a onClick={() => this.returnBlog()}>Blog</a>
        </span>
        {this.state.viewType ? this.renderList() : this.renderDetail()}
        <br />
        <br />
        <ParallaxImage />
        <Footer />
        <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    language: state.language
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // logout: (id) => {
    //     dispatch(logout(id));
    // }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Blog);

