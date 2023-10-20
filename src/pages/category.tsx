import * as React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PageTitle } from "../components/PageTitle";

import { CardNewsTop } from "../components/CardNewsTop";
import { Devider } from "../components/Devider";
import { Link, useParams } from 'react-router-dom';
import useTitle from "../utils/useTitle";

const CategoryPage = () => {
  let { category } = useParams();

  useTitle(category || '');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    scrollToTop();
  }, [category]);

  return (
    <>
      <Header />

      <PageTitle 
            title="Category page"
      />

      <main className="main">
        <div className="main__categories">
          <div className="main__categories-container">
            <Link to="/analytics" className="main__categories-link">Analytics</Link>
            <Link to="/digital" className="main__categories-link">Digital</Link>
            <Link to="/directory" className="main__categories-link">Directory</Link>
            <Link to="/exchange" className="main__categories-link">Exchange</Link>
          </div>
        </div>

        {/* <CardNews imgUrl={imgLaptopTwo} /> */}

        <Devider />

        <div className="main__container-latestnews">
          <div>
            {/* <CardNews type={CardNewsType.top} imgUrl={imgBitcoin } /> */}
          </div>

          <div className="main__macroeconomics-container">
            {/* <CardNewsSmall imgUrl={imgEthereum} />
            <CardNewsSmall imgUrl={imgGpaphOne} /> */}
          </div>
        </div>   

        <div className="main__section">
            <h2 className="main__section-title">Best exchange</h2>
            <Link to="/" className="main__section-readmore">Read more</Link>
        </div>

        <div className="main__container-latestnews">
          {/* <CardNewsSmall imgUrl={imgAppleLaptop} />
          <CardNewsSmall imgUrl={imgLaptopOne} />
          <CardNewsSmall /> */}
        </div>

        <Devider />

        <CardNewsTop />

      <div className="main__section">
          <h2 className="main__section-title">Must to read</h2>
          <Link to="#" className="main__section-readmore">Read more</Link>
      </div>
      </main>

    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default CategoryPage;
