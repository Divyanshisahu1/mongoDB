const mongoose = require("mongoose");
const { platform } = require("process");

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/techincal", (err) => {
    if (err) {
        console.log("error while connecting", err)
    }
    else {
        console.log("connected to db")
    }
})


const playListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now()
    }
})

//collection
const Playlist = new mongoose.model("Playlist", playListSchema)

//document
// async function createDocument(){
//     try{
//         const reactPlaylist = new Playlist({
//             name:"Node.js",
//             type:"Backend",
//             videos:60,
//             author:"divyanshi",
//             active:true
//         })
//         const jsPlaylist = new Playlist({
//             name:"javascript",
//             type:"full Stack",
//             videos:100,
//             author:"divyanshi",
//             active:true
//         })

//         const mongodbPlaylist = new Playlist({
//             name:"mongoDB",
//             type:"backend",
//             videos:70,
//             author:"divyanshi",
//             active:true
//         })
//         // const result = await reactPlaylist.save()
//         const result = await Playlist.insertMany([jsPlaylist,reactPlaylist,mongodbPlaylist])
//         console.log(result)
//     }catch(error){
//         console.log("error", error.message);
//     }

// }

// createDocument()


async function getDocument() {
    try {
        // let result = await Playlist.findOne({author:"divyanshi"});
        // let result = await Playlist.find({author:"divyanshi"}).select({name:1,_id:0}).limit(1).skip(1);

        //---->comparison
        // let result = await Playlist.find({videos:{$gte:50}})
        // let result = await Playlist.find({videos:{$lte:70}})
        // let result = await Playlist.find({name:{$in:["Node.js","mongoDB"]}})

        //---->logical operator

        // let result = await Playlist.find({$or:[{name:"mongoDB"},{name:"Node.js"}]})
        //  let result = await Playlist.find({$and:[{name:"mongoDB"},{videos:70}]})
        // let result = await Playlist.find({$nor:[{name:"Node.js"},{name:"mongoDB"}]})
        // let result = await Playlist.find({videos:{$not:{$gt:70}}})

        //count & sort

        // let result = await Playlist.find({author:"divyanshi"}).select({name:1}).countDocuments()
        // let result = await Playlist.find({author:"divyanshi"}).select({name:1}).sort({name:1}) //desc
        let result = await Playlist.find({ author: "divyanshi" }).select({ name: 1 }).sort({ name: -1 })


        console.log(result)

    } catch (err) {
        console.log("error", err)
    }


}

// getDocument()

async function updateDocument(_id) {
    // let result = await Playlist.updateOne({_id},{
    //     $set:{
    //         name:"Javascript"
    //     }
    // }) 

    //--> return object(old value)

    //     let result = await Playlist.findByIdAndUpdate({_id},{
    //         $set:{
    //             name:"Javascript Thapa"
    //         }
    //     },{
    //             useFindAndModify:false
    //         }
    //     )

    let result = await Playlist.findByIdAndUpdate({_id},{
                $set:{
                    name:"Javascript Thapa tech"
                }
            },{     new:true,
                    useFindAndModify:false
                }
            )
        console.log(result)

    }

    // updateDocument("63a2e12038229a25f6388182")


async function deleteDocument(_id){
    // let result = await Playlist.deleteOne({_id})
    let result = await Playlist.findByIdAndDelete({_id})
    console.log(result)
}

deleteDocument("63a2e12038229a25f6388183")

