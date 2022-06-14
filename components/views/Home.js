import html from "html-literal";
import img from "../../Assets/img/Color-film-primer07.jpeg";
import img2 from "../../Assets/img/Unknown.jpeg";
import img3 from "../../Assets/img/monster-children-film-processing-2-of-6.jpeg";
import img4 from "../../Assets/img/images.jpeg";
import img5 from "../../Assets/img/7-Tips-To-Choose-the-Perfect-Computer-Keyboard-For-You-1024x768.jpeg";
import img6 from "../../Assets/img/istockphoto-1310002736-170667a.jpg";

export default state => html`
  <section id="jumbotron">
  <article class="flow">
    <div class=welcomeTop>
  <div class="welcome">
    <h1>Welcome to SlowLab!</h1>
  </div>
  <div class="welcome">
    <p>We are proud to offer the cheapest film development service nationwide while maintaining the high quality development and scanning offered by our competitors!</p>
  </div>
  </div>
  <div class="team">
    <ul class="auto-grid" role="list">
      <li>
        <a href="http://localhost:1234/Order" target=_blank" class="profile">
          <h2 class="profile__name">First Step</h2>

          <p>Fill out what type of scans or prints you would like!</p>
          <img alt="" src="${img}" class="homeImg" >
        </a>
      </li>
      <li>
        <a href="http://localhost:1234/Home" target=_blank" class="profile">
          <h2 class="profile__name">Second Step</h2>
          <p>Mail us your film during the first two weeks of the month.</p>
          <img alt="" src="${img2}" class="homeImg" />
        </a>
      </li>
      <li>
        <a href="http://localhost:1234/Home" target=_blank" class="profile">
          <h2 class="profile__name">Third Step</h2>
          <p>We will develop and scan if requested by end of the month.</p>
          <img alt="" src="${img3}" class="homeImg" />
        </a>
      </li>
      <li>
        <a href="http://localhost:1234/Home" target=_blank" class="profile">
          <h2 class="profile__name">Fourth Step</h2>
          <p>We will ship back your negatives and email your scans</p>
          <img alt="" src="${img4}" class="homeImg" />
        </a>
      </li>
      <li>
        <a href="http://localhost:1234/Contact" target=_blank" class="profile">
          <h2 class="profile__name">Review!</h2>
          <p>We would love to hear how we can improve!</p>
          <img alt="" src="${img5}" class="homeImg" />
        </a>
      </li>
      <li>
        <a href="http://localhost:1234/Home" target=_blank" class="profile">
          <h2 class="profile__name">Come Back Soon!</h2>
          <p>Please you are always welcome! Have a great day!</p>
          <img alt="" src="${img6}" class="homeImg" />
        </a>
      </li>
    </ul>
  </div>
</article>
  </section>

`;
