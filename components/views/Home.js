import html from "html-literal";

export default state => html`
  <section id="jumbotron">
  <article class="flow">
  <div class="welcome">
  <h1>Welcome to SlowLab!</h1>
  <p>      We are proud to offer the cheapest film development service nationwide
      while maintaining the high quality development and scanning offered by our
      competitors!</p>
  </div>
  <div class="team">
    <ul class="auto-grid" role="list">
      <li>
        <a href="https://swop.link/cool" target=_blank" class="profile">
          <h2 class="profile__name">First Step</h2>

          <p>Fill out what type of scans or prints you would like!</p>
          <img alt="Anita Simmons" src="https://source.unsplash.com/BhcutpohYwg/800x800" />
        </a>
      </li>
      <li>
        <a href="https://swop.link/cool" target=_blank" class="profile">
          <h2 class="profile__name">Second Step</h2>
          <p>Mail us your film during the first two weeks of the month.</p>
          <img alt="Profile shot for Celina Harris" src="https://source.unsplash.com/j5KAuRrYX7g/800x800" />
        </a>
      </li>
      <li>
        <a href="https://swop.link/cool" target=_blank" class="profile">
          <h2 class="profile__name">Third Step</h2>
          <p>We will develop and scan if requested by end of the month.</p>
          <img alt="Profile shot for Ruby Morris" src="https://source.unsplash.com/pQyIutdScOY/800x800" />
        </a>
      </li>
      <li>
        <a href="https://swop.link/cool" target=_blank" class="profile">
          <h2 class="profile__name">Fourth Step</h2>
          <p>We will ship back your negatives and email your scans</p>
          <img alt="Profile shot for Nicholas Castro" src="https://source.unsplash.com/55JRsxcAiWE/800x800" />
        </a>
      </li>
      <li>
        <a href="https://swop.link/cool" target=_blank" class="profile">
          <h2 class="profile__name">Review!</h2>
          <p>We would love to hear how we can improve!</p>
          <img alt="Profile shot for Marc Dixon" src="https://source.unsplash.com/5wn6DeAEcmE/800x800" />
        </a>
      </li>
      <li>
        <a href="https://swop.link/cool" target=_blank" class="profile">
          <h2 class="profile__name">Come Back Soon!</h2>
          <p>Please you are always welcome :) have a great day!</p>
          <img alt="Profile shot for Chad" src="https://source.unsplash.com/7jCYw6a2Wao/800x800" />
        </a>
      </li>
    </ul>
  </div>
</article>

    <br />
    </div>
  </section>
  <h3>
    Weather in ${state.weather.city} ${state.weather.temp}F, feels like
    ${state.weather.feelsLike}F
  </h3>
`;
