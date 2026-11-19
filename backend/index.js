import { app } from "./app.js";
import { DB_Connection } from "./src/utils/DB_Connection.js";

const port = process.env.PORT || 4000

DB_Connection()
.then(() => {
    app.listen(port, () => {
        console.log(`app is runing ${port}`);
    })
})
.catch((err) => {
    console.log("error is: ", err);        
})