const db = require('../config/dbConnect');
const bcrypt = require('bcrypt');

const seeder = async () => {
    // create two anggota and two petugas
    const anggota1 = await db.anggota.create({
        data: {
            nama: 'sultan',
            email: 'sultanfirdaus324@gmail.com',
            password: await bcrypt.hash('tanfi2514', 10)
        }
    });
    const anggota2 = await db.anggota.create({
        data: {
            nama: 'iza',
            email: 'irlandiza@gmail.com',
            password: await bcrypt.hash('iza123', 10)
        }
    });

    const petugas1 = await db.petugas.create({
        data: {
            nama: 'dhilah',
            email: 'fadhilahmargi171@gmail.com',
            password: await bcrypt.hash('dhilahcantik', 10)
        }
    });
    const petugas2 = await db.petugas.create({
        data: {
            nama: 'jojo',
            email: 'jojo.hiphop@gmail.com',
            password: await bcrypt.hash('jojo123', 10)
        }
    });

    // create three buku
    const buku1 = await db.buku.create({
        data: {
            judul: 'Buku 1',
            pengarang: 'Pengarang 1',
            penerbit: 'Penerbit 1',
            tahun: 2021,
        }
    });
    const buku2 = await db.buku.create({
        data: {
            judul: 'Buku 2',
            pengarang: 'Pengarang 2',
            penerbit: 'Penerbit 2',
            tahun: 2021,
        }
    });
    const buku3 = await db.buku.create({
        data: {
            judul: 'Buku 3',
            pengarang: 'Pengarang 3',
            penerbit: 'Penerbit 3',
            tahun: 2021,
        }
    });
}

seeder().then(async () => {
    console.log('Seeding success');
    await db.$disconnect();
}).catch(async (error) => {
    console.log(error);
    await db.$disconnect();
    process.exit(1);
});