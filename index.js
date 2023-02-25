import express from "express";
// import cors from "cors";
import router from "./routes/myroute.js";
// import morgan from "morgan";




const app = express();
const port = 4000;


app.use(express.json());
// app.use(cors());
// app.use(express.urlencoded({extended: false}));
// app.use(morgan("dev"));
// app.disable("x-powered-by");


app.put("/",(req,res)=>{
    res.status(201).json("Home par ho aap vmrro");
});

app.use("/api", router);

// for etherial mail, you just need to setup new user id from etherial account everytime
// http://localhost:4000/api//user/signup POST REQUEST, IN BODY * YOU DONT NEED TO WRITE ANYTHING , just send the email , you will get some mail 

// http://localhost:4000/api//user/login POST REQUEST , IN BODY { "userEmail": "rahul@asdf.com"}



app.listen(port, ()=>{
    // console.log("Server is running on port", port);
    console.log(`server is running on port http://localhost:${port}`);
})
