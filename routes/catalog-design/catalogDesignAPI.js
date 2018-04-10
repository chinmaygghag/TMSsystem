const express = require('express');
const router = express.Router();
const catalogAPI = require('../../models/catalog');
const multer = require('multer');
const storage = multer.diskStorage({ //multers disk storage settings
    filename: function (req, file, cb) {
        console.log("Here");
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: storage,
    limits: {fileSize: 1000000}
}).single('file');



router.post('/upload',function (req,res) {
   upload(req,res,function (err) {
       if (err){
           res.json({success:false});
           return;
       }else{
           console.log(req.file);
           res.json({success: true, filename: req.file});
       }
   });
});


router.post('/catalogElement',function (req,res) {

    let catalogElement = new catalogAPI({
        imageURL: req.body.imageURL,
        unitLengthCost: req.body.unitLengthCost,
        desc: req.body.desc,
        title: req.body.title
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







module.exports = router;