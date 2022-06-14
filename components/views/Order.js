import html from "html-literal";

export default () => html`
  <section id="order">
    <form id="order" method="POST" action="">
      <div class="welcome">
        <h2>Order</h2>
      </div>
      <div class="develop">
        <div class="developHeading">
          <p>Developing:</p>
        </div>

      <br />
      <div class="orderDev">
      <label for="filmType">Color 35mm:</label>
      <input type="number" id="filmType" name="Color35" min="0" max="10" />
      </div>
      <div class="orderDev">
      <label for="filmType">B&W 35mm:</label>
      <input type="number" id="filmType" name="BW35" min="0" max="10" />
      </div>
      <div class="orderDev">
      <label for="filmType">Color 120mm:</label>
      <input type="number" id="filmType" name="Color120" min="0" max="10" />
      </div>
      <div class="orderDev">
      <label for="filmType">B&W 120mm:</label>
      <input type="number" id="filmType" name="BW120" min="0" max="10" />
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
        <select id="scans" name="maybe">
          <option value="">Select an option</option>
          <option value="Yes for all">Yes for all</option>
          <option value="Yes for 35mm only">Yes for 35mm only</option>
          <option value="Yes for 120mm only">Yes for 120mm only</option>
          <option value="No">No</option>
        </select>
      </div>
      <label for="filmType">Including Flash stick?:</label>
      <p>
<input type="radio" name="yes_no" checked>Yes</input>
</p>
<p>
<input type="radio" name="yes_no">No</input>
</p>
    </form>
  </section>
`;
