import { Schema, model } from "mongoose";

const noteSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        title: {
            type: String,
            required: [true, "Title is required"],
        },
        content: {
            type: String,
            required: [true, "Content is required"],
        },
    },
    { timestamps: true }
);

const Note = model("Note", noteSchema);

export default Note;
