import User from "../module/userSchema.js";
export const signup=async(req,res)=>{
  
    const exist=await User.findOne({username:req.body.username});
    console.log(exist)
    if(exist)
    {
        return res.status(401).json({message:"user alread exist"});
    }
    try{
        const user=req.body;
        const data=new User(user)
        await data.save();
        return res.status(200).json({message:user});

    } catch (error) {
        res.status(501).json({message:error});
    }
};
export const login=async(req,res)=>{
    console.log(req.body)
    
    try {
        const user=await User.findOne({username:req.body.username,password:req.body.password});
        if(user){
            return res.status(201).json({data:user});
        }
        else{
            return res.status(401).json("invalid user")
        }
    } catch (error) {
        return res.status(500).json("error")
    }
   
}