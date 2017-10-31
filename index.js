const { get } = require('snekfetch');

module.exports = {
  getProfile: tag => {
    return new Promise((resolve, reject) => {
      get(`http://api.cr-api.com/profile/${tag.replace('#', '')}`)
        .then(res => resolve(res.body))
        .catch(err => reject(err));
    });
  },

  getClan: clan => {
    return new Promise((resolve, reject) => {
      get(`http://api.cr-api.com/clan/${clan.replace('#', '')}`)
        .then(res => resolve(res.body))
        .catch(err => reject(err));
    });
  }
};
