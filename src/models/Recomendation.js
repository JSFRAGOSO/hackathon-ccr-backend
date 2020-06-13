const {Schema,model} = require ('mongoose');
const { uuid } = require('uuidv4');

const RecomendationSchema = new Schema({
  name:String,
  address:String,
  key_words:[String],
  link:String,
  observation:String,
  
},{
  timestamps:true,
  toJSON:{
    virtuals:true 
 }
})

RecomendationSchema.virtual('transactionId').get(function() {
  return uuid();
})

module.exports = model('Recomendation',RecomendationSchema);