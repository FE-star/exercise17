function isArray(data) {
  return Object.prototype.toString.call(data) === '[object Array]';
}

module.exports = {
  isArray
}