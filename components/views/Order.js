import html from "html-literal";

export default () => html`
  <section id="ordering">
    <form id="order" method="POST" action="">
      <div class="welcome">
        <h2>Order</h2>
      </div>
        <div class="developHeading">
          <p>Developing:</p>
          <br>
          <br>
        </div>
        <div class="develop">
      <br>
      <br>
      <div class="orderDev">
      <label for="Color35">Color 35mm:</label>
      <input type="number" name="Color35" id="filmType1" value=0  min="0" max="10" />
      </div>
      <div class="orderDev">
      <label for="Bw35">B&W 35mm:</label>
      <input type="number" id="filmType2" value=0 name="Bw35" min="0" max="10" />
      </div>
      <div class="orderDev">
      <label for="Color120">Color 120mm:</label>
      <input type="number" id="filmType3" value=0 name="Color120" min="0" max="10" />
      </div>
      <div class="orderDev">
      <label for="Bw120">B&W 120mm:</label>
      <input type="number" id="filmType4" value=0 name="Bw120" min="0" max="10" />
      </div>
      <br />
      <br />
      </div>
      <div>
      <div class="developHeading">
        <label for="Scans">Scanning as well?:</label>
      </div>
        <br />
        <br />
        <select id="scans" name="Maybe">
          <option value="">Select an option</option>
          <option value="Yes for all">Yes for all</option>
          <option value="Yes for 35mm only">Yes for 35mm only</option>
          <option value="Yes for 120mm only">Yes for 120mm only</option>
          <option value="No">No</option>
        </select>
      </div>
      <label for="filmType">Including Flash stick?:</label>
      <p>
<input for="yesNo" type="radio" name="yes_no" checked>Yes</input>
</p>
<p>
<input type="radio" name="yes_no">No</input>
</p>
<br>

    <div class="submit">
    <input type="submit" name="submit" value="Submit Order" />
    </div>
    </form>
  </section>
`;
