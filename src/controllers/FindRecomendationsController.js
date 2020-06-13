const Recomendation  = require('../models/Recomendation');

module.exports = {
    async show(req,res){
      const {phrase} = req.query;
      const wordsArray = phrase.split(' ').map(word => word.trim());

      const recomendations = await Recomendation.find();
      let matchingRecomendation = [];

      recomendations.forEach(recomendation => {
        matchingRecomendation.push({quantity:0, id:recomendation._id})
        
        wordsArray.forEach(word => {
          const containWord = recomendation.key_words.find(keyWord => 
            {
              return word.toUpperCase() === keyWord.toUpperCase()
            }
            );
          
          if(containWord){
            const recomendationIndex = matchingRecomendation.findIndex( rec =>
              rec.id === recomendation._id);

              matchingRecomendation[recomendationIndex].quantity++;
          }
        })
      })
      
      const max = matchingRecomendation.reduce((prev, current) => 
      (prev.quantity > current.quantity) ? prev : current)
      
      if(max.quantity === 0){ 
        return res.json(
          {
            message:`Desculpe, não entendi o que você disse. Tente pesquisar por: restaurante, comida, gasolina, posar`
          })
      }
      const mostMatchingRecomendation = recomendations.find(recomendation => recomendation._id === max.id)

      return res.json(mostMatchingRecomendation)
    },
  
}
