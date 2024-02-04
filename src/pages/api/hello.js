import { connectDB } from "../../utils/connect";

export default async function (res,req) {
    await connectDB();
    res.status(200).json({success:true});
}