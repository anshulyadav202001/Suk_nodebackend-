const db = require('../config/db');

class User {
  static findAll(callback) {
    db.query('SELECT * FROM users', callback);
  }

  static findById(id, callback) {
    db.query('SELECT * FROM users WHERE id = ?', [id], callback);
  }

  static create(user, callback) {
    db.query('INSERT INTO users SET ?', user, callback);
  }

  static update(id, user, callback) {
    db.query('UPDATE users SET ? WHERE id = ?', [user, id], callback);
  }

  static delete(id, callback) {
    db.query('DELETE FROM users WHERE id = ?', [id], callback);
  }
}

module.exports = User;
