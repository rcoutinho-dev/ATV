import dotenv from "dotenv";
import pg,{Pool} from 'pg';

dotenv.config();
const {Pool} = pg;

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});