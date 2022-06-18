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
import img12 from "../../Assets/img2/DSC_2440.jpg";
import img13 from "../../Assets/img2/DSC_3592.jpg";
import img14 from "../../Assets/img2/DSC_3682.jpg";
import img15 from "../../Assets/img2/DSC_3740.jpg";
import img16 from "../../Assets/img2/DSC_4307-2.jpg";
import img17 from "../../Assets/img2/DSC_4704-3.jpg";
import img18 from "../../Assets/img2/DSC_4741.jpg";
import img19 from "../../Assets/img2/P1010035.jpg";

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
          <img alt="" src="${img15}" class="imgGallery" />
        </div>
        <div class="columnGallery">
          <img alt="" src="${img6}" class="imgGallery" />
          <img alt="" src="${img7}" class="imgGallery" />
          <img alt="" src="${img8}" class="imgGallery" />
          <img alt="" src="${img9}" class="imgGallery" />
          <img alt="" src="${img5}" class="imgGallery" />
          <img alt="" src="${img16}" class="imgGallery" />
          <img alt="" src="${img17}" class="imgGallery" />
        </div>
        <div class="columnGallery">
          <img alt="" src="${img10}" class="imgGallery" />
          <img alt="" src="${img11}" class="imgGallery" />
          <img alt="" src="${img12}" class="imgGallery" />
          <img alt="" src="${img13}" class="imgGallery" />
          <img alt="" src="${img14}" class="imgGallery" />
          <img alt="" src="${img18}" class="imgGallery" />
          <img alt="" src="${img19}" class="imgGallery" />
        </div>
        <div class="columnGallery"></div>
      </div>
    </div>
  </section>
`;
