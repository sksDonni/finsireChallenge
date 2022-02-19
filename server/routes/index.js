import express from "express"
import Data  from "../models/dataModel.js"
import bodyparser from "body-parser"

const router = express.Router();

router.use(bodyparser.json());
router.use(express.json());

/* GET users listing. */
router
  .route("/")
  .get(async (req, res, next) => {
    console.log(req.body)
    Data.find({})
      .then(
        (data) => {
          console.log(data)
          if(data.length == 0)
          {
            var insertedData = Data.create(data=[])
            res.statusCode = 200;
            res.setHeader("content-Type", "application/json");
            res.json(insertedData);
          }
          res.statusCode = 200;
          res.setHeader("content-Type", "application/json");
          res.json(data);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

  .post(async (req, res, next) => {
    console.log("body", req.body)
    Data.find({})
    .then(    
    (data) => {
      console.log(data)
      var dataCopy = data[0]
      console.log(dataCopy.data)
      dataCopy.data = dataCopy.data.concat(req.body.element)
      var dataId = dataCopy._id
      console.log(dataCopy)
      Data.findByIdAndUpdate(dataId, dataCopy)
      .then(
        (newData) => {
          console.log(newData)
          res.statusCode = 200;
          res.setHeader("content-Type", "application/json");
          res.json(data);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
    }
    )
  })

  .delete(async (req, res, next) => {
    Data.find({})
    .then((data) => {
      console.log(data)
      var dataCopy = data[0]
      dataCopy.data = []
      var dataId = dataCopy._id
      Data.findByIdAndUpdate(dataId, dataCopy)
      .then(
        (newData) => {
          console.log(newData)
          res.statusCode = 200;
          res.setHeader("content-Type", "application/json");
          res.json(newData);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
    })
  })

export default router
