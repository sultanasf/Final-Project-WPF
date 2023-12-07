const db = require('../../config/dbConnect');

const peminjamanSeed = async () => {
    const peminjaman1 = await db.peminjaman.create({
        data: {
            anggotaId: 1,
            petugasId: 1,
            tanggalPinjam: new Date(),
            DetailPeminjaman: {
                create: [
                    {
                        bukuId: 1,
                    },
                    {
                        bukuId: 2,
                    },
                ],
            },
        },
    });
    const peminjaman2 = await db.peminjaman.create({
        data: {
            anggotaId: 2,
            petugasId: 2,
            tanggalPinjam: new Date(),
            DetailPeminjaman: {
                create: [
                    {
                        bukuId: 3,
                    },
                ],
            },
        },
    });
}

const updatePeminjamanSeed = async () => {
    await db.peminjaman.update({
        where: {
            id: 1,
        },
        data: {
            // Iso 8601 format from this date: 2021-08-31T17:00:00.000Z
            tanggalKembali: null,
        },
    });
    await db.buku.updateMany({
        where: {
            //update buku 1 and 2
            OR: [
                {
                    id: 1,
                },
                {
                    id: 2,
                },
            ],
        },
        data: {
            siapPinjam: false,
        },
    });
}

updatePeminjamanSeed().then(async () => {
    console.log('Seeding success');
    await db.$disconnect();
}).catch(async (error) => {
    console.log(error);
    await db.$disconnect();
    process.exit(1);
});