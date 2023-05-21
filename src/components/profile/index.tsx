import React from 'react';

const UserProfile = () => {
  return (
    <div className="seach-content search-detail-bar" style={{ width: '85%', margin: '20px auto' }}>
      <div id="P1" className="row">
        <div className="col-3">
          <img
            style={{ width: '100%', height: 'auto' }}
            data-original="https://kaleoz-media.seagmcdn.com/art/art_whatiskaleoz.png?x-oss-process=image/format,png"
            className="art lazy"
            alt=""
            src="https://kaleoz-media.seagmcdn.com/art/art_whatiskaleoz.png?x-oss-process=image/format,webp"
          />
        </div>
        <div className="col-8">
          <article>
            <h2>Về TRUNG GAMES</h2>
            <p>
              TRUNG GAMES có nguồn gốc từ cách phát âm của tiếng Phúc Châu, Trung Quốc, nghĩa là CHƠI. Chơi trong tiếng Phúc Châu là
              "ka-liu". Có nguồn gốc từ Phúc Châu, các nhà sáng lập TRUNG GAMES mục tiêu trở thành nên tảng cho game thủ toàn thế giới vừa
              tận hưởng các trò chơi, đồng thời vừa kiếm tiền theo cách của họ.
            </p>
          </article>
        </div>
      </div>
      <div id="P2" className="row">
        <div className="col-8">
          <article>
            <h2>Dịch vụ chúng tôi cung cấp</h2>
            <p>
              TRUNG GAMES là sàn giao dịch điện tử toàn cầu đáng tin cậy được tạo ra bởi các chuyên ra trò chơi có kinh nghiệm trong các
              lĩnh vực trò chơi trực tuyến, phân phối, kỹ thuật, bảo mật và marketing. Là đứa con tinh thần của SEA Gamer Mall, TRUNG GAMES
              nỗ lực cung cấp nền tảng điện tử tốt nhất cho các game thủ toàn cầu.
            </p>
          </article>
        </div>
        <div className="col-3">
          <img
            style={{ width: '100%', height: 'auto' }}
            data-original="https://kaleoz-media.seagmcdn.com/art/art_provide.png?x-oss-process=image/format,png"
            className="art lazy"
            alt=""
            src="https://kaleoz-media.seagmcdn.com/art/art_provide.png?x-oss-process=image/format,webp"
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
