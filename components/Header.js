import html from "html-literal";

import logo from "../../Capstone/Assets/img/croplogo.png";

export default state => html`
  <header>
    <!-- <h1>Example Header: ${state.header}</h1> -->
    <img class="header-img" src="${logo}" />
    <nav>
      <ul class="nav_links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Order</a></li>
      </ul>
    </nav>
    <a class="cta" href="#"><button>Home</button></a>
  </header>
`;
