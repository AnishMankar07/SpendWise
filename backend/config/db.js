import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://anishmankar89_db_user:0qkZajaFpAjO3xtr@cluster0.qzyxdvb.mongodb.net/Expense")
        .then(() => console.log("DB Connected"))
}

// anishmankar89_db_user
// 0qkZajaFpAjO3xtr