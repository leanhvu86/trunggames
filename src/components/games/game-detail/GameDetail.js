import React from 'react';
import './game-detail.css';
import {Translation} from "react-i18next";
import TopMenu from "../../TopMenu";
import NavBar from "../../NavBar";
import ParallaxImage from "../../parallax/ParallaxImage";
import Footer from "../../Footer";
import ScrollButton from "../../ScrollButton";
import SubNavGame from "./SubNavGame";
import GameDetailSearchBar from "./GameDetailSearchBar";

const game = {
    thumbnail: "http://52.41.255.157:8080/trunggame-0.0.1/api/file/9e9450d8-1564-49b1-834c-fc0c748e3675-ace-racer.png",
    name: "Ace Racer",
    categoryId: "1",
    categoryName: "Shoot Game",
    type: "Mobile",
    marketType: "Global",
    youtubeLink: "",
    companyName: "NetEase Inc.",
    description: `"Ace Racer là một trò chơi di động đua xe giới thiệu những phương tiện sáng tạo với những kỹ năng tối thượng. Trải nghiệm những chiếc xe thực tế khác nhau từ các nhà sản xuất xe huyền thoại như Porsche và Nissan, cùng với những sáng tạo tùy chỉnh của riêng chúng tôi. Mỗi phương tiện đều có những kỹ năng tối thượng riêng. Bạn đang chờ đợi điều gì? Khởi động động cơ của bạn và trải nghiệm vòng quay của riêng chúng tôi trên những chiếc xe tối thượng dọc theo những đường đua tuyệt đẹp! Hãy chạy đua với những kỹ năng đỉnh cao để cảm nhận cảm giác hồi hộp tột đỉnh. Để nâng cao cuộc phiêu lưu của bạn và khen ngợi lối chơi của bạn, bạn có thể mua dịch vụ tải lại Ace Racer từ danh sách những người bán có uy tín của chúng tôi tại đây Kaleoz.com trong một môi trường bảo mật an toàn và với mức giá rẻ."`,
    descriptionEn: `"<h2>About Tower of Fantasy (TOF)</h2>\\n\\n<p>Embark together on your fantasy adventure!<br />\\nSet hundreds of years in the future on the distant planet of Aida, the shared open-world MMORPG, anime-infused sci-fi adventure&nbsp;<strong>Tower of Fantasy</strong>&nbsp;from developer Hotta Studio and publisher Level Infinite, is now available on PC and mobile platforms globally. Players will be able to experience an anime-inspired post-apocalyptic sci-fi art style, freeform character development, and exciting combat through thrilling battles and exciting open-world exploration. To enhance your adventure and compliment your gameplay, you can buy Tower of Fantasy reload services from our list of reputable sellers here at Kaleoz.com in a safe secure environment and at cheap rates.</p>\\n"`,
    contentEn: `"<h3><strong>How to buy Tower of Fantasy (TOF) Tanium and Packages on Kaleoz.com?</strong></h3>\\n\\n<ol>\\n\\t<li>Select the goods of Tower of Fantasy.</li>\\n\\t<li>Click &ldquo;PAY NOW&rdquo; to make payment.</li>\\n\\t<li>After payment, notify the seller via Kchat and wait for your item to be delivered.</li>\\n</ol>\\n\\n<h3><strong>How to find Tower of Fantasy UID?</strong></h3>\\n\\n<p><img alt=\\"how to find tower of fantasy uid\\" src=\\"https://kaleoz-kchat.seagmcdn.com/guide_content/images/prod/202210/oss-351a2b6193ea1c8ae8d5c1f24bb0d325.jpg?x-oss-process=image/resize,m_fill,l_1000\\" /></p>\\n\\n<ol>\\n\\t<li>Click &quot;More icon&quot; at the top right corner and open game setting.</li>\\n\\t<li>You can find your Tower of Fantasy UID, Server and In-Game Name in the page.</li>\\n</ol>\\n\\n<h3><strong>How to get Tanium in Tower of Fantasy?</strong></h3>\\n\\n<p><strong>Tanium</strong>&nbsp;are one of most important currencies in Tower of Fantasy, it can be converted to Dark Crystals or be used to purchase items from Daily Supply Boxes and Limited Gift Packs etc. However, in Tower of Fantasy, there is only one way to obtain Tanium: spend real-world money.</p>\\n\\n<h3><strong>Where to use Dark Crystals in Tower of Fantasy?</strong></h3>\\n\\n<p><strong>Dark Crystals</strong>&nbsp;are one of the currencies in Tower of Fantasy, it can be obtained by convert from Taniums, or completing specific tasks and missions in-game. You can exchange Dark Crystals for some items in the shop like, Nucleus, Vitality Solution, Special Voucher, Proof of Purchase and Gachapon coins etc.</p>\\n"`,
    contentVi: `<h3><strong>L&agrave;m thế n&agrave;o để mua Tower of Fantasy (TOF) Tanium v&agrave; Packages tr&ecirc;n Kaleoz.com?</strong></h3>\\n\\n<ol>\\n\\t<li>Chọn h&agrave;ng h&oacute;a của Tower of Fantasy.</li>\\n\\t<li>Nhấp v&agrave;o &ldquo;THANH TO&Aacute;N NGAY&rdquo; để thực hiện thanh to&aacute;n.</li>\\n\\t<li>Sau khi thanh to&aacute;n, h&atilde;y th&ocirc;ng b&aacute;o cho người b&aacute;n qua Kchat v&agrave; đợi h&agrave;ng của bạn được giao.</li>\\n</ol>\\n\\n<h3><strong>C&aacute;ch t&igrave;m UID của Tower of Fantasy</strong></h3>\\n\\n<p><img alt=\\"làm thế nào để tìm thấy tháp tưởng tượng uid\\" src=\\"https://kaleoz-kchat.seagmcdn.com/guide_content/images/prod/202210/oss-351a2b6193ea1c8ae8d5c1f24bb0d325.jpg?x-oss-process=image/resize,m_fill,l_1000\\" /></p>\\n\\n<ol>\\n\\t<li>Nhấp v&agrave;o &quot;Biểu tượng kh&aacute;c&quot; ở g&oacute;c tr&ecirc;n c&ugrave;ng b&ecirc;n phải v&agrave; mở c&agrave;i đặt tr&ograve; chơi.</li>\\n\\t<li>Bạn c&oacute; thể t&igrave;m thấy UID, M&aacute;y chủ v&agrave; T&ecirc;n trong Tr&ograve; chơi của Tower of Fantasy trong trang.</li>\\n</ol>\\n\\n<h3><strong>L&agrave;m thế n&agrave;o để c&oacute; được Tanium trong Tower of Fantasy?</strong></h3>\\n\\n<p><strong>Tanium</strong>&nbsp;l&agrave; một trong những đơn vị tiền tệ quan trọng nhất trong Tower of Fantasy, n&oacute; c&oacute; thể được chuyển đổi th&agrave;nh Dark Crystals hoặc được sử dụng để mua c&aacute;c vật phẩm từ Hộp cung cấp h&agrave;ng ng&agrave;y v&agrave; G&oacute;i qu&agrave; giới hạn, v.v. Tuy nhi&ecirc;n, trong Tower of Fantasy, chỉ c&oacute; một c&aacute;ch duy nhất để c&oacute; được Tanium : ti&ecirc;u tiền trong thế giới thực.</p>\\n\\n<h3><strong>Sử dụng Dark Crystals trong Tower of Fantasy ở đ&acirc;u?</strong></h3>\\n\\n<p><strong>Dark Crystals</strong>&nbsp;l&agrave; một trong những loại tiền tệ trong Tower of Fantasy, n&oacute; c&oacute; thể kiếm được bằng c&aacute;ch chuyển đổi từ c&aacute;c Taniums hoặc ho&agrave;n th&agrave;nh c&aacute;c nhiệm vụ v&agrave; nhiệm vụ cụ thể trong tr&ograve; chơi. Bạn c&oacute; thể đổi Dark Crystals để lấy một số vật phẩm trong cửa h&agrave;ng như, Nucleus, Vitality Solution, Special Voucher, Proof of Purchase v&agrave; Gachapon xu, v.v.</p>\\n`

};

class GameDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: true
        }
    }

    componentDidMount() {
    }

    changeTabContent() {
        this.setState({content: !this.state.content})
    }

    render() {
        return (
            <div>
                <Translation>{t => <TopMenu t={t}/>}</Translation>
                <NavBar/>
                <SubNavGame game={game} changeTabContent={this.changeTabContent.bind(this)} />
                <div className="item-content-card">
                    <GameDetailSearchBar/>
                </div>
                <ParallaxImage/>
                <Footer/>
                <ScrollButton scrollStepInPx='50' delayInMs='16.66'/>
            </div>
        )
    }
}

export default (GameDetail);
