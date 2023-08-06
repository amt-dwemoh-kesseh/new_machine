import express,{Application,Request,Response} from "express";
import dotenv from 'dotenv'
import { userRoute } from "./routes/user.route";
dotenv.config()

const app:Application = express();
const port = process.env.PORT;

app.use(express.json())
app.use('/',userRoute)

app.get("/take",(req:Request,res:Response)=>{
    res.json({message: "Hello World!"});
})


app.listen(port,()=>{
    console.log(`Listening on port : ${port}`);
})