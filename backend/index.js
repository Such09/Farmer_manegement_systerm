import { app } from "./app.js";
import { DB_Connection } from "./src/utils/DB_Connection.js";

DB_Connection();

app.listen(3000, () => {
    console.log("app is runing on 3000 port.");
})