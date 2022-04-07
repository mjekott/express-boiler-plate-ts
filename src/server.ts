import 'dotenv/config';
import App from './app';
import validateEnv from './utils/validateEnv';
import Routes from "./router"


validateEnv();
const app = new App(Routes)
app.listen();