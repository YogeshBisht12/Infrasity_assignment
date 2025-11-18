import { Schema, model } from "mongoose";
import { genSalt, hash, compare } from "bcryptjs";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: 6,
        },
    },
    { timestamps: true }
);

// Hash password before saving user
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    const salt = await genSalt(10);
    this.password = await hash(this.password, salt);
    next();
});

// Method to compare password on login
userSchema.methods.matchPassword = async function (enteredPassword) {
    return compare(enteredPassword, this.password);
};

const User = model("User", userSchema);

export default User;
