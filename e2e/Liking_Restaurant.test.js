/* eslint-disable no-undef */
Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('checking liked restaurants', async ({ I }) => {
  I.amOnPage('/#/favorite');
  I.waitForElement('#restaurants', 5);
  I.seeElement('.post-item', 5);
  I.say('Successfully checked for liked restaurants');
});

Scenario('liking a restaurant', ({ I }) => {
  I.waitForElement('.posts', 5);
  I.seeElement('.posts h2', 5);
  I.click(locate('h2 a').first());
  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.say('Successfully liked a restaurant');
});

Scenario('unliking a restaurant', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.waitForElement('#restaurants', 5);
  I.waitForElement('.posts', 5);
  I.seeElement('.posts h2', 5);
  I.click(locate('h2 a').first());
  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.say('Successfully unliked a restaurant');
});
