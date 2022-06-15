import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
  `;
  router.updatePageLinks();
  afterRender(state);
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  if (state.view === "Order") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      const inputList = event.target.elements;
      console.log("this is inputlist: ", inputList);

      const developing = [];
      for (let input of inputList) {
        if (input.checked) {
          developing.push(input.value);
        }
      }
      const requestData = {
        Color35: inputList.Color35.value,
        BW35: inputList.BW35.value,
        Color120: inputList.Color120.value,
        BW120: inputList.BW120.value,
        Scans: inputList.Maybe.value,
        yesNo: inputList.yes_no.value,
        customer: "Gerard"
      };
      axios
        .post(`${process.env.MONGODB}`, requestData)
        .then(response => {
          console.log(response.data);
          store.Order.order.push(response.data);
          router.navigate("/Order");
        })
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }
}

router.hooks({
  before: (done, params) => {
    let view = "Home";
    if (params && params.data && params.data.view) {
      view = capitalize(params.data.view);
    }

    if (view === "other") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st.%20louis`
        )
        .then(response => {
          const kelvinToFahrenheit = kelvinTemp =>
            Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

          store.Home.weather = {};
          store.Home.weather.city = response.data.name;
          store.Home.weather.temp = kelvinToFahrenheit(response.data.main.temp);
          store.Home.weather.feelsLike = kelvinToFahrenheit(
            response.data.main.feels_like
          );
          store.Home.weather.description = response.data.weather[0].main;
          done();
        })
        .catch(err => {
          console.log(err);
          done();
        });
    } else if (view === "Order") {
      axios
        .get(`${process.env.PIZZA_PLACE_API_URL}`)
        .then(response => {
          store.Pizza.pizzas = response.data;
          done();
        })
        .catch(error => {
          console.log("It puked", error);
          done();
        });
    } else {
      done();
    }
  }
});

router
  .on({
    "/": () => render(),
    ":views": params => {
      let views = capitalize(params.data.views);
      render(store[views]);
    }
  })
  .resolve();
