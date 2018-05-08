const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const catalogSchema = mongoose.Schema({
    imageURL: {
        type: String,
        required: true
    },
    unitLengthCost: {
        type: String,

    },
    desc: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    status:{
        type : String,

    }
});


const catalog = module.exports = mongoose.model('Catalog', catalogSchema);

module.exports.getCatalog = function (callback) {
    const query = ({status: "approved"});
    catalog.find(query,callback);
};
module.exports.getCatalogWaiting = function (callback) {
    const query = ({status: "waiting"});
    catalog.find(query,callback);
};

module.exports.getCatalogDeclined = function (callback) {
    const query = ({status: "declined"});
    catalog.find(query,callback);
};


module.exports.addCatalogElement = function (catalogElement,callback) {
    catalogElement.save(callback);
};

module.exports.declineStatusForCatalog = function (catalogName,callback) {
    catalog.findOne({title : catalogName},function (err,catalog) {
        console.log(catalog);
        catalog.status = "declined";
        console.log(catalog.status);
        catalog.save(function (err) {
            if(err) throw err;
            else{
                callback(true);
            }
        })
    })
};

module.exports.approveStatusForCatalog = function (catalogName,cost,callback) {
    catalog.findOne({title : catalogName},function (err,catalog) {
        console.log(catalog);
        catalog.status = "approved";
        catalog.unitLengthCost = cost;
        console.log(catalog.status);
        catalog.save(function (err) {
            if(err) throw err;
            else{
                callback(true);
            }
        })
    })
};


module.exports.getTopCatalog = function (callback) {
    const query = ({status: "approved"});
    catalog.find(query,callback).limit(5);
};



module.exports.getCatalogElement = function (catalogName,callback) {
    const query = {title : catalogName};
    catalog.find(query,callback);
}