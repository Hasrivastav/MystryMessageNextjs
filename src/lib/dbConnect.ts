import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?:number
}

const connection : ConnectionObject =  {}

async function dbConnect(): Promise<void>{
    if(connection.isConnected){
        console.log("already connected to database")

        try {
           const db =  await mongoose.connect(process.env.MONGODB_URI || '' , {})
         connection.isConnected =   db.connections[0].readyState
         console.log("Db Connected Successfully")
            
        } catch (error) {
            console.log("Db connection failed" , error)
            process.exit()
        }
    }

   
}
 
export  default dbConnect ;

// In a traditional backend application, the database is connected and all functions keep running from the moment the application starts. 
// However, in Next.js, the database connection and functions are managed at runtime, meaning they are set up and handled as the application is running.
// that is based on event 