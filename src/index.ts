import express, {Application} from "express";
import morgan from "morgan";
import cors from "cors";
import indexRoute from "./routes/index.route";
import gameRoute from "./routes/game.route";

class Server {
    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    private config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        //this.app.use(cors({origin: ['http://localhost:4200', 'http://localhost:8100']}));
        this.app.use(cors());
        this.app.use(morgan('dev'));
    }

    private routes() {
        this.app.use('/api/v1/games', gameRoute);
        this.app.use('/', indexRoute);
    }

    start(){
        this.app.listen(this.app.get('port'), () => {
            console.log('Listening on port ',
                this.app.get('port'));
        })
    }
}

const server = new Server();
server.start();