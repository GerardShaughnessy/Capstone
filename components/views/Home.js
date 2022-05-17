import html from "html-literal";

export default () => html`
  <section id="jumbotron">
    <h2>Welcome to SlowLab!</h2>
    <p>
      We are proud to offer the cheapest film development service nationwide
      while maintaining the high quality development and scanning offered by
      BigFilm XD
    </p>
    <h3 class="home-grid">Our Process</h3>

    <div class="wrapper">
      <div class="item1">
        1. Let us know what type of scans or prints you would like!
      </div>
      <div class="item2">
        2. Mail us your film during the first two weeks of the month.
      </div>
      <div class="item3">3. We will develop and scan if requested.</div>
      <div class="item4">
        4. We will ship back your negatives and send a link for your RAW scans.
      </div>
      <!-- <div class="item5">5. </div>
      <div class="item6">6</div> -->
    </div>
  </section>
`;
