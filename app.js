const mongoose = require("mongoose");
const { platform } = require("process");

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/techincal",(err)=>{
    if(err){
        console.log("error while connecting", err)
    }
    else{
        console.log("connected to db")
    }
})


const playListSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ctype:String,
    videos:Number,
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now()
    }
})

//collection
const Playlist = new mongoose.model("Playlist",playListSchema)

//document
async function createDocument(){
    try{
        const reactPlaylist = new Playlist({
            name:"Node.js",
            type:"Backend",
            videos:60,
            author:"divyanshi",
            active:true
        })
        const jsPlaylist = new Playlist({
            name:"javascript",
            type:"full Stack",
            videos:100,
            author:"divyanshi",
            active:true
        })

        const mongodbPlaylist = new Playlist({
            name:"mongoDB",
            type:"backend",
            videos:70,
            author:"divyanshi",
            active:true
        })
        // const result = await reactPlaylist.save()
        const result = await Playlist.insertMany([jsPlaylist,reactPlaylist,mongodbPlaylist])
        console.log(result)
    }catch(error){
        console.log("error", error.message);
    }
    
}

createDocument()
