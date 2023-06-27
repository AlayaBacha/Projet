const Posts = require("../Models/Posts")

exports.AddPost = async (req,res)=>{


    try {
        const now = new Date(Date.now())
        const newPost = new Posts({...req.body,valid : false,date : now.toLocaleString()})
        await newPost.save()
        
        res.status(200).send({ msg : "Post added",newPost })

    } catch (error) {
        res.status(500).send({ errors: [{ msg: 'post not added' }] })
    }
}

exports.AllPosts = async (req, res) => {
    try {
        const Allposts = await Posts.find().populate('owner')

        res.status(200).send({ msg: 'My Posts ', Allposts })
    } catch (error) {
        res.status(500).send({ msg: 'Can not get my posts' })

    }
}

exports.OnePost = async (req, res) => {
    const {id} = req.params
    try {
        const onePost = await Posts.findById(id).populate('owner');
        res.status(200).send({ msg: 'The post : ', onePost })
    } catch (error) {
        res.status(500).send({ msg: 'Can not get posts' })
    }
}

exports.DeletePost = async (req, res) => {

    const { id } = req.params
    try { 
        await Posts.findByIdAndDelete(id)
        res.status(200).send({ msg: 'Post deleted' });
    } catch (error) {
        res.status(500).send({ msg: "Post not delete" })
    }
}

exports.UpdatePost = async (req,res)=>{
    const {id} = req.params
    try {
        const now = new Date(Date.now())
        const updatePost = await Posts.findByIdAndUpdate(id,{$set : {...req.body,date : now.toLocaleString()} })
        res.status(200).send({ msg:'Post updated' ,updatePost});
    } catch (error) {
        res.status(500).send({msg:'Posr not update'})
    }
}

exports.myPosts = async (req, res) => {
    try {
        const {id} = req.params
        const Allposts = await Posts.find({owner : id}).populate('owner')

        res.status(200).send({ msg: 'My Posts ', Allposts })
    } catch (error) {
        res.status(500).send({ msg: 'Can not get my posts' })

    }
}