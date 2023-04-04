import React from 'react';
import './game.css';
import {Translation} from "react-i18next";
import TopMenu from "../TopMenu";
import NavBar from "../NavBar";
import ParallaxImage from "../parallax/ParallaxImage";
import Footer from "../Footer";
import ScrollButton from "../ScrollButton";
import GameList from "./GameList";
import TreeRenderer, {pathGet, pathMerge} from 'react-tree-renderer';
import {default as DefaultTemplate, eventTypes} from './DefaultTemplate'
import LoadingSpinner from "../LoadingSpinner";


const gameList = [
    {
        thumbnail: "http://52.41.255.157:8080/trunggame-0.0.1/api/file/4980a3f1-96d2-4d56-b215-0c5c2eca5b07-4-fun.png",
        name: "4Fun",
        categoryId: "1",
        categoryName: "Shoot Game",
        gamePriority: 1,
        type: "Mobile",
        marketType: "Europe",
        companyName: "Unit",
        description: `"<h2>Giới thiệu về Tower of Fantasy (TOF)</h2>\\n\\n<p>C&ugrave;ng nhau bắt tay v&agrave;o cuộc phi&ecirc;u lưu tưởng tượng của bạn!<br />\\nLấy bối cảnh h&agrave;ng trăm năm trong tương lai tr&ecirc;n h&agrave;nh tinh Aida xa x&ocirc;i, tựa game MMORPG thế giới mở được chia sẻ, phi&ecirc;u lưu khoa học viễn tưởng&nbsp;<strong>Tower of Fantasy</strong>&nbsp;của nh&agrave; ph&aacute;t triển Hotta Studio v&agrave; nh&agrave; xuất bản Level Infinite, hiện đ&atilde; c&oacute; mặt tr&ecirc;n c&aacute;c nền tảng PC v&agrave; di động tr&ecirc;n to&agrave;n cầu. Người chơi sẽ c&oacute; thể trải nghiệm phong c&aacute;ch nghệ thuật khoa học viễn tưởng hậu khải huyền lấy cảm hứng từ anime, ph&aacute;t triển nh&acirc;n vật dạng tự do v&agrave; chiến đấu th&uacute; vị th&ocirc;ng qua c&aacute;c trận chiến gay cấn v&agrave; kh&aacute;m ph&aacute; thế giới mở th&uacute; vị. Để n&acirc;ng cao khả năng phi&ecirc;u lưu v&agrave; bổ sung cho lối chơi của bạn, bạn c&oacute; thể mua dịch vụ tải lại Tower of Fantasy từ danh s&aacute;ch những người b&aacute;n uy t&iacute;n của ch&uacute;ng t&ocirc;i tại đ&acirc;y tại Kaleoz.com trong một m&ocirc;i trường an to&agrave;n bảo mật v&agrave; mức gi&aacute; rẻ.</p>\\n\\n<p>&nbsp;</p>\\n"`,
        descriptionEn: `"<h2>About Tower of Fantasy (TOF)</h2>\\n\\n<p>Embark together on your fantasy adventure!<br />\\nSet hundreds of years in the future on the distant planet of Aida, the shared open-world MMORPG, anime-infused sci-fi adventure&nbsp;<strong>Tower of Fantasy</strong>&nbsp;from developer Hotta Studio and publisher Level Infinite, is now available on PC and mobile platforms globally. Players will be able to experience an anime-inspired post-apocalyptic sci-fi art style, freeform character development, and exciting combat through thrilling battles and exciting open-world exploration. To enhance your adventure and compliment your gameplay, you can buy Tower of Fantasy reload services from our list of reputable sellers here at Kaleoz.com in a safe secure environment and at cheap rates.</p>\\n"`,
        contentEn: `"<h3><strong>How to buy Tower of Fantasy (TOF) Tanium and Packages on Kaleoz.com?</strong></h3>\\n\\n<ol>\\n\\t<li>Select the goods of Tower of Fantasy.</li>\\n\\t<li>Click &ldquo;PAY NOW&rdquo; to make payment.</li>\\n\\t<li>After payment, notify the seller via Kchat and wait for your item to be delivered.</li>\\n</ol>\\n\\n<h3><strong>How to find Tower of Fantasy UID?</strong></h3>\\n\\n<p><img alt=\\"how to find tower of fantasy uid\\" src=\\"https://kaleoz-kchat.seagmcdn.com/guide_content/images/prod/202210/oss-351a2b6193ea1c8ae8d5c1f24bb0d325.jpg?x-oss-process=image/resize,m_fill,l_1000\\" /></p>\\n\\n<ol>\\n\\t<li>Click &quot;More icon&quot; at the top right corner and open game setting.</li>\\n\\t<li>You can find your Tower of Fantasy UID, Server and In-Game Name in the page.</li>\\n</ol>\\n\\n<h3><strong>How to get Tanium in Tower of Fantasy?</strong></h3>\\n\\n<p><strong>Tanium</strong>&nbsp;are one of most important currencies in Tower of Fantasy, it can be converted to Dark Crystals or be used to purchase items from Daily Supply Boxes and Limited Gift Packs etc. However, in Tower of Fantasy, there is only one way to obtain Tanium: spend real-world money.</p>\\n\\n<h3><strong>Where to use Dark Crystals in Tower of Fantasy?</strong></h3>\\n\\n<p><strong>Dark Crystals</strong>&nbsp;are one of the currencies in Tower of Fantasy, it can be obtained by convert from Taniums, or completing specific tasks and missions in-game. You can exchange Dark Crystals for some items in the shop like, Nucleus, Vitality Solution, Special Voucher, Proof of Purchase and Gachapon coins etc.</p>\\n"`,
        contentVi: `<h3><strong>L&agrave;m thế n&agrave;o để mua Tower of Fantasy (TOF) Tanium v&agrave; Packages tr&ecirc;n Kaleoz.com?</strong></h3>\\n\\n<ol>\\n\\t<li>Chọn h&agrave;ng h&oacute;a của Tower of Fantasy.</li>\\n\\t<li>Nhấp v&agrave;o &ldquo;THANH TO&Aacute;N NGAY&rdquo; để thực hiện thanh to&aacute;n.</li>\\n\\t<li>Sau khi thanh to&aacute;n, h&atilde;y th&ocirc;ng b&aacute;o cho người b&aacute;n qua Kchat v&agrave; đợi h&agrave;ng của bạn được giao.</li>\\n</ol>\\n\\n<h3><strong>C&aacute;ch t&igrave;m UID của Tower of Fantasy</strong></h3>\\n\\n<p><img alt=\\"làm thế nào để tìm thấy tháp tưởng tượng uid\\" src=\\"https://kaleoz-kchat.seagmcdn.com/guide_content/images/prod/202210/oss-351a2b6193ea1c8ae8d5c1f24bb0d325.jpg?x-oss-process=image/resize,m_fill,l_1000\\" /></p>\\n\\n<ol>\\n\\t<li>Nhấp v&agrave;o &quot;Biểu tượng kh&aacute;c&quot; ở g&oacute;c tr&ecirc;n c&ugrave;ng b&ecirc;n phải v&agrave; mở c&agrave;i đặt tr&ograve; chơi.</li>\\n\\t<li>Bạn c&oacute; thể t&igrave;m thấy UID, M&aacute;y chủ v&agrave; T&ecirc;n trong Tr&ograve; chơi của Tower of Fantasy trong trang.</li>\\n</ol>\\n\\n<h3><strong>L&agrave;m thế n&agrave;o để c&oacute; được Tanium trong Tower of Fantasy?</strong></h3>\\n\\n<p><strong>Tanium</strong>&nbsp;l&agrave; một trong những đơn vị tiền tệ quan trọng nhất trong Tower of Fantasy, n&oacute; c&oacute; thể được chuyển đổi th&agrave;nh Dark Crystals hoặc được sử dụng để mua c&aacute;c vật phẩm từ Hộp cung cấp h&agrave;ng ng&agrave;y v&agrave; G&oacute;i qu&agrave; giới hạn, v.v. Tuy nhi&ecirc;n, trong Tower of Fantasy, chỉ c&oacute; một c&aacute;ch duy nhất để c&oacute; được Tanium : ti&ecirc;u tiền trong thế giới thực.</p>\\n\\n<h3><strong>Sử dụng Dark Crystals trong Tower of Fantasy ở đ&acirc;u?</strong></h3>\\n\\n<p><strong>Dark Crystals</strong>&nbsp;l&agrave; một trong những loại tiền tệ trong Tower of Fantasy, n&oacute; c&oacute; thể kiếm được bằng c&aacute;ch chuyển đổi từ c&aacute;c Taniums hoặc ho&agrave;n th&agrave;nh c&aacute;c nhiệm vụ v&agrave; nhiệm vụ cụ thể trong tr&ograve; chơi. Bạn c&oacute; thể đổi Dark Crystals để lấy một số vật phẩm trong cửa h&agrave;ng như, Nucleus, Vitality Solution, Special Voucher, Proof of Purchase v&agrave; Gachapon xu, v.v.</p>\\n`
    },
    {
        thumbnail: "http://52.41.255.157:8080/trunggame-0.0.1/api/file/3824cfb4-f4ee-481c-876b-93c166f23123-4X-my-empire.png",
        name: "4X My Empire",
        categoryId: "1",
        categoryName: "Shoot Game",
        gamePriority: 1,
        type: "Mobile",
        marketType: "Europe",
        companyName: "Vinagame",
        description: `"<h2>Giới thiệu về Tower of Fantasy (TOF)</h2>\\n\\n<p>C&ugrave;ng nhau bắt tay v&agrave;o cuộc phi&ecirc;u lưu tưởng tượng của bạn!<br />\\nLấy bối cảnh h&agrave;ng trăm năm trong tương lai tr&ecirc;n h&agrave;nh tinh Aida xa x&ocirc;i, tựa game MMORPG thế giới mở được chia sẻ, phi&ecirc;u lưu khoa học viễn tưởng&nbsp;<strong>Tower of Fantasy</strong>&nbsp;của nh&agrave; ph&aacute;t triển Hotta Studio v&agrave; nh&agrave; xuất bản Level Infinite, hiện đ&atilde; c&oacute; mặt tr&ecirc;n c&aacute;c nền tảng PC v&agrave; di động tr&ecirc;n to&agrave;n cầu. Người chơi sẽ c&oacute; thể trải nghiệm phong c&aacute;ch nghệ thuật khoa học viễn tưởng hậu khải huyền lấy cảm hứng từ anime, ph&aacute;t triển nh&acirc;n vật dạng tự do v&agrave; chiến đấu th&uacute; vị th&ocirc;ng qua c&aacute;c trận chiến gay cấn v&agrave; kh&aacute;m ph&aacute; thế giới mở th&uacute; vị. Để n&acirc;ng cao khả năng phi&ecirc;u lưu v&agrave; bổ sung cho lối chơi của bạn, bạn c&oacute; thể mua dịch vụ tải lại Tower of Fantasy từ danh s&aacute;ch những người b&aacute;n uy t&iacute;n của ch&uacute;ng t&ocirc;i tại đ&acirc;y tại Kaleoz.com trong một m&ocirc;i trường an to&agrave;n bảo mật v&agrave; mức gi&aacute; rẻ.</p>\\n\\n<p>&nbsp;</p>\\n"`,
        descriptionEn: `"<h2>About Tower of Fantasy (TOF)</h2>\\n\\n<p>Embark together on your fantasy adventure!<br />\\nSet hundreds of years in the future on the distant planet of Aida, the shared open-world MMORPG, anime-infused sci-fi adventure&nbsp;<strong>Tower of Fantasy</strong>&nbsp;from developer Hotta Studio and publisher Level Infinite, is now available on PC and mobile platforms globally. Players will be able to experience an anime-inspired post-apocalyptic sci-fi art style, freeform character development, and exciting combat through thrilling battles and exciting open-world exploration. To enhance your adventure and compliment your gameplay, you can buy Tower of Fantasy reload services from our list of reputable sellers here at Kaleoz.com in a safe secure environment and at cheap rates.</p>\\n"`,
        contentEn: `"<h3><strong>How to buy Tower of Fantasy (TOF) Tanium and Packages on Kaleoz.com?</strong></h3>\\n\\n<ol>\\n\\t<li>Select the goods of Tower of Fantasy.</li>\\n\\t<li>Click &ldquo;PAY NOW&rdquo; to make payment.</li>\\n\\t<li>After payment, notify the seller via Kchat and wait for your item to be delivered.</li>\\n</ol>\\n\\n<h3><strong>How to find Tower of Fantasy UID?</strong></h3>\\n\\n<p><img alt=\\"how to find tower of fantasy uid\\" src=\\"https://kaleoz-kchat.seagmcdn.com/guide_content/images/prod/202210/oss-351a2b6193ea1c8ae8d5c1f24bb0d325.jpg?x-oss-process=image/resize,m_fill,l_1000\\" /></p>\\n\\n<ol>\\n\\t<li>Click &quot;More icon&quot; at the top right corner and open game setting.</li>\\n\\t<li>You can find your Tower of Fantasy UID, Server and In-Game Name in the page.</li>\\n</ol>\\n\\n<h3><strong>How to get Tanium in Tower of Fantasy?</strong></h3>\\n\\n<p><strong>Tanium</strong>&nbsp;are one of most important currencies in Tower of Fantasy, it can be converted to Dark Crystals or be used to purchase items from Daily Supply Boxes and Limited Gift Packs etc. However, in Tower of Fantasy, there is only one way to obtain Tanium: spend real-world money.</p>\\n\\n<h3><strong>Where to use Dark Crystals in Tower of Fantasy?</strong></h3>\\n\\n<p><strong>Dark Crystals</strong>&nbsp;are one of the currencies in Tower of Fantasy, it can be obtained by convert from Taniums, or completing specific tasks and missions in-game. You can exchange Dark Crystals for some items in the shop like, Nucleus, Vitality Solution, Special Voucher, Proof of Purchase and Gachapon coins etc.</p>\\n"`,
        contentVi: `<h3><strong>L&agrave;m thế n&agrave;o để mua Tower of Fantasy (TOF) Tanium v&agrave; Packages tr&ecirc;n Kaleoz.com?</strong></h3>\\n\\n<ol>\\n\\t<li>Chọn h&agrave;ng h&oacute;a của Tower of Fantasy.</li>\\n\\t<li>Nhấp v&agrave;o &ldquo;THANH TO&Aacute;N NGAY&rdquo; để thực hiện thanh to&aacute;n.</li>\\n\\t<li>Sau khi thanh to&aacute;n, h&atilde;y th&ocirc;ng b&aacute;o cho người b&aacute;n qua Kchat v&agrave; đợi h&agrave;ng của bạn được giao.</li>\\n</ol>\\n\\n<h3><strong>C&aacute;ch t&igrave;m UID của Tower of Fantasy</strong></h3>\\n\\n<p><img alt=\\"làm thế nào để tìm thấy tháp tưởng tượng uid\\" src=\\"https://kaleoz-kchat.seagmcdn.com/guide_content/images/prod/202210/oss-351a2b6193ea1c8ae8d5c1f24bb0d325.jpg?x-oss-process=image/resize,m_fill,l_1000\\" /></p>\\n\\n<ol>\\n\\t<li>Nhấp v&agrave;o &quot;Biểu tượng kh&aacute;c&quot; ở g&oacute;c tr&ecirc;n c&ugrave;ng b&ecirc;n phải v&agrave; mở c&agrave;i đặt tr&ograve; chơi.</li>\\n\\t<li>Bạn c&oacute; thể t&igrave;m thấy UID, M&aacute;y chủ v&agrave; T&ecirc;n trong Tr&ograve; chơi của Tower of Fantasy trong trang.</li>\\n</ol>\\n\\n<h3><strong>L&agrave;m thế n&agrave;o để c&oacute; được Tanium trong Tower of Fantasy?</strong></h3>\\n\\n<p><strong>Tanium</strong>&nbsp;l&agrave; một trong những đơn vị tiền tệ quan trọng nhất trong Tower of Fantasy, n&oacute; c&oacute; thể được chuyển đổi th&agrave;nh Dark Crystals hoặc được sử dụng để mua c&aacute;c vật phẩm từ Hộp cung cấp h&agrave;ng ng&agrave;y v&agrave; G&oacute;i qu&agrave; giới hạn, v.v. Tuy nhi&ecirc;n, trong Tower of Fantasy, chỉ c&oacute; một c&aacute;ch duy nhất để c&oacute; được Tanium : ti&ecirc;u tiền trong thế giới thực.</p>\\n\\n<h3><strong>Sử dụng Dark Crystals trong Tower of Fantasy ở đ&acirc;u?</strong></h3>\\n\\n<p><strong>Dark Crystals</strong>&nbsp;l&agrave; một trong những loại tiền tệ trong Tower of Fantasy, n&oacute; c&oacute; thể kiếm được bằng c&aacute;ch chuyển đổi từ c&aacute;c Taniums hoặc ho&agrave;n th&agrave;nh c&aacute;c nhiệm vụ v&agrave; nhiệm vụ cụ thể trong tr&ograve; chơi. Bạn c&oacute; thể đổi Dark Crystals để lấy một số vật phẩm trong cửa h&agrave;ng như, Nucleus, Vitality Solution, Special Voucher, Proof of Purchase v&agrave; Gachapon xu, v.v.</p>\\n`

    },
    {
        thumbnail: "http://52.41.255.157:8080/trunggame-0.0.1/api/file/33cfd6b6-86d7-47ce-b74f-45cec9b7905b-8-pool.png",
        name: "8 Pool",
        categoryId: "1",
        categoryName: "Shoot Game",
        gamePriority: 0,
        type: "Mobile",
        marketType: "Europe",
        companyName: "Vinagame",
        description: `"<h2>Giới thiệu về Tower of Fantasy (TOF)</h2>\\n\\n<p>C&ugrave;ng nhau bắt tay v&agrave;o cuộc phi&ecirc;u lưu tưởng tượng của bạn!<br />\\nLấy bối cảnh h&agrave;ng trăm năm trong tương lai tr&ecirc;n h&agrave;nh tinh Aida xa x&ocirc;i, tựa game MMORPG thế giới mở được chia sẻ, phi&ecirc;u lưu khoa học viễn tưởng&nbsp;<strong>Tower of Fantasy</strong>&nbsp;của nh&agrave; ph&aacute;t triển Hotta Studio v&agrave; nh&agrave; xuất bản Level Infinite, hiện đ&atilde; c&oacute; mặt tr&ecirc;n c&aacute;c nền tảng PC v&agrave; di động tr&ecirc;n to&agrave;n cầu. Người chơi sẽ c&oacute; thể trải nghiệm phong c&aacute;ch nghệ thuật khoa học viễn tưởng hậu khải huyền lấy cảm hứng từ anime, ph&aacute;t triển nh&acirc;n vật dạng tự do v&agrave; chiến đấu th&uacute; vị th&ocirc;ng qua c&aacute;c trận chiến gay cấn v&agrave; kh&aacute;m ph&aacute; thế giới mở th&uacute; vị. Để n&acirc;ng cao khả năng phi&ecirc;u lưu v&agrave; bổ sung cho lối chơi của bạn, bạn c&oacute; thể mua dịch vụ tải lại Tower of Fantasy từ danh s&aacute;ch những người b&aacute;n uy t&iacute;n của ch&uacute;ng t&ocirc;i tại đ&acirc;y tại Kaleoz.com trong một m&ocirc;i trường an to&agrave;n bảo mật v&agrave; mức gi&aacute; rẻ.</p>\\n\\n<p>&nbsp;</p>\\n"`,
        descriptionEn: `"<h2>About Tower of Fantasy (TOF)</h2>\\n\\n<p>Embark together on your fantasy adventure!<br />\\nSet hundreds of years in the future on the distant planet of Aida, the shared open-world MMORPG, anime-infused sci-fi adventure&nbsp;<strong>Tower of Fantasy</strong>&nbsp;from developer Hotta Studio and publisher Level Infinite, is now available on PC and mobile platforms globally. Players will be able to experience an anime-inspired post-apocalyptic sci-fi art style, freeform character development, and exciting combat through thrilling battles and exciting open-world exploration. To enhance your adventure and compliment your gameplay, you can buy Tower of Fantasy reload services from our list of reputable sellers here at Kaleoz.com in a safe secure environment and at cheap rates.</p>\\n"`,
        contentEn: `"<h3><strong>How to buy Tower of Fantasy (TOF) Tanium and Packages on Kaleoz.com?</strong></h3>\\n\\n<ol>\\n\\t<li>Select the goods of Tower of Fantasy.</li>\\n\\t<li>Click &ldquo;PAY NOW&rdquo; to make payment.</li>\\n\\t<li>After payment, notify the seller via Kchat and wait for your item to be delivered.</li>\\n</ol>\\n\\n<h3><strong>How to find Tower of Fantasy UID?</strong></h3>\\n\\n<p><img alt=\\"how to find tower of fantasy uid\\" src=\\"https://kaleoz-kchat.seagmcdn.com/guide_content/images/prod/202210/oss-351a2b6193ea1c8ae8d5c1f24bb0d325.jpg?x-oss-process=image/resize,m_fill,l_1000\\" /></p>\\n\\n<ol>\\n\\t<li>Click &quot;More icon&quot; at the top right corner and open game setting.</li>\\n\\t<li>You can find your Tower of Fantasy UID, Server and In-Game Name in the page.</li>\\n</ol>\\n\\n<h3><strong>How to get Tanium in Tower of Fantasy?</strong></h3>\\n\\n<p><strong>Tanium</strong>&nbsp;are one of most important currencies in Tower of Fantasy, it can be converted to Dark Crystals or be used to purchase items from Daily Supply Boxes and Limited Gift Packs etc. However, in Tower of Fantasy, there is only one way to obtain Tanium: spend real-world money.</p>\\n\\n<h3><strong>Where to use Dark Crystals in Tower of Fantasy?</strong></h3>\\n\\n<p><strong>Dark Crystals</strong>&nbsp;are one of the currencies in Tower of Fantasy, it can be obtained by convert from Taniums, or completing specific tasks and missions in-game. You can exchange Dark Crystals for some items in the shop like, Nucleus, Vitality Solution, Special Voucher, Proof of Purchase and Gachapon coins etc.</p>\\n"`,
        contentVi: `<h3><strong>L&agrave;m thế n&agrave;o để mua Tower of Fantasy (TOF) Tanium v&agrave; Packages tr&ecirc;n Kaleoz.com?</strong></h3>\\n\\n<ol>\\n\\t<li>Chọn h&agrave;ng h&oacute;a của Tower of Fantasy.</li>\\n\\t<li>Nhấp v&agrave;o &ldquo;THANH TO&Aacute;N NGAY&rdquo; để thực hiện thanh to&aacute;n.</li>\\n\\t<li>Sau khi thanh to&aacute;n, h&atilde;y th&ocirc;ng b&aacute;o cho người b&aacute;n qua Kchat v&agrave; đợi h&agrave;ng của bạn được giao.</li>\\n</ol>\\n\\n<h3><strong>C&aacute;ch t&igrave;m UID của Tower of Fantasy</strong></h3>\\n\\n<p><img alt=\\"làm thế nào để tìm thấy tháp tưởng tượng uid\\" src=\\"https://kaleoz-kchat.seagmcdn.com/guide_content/images/prod/202210/oss-351a2b6193ea1c8ae8d5c1f24bb0d325.jpg?x-oss-process=image/resize,m_fill,l_1000\\" /></p>\\n\\n<ol>\\n\\t<li>Nhấp v&agrave;o &quot;Biểu tượng kh&aacute;c&quot; ở g&oacute;c tr&ecirc;n c&ugrave;ng b&ecirc;n phải v&agrave; mở c&agrave;i đặt tr&ograve; chơi.</li>\\n\\t<li>Bạn c&oacute; thể t&igrave;m thấy UID, M&aacute;y chủ v&agrave; T&ecirc;n trong Tr&ograve; chơi của Tower of Fantasy trong trang.</li>\\n</ol>\\n\\n<h3><strong>L&agrave;m thế n&agrave;o để c&oacute; được Tanium trong Tower of Fantasy?</strong></h3>\\n\\n<p><strong>Tanium</strong>&nbsp;l&agrave; một trong những đơn vị tiền tệ quan trọng nhất trong Tower of Fantasy, n&oacute; c&oacute; thể được chuyển đổi th&agrave;nh Dark Crystals hoặc được sử dụng để mua c&aacute;c vật phẩm từ Hộp cung cấp h&agrave;ng ng&agrave;y v&agrave; G&oacute;i qu&agrave; giới hạn, v.v. Tuy nhi&ecirc;n, trong Tower of Fantasy, chỉ c&oacute; một c&aacute;ch duy nhất để c&oacute; được Tanium : ti&ecirc;u tiền trong thế giới thực.</p>\\n\\n<h3><strong>Sử dụng Dark Crystals trong Tower of Fantasy ở đ&acirc;u?</strong></h3>\\n\\n<p><strong>Dark Crystals</strong>&nbsp;l&agrave; một trong những loại tiền tệ trong Tower of Fantasy, n&oacute; c&oacute; thể kiếm được bằng c&aacute;ch chuyển đổi từ c&aacute;c Taniums hoặc ho&agrave;n th&agrave;nh c&aacute;c nhiệm vụ v&agrave; nhiệm vụ cụ thể trong tr&ograve; chơi. Bạn c&oacute; thể đổi Dark Crystals để lấy một số vật phẩm trong cửa h&agrave;ng như, Nucleus, Vitality Solution, Special Voucher, Proof of Purchase v&agrave; Gachapon xu, v.v.</p>\\n`

    },
    {
        thumbnail: "http://52.41.255.157:8080/trunggame-0.0.1/api/file/97517577-45bf-4ab8-84c2-842b29c9edaf-17-live.png",
        name: "17 Live",
        categoryId: "1",
        categoryName: "Shoot Game",
        gamePriority: 1,
        type: "Mobile",
        marketType: "Europe",
        companyName: "Vinagame",
        description: `"<h2>Giới thiệu về Tower of Fantasy (TOF)</h2>\\n\\n<p>C&ugrave;ng nhau bắt tay v&agrave;o cuộc phi&ecirc;u lưu tưởng tượng của bạn!<br />\\nLấy bối cảnh h&agrave;ng trăm năm trong tương lai tr&ecirc;n h&agrave;nh tinh Aida xa x&ocirc;i, tựa game MMORPG thế giới mở được chia sẻ, phi&ecirc;u lưu khoa học viễn tưởng&nbsp;<strong>Tower of Fantasy</strong>&nbsp;của nh&agrave; ph&aacute;t triển Hotta Studio v&agrave; nh&agrave; xuất bản Level Infinite, hiện đ&atilde; c&oacute; mặt tr&ecirc;n c&aacute;c nền tảng PC v&agrave; di động tr&ecirc;n to&agrave;n cầu. Người chơi sẽ c&oacute; thể trải nghiệm phong c&aacute;ch nghệ thuật khoa học viễn tưởng hậu khải huyền lấy cảm hứng từ anime, ph&aacute;t triển nh&acirc;n vật dạng tự do v&agrave; chiến đấu th&uacute; vị th&ocirc;ng qua c&aacute;c trận chiến gay cấn v&agrave; kh&aacute;m ph&aacute; thế giới mở th&uacute; vị. Để n&acirc;ng cao khả năng phi&ecirc;u lưu v&agrave; bổ sung cho lối chơi của bạn, bạn c&oacute; thể mua dịch vụ tải lại Tower of Fantasy từ danh s&aacute;ch những người b&aacute;n uy t&iacute;n của ch&uacute;ng t&ocirc;i tại đ&acirc;y tại Kaleoz.com trong một m&ocirc;i trường an to&agrave;n bảo mật v&agrave; mức gi&aacute; rẻ.</p>\\n\\n<p>&nbsp;</p>\\n"`,
        descriptionEn: `"<h2>About Tower of Fantasy (TOF)</h2>\\n\\n<p>Embark together on your fantasy adventure!<br />\\nSet hundreds of years in the future on the distant planet of Aida, the shared open-world MMORPG, anime-infused sci-fi adventure&nbsp;<strong>Tower of Fantasy</strong>&nbsp;from developer Hotta Studio and publisher Level Infinite, is now available on PC and mobile platforms globally. Players will be able to experience an anime-inspired post-apocalyptic sci-fi art style, freeform character development, and exciting combat through thrilling battles and exciting open-world exploration. To enhance your adventure and compliment your gameplay, you can buy Tower of Fantasy reload services from our list of reputable sellers here at Kaleoz.com in a safe secure environment and at cheap rates.</p>\\n"`,
        contentEn: `"<h3><strong>How to buy Tower of Fantasy (TOF) Tanium and Packages on Kaleoz.com?</strong></h3>\\n\\n<ol>\\n\\t<li>Select the goods of Tower of Fantasy.</li>\\n\\t<li>Click &ldquo;PAY NOW&rdquo; to make payment.</li>\\n\\t<li>After payment, notify the seller via Kchat and wait for your item to be delivered.</li>\\n</ol>\\n\\n<h3><strong>How to find Tower of Fantasy UID?</strong></h3>\\n\\n<p><img alt=\\"how to find tower of fantasy uid\\" src=\\"https://kaleoz-kchat.seagmcdn.com/guide_content/images/prod/202210/oss-351a2b6193ea1c8ae8d5c1f24bb0d325.jpg?x-oss-process=image/resize,m_fill,l_1000\\" /></p>\\n\\n<ol>\\n\\t<li>Click &quot;More icon&quot; at the top right corner and open game setting.</li>\\n\\t<li>You can find your Tower of Fantasy UID, Server and In-Game Name in the page.</li>\\n</ol>\\n\\n<h3><strong>How to get Tanium in Tower of Fantasy?</strong></h3>\\n\\n<p><strong>Tanium</strong>&nbsp;are one of most important currencies in Tower of Fantasy, it can be converted to Dark Crystals or be used to purchase items from Daily Supply Boxes and Limited Gift Packs etc. However, in Tower of Fantasy, there is only one way to obtain Tanium: spend real-world money.</p>\\n\\n<h3><strong>Where to use Dark Crystals in Tower of Fantasy?</strong></h3>\\n\\n<p><strong>Dark Crystals</strong>&nbsp;are one of the currencies in Tower of Fantasy, it can be obtained by convert from Taniums, or completing specific tasks and missions in-game. You can exchange Dark Crystals for some items in the shop like, Nucleus, Vitality Solution, Special Voucher, Proof of Purchase and Gachapon coins etc.</p>\\n"`,
        contentVi: `<h3><strong>L&agrave;m thế n&agrave;o để mua Tower of Fantasy (TOF) Tanium v&agrave; Packages tr&ecirc;n Kaleoz.com?</strong></h3>\\n\\n<ol>\\n\\t<li>Chọn h&agrave;ng h&oacute;a của Tower of Fantasy.</li>\\n\\t<li>Nhấp v&agrave;o &ldquo;THANH TO&Aacute;N NGAY&rdquo; để thực hiện thanh to&aacute;n.</li>\\n\\t<li>Sau khi thanh to&aacute;n, h&atilde;y th&ocirc;ng b&aacute;o cho người b&aacute;n qua Kchat v&agrave; đợi h&agrave;ng của bạn được giao.</li>\\n</ol>\\n\\n<h3><strong>C&aacute;ch t&igrave;m UID của Tower of Fantasy</strong></h3>\\n\\n<p><img alt=\\"làm thế nào để tìm thấy tháp tưởng tượng uid\\" src=\\"https://kaleoz-kchat.seagmcdn.com/guide_content/images/prod/202210/oss-351a2b6193ea1c8ae8d5c1f24bb0d325.jpg?x-oss-process=image/resize,m_fill,l_1000\\" /></p>\\n\\n<ol>\\n\\t<li>Nhấp v&agrave;o &quot;Biểu tượng kh&aacute;c&quot; ở g&oacute;c tr&ecirc;n c&ugrave;ng b&ecirc;n phải v&agrave; mở c&agrave;i đặt tr&ograve; chơi.</li>\\n\\t<li>Bạn c&oacute; thể t&igrave;m thấy UID, M&aacute;y chủ v&agrave; T&ecirc;n trong Tr&ograve; chơi của Tower of Fantasy trong trang.</li>\\n</ol>\\n\\n<h3><strong>L&agrave;m thế n&agrave;o để c&oacute; được Tanium trong Tower of Fantasy?</strong></h3>\\n\\n<p><strong>Tanium</strong>&nbsp;l&agrave; một trong những đơn vị tiền tệ quan trọng nhất trong Tower of Fantasy, n&oacute; c&oacute; thể được chuyển đổi th&agrave;nh Dark Crystals hoặc được sử dụng để mua c&aacute;c vật phẩm từ Hộp cung cấp h&agrave;ng ng&agrave;y v&agrave; G&oacute;i qu&agrave; giới hạn, v.v. Tuy nhi&ecirc;n, trong Tower of Fantasy, chỉ c&oacute; một c&aacute;ch duy nhất để c&oacute; được Tanium : ti&ecirc;u tiền trong thế giới thực.</p>\\n\\n<h3><strong>Sử dụng Dark Crystals trong Tower of Fantasy ở đ&acirc;u?</strong></h3>\\n\\n<p><strong>Dark Crystals</strong>&nbsp;l&agrave; một trong những loại tiền tệ trong Tower of Fantasy, n&oacute; c&oacute; thể kiếm được bằng c&aacute;ch chuyển đổi từ c&aacute;c Taniums hoặc ho&agrave;n th&agrave;nh c&aacute;c nhiệm vụ v&agrave; nhiệm vụ cụ thể trong tr&ograve; chơi. Bạn c&oacute; thể đổi Dark Crystals để lấy một số vật phẩm trong cửa h&agrave;ng như, Nucleus, Vitality Solution, Special Voucher, Proof of Purchase v&agrave; Gachapon xu, v.v.</p>\\n`

    },
    {
        thumbnail: "http://52.41.255.157:8080/trunggame-0.0.1/api/file/9e9450d8-1564-49b1-834c-fc0c748e3675-ace-racer.png",
        name: "Ace Racer",
        categoryId: "1",
        categoryName: "Shoot Game",
        gamePriority: 0,
        type: "Mobile",
        marketType: "Europe",
        companyName: "Vinagame",
        description: `"<h2>Giới thiệu về Tower of Fantasy (TOF)</h2>\\n\\n<p>C&ugrave;ng nhau bắt tay v&agrave;o cuộc phi&ecirc;u lưu tưởng tượng của bạn!<br />\\nLấy bối cảnh h&agrave;ng trăm năm trong tương lai tr&ecirc;n h&agrave;nh tinh Aida xa x&ocirc;i, tựa game MMORPG thế giới mở được chia sẻ, phi&ecirc;u lưu khoa học viễn tưởng&nbsp;<strong>Tower of Fantasy</strong>&nbsp;của nh&agrave; ph&aacute;t triển Hotta Studio v&agrave; nh&agrave; xuất bản Level Infinite, hiện đ&atilde; c&oacute; mặt tr&ecirc;n c&aacute;c nền tảng PC v&agrave; di động tr&ecirc;n to&agrave;n cầu. Người chơi sẽ c&oacute; thể trải nghiệm phong c&aacute;ch nghệ thuật khoa học viễn tưởng hậu khải huyền lấy cảm hứng từ anime, ph&aacute;t triển nh&acirc;n vật dạng tự do v&agrave; chiến đấu th&uacute; vị th&ocirc;ng qua c&aacute;c trận chiến gay cấn v&agrave; kh&aacute;m ph&aacute; thế giới mở th&uacute; vị. Để n&acirc;ng cao khả năng phi&ecirc;u lưu v&agrave; bổ sung cho lối chơi của bạn, bạn c&oacute; thể mua dịch vụ tải lại Tower of Fantasy từ danh s&aacute;ch những người b&aacute;n uy t&iacute;n của ch&uacute;ng t&ocirc;i tại đ&acirc;y tại Kaleoz.com trong một m&ocirc;i trường an to&agrave;n bảo mật v&agrave; mức gi&aacute; rẻ.</p>\\n\\n<p>&nbsp;</p>\\n"`,
        descriptionEn: `"<h2>About Tower of Fantasy (TOF)</h2>\\n\\n<p>Embark together on your fantasy adventure!<br />\\nSet hundreds of years in the future on the distant planet of Aida, the shared open-world MMORPG, anime-infused sci-fi adventure&nbsp;<strong>Tower of Fantasy</strong>&nbsp;from developer Hotta Studio and publisher Level Infinite, is now available on PC and mobile platforms globally. Players will be able to experience an anime-inspired post-apocalyptic sci-fi art style, freeform character development, and exciting combat through thrilling battles and exciting open-world exploration. To enhance your adventure and compliment your gameplay, you can buy Tower of Fantasy reload services from our list of reputable sellers here at Kaleoz.com in a safe secure environment and at cheap rates.</p>\\n"`,
        contentEn: `"<h3><strong>How to buy Tower of Fantasy (TOF) Tanium and Packages on Kaleoz.com?</strong></h3>\\n\\n<ol>\\n\\t<li>Select the goods of Tower of Fantasy.</li>\\n\\t<li>Click &ldquo;PAY NOW&rdquo; to make payment.</li>\\n\\t<li>After payment, notify the seller via Kchat and wait for your item to be delivered.</li>\\n</ol>\\n\\n<h3><strong>How to find Tower of Fantasy UID?</strong></h3>\\n\\n<p><img alt=\\"how to find tower of fantasy uid\\" src=\\"https://kaleoz-kchat.seagmcdn.com/guide_content/images/prod/202210/oss-351a2b6193ea1c8ae8d5c1f24bb0d325.jpg?x-oss-process=image/resize,m_fill,l_1000\\" /></p>\\n\\n<ol>\\n\\t<li>Click &quot;More icon&quot; at the top right corner and open game setting.</li>\\n\\t<li>You can find your Tower of Fantasy UID, Server and In-Game Name in the page.</li>\\n</ol>\\n\\n<h3><strong>How to get Tanium in Tower of Fantasy?</strong></h3>\\n\\n<p><strong>Tanium</strong>&nbsp;are one of most important currencies in Tower of Fantasy, it can be converted to Dark Crystals or be used to purchase items from Daily Supply Boxes and Limited Gift Packs etc. However, in Tower of Fantasy, there is only one way to obtain Tanium: spend real-world money.</p>\\n\\n<h3><strong>Where to use Dark Crystals in Tower of Fantasy?</strong></h3>\\n\\n<p><strong>Dark Crystals</strong>&nbsp;are one of the currencies in Tower of Fantasy, it can be obtained by convert from Taniums, or completing specific tasks and missions in-game. You can exchange Dark Crystals for some items in the shop like, Nucleus, Vitality Solution, Special Voucher, Proof of Purchase and Gachapon coins etc.</p>\\n"`,
        contentVi: `<h3><strong>L&agrave;m thế n&agrave;o để mua Tower of Fantasy (TOF) Tanium v&agrave; Packages tr&ecirc;n Kaleoz.com?</strong></h3>\\n\\n<ol>\\n\\t<li>Chọn h&agrave;ng h&oacute;a của Tower of Fantasy.</li>\\n\\t<li>Nhấp v&agrave;o &ldquo;THANH TO&Aacute;N NGAY&rdquo; để thực hiện thanh to&aacute;n.</li>\\n\\t<li>Sau khi thanh to&aacute;n, h&atilde;y th&ocirc;ng b&aacute;o cho người b&aacute;n qua Kchat v&agrave; đợi h&agrave;ng của bạn được giao.</li>\\n</ol>\\n\\n<h3><strong>C&aacute;ch t&igrave;m UID của Tower of Fantasy</strong></h3>\\n\\n<p><img alt=\\"làm thế nào để tìm thấy tháp tưởng tượng uid\\" src=\\"https://kaleoz-kchat.seagmcdn.com/guide_content/images/prod/202210/oss-351a2b6193ea1c8ae8d5c1f24bb0d325.jpg?x-oss-process=image/resize,m_fill,l_1000\\" /></p>\\n\\n<ol>\\n\\t<li>Nhấp v&agrave;o &quot;Biểu tượng kh&aacute;c&quot; ở g&oacute;c tr&ecirc;n c&ugrave;ng b&ecirc;n phải v&agrave; mở c&agrave;i đặt tr&ograve; chơi.</li>\\n\\t<li>Bạn c&oacute; thể t&igrave;m thấy UID, M&aacute;y chủ v&agrave; T&ecirc;n trong Tr&ograve; chơi của Tower of Fantasy trong trang.</li>\\n</ol>\\n\\n<h3><strong>L&agrave;m thế n&agrave;o để c&oacute; được Tanium trong Tower of Fantasy?</strong></h3>\\n\\n<p><strong>Tanium</strong>&nbsp;l&agrave; một trong những đơn vị tiền tệ quan trọng nhất trong Tower of Fantasy, n&oacute; c&oacute; thể được chuyển đổi th&agrave;nh Dark Crystals hoặc được sử dụng để mua c&aacute;c vật phẩm từ Hộp cung cấp h&agrave;ng ng&agrave;y v&agrave; G&oacute;i qu&agrave; giới hạn, v.v. Tuy nhi&ecirc;n, trong Tower of Fantasy, chỉ c&oacute; một c&aacute;ch duy nhất để c&oacute; được Tanium : ti&ecirc;u tiền trong thế giới thực.</p>\\n\\n<h3><strong>Sử dụng Dark Crystals trong Tower of Fantasy ở đ&acirc;u?</strong></h3>\\n\\n<p><strong>Dark Crystals</strong>&nbsp;l&agrave; một trong những loại tiền tệ trong Tower of Fantasy, n&oacute; c&oacute; thể kiếm được bằng c&aacute;ch chuyển đổi từ c&aacute;c Taniums hoặc ho&agrave;n th&agrave;nh c&aacute;c nhiệm vụ v&agrave; nhiệm vụ cụ thể trong tr&ograve; chơi. Bạn c&oacute; thể đổi Dark Crystals để lấy một số vật phẩm trong cửa h&agrave;ng như, Nucleus, Vitality Solution, Special Voucher, Proof of Purchase v&agrave; Gachapon xu, v.v.</p>\\n`

    },
    {
        thumbnail: "http://52.41.255.157:8080/trunggame-0.0.1/api/file/35655913-d914-4802-8167-0ff241a8d1df-age-of-frostfall.png",
        name: "Age Of Frostfall",
        categoryId: "1",
        categoryName: "Shoot Game",
        gamePriority: 0,
        type: "Mobile",
        marketType: "Europe",
        companyName: "Vinagame",
        description: `"<h2>Giới thiệu về Tower of Fantasy (TOF)</h2>\\n\\n<p>C&ugrave;ng nhau bắt tay v&agrave;o cuộc phi&ecirc;u lưu tưởng tượng của bạn!<br />\\nLấy bối cảnh h&agrave;ng trăm năm trong tương lai tr&ecirc;n h&agrave;nh tinh Aida xa x&ocirc;i, tựa game MMORPG thế giới mở được chia sẻ, phi&ecirc;u lưu khoa học viễn tưởng&nbsp;<strong>Tower of Fantasy</strong>&nbsp;của nh&agrave; ph&aacute;t triển Hotta Studio v&agrave; nh&agrave; xuất bản Level Infinite, hiện đ&atilde; c&oacute; mặt tr&ecirc;n c&aacute;c nền tảng PC v&agrave; di động tr&ecirc;n to&agrave;n cầu. Người chơi sẽ c&oacute; thể trải nghiệm phong c&aacute;ch nghệ thuật khoa học viễn tưởng hậu khải huyền lấy cảm hứng từ anime, ph&aacute;t triển nh&acirc;n vật dạng tự do v&agrave; chiến đấu th&uacute; vị th&ocirc;ng qua c&aacute;c trận chiến gay cấn v&agrave; kh&aacute;m ph&aacute; thế giới mở th&uacute; vị. Để n&acirc;ng cao khả năng phi&ecirc;u lưu v&agrave; bổ sung cho lối chơi của bạn, bạn c&oacute; thể mua dịch vụ tải lại Tower of Fantasy từ danh s&aacute;ch những người b&aacute;n uy t&iacute;n của ch&uacute;ng t&ocirc;i tại đ&acirc;y tại Kaleoz.com trong một m&ocirc;i trường an to&agrave;n bảo mật v&agrave; mức gi&aacute; rẻ.</p>\\n\\n<p>&nbsp;</p>\\n"`,
        descriptionEn: `"<h2>About Tower of Fantasy (TOF)</h2>\\n\\n<p>Embark together on your fantasy adventure!<br />\\nSet hundreds of years in the future on the distant planet of Aida, the shared open-world MMORPG, anime-infused sci-fi adventure&nbsp;<strong>Tower of Fantasy</strong>&nbsp;from developer Hotta Studio and publisher Level Infinite, is now available on PC and mobile platforms globally. Players will be able to experience an anime-inspired post-apocalyptic sci-fi art style, freeform character development, and exciting combat through thrilling battles and exciting open-world exploration. To enhance your adventure and compliment your gameplay, you can buy Tower of Fantasy reload services from our list of reputable sellers here at Kaleoz.com in a safe secure environment and at cheap rates.</p>\\n"`,
        contentEn: `"<h3><strong>How to buy Tower of Fantasy (TOF) Tanium and Packages on Kaleoz.com?</strong></h3>\\n\\n<ol>\\n\\t<li>Select the goods of Tower of Fantasy.</li>\\n\\t<li>Click &ldquo;PAY NOW&rdquo; to make payment.</li>\\n\\t<li>After payment, notify the seller via Kchat and wait for your item to be delivered.</li>\\n</ol>\\n\\n<h3><strong>How to find Tower of Fantasy UID?</strong></h3>\\n\\n<p><img alt=\\"how to find tower of fantasy uid\\" src=\\"https://kaleoz-kchat.seagmcdn.com/guide_content/images/prod/202210/oss-351a2b6193ea1c8ae8d5c1f24bb0d325.jpg?x-oss-process=image/resize,m_fill,l_1000\\" /></p>\\n\\n<ol>\\n\\t<li>Click &quot;More icon&quot; at the top right corner and open game setting.</li>\\n\\t<li>You can find your Tower of Fantasy UID, Server and In-Game Name in the page.</li>\\n</ol>\\n\\n<h3><strong>How to get Tanium in Tower of Fantasy?</strong></h3>\\n\\n<p><strong>Tanium</strong>&nbsp;are one of most important currencies in Tower of Fantasy, it can be converted to Dark Crystals or be used to purchase items from Daily Supply Boxes and Limited Gift Packs etc. However, in Tower of Fantasy, there is only one way to obtain Tanium: spend real-world money.</p>\\n\\n<h3><strong>Where to use Dark Crystals in Tower of Fantasy?</strong></h3>\\n\\n<p><strong>Dark Crystals</strong>&nbsp;are one of the currencies in Tower of Fantasy, it can be obtained by convert from Taniums, or completing specific tasks and missions in-game. You can exchange Dark Crystals for some items in the shop like, Nucleus, Vitality Solution, Special Voucher, Proof of Purchase and Gachapon coins etc.</p>\\n"`,
        contentVi: `<h3><strong>L&agrave;m thế n&agrave;o để mua Tower of Fantasy (TOF) Tanium v&agrave; Packages tr&ecirc;n Kaleoz.com?</strong></h3>\\n\\n<ol>\\n\\t<li>Chọn h&agrave;ng h&oacute;a của Tower of Fantasy.</li>\\n\\t<li>Nhấp v&agrave;o &ldquo;THANH TO&Aacute;N NGAY&rdquo; để thực hiện thanh to&aacute;n.</li>\\n\\t<li>Sau khi thanh to&aacute;n, h&atilde;y th&ocirc;ng b&aacute;o cho người b&aacute;n qua Kchat v&agrave; đợi h&agrave;ng của bạn được giao.</li>\\n</ol>\\n\\n<h3><strong>C&aacute;ch t&igrave;m UID của Tower of Fantasy</strong></h3>\\n\\n<p><img alt=\\"làm thế nào để tìm thấy tháp tưởng tượng uid\\" src=\\"https://kaleoz-kchat.seagmcdn.com/guide_content/images/prod/202210/oss-351a2b6193ea1c8ae8d5c1f24bb0d325.jpg?x-oss-process=image/resize,m_fill,l_1000\\" /></p>\\n\\n<ol>\\n\\t<li>Nhấp v&agrave;o &quot;Biểu tượng kh&aacute;c&quot; ở g&oacute;c tr&ecirc;n c&ugrave;ng b&ecirc;n phải v&agrave; mở c&agrave;i đặt tr&ograve; chơi.</li>\\n\\t<li>Bạn c&oacute; thể t&igrave;m thấy UID, M&aacute;y chủ v&agrave; T&ecirc;n trong Tr&ograve; chơi của Tower of Fantasy trong trang.</li>\\n</ol>\\n\\n<h3><strong>L&agrave;m thế n&agrave;o để c&oacute; được Tanium trong Tower of Fantasy?</strong></h3>\\n\\n<p><strong>Tanium</strong>&nbsp;l&agrave; một trong những đơn vị tiền tệ quan trọng nhất trong Tower of Fantasy, n&oacute; c&oacute; thể được chuyển đổi th&agrave;nh Dark Crystals hoặc được sử dụng để mua c&aacute;c vật phẩm từ Hộp cung cấp h&agrave;ng ng&agrave;y v&agrave; G&oacute;i qu&agrave; giới hạn, v.v. Tuy nhi&ecirc;n, trong Tower of Fantasy, chỉ c&oacute; một c&aacute;ch duy nhất để c&oacute; được Tanium : ti&ecirc;u tiền trong thế giới thực.</p>\\n\\n<h3><strong>Sử dụng Dark Crystals trong Tower of Fantasy ở đ&acirc;u?</strong></h3>\\n\\n<p><strong>Dark Crystals</strong>&nbsp;l&agrave; một trong những loại tiền tệ trong Tower of Fantasy, n&oacute; c&oacute; thể kiếm được bằng c&aacute;ch chuyển đổi từ c&aacute;c Taniums hoặc ho&agrave;n th&agrave;nh c&aacute;c nhiệm vụ v&agrave; nhiệm vụ cụ thể trong tr&ograve; chơi. Bạn c&oacute; thể đổi Dark Crystals để lấy một số vật phẩm trong cửa h&agrave;ng như, Nucleus, Vitality Solution, Special Voucher, Proof of Purchase v&agrave; Gachapon xu, v.v.</p>\\n`

    },
    {
        thumbnail: "http://52.41.255.157:8080/trunggame-0.0.1/api/file/fccccb21-fd9b-4132-b636-9e2c202f579b-age-z.png",
        name: "Age Z",
        categoryId: "1",
        categoryName: "Shoot Game",
        gamePriority: 1,
        type: "Mobile",
        marketType: "Europe",
        companyName: "Vinagame",
        description: `"<h2>Giới thiệu về Tower of Fantasy (TOF)</h2>\\n\\n<p>C&ugrave;ng nhau bắt tay v&agrave;o cuộc phi&ecirc;u lưu tưởng tượng của bạn!<br />\\nLấy bối cảnh h&agrave;ng trăm năm trong tương lai tr&ecirc;n h&agrave;nh tinh Aida xa x&ocirc;i, tựa game MMORPG thế giới mở được chia sẻ, phi&ecirc;u lưu khoa học viễn tưởng&nbsp;<strong>Tower of Fantasy</strong>&nbsp;của nh&agrave; ph&aacute;t triển Hotta Studio v&agrave; nh&agrave; xuất bản Level Infinite, hiện đ&atilde; c&oacute; mặt tr&ecirc;n c&aacute;c nền tảng PC v&agrave; di động tr&ecirc;n to&agrave;n cầu. Người chơi sẽ c&oacute; thể trải nghiệm phong c&aacute;ch nghệ thuật khoa học viễn tưởng hậu khải huyền lấy cảm hứng từ anime, ph&aacute;t triển nh&acirc;n vật dạng tự do v&agrave; chiến đấu th&uacute; vị th&ocirc;ng qua c&aacute;c trận chiến gay cấn v&agrave; kh&aacute;m ph&aacute; thế giới mở th&uacute; vị. Để n&acirc;ng cao khả năng phi&ecirc;u lưu v&agrave; bổ sung cho lối chơi của bạn, bạn c&oacute; thể mua dịch vụ tải lại Tower of Fantasy từ danh s&aacute;ch những người b&aacute;n uy t&iacute;n của ch&uacute;ng t&ocirc;i tại đ&acirc;y tại Kaleoz.com trong một m&ocirc;i trường an to&agrave;n bảo mật v&agrave; mức gi&aacute; rẻ.</p>\\n\\n<p>&nbsp;</p>\\n"`,
        descriptionEn: `"<h2>About Tower of Fantasy (TOF)</h2>\\n\\n<p>Embark together on your fantasy adventure!<br />\\nSet hundreds of years in the future on the distant planet of Aida, the shared open-world MMORPG, anime-infused sci-fi adventure&nbsp;<strong>Tower of Fantasy</strong>&nbsp;from developer Hotta Studio and publisher Level Infinite, is now available on PC and mobile platforms globally. Players will be able to experience an anime-inspired post-apocalyptic sci-fi art style, freeform character development, and exciting combat through thrilling battles and exciting open-world exploration. To enhance your adventure and compliment your gameplay, you can buy Tower of Fantasy reload services from our list of reputable sellers here at Kaleoz.com in a safe secure environment and at cheap rates.</p>\\n"`,
        contentEn: `"<h3><strong>How to buy Tower of Fantasy (TOF) Tanium and Packages on Kaleoz.com?</strong></h3>\\n\\n<ol>\\n\\t<li>Select the goods of Tower of Fantasy.</li>\\n\\t<li>Click &ldquo;PAY NOW&rdquo; to make payment.</li>\\n\\t<li>After payment, notify the seller via Kchat and wait for your item to be delivered.</li>\\n</ol>\\n\\n<h3><strong>How to find Tower of Fantasy UID?</strong></h3>\\n\\n<p><img alt=\\"how to find tower of fantasy uid\\" src=\\"https://kaleoz-kchat.seagmcdn.com/guide_content/images/prod/202210/oss-351a2b6193ea1c8ae8d5c1f24bb0d325.jpg?x-oss-process=image/resize,m_fill,l_1000\\" /></p>\\n\\n<ol>\\n\\t<li>Click &quot;More icon&quot; at the top right corner and open game setting.</li>\\n\\t<li>You can find your Tower of Fantasy UID, Server and In-Game Name in the page.</li>\\n</ol>\\n\\n<h3><strong>How to get Tanium in Tower of Fantasy?</strong></h3>\\n\\n<p><strong>Tanium</strong>&nbsp;are one of most important currencies in Tower of Fantasy, it can be converted to Dark Crystals or be used to purchase items from Daily Supply Boxes and Limited Gift Packs etc. However, in Tower of Fantasy, there is only one way to obtain Tanium: spend real-world money.</p>\\n\\n<h3><strong>Where to use Dark Crystals in Tower of Fantasy?</strong></h3>\\n\\n<p><strong>Dark Crystals</strong>&nbsp;are one of the currencies in Tower of Fantasy, it can be obtained by convert from Taniums, or completing specific tasks and missions in-game. You can exchange Dark Crystals for some items in the shop like, Nucleus, Vitality Solution, Special Voucher, Proof of Purchase and Gachapon coins etc.</p>\\n"`,
        contentVi: `<h3><strong>L&agrave;m thế n&agrave;o để mua Tower of Fantasy (TOF) Tanium v&agrave; Packages tr&ecirc;n Kaleoz.com?</strong></h3>\\n\\n<ol>\\n\\t<li>Chọn h&agrave;ng h&oacute;a của Tower of Fantasy.</li>\\n\\t<li>Nhấp v&agrave;o &ldquo;THANH TO&Aacute;N NGAY&rdquo; để thực hiện thanh to&aacute;n.</li>\\n\\t<li>Sau khi thanh to&aacute;n, h&atilde;y th&ocirc;ng b&aacute;o cho người b&aacute;n qua Kchat v&agrave; đợi h&agrave;ng của bạn được giao.</li>\\n</ol>\\n\\n<h3><strong>C&aacute;ch t&igrave;m UID của Tower of Fantasy</strong></h3>\\n\\n<p><img alt=\\"làm thế nào để tìm thấy tháp tưởng tượng uid\\" src=\\"https://kaleoz-kchat.seagmcdn.com/guide_content/images/prod/202210/oss-351a2b6193ea1c8ae8d5c1f24bb0d325.jpg?x-oss-process=image/resize,m_fill,l_1000\\" /></p>\\n\\n<ol>\\n\\t<li>Nhấp v&agrave;o &quot;Biểu tượng kh&aacute;c&quot; ở g&oacute;c tr&ecirc;n c&ugrave;ng b&ecirc;n phải v&agrave; mở c&agrave;i đặt tr&ograve; chơi.</li>\\n\\t<li>Bạn c&oacute; thể t&igrave;m thấy UID, M&aacute;y chủ v&agrave; T&ecirc;n trong Tr&ograve; chơi của Tower of Fantasy trong trang.</li>\\n</ol>\\n\\n<h3><strong>L&agrave;m thế n&agrave;o để c&oacute; được Tanium trong Tower of Fantasy?</strong></h3>\\n\\n<p><strong>Tanium</strong>&nbsp;l&agrave; một trong những đơn vị tiền tệ quan trọng nhất trong Tower of Fantasy, n&oacute; c&oacute; thể được chuyển đổi th&agrave;nh Dark Crystals hoặc được sử dụng để mua c&aacute;c vật phẩm từ Hộp cung cấp h&agrave;ng ng&agrave;y v&agrave; G&oacute;i qu&agrave; giới hạn, v.v. Tuy nhi&ecirc;n, trong Tower of Fantasy, chỉ c&oacute; một c&aacute;ch duy nhất để c&oacute; được Tanium : ti&ecirc;u tiền trong thế giới thực.</p>\\n\\n<h3><strong>Sử dụng Dark Crystals trong Tower of Fantasy ở đ&acirc;u?</strong></h3>\\n\\n<p><strong>Dark Crystals</strong>&nbsp;l&agrave; một trong những loại tiền tệ trong Tower of Fantasy, n&oacute; c&oacute; thể kiếm được bằng c&aacute;ch chuyển đổi từ c&aacute;c Taniums hoặc ho&agrave;n th&agrave;nh c&aacute;c nhiệm vụ v&agrave; nhiệm vụ cụ thể trong tr&ograve; chơi. Bạn c&oacute; thể đổi Dark Crystals để lấy một số vật phẩm trong cửa h&agrave;ng như, Nucleus, Vitality Solution, Special Voucher, Proof of Purchase v&agrave; Gachapon xu, v.v.</p>\\n`

    }
]

