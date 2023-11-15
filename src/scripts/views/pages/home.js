import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <hr>
    <div class="cabang">
      <h3 class="cabang__label">Cabang Kami</h3>
    </div>
    <div id="restaurants" class="restaurants">
    </div>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.HomeRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
