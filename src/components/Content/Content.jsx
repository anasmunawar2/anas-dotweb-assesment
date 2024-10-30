import "./content.css";
import Block1 from "../../assets/images/img1.png";
import Block2 from "../../assets/images/img2.png";
import Block3 from "../../assets/images/img3.png";
import Block4 from "../../assets/images/img4.png";
import Block5 from "../../assets/images/img5.png";
import Block6 from "../../assets/images/img6.png";
import Block7 from "../../assets/images/img7.png";
import Block8 from "../../assets/images/img8.png";
import Block9 from "../../assets/images/img9.png";
import LogoBottom from "../../assets/icons/logo-bottom.svg";

const Content = () => {
  return (
    <div className="container">
      <div className="sales-banner">
        <div className="banner-content">
          <h2 className="banner-title">
            Beginnen Sie Ihre Verkaufsreise{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h2>
          <p className="banner-subtitle">
            Entdecken Sie mühelos jede Facette Ihres Verkaufsmandatsvertrags.
          </p>
        </div>

        <button className="reload-button">
          <span className="reload-icon">?</span>
          Reload
        </button>
      </div>

      <div className="grid">
        <div className="item item1">
          <img src={Block1} alt="block1" />
        </div>
        <div className="item item2">
          <img src={Block2} alt="block2" />
        </div>
        <div className="item item3">
          <img src={Block3} alt="block3" />
        </div>
        <div className="item item4">
          <img src={Block4} alt="block4" className="item-image" />
          <span className="overlay-text">Insert Textblock</span>
        </div>
        <div className="item item5">
          <img src={Block5} alt="block5" />
        </div>

        <div className="item item6">
          <img src={Block6} alt="block6" className="item-image" />
          <span className="overlay-text-center">
            Insert Random Video
            <button>Nesting</button>
          </span>
        </div>

        <div className="item item7">
          <img src={Block7} alt="block7" className="item-image" />
          <span className="overlay-text">Insert Random Quote</span>
        </div>

        <div className="item item8">
          <img src={Block8} alt="block8" />
        </div>
        <div className="item item9">
          <img src={Block9} alt="block9" />
        </div>
      </div>

      <footer className="footer">
        <p>Bereitgestellt von</p>
        <img src={LogoBottom} alt="LogoBottom" />
      </footer>
    </div>
  );
};

export default Content;
