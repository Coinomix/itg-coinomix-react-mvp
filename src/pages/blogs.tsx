import * as React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import useTitle from '../utils/useTitle';
import '../assets/styles/scss/blogs.scss'
import imgKabybara from '../assets/images/kapybara-1.png'

const BlogsPage = () => {
  useTitle('Blogs | Coinomix');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    // Вставляем код при монтировании компонента
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = '//web.webformscr.com/apps/fc3/build/default-handler.js?1698217976609';

    document.body.appendChild(script);

    // Очищаем скрипт при размонтировании компонента
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  React.useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Header />

      <main className='blogs'>
        <p className='blogs__text'>
          Be the first to join the Blogs <br />
          and <span className='blogs__text--bold'>get your bonus</span>
        </p>

        {/* <button sp-show-form="229642">Показати форму</button> */}

        <div className="sp-form-outer sp-popup-outer sp-force-hide" style={{background: 'rgba(0, 0, 0, 0.5);'}}>
          <div id="sp-form-229642" sp-id="229642" sp-hash="5da2a3cce10d6ca14cda4d6265e5f95769d518a5185c9590e480f6927969710d" sp-lang="en" className="sp-form sp-form-regular sp-form-popup" sp-show-options="%7B%22satellite%22%3Afalse%2C%22maDomain%22%3A%22login.sendpulse.com%22%2C%22formsDomain%22%3A%22forms.sendpulse.com%22%2C%22condition%22%3A%22onEnter%22%2C%22scrollTo%22%3A25%2C%22delay%22%3A0%2C%22repeat%22%3A0%2C%22background%22%3A%22rgba(0%2C%200%2C%200%2C%200.5)%22%2C%22position%22%3A%22bottom-right%22%2C%22animation%22%3A%22%22%2C%22hideOnMobile%22%3Afalse%2C%22submitRedirectUrl%22%3A%22%22%2C%22urlFilter%22%3Atrue%2C%22urlFilterConditions%22%3A%5B%7B%22force%22%3A%22show%22%2C%22clause%22%3A%22contains%22%2C%22token%22%3A%22blogs%22%7D%5D%2C%22analytics%22%3A%7B%22ga%22%3A%7B%22eventLabel%22%3A%22%D0%A4%D0%BE%D1%80%D0%BC%D0%B0_%D0%BF_%D0%B4%D0%BF%D0%B8%D1%81%D0%BA%D0%B8_Coinomix%22%2C%22send%22%3Afalse%7D%7D%2C%22utmEnable%22%3Afalse%7D"><div className="sp-form-fields-wrapper"><button className="sp-btn-close ">&nbsp;</button><div className="sp-message"><div></div></div><form className="sp-element-container sp-lg "><div className="sp-field sp-field-full-width" sp-id="sp-f9be1c3d-94ce-4242-947c-2951ff20e27e">
            <div>
              <p style={{ textAlign: 'center'}}><span style={{fontSize: '32px', color: '#fff'}}>Receive update<br/>notifications</span></p>
            </div>
          </div>
          <div className="sp-field full-width sp-b1803c19-d659-4f77-ac11-e8854ebb65b5-container" sp-id="sp-b1803c19-d659-4f77-ac11-e8854ebb65b5">
            <img className="sp-image " src={imgKabybara} alt="Kapybara" />
          </div>
          <div className="sp-field " sp-id="sp-0aa19909-ee36-480e-8522-f0d808f168af">
            <label className="sp-control-label"><span >Email</span><strong >*</strong></label>
              <input type="email" sp-type="email" name="sform[email]" className="sp-form-control " placeholder="username@gmail.com" sp-tips="%7B%22required%22%3A%22Required%20field%22%2C%22wrong%22%3A%22Wrong%20email%22%7D" autoComplete="on" required={true} /></div><div className="sp-field sp-button-container " sp-id="sp-3afe3178-9b96-4ed1-93f7-9cfa609b0742"><button id="sp-3afe3178-9b96-4ed1-93f7-9cfa609b0742" className="sp-button">Send </button></div></form>
          </div></div></div>

          {/* <div className="sp-form-outer sp-popup-outer sp-force-hide"><div id="sp-form-229642" sp-id="229642" sp-hash="5da2a3cce10d6ca14cda4d6265e5f95769d518a5185c9590e480f6927969710d" sp-lang="en" className="sp-form sp-form-regular sp-form-popup" sp-show-options="%7B%22satellite%22%3Afalse%2C%22maDomain%22%3A%22login.sendpulse.com%22%2C%22formsDomain%22%3A%22forms.sendpulse.com%22%2C%22condition%22%3A%22onButtonClick%22%2C%22scrollTo%22%3A25%2C%22delay%22%3A0%2C%22repeat%22%3A0%2C%22background%22%3A%22rgba(0%2C%200%2C%200%2C%200.5)%22%2C%22position%22%3A%22bottom-right%22%2C%22animation%22%3A%22%22%2C%22hideOnMobile%22%3Afalse%2C%22submitRedirectUrl%22%3A%22%22%2C%22urlFilter%22%3Atrue%2C%22urlFilterConditions%22%3A%5B%7B%22force%22%3A%22show%22%2C%22clause%22%3A%22contains%22%2C%22token%22%3A%22blogs%22%7D%5D%2C%22analytics%22%3A%7B%22ga%22%3A%7B%22eventLabel%22%3A%22%D0%A4%D0%BE%D1%80%D0%BC%D0%B0_%D0%BF_%D0%B4%D0%BF%D0%B8%D1%81%D0%BA%D0%B8_Coinomix%22%2C%22send%22%3Afalse%7D%7D%2C%22utmEnable%22%3Afalse%7D"><div className="sp-form-fields-wrapper"><button className="sp-btn-close ">&nbsp;</button><div className="sp-message"><div></div></div><form className="sp-element-container sp-lg "><div className="sp-field sp-field-full-width" sp-id="sp-f9be1c3d-94ce-4242-947c-2951ff20e27e"><div><p><span>Receive update</span><br/><span>notifications</span></p></div></div><div className="sp-field full-width sp-b1803c19-d659-4f77-ac11-e8854ebb65b5-container" sp-id="sp-b1803c19-d659-4f77-ac11-e8854ebb65b5"><img className="sp-image " src={imgKabybara} alt='' /></div><div className="sp-field " sp-id="sp-0aa19909-ee36-480e-8522-f0d808f168af"><label className="sp-control-label"><span >Email</span><strong >*</strong></label><input type="email" sp-type="email" name="sform[email]" className="sp-form-control " placeholder="username@gmail.com" sp-tips="%7B%22required%22%3A%22Required%20field%22%2C%22wrong%22%3A%22Wrong%20email%22%7D" autoComplete="on" required={true} /></div><div className="sp-field sp-button-container " sp-id="sp-3afe3178-9b96-4ed1-93f7-9cfa609b0742"><button id="sp-3afe3178-9b96-4ed1-93f7-9cfa609b0742" className="sp-button">Send </button></div></form></div></div></div> */}

      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default BlogsPage;
