import mongoose from "mongoose";
import bcrypt from "bcryptjs";

export type Role = "USER" | "ADMIN" 

export interface IUser extends mongoose.Document{
    name: string
    email: string
    password: string
    role: Role
    comparePassword(password: string): Promise<boolean>
}

const userSchema = new mongoose.Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function(v) {
              return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: "Invalid email address"
          }
    },
    password: {
        type: String,
        required: true,
        minLength: [6,"Password must be of minimum 6 characters."]
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER",
    }
},{
    timestamps: true
});

userSchema.pre("save", async function(){
    if(!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10);
    return;
});

userSchema.methods.comparePassword = async function(password: string){
    return bcrypt.compare(password, this.password);
}

export const User = mongoose.model<IUser>("User", userSchema);