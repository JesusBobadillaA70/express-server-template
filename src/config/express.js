import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

const app = express();

app.use( morgan( 'dev' ) );
app.use( cors() );
app.use( helmet() );

export default app;