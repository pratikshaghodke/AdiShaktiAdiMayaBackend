const news = require("./newsModel");

var addNews = async (req, res) => {
  try {
    const body = req.body;
    const newsModelData = new news();
    newsModelData.heading = body.heading;
    newsModelData.content = body.content;

    await newsModelData.save().then((item) => {
      res.send({
        status: 1,
        msg: "News added successfully",
        data: item
      });
    });
  } catch (error) {
    res.status(400).send({
      status: 0,
      msg: error,
    });
  }
};

var getNews = async(req, res)=>{
  console.log("in get news")
    try{
        const newsData = await news.find();
        console.log("news ",newsData);
          if (newsData) {
            res.send({
              status: 1,
              msg: "News list fetched successfully",
              data: newsData
            });
          } else {
            res.send({
              status: 0,
              msg: "Data not available"
            });
          }
    }
    catch(error){
      console.log("error in fetching news ", error);
        res.status(400).send({
          status: 0,
          msg: error
        });
    }
}

module.exports = { addNews, getNews };
