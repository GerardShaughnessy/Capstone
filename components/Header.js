import html from "html-literal";

export default state => html`
  <header>
    <h1>Example Header: ${state.header}</h1>
  </header>
`;
