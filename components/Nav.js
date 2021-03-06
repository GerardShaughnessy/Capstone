import html from "html-literal";
import logo from "../Assets/img/croplogo.png";

export default links => html`
  <nav class="nav-bar">
    <img class="nav-img" src="${logo}" />
    <i class="fa fa-bars" aria-hidden="true"></i>
    <ul class="hidden--mobile nav-links">
      ${links.map(
        link =>
          `<li><a href="/${link.title}" title="${link.title}" data-navigo><button>${link.text}</button></a></li>`
      )}
    </ul>
  </nav>
`;
