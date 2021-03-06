import html from "html-literal";
import contactPic from "../../Assets/img/monster-children-film-processing-2-of-6.jpeg";
export default () => html`
  <section id="Contact">
    <div class="container">
      <div class="contactHeading">
        <h2>Contact Us</h2>
        <p>For questions, concerns, or leave us a nice message:</p>
      </div>
      <div style="text-align:center"></div>
      <div class="row">
        <div class="column">
          <br /><br />
          <img src="${contactPic}" style="width:100%" />
        </div>
        <div class="column">
          <form action="https://formspree.io/f/moqrbzle" method="POST">
            <label for="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />
            <label for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />
            <label for="email">Your Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your email.."
            />
            <br />
            <label for="state">State/Territory</label>
            <select id="state" name="state">
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
              <option value="AS">American Samoa</option>
              <option value="GU">Guam</option>
              <option value="MP">Northern Mariana Islands</option>
              <option value="PR">Puerto Rico</option>
              <option value="UM">United States Minor Outlying Islands</option>
              <option value="VI">Virgin Islands</option>
              <option value="AA">Armed Forces Americas</option>
              <option value="AP">Armed Forces Pacific</option>
              <option value="AE">Armed Forces Others</option>
            </select>
            <label for="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Subject?"
            ></textarea>
            <label>
              Your message:
              <textarea name="message" style="height:170px"></textarea>
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  </section>
`;
