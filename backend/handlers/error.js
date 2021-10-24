class Error {
  constructor(message) {
    this.message = message;
    this.name = "Error";
  }
}

class ValError extends Error {
  constructor(message) {
    super(message);
    this.name = "Val Error";
  }
}

module.exports = {
  ValError,
};
