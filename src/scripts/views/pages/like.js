import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    const firstCondition = "You haven't marked any restaurants as favorites. Time to pick your favorites!";
    return `
      <div id="content" class="content">
      <h2 id="content__heading" class="content__heading">Your Liked Restaurant</h2>
      ${firstCondition}
        <div id="like-restaurant" class="restaurant-container">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#like-restaurant');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Like;
