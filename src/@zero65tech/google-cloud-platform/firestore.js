const collections = {

  user    : [ 'USER',    'USER_SESSION'     ],

  amc : [ 'AMC' ],
  zerodha : [ 'ZERODHA', 'ZERODHA_SESSION' ],
  invest  : [ 'INVEST',  'INVEST_PORTFOLIO' ],
  'invest-portfolio' : [ 'INVEST', 'INVEST_PORTFOLIO' ],
  'invest-trade'     : [ 'INVEST', 'INVEST_PORTFOLIO' ],

  'backup-restore'   : [ 'USER', 'ZERODHA', 'INVEST', 'INVEST_PORTFOLIO' ]
  
}

let service = process.env.npm_package_name;
if(!collections[service]) {
  module.exports = undefined;
  return;
}

let project = 'zero65-test';
if(service == 'user' || service == 'zerodha')
  project = 'zero65';
else if(process.env.STAGE == 'gamma')
  project = 'zero65';
else if(process.env.STAGE == 'prod')
  project = 'zero65';

module.exports = { project, collections: collections[service] }
