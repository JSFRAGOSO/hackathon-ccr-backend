const {Schema,model} = require ('mongoose');

const RecomendationSchema = new Schema({
  name:String,
  address:String,
  key_words:[String],
  link:String,
  observation:String,
  
},{
  timestamps:true,
})

module.exports = model('Recomendation',RecomendationSchema);