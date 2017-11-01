const { get } = require('snekfetch');

module.exports = {
  getProfile: (...tags) => {
    return new Promise((resolve, reject) => {
      get(`http://api.cr-api.com/profile/${tags.map(tag => tag.replace('#', '')).join(',')}`)
        .then(res => resolve(res.body))
        .catch(err => reject(err));
    });
  },

  getClan: (...clans) => {
    return new Promise((resolve, reject) => {
      get(`http://api.cr-api.com/clan/${clans.map(clan => clan.replace('#', '')).join(',')}`)
        .then(res => resolve(res.body))
        .catch(err => reject(err));
    });
  },

  getTopClans: (limit = 200) => {
    return new Promise((resolve, reject) => {
      get('http://api.cr-api.com/top/clans')
        .then(res => resolve(res.body.clans.slice(0, limit)))
        .catch(err => reject(err));
    });
  }
};
