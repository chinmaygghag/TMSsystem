const express = require('express');
const router = express.Router();
const catalogAPI = require('../../models/catalog');
const multer = require('multer');
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');

cloudinary.config({
   cloud_name:'dmq3setlj',
   api_key:'358212839961235',
    api_secret: 'A63YvZrdG9C-h588nG3RrDRfWRg'
});


const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'uploads',
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});
const upload = multer({
    storage: storage
});

router.post('/upload',upload.single('file'),function (req,res) {
    console.log(req);
    if (req.file == null){
        res.json({success: false})
    } else{
        res.json({success:true, filename: req.file.url});
    }
});


router.post('/catalogElement',function (req,res) {

    let catalogElement = new catalogAPI({
        imageURL: req.body.imageURL,
        unitLengthCost: req.body.unitLengthCost,
        desc: req.body.desc,
        title: req.body.title,
        status: req.body.status
    });

    catalogAPI.addCatalogElement(catalogElement, function (err, catalogElement) {
        if (err) {
            res.json({success: false, msg: 'Failed to register user'});
        } else {
            res.json({success: true, msg: 'Catalog Added Successfully!'});
        }
    });
});


router.get('/getCatalogElements',function (req,res) {

    catalogAPI.getCatalog(function (err,catalogs) {
        if (err) throw err;
        else
            res.json(
                {
                    success: true,
                    catalogs: catalogs
                }
            )
    });

});


router.get('/getTopCatalog',function (req,res) {

    catalogAPI.getTopCatalog(function (err,catalogs) {
        if (err) throw err;
        else
            res.json(
                {
                    success: true,
                    catalogs: catalogs
                }
            )
    });

});







module.exports = router;