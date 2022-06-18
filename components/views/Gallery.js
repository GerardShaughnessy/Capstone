import html from "html-literal";
import img from "../../Assets/img/71260017.jpg";
import img3 from "../../Assets/img/PC231654.jpg";
import img4 from "../../Assets/img/PA060915.jpg";
import img5 from "../../Assets/img/71270005.jpg";
import img6 from "../../Assets/img/PC231350.jpg";
import img7 from "../../Assets/img/PC121223.jpg";
import img8 from "../../Assets/img/71270006.jpg";
import img9 from "../../Assets/img/DSC_0106.jpg";
import img10 from "../../Assets/img/DSC_0515.jpg";
import img11 from "../../Assets/img/DSC_0168.jpg";
import img12 from "../../";
import img13 from "../../";
import img14 from "../../";
import img15 from "../../";
import img16 from "../../";
import img17 from "../../";
import img18 from "../../";
import img19 from "../../";

export default () => html`
  <section id="galleryPhotos">
    <div class="galleryHeading">
      <h2>Gallery</h2>
      <p>Here we showcase some of our customers wonderful work!</p>
    </div>
    <br />
    <div class="galleryM">
      <div class="rowGallery">
        <div class="column">
          <img alt="" src="${img}" class="imgGallery" />
          <img alt="" src="${img3}" class="imgGallery" />
          <img alt="" src="${img4}" class="imgGallery" />
        </div>
        <div class="columnGallery">
          <img alt="" src="${img6}" class="imgGallery" />
          <img alt="" src="${img7}" class="imgGallery" />
          <img alt="" src="${img8}" class="imgGallery" />
          <img alt="" src="${img9}" class="imgGallery" />
          <img alt="" src="${img5}" class="imgGallery" />
        </div>
        <div class="columnGallery">
          <img alt="" src="${img10}" class="imgGallery" />
          <img alt="" src="${img11}" class="imgGallery" />
          <img alt="" src="${img12}" class="imgGallery" />
          <img alt="" src="${img13}" class="imgGallery" />
          <img alt="" src="${img14}" class="imgGallery" />
        </div>
        <div class="columnGallery">
          <img alt="" src="${img15}" class="imgGallery" />
          <img alt="" src="${img16}" class="imgGallery" />
          <img alt="" src="${img17}" class="imgGallery" />
          <img alt="" src="${img18}" class="imgGallery" />
          <img alt="" src="${img19}" class="imgGallery" />
        </div>
      </div>
    </div>
  </section>
`;
