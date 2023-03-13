import clientPromise from "../../../utils/mongodb";

export default async function handler(req, res) {

  const client = await clientPromise;
  const db = client.db("users");
  
  switch (req.method) {
    
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let myPost = await db.collection("users").insertOne(bodyObject);
      res.json(myPost.ops[0]);
      break;
    
      case "GET":
      const allPosts = await db.collection("users").find({}).toArray();
      res.json({ status: 200, data: allPosts });
      break;
  }
}


// import { MongoClient, ServerApiVersion } from 'mongodb'


// export default function handler(res, req){
  
//   const body = req.body;

//   const uri = "mongodb+srv://Emmanuel:<nYqNHNsoZAelOycl>@users.2a3og2i.mongodb.net/?retryWrites=true&w=majority";
//   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
//   client.connect(err => {
//     const collection = client.db("users").collection("users");
//     // perform actions on the collection object

//     try {
//       collection.insertOne(
//         body.name,body.email,body.number
//       )
//     } catch (error) {
//       console.err(error)
//       res.json(error)
//     }
//     res.json(req.body)
//   });
// }