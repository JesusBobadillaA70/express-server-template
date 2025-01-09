import app from './src/config/express.js'
import index_router from './src/routes/index.routes.js';
import home_router from './src/routes/home.routes.js';
import { styleText } from 'node:util';

const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.use( '/', index_router );
app.use( '/home', home_router );

app.listen( PORT, HOST, (  ) => {
    console.log( `Servidor escuhando en: ${styleText( 'bgBlue', `http://${HOST}:${PORT}` )}` );
    
} );
