const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
const { initDB } = require('./Config/dbConfig');
const {taskRoutes} = require ('./Routes');




app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor funcionando!');
  });


  app.use('/api', taskRoutes);
  
  
  app.listen(PORT, async () => {
    await initDB();
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });