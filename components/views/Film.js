import html from "html-literal";

export default st => html`
  <table id="film">
    <tr>
      <th>Color35</th>
      <th>Bw35</th>
      <th>Color120</th>
      <th>Bw120</th>
      <th>Scans</th>
      <th>yesNo</th>
      <th>Customer</th>
    </tr>
    ${st.orders
      .map(order => {
        return `<tr><td>${order.Color35}</td><td>${order.Bw35}</td><td>${order.Color120}</td><td>${order.Bw120}</td><td>${order.Scans}</td><td>${order.yesNO}</td><td>${order.customer}</td></tr>`;
      })
      .join("")}
  </table>
`;
