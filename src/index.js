const express = require ('express');
const path = require ('path');
const mongoose = require('mongoose');
const routes = require('./routes')
const cors = require('cors');
const app = express();
app.use(cors());

mongoose.connect('mongodb+srv://admin:admin@cluster0-ac3fq.mongodb.net/test?retryWrites=true&w=majority',
{
  useNewUrlParser: true,
  useUnifiedTopology: true
}
)
mongoose.set('useCreateIndex', true);

app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'..', 'uploads')))
app.use(routes);


app.listen(3333);