// import Models from '../models';
var Models = require('../models');
async function getData(text) {
    return Models.Google.find({input : text}).exec();
}

module.exports = {
    getData,
}