class Games extends React.Component {
    /*I. Action (Thể loại gane hành động)




    VI. Strategy (Thể loại game điện tử chiến thuật)
    1. 4X game
    2. Artillery game (Thể loại game pháo binh)
    3. Auto battler (Auto chess)
    4. Multiplayer online battle arena (Thể loại game đấu trường trực tuyến đa người chơi)
    5. Real-time strategy (Thể loại game chiến thuật thời gian thực)
    6. Real-time tactics (Chiến lược thời gian thực)
    7. Tower defense (Thể loại game tháp phòng thủ)
    8. Turn-based strategy (Thể loại game chiến thuật theo lượt)
    9. Turn-based tactics (Thể loại game chiến lược theo lượt)
    10. Wargame (Thể loại game chiến tranh)
    11 Grand strategy wargame (Thể loại game đại chiến lược)
    VII. Sports (Thể loại game thể thao)
    1. Racing (Thể loại game đua xe)
    2. Sports game (Thể loại game thể thao)
    3. Competitive (Thể loại game thể thao thi đấu)
    4. Sports-based fighting (Thể loại game đấu võ)
    VIII. MMO (Thể loại game trực tuyến)
    IX. Một số thể loại game khác
    1. Board game or card game (Thể loại game thẻ bài)
    2. Casino game (Thể loại game sòng bạc)
    4. Casual games (Thể loại game thông thường)
    5. Digital collectible card game (Thể loại game sưu tầm thẻ bài)
    6. Gacha game (Thể loại game rút thăm trúng thưởng)
    7. Horror game (Thể loại game kinh dị)
    8. Idle game (Thể loại game điện tử gia )
    9. Logic game (Thể loại game câu đố logic)
    10. Party game (Thể loại game tiệc tùng)
    11. Photography game (Thể loại game chụp ảnh)
    12. Programming game (Thể loại game lập trình)
    13. Social deduction game (Thể loại game suy luận xã hội)
    14. Trivia game (Thể loại game đố vui)
    15. Typing game (Thể loại game đánh luyện tập đánh chữ)
    */
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            game: undefined,
            listGame: gameList,
            isMobile:window.innerWidth,
            root: {
                title: 'Category',
                children: [
                    {
                        title: 'Action game',
                        children: [
                            {
                                title: 'Platform games',
                            },
                            {
                                title: 'Shooter games',
                            },
                            {
                                title: 'Fighting games',
                            },
                            {
                                title: 'Beat \'em up games',
                            },
                            {
                                title: 'Stealth games',
                            },
                            {
                                title: 'Survival games',
                            },
                            {
                                title: 'Rhythm games',
                            },
                            {
                                title: 'Battle Royale games',
                            },

                        ],
                    },
                    {
                        title: 'Action - adventure',
                        children: [
                            {title: "Survival horror"},
                            {title: "Metroidvania"}

                        ]
                    },
                    {
                        title: 'Adventure',
                        children: [
                            {title: "Text adventures"},
                            {title: "Visual novels"},
                            {title: "Interactive movie"},
                            {title: "Real-time 3D adventures"}

                        ]
                    },
                    {
                        title: 'Role-playing',
                        children: [
                            {title: "Action RPG"},
                            {title: "MMORPG"},
                            {title: "Roguelikes"},
                            {title: "Tactical RPG"},
                            {title: "Sandbox RPG"},
                            {title: "First-person party-based RPG"},
                            {title: "JRPGG"},
                            {title: "Monster Tamer"}

                        ]
                    },
                    {
                        title: 'Simulation',
                        children: [
                            {title: "Construction and management simulation"},
                            {title: "MMORPG"},
                            {title: "Life simulation"},
                            {title: "Vehicle simulation"}

                        ]
                    }

                ],
            }
        };

        this.filterList = this.filterList.bind(this);
    }

    componentDidMount() {
        this.filterList("HOT", 1);
        this.onTreeEvent("openAll", undefined, undefined);
    }


    onClickGame(e) {

        console.log(e)
        this.setState({game: e});

    }

    filterList(type, value) {
        // console.log(value)
        let listTemp = [];
        gameList.forEach(game => {
            if (type === "HOT") {
                if (game.gamePriority === 1) {
                    listTemp.push(game)
                }
            } else if (type === "Char") {
                if (game.name.toUpperCase().startsWith(value)) {
                    listTemp.push(game);
                }
            } else {
                if (Number.isInteger(parseInt(game.name.charAt(0)))) {
                    listTemp.push(game);

                }
            }
        });
        this.setState({listGame: listTemp});
        // console.log(listTemp);
    }

    onUpdateData(root) {
        this.setState(
            {root,}
        )
    }

    onTreeEvent(eventStr, eventData, path) {
        // console.log(eventStr)
        // console.log(eventData)
        // console.log(path)
        const {root = {}} = this.state
        const obj = pathGet(root, path)

        const setOpenRecursive = (isOpen, obj) => {
            const {children = []} = obj
            return {
                ...obj,
                isOpen,
                children: children.map(x => setOpenRecursive(isOpen, x))
            }
        }
        const updateState = (newObj) => {
            const newRoot = pathMerge(root, path, newObj)
            this.setState({
                root: newRoot,
            })
        }

        switch (eventStr) {
            case eventTypes.closeAll:
                updateState(setOpenRecursive(false, obj))
                break;
            case eventTypes.openAll:
                updateState(setOpenRecursive(true, obj))
                break;
            default:
                break;
        }
    }

    onChange(value) {
        // parent class change handler is always called with field name and value
        this.setState({'loaded': value});
        // console.log('App load success', value)
    }

    renderCategory(){
        return(
            <div className="col-3">
                <h3 style={{marginLeft: '20px', color: '#888888'}}>Category</h3>

                <TreeRenderer Template={DefaultTemplate} data={this.state.root} onUpdateData={this.onUpdateData.bind(this)}
                              onTreeEvent={this.onTreeEvent.bind(this)}/>
                <br/>
            </div>
        )
    }
    render() {
        return (
            <div>
                {this.state.loaded ? null : <LoadingSpinner/>}
                <Translation>{t => <TopMenu t={t}/>}</Translation>
                <NavBar/>
                <div className="container">
                    <div className="row">
                        <div className="search-item" onClick={() => this.filterList("HOT", 1)}>
                            <span><i className="fa fa-fire"
                                     aria-hidden="true"/></span>
                        </div>
                        <div className="search-item" onClick={() => this.filterList("", "#")}>
                            <span>#</span>
                        </div>
                        <div className="search-item" onClick={() => this.filterList("Char", "A")}>
                            <span>A</span>
                        </div>
                        <div className="search-item" onClick={() => this.filterList("Char", "B")}>
                            <span>B</span>
                        </div>
                        <div className="search-item" onClick={() => this.filterList("Char", "C")}>
                            <span>C</span>
                        </div>
                        <div className="search-item" onClick={() => this.filterList("Char", "D")}>
                            <span>D</span>
                        </div>
                        <div className="search-item" onClick={() => this.filterList("Char", "E")}>
                            <span>E</span>
                        </div>
                        <div className="search-item" onClick={() => this.filterList("Char", "F")}>
                            <span>F</span>
                        </div>
                        <div className="search-item" onClick={() => this.filterList("Char", "G")}>
                            <span>G</span>
                        </div>
                        <div className="search-item" onClick={() => this.filterList("Char", "H")}>
                            <span>H</span>
                        </div>
                        <div className="search-item" onClick={() => this.filterList("Char", "I")}>
                            <span>I</span>
                        </div>
                        <div className="search-item" onClick={() => this.filterList("Char", "J")}>
                            <span>J</span>
                        </div>
                        <div className="search-item" onClick={() => this.filterList("Char", "K")}>
                            <span>K</span>
                        </div>
                        <div className="search-item" onClick={() => this.filterList("Char", "L")}>
                            <span>L</span>
                        </div>
                        <div className="search-item" onClick={() => this.filterList("Char", "M")}>
                            <span>M</span>
                        </div>
                        <div className="search-item" onClick={() => this.filterList("Char", "N")}>
                            <span>N</span>
                        </div>
                        <div className="search-item" onClick={() => this.filterList("Char", "O")}>
                            <span>O</span>
                        </div>
                        <div className="search-item" onClick={() => this.filterList("Char", "P")}>
                            <span>P</span>
                        </div>
                        <div className="search-item" onClick={() => this.filterList("Char", "Q")}>
                            <span>Q</span>
                        </div>
                        <div className="search-item" onClick={() => this.filterList("Char", "R")}>
                            <span>R</span>
                        </div>
                        <div className="search-item" onClick={() => this.filterList("Char", "S")}>
                            <span>S</span>
                        </div>
                        <div className="search-item" onClick={() => this.filterList("Char", "T")}>
                            <span>T</span>
                        </div>
                        <div className="search-item" onClick={() => this.filterList("Char", "U")}>
                            <span>U</span>
                        </div>
                        <div className="search-item" onClick={() => this.filterList("Char", "V")}>
                            <span>V</span>
                        </div>
                        <div className="search-item" onClick={() => this.filterList("Char", "W")}>
                            <span>W</span>
                        </div>
                        <div className="search-item" onClick={() => this.filterList("Char", "X")}>
                            <span>X</span>
                        </div>
                        <div className="search-item" onClick={() => this.filterList("Char", "Y")}>
                            <span>Y</span>
                        </div>
                        <div className="search-item" onClick={() => this.filterList("Char", "Z")}>
                            <span>Z</span>
                        </div>
                    </div>
                </div>

                <br/>
                <div className="row">
                    {window.innerWidth<600?'mobile':this.renderCategory()}
                    <div className="col-8">
                        <GameList slideImage={this.state.listGame}
                                  onChange={this.onChange.bind(this)}
                                  clickGame={this.onClickGame.bind(this)}/>

                    </div>
                </div>

                <ParallaxImage/>
                <Footer/>
                <ScrollButton scrollStepInPx='50' delayInMs='16.66'/>
            </div>
        )
    }
}

export default (Games);
