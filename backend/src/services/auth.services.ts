import { User } from "../models/user.model";
import { generateToken } from "../utils/generateToken";

export const registerUser = async (name: string, email: string, password: string) => {
    const existing = await User.findOne({ email : email });
    if(existing){
        throw new Error("User already exists");
    }
    const user = await User.create({name , email ,password});

    return {
        user,
        token: generateToken(user._id.toString())
    }
}


export const loginUser = async (email: string, password: string) => {
    const user = await User.findOne({ email: email});
    if(!user){
        throw new Error("User not found");
    }
    const isMatch = await user.comparePassword(password);
    if(!isMatch){ throw new Error("password invalid" )}

    return {
        user,
        token: generateToken(user._id.toString())
    }
}
