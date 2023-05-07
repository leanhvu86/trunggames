import React from 'react';
import './game.css';
import {Translation} from "react-i18next";
import TopMenu from "../ui-common/TopMenu";
import NavBar from "../ui-common/NavBar";
import ParallaxImage from "../parallax/ParallaxImage";
import Footer from "../Footer";
import ScrollButton from "../ui-common/ScrollButton";
import GameList from "./GameList";
import TreeRenderer, {pathGet, pathMerge} from 'react-tree-renderer';
import {default as DefaultTemplate, eventTypes} from './DefaultTemplate'
import LoadingSpinner from "../ui-common/LoadingSpinner";
import Tippy from "@tippyjs/react";


const gameList = [
    {
        thumbnail: "http://52.41.255.157:8080/trunggame-0.0.1/api/file/4980a3f1-96d2-4d56-b215-0c5c2eca5b07-4-fun.png",
        name: "4Fun",
        categoryId: 1,
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
        categoryId: 1,
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
        categoryId: 1,
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
        categoryId: 1,
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
        categoryId: 1,
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
        categoryId: 1,
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
        categoryId: 1,
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
        thumbnail: "http://52.41.255.157:8080/trunggame-0.0.1/api/file/4980a3f1-96d2-4d56-b215-0c5c2eca5b07-4-fun.png",
        name: "4Fun",
        categoryId: 1,
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
        categoryId: 1,
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
        categoryId: 1,
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
        categoryId: 1,
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
        categoryId: 1,
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
        categoryId: 14,
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
        categoryId: 1,
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

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            listGame: gameList,
            isMobile: window.innerWidth < 1000,
            searchType: '',
            category: [],
            root: {}
        };
        this.filterList = this.filterList.bind(this);
    }

    componentDidMount() {
        this.filterList("HOT", 1);
        // document.addEventListener('contextmenu', (e) => {
        //     e.preventDefault();
        // });
        fetch(
            "http://52.41.255.157:8080/trunggame-0.0.1/api/category/list")
            .then((res) => res.json())
            .then((json) => {
                const tree = this.buildTree(json.data, 0);
                const root = {title: 'Category', children: tree};
                this.setState({root: root});
                this.onUpdateData(this.state.root);
                this.onTreeEvent("openAll", undefined, undefined);
            });

    }

    buildTree(categories, parentId) {
        const nodes = [];
        this.setState({category: categories})
        categories
            .filter(category => category.parentId === parentId)
            .forEach(category => {
                const node = {title: category.name};
                const children = this.buildTree(categories, category.id);
                if (children.length > 0) {
                    node.children = children;
                }
                nodes.push(node);
            });
        return nodes;
    }

    // const response = { /* The response data here */ };
    // const categories: Category[] = response.data;
    // const tree = buildTree(categories, null);
    // const result = { root: { title: 'Category', children: tree } };

    onClickGame(e) {

        console.log(e)
        this.setState({game: e});

    }

    filterList(type, value, category) {
        // console.log(value)
        let listTemp = [];

        gameList.forEach(game => {
            if (type === "HOT") {
                if (game.gamePriority === 1) {
                    listTemp.push(game);

                }
                this.setState({searchType: type})
            } else if (type === "Category") {
                if (game.categoryId === value) {
                    listTemp.push(game);

                }
                this.setState({searchType: category })
            } else if (type === "Char") {
                if (game.name.toUpperCase().startsWith(value)) {
                    listTemp.push(game);

                }
                this.setState({searchType: value})
            } else {
                if (Number.isInteger(parseInt(game.name.charAt(0)))) {
                    listTemp.push(game);

                }
                this.setState({searchType: "#"})
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
        const clickNode = (e) => {
            const cate = this.state.category.find((obj) => {
                return obj.name === e;
            });
            this.filterList('Category', cate.id, cate.name);
        }
        switch (eventStr) {
            case eventTypes.closeAll:
                updateState(setOpenRecursive(false, obj))
                break;
            case eventTypes.openAll:
                updateState(setOpenRecursive(true, obj))
                break;
            case eventTypes.clickNode:
                clickNode(eventData.props.data.title)
                break;
            default:
                break;
        }
    }

    onChange(value) {
        this.setState({'loaded': value});
    }

    handleOpenCategory() {
        this.setState({isMobile: !this.state.isMobile})
    }


    renderCategory() {
        return (
            <div className="col-3">
                <TreeRenderer Template={DefaultTemplate} data={this.state.root}
                              onUpdateData={this.onUpdateData.bind(this)}
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
                <div className="row">

                    <div className="col-3">

                        <Tippy placement="right" content={<span>Click to open or close category!</span>}>
                            <h3 className="category-title" onClick={() => this.handleOpenCategory(this)}>Category </h3>
                        </Tippy>
                    </div>
                    <div className="col-8 category-title">
                        <span>Game&nbsp;>&nbsp;{this.state.searchType}</span>
                    </div>
                </div>
                <div className="row">
                    {this.state.isMobile ? "" : this.renderCategory()}
                    <div className="col-8 auto-margin-game-list">
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
