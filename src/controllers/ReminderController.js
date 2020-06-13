const Reminder  = require('../models/Reminder');

module.exports = {
    async index(req,res){
        const reminders =  await Reminder.find()
        return res.json(reminders);
    },
    
    async store(req,res){
        const {filename} = req.file;
        const { title, description, hours } = req.body;


        const spot = await Reminder.create({
          title,
          thumbnail:filename,
          description,
          hours,
        });

      return res.status(201).json(spot);
    }
}
