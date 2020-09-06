//  PUERTO

process.env.PORT = process.env.PORT || 3000;

// ENTORNO

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// BASE DE DATOS    

let urlDB;

// VENCIMIENTO DEL TOKEN 
// 60 SEGUNDOS * 60 MINUTOS * 24 HORAS * 30 DIAS

process.env.CADUCIDAD_TOKEN = '48h';

// SEED DE AUTENTICACION

process.env.SEED = process.env.SEED || 'este-es-el-seed-en-desarrollo';

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// GOOGLE CLIENT ID

process.env.CLIENT_ID = process.env.CLIENT_ID || '678477810607-7jp5ggflrib7mhoiu96utp062rr8uahc.apps.googleusercontent.com';