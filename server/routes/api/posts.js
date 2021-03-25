const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// GET Posts
router.get('/', async(req, res)=>{
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
    

})
// Add Posts

router.post('/', async(req, res) => {
    const posts = await loadPostsCollection();
     posts.insertOne({
        firstName :req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        telePhone : req.body.telephone, 
        hireData : req.body.hiredata, 
        createdAt: new Date()
    });
    // console.log(req.body)
    res.status(201).send();
});


// Delete Posts
router.delete('/:id', async (req,res) =>{
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();

});
// Delete all posts
router.post('/delete-all', async (req, res) => {
    const posts = await loadPostsCollection();
    posts.drop();
    res.status(200).send();
});


async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://Mamta:jhamatgirl@myfirstproject.1xmld.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
            useNewUrlParser:true,

        });
        return client.db('MyFirstProject').collection('posts')
}

// export the router
module.exports = router;