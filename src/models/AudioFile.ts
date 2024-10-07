import mongoose, { model, models, Schema } from "mongoose";

const audioFileSchema = new Schema({
    email: { type: String, required: true },
    audioLink: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const AudioFileModel = models.AudioFile || model("AudioFile", audioFileSchema);
export default AudioFileModel;
