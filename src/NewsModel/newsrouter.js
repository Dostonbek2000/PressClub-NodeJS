const express = require('express');
const mongoose = require('mongoose');
const News = require('./newsmodel');
const router = express.Router();

router.post('/',async (req,res)=>{
    const { title, text,img,sana,delay,time,category,video} = req.body;
    let news = {}
    news.title = title;
    news.text = text;
    news.img = img;
    news.sana = sana;
    news.delay = delay;
    news.time = time;
    news.category = category;
    news.video = video
    let NewsModel = new News(news)
    await NewsModel.save()
    res.json(NewsModel)
})





router.get('/',async (req,res)=>{
    try {
        const posts = await News.find();
        res.json(posts)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('erver error at 47 posts')
    }
})



module.exports = router

