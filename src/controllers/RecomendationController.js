const Recomendation  = require('../models/Recomendation');

module.exports = {
    async index(req,res){
        const recomendations =  await Recomendation.find()
        return res.json(recomendations);
    },
    
    async store(req,res){
        const { name, address, key_words,link, observation } = req.body;
    
        const arrayKeyWords = key_words.split(',').map(word => word.trim());

        const recomendation = await Recomendation.create({
          name,
          address,
          key_words: arrayKeyWords,
          link,
          observation,
        });

      return res.status(201).json(recomendation);
    }
}
