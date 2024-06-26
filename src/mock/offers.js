import { MAX_PRICE, MIN_PRICE } from '../const.js';
import { getRandomInteger } from '../util.js';

const offers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 'of1',
        title: 'Upgrade',
        price: getRandomInteger(MIN_PRICE, MAX_PRICE)
      },
      {
        id: 'of0',
        title: 'NoCheked',
        price: 0
      }]
  },
  {
    type: 'bus',
    offers: []
  },
  {
    type: 'flight',
    offers: [
      {
        id: 'of2',
        title: 'Baggage',
        price: getRandomInteger(MIN_PRICE, MAX_PRICE)
      },
      {
        id: 'of3',
        title: 'First Class',
        price: getRandomInteger(MIN_PRICE, MAX_PRICE)
      }]
  },
  {
    type: 'train',
    offers: [
      {
        id: 'of8765',
        title: 'Upgrade',
        price: getRandomInteger(MIN_PRICE, MAX_PRICE)
      },
      {
        id: 'of34567654',
        title: 'NoCheked',
        price: 0
      }]
  },
];

export {offers};
