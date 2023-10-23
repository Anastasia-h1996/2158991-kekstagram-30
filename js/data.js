import {createIdGenerator,getRandomInteger,createRandomIdFromRangeGenerator,getArrayRandomElements,getStringFromArray} from './util';

const PHOTO_COUNT = 25;
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
const MIN_COMMENT_ID_COUNT = 1000000;
const MAX_COMMENT_ID_COUNT = 9999999;
const MAX_COMMENTS_COUNT = 30;
const MAX_ACATAR_ID_COUNT = 6;

const NAMES = [
  'Harry',
  'Tom',
  'Bella',
  'Bartemius',
  'Regulus',
  'Celestina',
  'Viktor',
  'Blaise'
];

const DESCRIPTIONS = [
  'Некоторые дни начинаются лучше остальных.',
  'Сегодня в моей душе солнце.',
  'Если ты ищешь того человека, который изменит твою жизнь, просто возьми и посмотри в зеркало.',
  'Красота лишь привлекает внимание, душа – завоевывает сердце.',
  'Все, что мы отдаем, возвращается вновь.',
  'Цени моменты.',
  'Улыбайся больше, смейся чаще.',
  'Счастье никогда не выйдет из моды.',
  'Они говорили мне, что я не смогу, поэтому я это сделала.'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Даже у Волан-де-морта получилось бы лучше!'
];

const createIdPhoto = createIdGenerator();
const createIdUrl = createIdGenerator();

const createIdComment = createRandomIdFromRangeGenerator(MIN_COMMENT_ID_COUNT,MAX_COMMENT_ID_COUNT);

const createComment = () => ({
  id: createIdComment(),
  avatar: `img/avatar-${getRandomInteger(1,MAX_ACATAR_ID_COUNT)}.svg`,
  message: getStringFromArray(getArrayRandomElements(COMMENTS, getRandomInteger(1,2))),
  name: NAMES[getRandomInteger(0,NAMES.length - 1)],
});

const createPhoto = () => ({
  id: createIdPhoto(),
  url: `photos/${createIdUrl()}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0,DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(MIN_LIKES_COUNT,MAX_LIKES_COUNT),
  comments: Array.from({length: getRandomInteger(0,MAX_COMMENTS_COUNT)}, createComment),
});

const createPhotosArray = () => Array.from({length: PHOTO_COUNT}, createPhoto);

export {createPhotosArray};