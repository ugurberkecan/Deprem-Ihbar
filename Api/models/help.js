const mongoose = require('mongoose');



const helpSchema = new mongoose.Schema({
    name: String,
    type: {
        enum: ['Barinma', 'Yiyecek', 'Isinma', 'Diger']
    },
    city: {
        type: Object,
        enum: [
            { name: 'Hatay', districts: ['Antakya', 'Altinozu', 'Arsuz', 'Belen', 'Defne', 'Dörtyol', 'Erzin', 'Hassa', 'İskenderun', 'Kirikhan', 'Kumlu', 'Payas', 'Samandag', 'Reyhanli', 'Yayladagi'] },
            { name: 'Adana', districts: ['Aladag', 'Ceyhan', 'Cukurova', 'Feke', 'Imamoglu', 'Karaisali', 'Karatas', 'Kozan', 'Pozanti', 'Saimbeyli', 'Saricam', 'Seyhan', 'Tufanbeyli', 'Yumurtalik', 'Yuregir'] },
            { name: 'Adiyaman', districts: ["Besni", "Celikhan", "Gerger", "Kahta", "Merkez", "Golbasi", "Samsat", "Sincik", "Tut"] },
            { name: 'Diyarbakir', districts: ["Baglar", "Bismil", "Çermik", "Cinar", "Cüngüs", "Dicle", "Egil", "Ergani", "Hani", "Hazro", "Kayapinar", "Kocaköy", "Kulp", "Lice", "Su", "Silvan", "Yenisehir"] },
            { name: 'Osmaniye', districts: ["Bahce", "Düzici", "Hasanbeyli", "Kadirli", "Merkez", "Sumbas", "Toprakkale"] },
            { name: 'Gaziantep', districts: ["Oguzeli", "Sahinbey", "Yavuzeli", "Islahiye", "Nizip", "Araban", "Nurdagi", "Karkamis", "Nurdagi", "Sehitkamil"] },
            { name: 'Kilis', districts: ["Elbeyli", "Kilis", "Musabeyli", "Polateli"] },
            { name: 'Kahramanmaras', districts: ["Afsin", "Andirin", "Çağlayancerit", "Dulkadiroğlu", "Ekinözü", "Elbistan", "Göksun", "Nurhak", "Onikisubat", "Pazarcik", "Turkoglu"] },
            { name: 'Sanliurfa', districts: ["Akcakale", "Birecik", "Bozova", "Ceylanpinar", "Eyyubiye", "Halfeti", "Haliliye", "Harran", "Hilvan","Karakopru", "Siverek", "Suruc", "ViranSehir"] },
            { name: 'Malatya', districts: ["Akcadag", "Arapgir", "Arguvan", "Battalgazi", "Darende", "Dogansehir","Doganyol", "Hekimhan", "Kale", "Kuluncak", "Pütürge", "Yazihan", "Yesilyurt"] },
        ],
    },
    neighborhood: String,
    description: String,
    phoneNumber: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Help = mongoose.model('Help', helpSchema);

module.exports = Help;