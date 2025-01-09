import { styleText } from 'node:util';

class home_controller {
    getHome( req, res ){
        console.log( `Servidor recibiendo peticiones[${req.method}] del url: ${ styleText('bgBlue', req.url) }` );        
    }
}

export default new home_controller();