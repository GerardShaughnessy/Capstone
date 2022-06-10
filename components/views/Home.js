import html from "html-literal";
import img from "../../Assets/img/monster-children-film-processing-2-of-6.jpeg";

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
        <a href="http://localhost:1234/Home" target=_blank" class="profile">
          <h2 class="profile__name">First Step</h2>
          <img alt="" src="${img}">
          <p>Fill out what type of scans or prints you would like!</p>

        </a>
      </li>
      <li>
        <a href="http://localhost:1234/Home" target=_blank" class="profile">
          <h2 class="profile__name">Second Step</h2>
          <p>Mail us your film during the first two weeks of the month.</p>
          <img alt="" src="" />
        </a>
      </li>
      <li>
        <a href="http://localhost:1234/Home" target=_blank" class="profile">
          <h2 class="profile__name">Third Step</h2>
          <p>We will develop and scan if requested by end of the month.</p>
          <img alt="" src="" />
        </a>
      </li>
      <li>
        <a href="http://localhost:1234/Home" target=_blank" class="profile">
          <h2 class="profile__name">Fourth Step</h2>
          <p>We will ship back your negatives and email your scans</p>
          <img alt="" src="" />
        </a>
      </li>
      <li>
        <a href="http://localhost:1234/Home" target=_blank" class="profile">
          <h2 class="profile__name">Review!</h2>
          <p>We would love to hear how we can improve!</p>
          <img alt="" src="" />
        </a>
      </li>
      <li>
        <a href="http://localhost:1234/Home" target=_blank" class="profile">
          <h2 class="profile__name">Come Back Soon!</h2>
          <p>Please you are always welcome :) have a great day!</p>
          <img alt="" src="" />
        </a>
      </li>
    </ul>
  </div>
</article>
  </section>
  <h3>
    Weather in ${state.weather.city} ${state.weather.temp}F, feels like
    ${state.weather.feelsLike}F
  </h3>
`;
