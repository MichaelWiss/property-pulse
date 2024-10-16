import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema(
    {
        sender: {
            type: Schema.Types.ObjectId,
            required: true
        },
        recipients: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
    }, 
  {
    timestamps: true
});

const Message = models.Message || model('Message', MessageSchema);

export default User;