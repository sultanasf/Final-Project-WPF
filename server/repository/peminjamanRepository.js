// Repository class for Peminjaman buku CRUD
const db = require('../config/dbConnect');

class PeminjamanRepository {
    constructor() {
        this.db = db;
    }

    async getAllPeminjaman() {
        try {
            const peminjaman = await this.db.peminjaman.findMany({
                where:{
                    DetailPeminjaman: {
                        every: {
                            Buku:{
                                deletedAt: null
                            }
                        }
                    }
                },
                select: {
                    id: true,
                    Anggota: {
                        select: {
                            id: true,
                            nama: true,
                        }
                    },
                    Petugas: {
                        select: {
                            id: true,
                            nama: true,
                        }
                    },
                    tanggalPinjam: true,
                    tanggalKembali: true,
                    DetailPeminjaman: {
                        select: {
                            Buku: {
                                select: {
                                    judul: true,
                                    pengarang: true,
                                    penerbit: true,
                                    tahun: true,
                                }
                            }
                        }
                    },
                },
            });
            return peminjaman;
        } catch (error) {
            throw error;
        }
    }

    async getPeminjamanById(id) {
        try {
            const peminjaman = await this.db.peminjaman.findUnique({
                where: {
                    id: parseInt(id)
                },
                select: {
                    id: true,
                    Anggota: {
                        select: {
                            id: true,
                            nama: true,
                        }
                    },
                    Petugas: {
                        select: {
                            id: true,
                            nama: true,
                        }
                    },
                    tanggalPinjam: true,
                    tanggalKembali: true,
                    DetailPeminjaman: {
                        select: {
                            Buku: {
                                select: {
                                    judul: true,
                                    pengarang: true,
                                    penerbit: true,
                                    tahun: true,
                                }
                            }
                        }
                    },
                },
            });
            return peminjaman;
        } catch (error) {
            throw error;
        }
    }

    async getPeminjamanByPetugasId(petugasId) {
        try {
            const peminjaman = await this.db.peminjaman.findMany({
                where: {
                    petugasId: parseInt(petugasId)
                }, select: {
                    id: true,
                    Anggota: {
                        select: {
                            nama: true,
                        }
                    },
                    Petugas: {
                        select: {
                            nama: true,
                        }
                    },
                    tanggalPinjam: true,
                    tanggalKembali: true,
                    DetailPeminjaman: {
                        select: {
                            Buku: {
                                select: {
                                    judul: true,
                                    pengarang: true,
                                    penerbit: true,
                                    tahun: true,
                                }
                            }
                        }
                    },
                },
            });
            return peminjaman;
        } catch (error) {
            throw error;
        }
    }

    async getPeminjamanByAnggotaId(anggotaId) {
        try {
            const peminjaman = await this.db.peminjaman.findMany({
                where: {
                    anggotaId: parseInt(anggotaId),
                    DetailPeminjaman: {
                        every: {
                            Buku:{
                                deletedAt: null
                            }
                        }
                    }
                }, select: {
                    id: true,
                    Anggota: {
                        select: {
                            nama: true,
                        }
                    },
                    Petugas: {
                        select: {
                            nama: true,
                        }
                    },
                    tanggalPinjam: true,
                    tanggalKembali: true,
                    DetailPeminjaman: {
                        select: {
                            Buku: {
                                select: {
                                    judul: true,
                                    pengarang: true,
                                    penerbit: true,
                                    tahun: true,
                                }
                            }
                        }
                    },
                },
            });
            return peminjaman;
        } catch (error) {
            throw error;
        }
    }

    async addNewPeminjaman(anggotaId, petugasId, tanggalPinjam) {
        try {
            const peminjaman = await this.db.peminjaman.create({
                data: {
                    anggotaId,
                    petugasId,
                    tanggalPinjam
                }
            });
            return peminjaman.id;
        } catch (error) {
            throw error;
        }
    }

    async updatePeminjaman(id, anggotaId, petugasId, tanggalKembali) {
        try {
            const peminjaman = await this.db.peminjaman.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    anggotaId: anggotaId ? parseInt(anggotaId) : undefined,
                    petugasId: petugasId ? parseInt(petugasId) : undefined,
                    tanggalKembali: tanggalKembali ? new Date(tanggalKembali) : null,
                }
            });
            return peminjaman;
        } catch (error) {
            throw error;
        }
    }

    async hardDeletePeminjaman(id) {
        try {
            const peminjaman = await this.db.peminjaman.delete({
                where: {
                    id: parseInt(id)
                }
            });
            return peminjaman;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = PeminjamanRepository;