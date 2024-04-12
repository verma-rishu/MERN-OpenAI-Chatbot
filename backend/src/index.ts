import app from "./app.js";
import { connectToDatabase } from "./db/connection.js"

const PORT = process.env.PORT || 4000;

//Connections and listeners
connectToDatabase().then(() => {
    app.listen(PORT, () =>
        console.log('Server started & Connnected to Database 🙃')
    );
}).catch((err) => console.log(err));
