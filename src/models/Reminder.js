const {Schema,model} = require ('mongoose');

const ReminderSchema = new Schema({
  title:String,
  description:String,
  thumbnail:String,
  hours:String,
  
},{
  timestamps:true,
  toJSON:{
     virtuals:true 
  }
})

ReminderSchema.virtual('thumbnail_url').get(function() {
  return `${process.env.APP_URL}/files/${this.thumbnail}`;
})

module.exports = model('Reminder',ReminderSchema);