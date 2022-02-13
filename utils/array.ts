import _ from 'lodash';

export function sortByKey(array: Array<any>, path: string) {
  if (!path) {
    return array.sort((a, b) => a - b);
  } else {
    return array.sort((a, b) => (_.get(a, path) > _.get(b, path) ? 1 : _.get(b, path) > _.get(a, path) ? -1 : 0));
  }
}

export function moveToFront(list: any[], equalTo: any, path: string) {
  return list.sort(function (x, y) {
    return _.get(x, path) == equalTo ? -1 : _.get(y, path) == equalTo ? 1 : 0;
  });
}
