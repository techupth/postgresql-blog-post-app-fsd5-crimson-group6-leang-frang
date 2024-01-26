// Creating PostgreSQL Client here
import * as pg from "pg";
const { Pool } = pg.default;

const pool = new Pool({
  connectionString: "postgresql://postgres:084@localhost:5432/blog_post_app",
});

export { pool };
