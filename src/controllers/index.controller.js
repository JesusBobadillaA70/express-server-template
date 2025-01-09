import { styleText } from 'node:util';

class index_controller {
    index = ( req, res ) => {
        console.log( `Recibiendo peticiones[${req.method}] del url: ${ styleText('bgBlue', req.url) }` );        
    }
}

export default new index_controller();