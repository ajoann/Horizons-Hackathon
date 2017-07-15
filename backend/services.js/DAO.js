const Room = require('../models/room');
const User = require('../models/user');

module.exports = {
  createRoom(subject, grade, callback) {
    var room = new Room({
      subject: subject,
      grade: grade,
      occupants: 0
    });
    room.save(callback);
  },
  deleteRoom(id, callback) {
    Room.deleteOne({ id }, callback);
  },

}
