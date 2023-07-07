import { MongoClient } from "mongodb";

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'penjualan';

(async () => {
    try {
        await client.connect()
        console.log('koneksi mongodb dengan native success');
    }catch (e) {
        console.log(e);
    }
})();

export const db = client.db(dbName)
