const joinPath = (parent = '', path = ''): string =>
  `${parent}/${path}`.replace(/\/+/g, '/');

export default joinPath;