import API_ENDPOINT from '../../globals/api-endpoint';

const createRestaurantItemTemplate = (restaurant) => `
<div class="posts">
  <div class="post-item" tabindex="0">
    <img class="lazyload" id="post-item__thumbnail" data-src="${restaurant.pictureId ? API_ENDPOINT.IMG.S + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}" crossorigin="anonymous">

    <div class="post-item__name">
      <h2><a href="/#/detail/${restaurant.id}">${restaurant.city}</a></h2>
    </div>

    <div class="post-item__title">
      ${restaurant.name} | ⭐️ Rating: ${restaurant.rating}/5
    </div>
  </div>
</div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail-card" tabindex="0">
  <div class="detail-card1">
    <h1 class="detail-name">${restaurant.name} | Rating : ${restaurant.rating}/5</h1>
    <h2 class="detail-categories">Kategori: ${restaurant.categories[0].name}</h2>
    <img class="detail-thumbnail" src="${restaurant.pictureId ? API_ENDPOINT.IMG.M + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}" crossorigin="anonymous">
  </div>
  <div class="detail-card2">
    <h3 class="detail-city">Kota: ${restaurant.city}</h3>
    <h4 class="detail-address">Alamat: ${restaurant.address}</h4>
    <p class="detail-desc">${restaurant.description}</p>
    <div class="detail-menus">
      <div class="detail-foods">
        <h5>Menu Makanan</h5>
        <ul>
          ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`)}
        </ul>
      </div>
      <div class="detail-drinks">
        <h5>Menu Minuman</h5>
        <ul>
          ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`)}
        </ul>
      </div>
    </div>
    <div class="detail-review">
      <h6>Hasil Review</h6>
      ${restaurant.customerReviews.map((review) => `
      <p>"${review.review}"</p>
      <p>Oleh: ${review.name} (${review.date})</p>
      `)}
    </div>
  </div>
</div>
`;

const createRestoLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createRestoLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate, createRestaurantDetailTemplate,
  createRestoLikeButtonTemplate, createRestoLikedButtonTemplate,
};
