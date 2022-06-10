import html from "html-literal";

export default () => html`
  <section id="order">
    <form id="order" method="POST" action="">
      <div class="welcome">
      <h2>Order</h2>
      </div>
      <div>
        <label for="Developing">Film Developing:</label>
        <select id="developPage" name="develop">
          <option value="">Select an option</option>
          <option value="Color">Color Developing</option>
          <option value="BlackandWhite">B&W Developing</option>
          <option value="Both">Both</option>
          <option value="Special">Special Order</option>
        </select>
      </div>
      <div>
      <label for="scans">Film scanning:</label>
        <select id="scans" name="scans">
          <option value="">Select an option</option>
          <option value="Yes">Yes</option>
          <option value="Yes but specify">Yes just the specified ones (let us know below)</option>
          <option value="No">No</option>
          <option value="Special">Special Order</option>
      <div>
        <label for="specify">(if applicable) Please specify:</label>
        <input
          type="text"
          name="specify"
          id="specify"
          placeholder="Enter the rolls you marked for scanning"

        />
      </div>

    </form>
  </section>
`;
