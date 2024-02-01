import { createConnection } from 'mysql';

const connection = createConnection({
  host: 'mace-technology.com',
  user: 'u770461298_macedir',
  password: 'Vk|vJt24',
  database: 'u770461298_directorio'
});

connection.connect(function(err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Connected to MySQL database.');
  connection.end();
});