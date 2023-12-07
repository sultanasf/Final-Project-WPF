const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const authRoute = require('./routes/authRoute');
const bukuRoute = require('./routes/bukuRoute');
const userRoute = require('./routes/userRoute');
const peminjamanRoute = require('./routes/peminjamanRoute');

dotenv.config();
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use('/auth', authRoute);
app.use('/buku', bukuRoute);
app.use('/user', userRoute);
app.use('/peminjaman', peminjamanRoute);

app.use((req, res) => {
    res.status(404).render('404', { url: req.url });
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Local app listening on http://localhost:${process.env.PORT || 3000}`)
});