const AboutPage = () => {
  return (
    <div className='pt-20 pl-40 pr-40'>
      <p>
        非官方非營利乃木坂46熱血粉絲的小小製作，方便檢索成員的基本資料以及應援顏色。此網站所用的公式照皆來自
        <a
          className='underline hover:text-purple-500'
          target='_blank'
          href='http://www.nogizaka46.com/'
          rel='noreferrer'
        >
          官方網站
        </a>
        ，文字資料參考
        <a
          className='underline hover:text-purple-500'
          target='_blank'
          href='https://zh.wikipedia.org/wiki/乃木坂46'
          rel='noreferrer'
        >
          維基百科
        </a>
        ，如有侵權或錯誤請不吝指教。
      </p>
      <br />
      <br />
      <p>
        It's an unofficial and non-profit website made by a fan of Nogizaka 46.
        This website is especially built for quickly looking up basic
        information (including glow sticks colors). The profile pictures are
        from the{' '}
        <a
          className='underline hover:text-purple-500'
          target='_blank'
          href='http://www.nogizaka46.com/'
          rel='noreferrer'
        >
          official website
        </a>
        . The information is from{' '}
        <a
          className='underline hover:text-purple-500'
          target='_blank'
          href='https://zh.wikipedia.org/wiki/乃木坂46'
          rel='noreferrer'
        >
          wikipedia
        </a>
        . Please kindly contact me if you find this infringes the copyright or
        any mistaken information.
      </p>
    </div>
  );
};

export default AboutPage;
