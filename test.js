const cr = require('.');
cr.getClan('2CCCP', '2U2GGQJ').then(profile => console.log(profile));

process.on('unhandledRejection', console.error);
