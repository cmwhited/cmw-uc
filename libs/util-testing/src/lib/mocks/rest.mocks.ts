import { RestResponse, Character } from '@cmw-uc/models';

const buildCharacterList = (count: number): Character[] =>
  Array.from({ length: count }).map(
    (_, idx: number): Character => ({
      id: idx,
      name: `test_character_${idx}`,
      status: 'unknown',
      species: 'test_species',
      type: 'test_type',
      gender: 'unknown',
      origin: {
        name: 'test_character_origin',
        url: 'https://test.com/origin',
      },
      location: {
        name: 'test_character_location',
        url: 'https://test.com/location',
      },
      image: null,
      episode: [],
      url: `https://test.com/character/${idx}`,
    })
  );

export const buildRestResponse = (charCount = 1, pagesCount = 1): RestResponse => ({
  info: {
    count: charCount,
    pages: pagesCount,
    next: 'https://test.com/character?page=2',
    prev: null,
  },
  results: buildCharacterList(charCount),
});
