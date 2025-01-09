import app from './src/config/express.js'
import index_controller from './src/controllers/index.controller.js'
import { styleText } from 'node:util';

const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.get( '/', index_controller.index )

app.listen( PORT, HOST, (  ) => {
    console.log( `Servidor escuhando en: ${styleText( 'bgBlue', `http://${HOST}:${PORT}` )}` );
    
} );
