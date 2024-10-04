import mongoose, { Schema, model, models } from "mongoose";

const audioFileSchema = new Schema({
  discordUserId: { type: String, required: true },
  audioLink: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const AudioFileModel = models.AudioFile || model("AudioFile", audioFileSchema);
export default AudioFileModel;