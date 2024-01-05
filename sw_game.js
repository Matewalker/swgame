const next = document.getElementById('nextRound');
const start = document.getElementById('start');
const back = document.getElementById('back');
const ujjatek = document.getElementById('jatekujra');
const whowin = document.getElementById('kinyert');
const jatekos1kartyak1 = document.getElementById('1');
const jatekos1kartyak2 = document.getElementById('2');
const jatekos1kartyak3 = document.getElementById('3');
const jatekos1kartyak4 = document.getElementById('4');
const jatekos1kartyak5 = document.getElementById('5');
const jatekos2kartyak1 = document.getElementById('a');
const jatekos2kartyak2 = document.getElementById('b');
const jatekos2kartyak3 = document.getElementById('c');
const jatekos2kartyak4 = document.getElementById('d');
const jatekos2kartyak5 = document.getElementById('e');
const kijatszott1 = document.getElementById('kitettlap1');
const kijatszott1_2 = document.getElementById('kitettlap1_2');
const kijatszott1_3 = document.getElementById('kitettlap1_3');
const kijatszott1_4 = document.getElementById('kitettlap1_4');
const kijatszott1_5 = document.getElementById('kitettlap1_5');
const kijatszott2 = document.getElementById('kitettlap2');
const kijatszott2_2 = document.getElementById('kitettlap2_2');
const kijatszott2_3 = document.getElementById('kitettlap2_3');
const kijatszott2_4 = document.getElementById('kitettlap2_4');
const kijatszott2_5 = document.getElementById('kitettlap2_5');
var zene = document.getElementById('zene');
var kezdoido = 41 * 60 + 42;    //41:42 kor indul el a zene
zene.currentTime = kezdoido;
zene.loop = true;   //ha vége lett ismétlődik



const hatlap = document.createElement('img');
hatlap.src = "hatlap.jpg";
hatlap.alt = "hatlap";
hatlap.width = 180;
hatlap.height = 240;
const vaderkartya = document.createElement('img');
vaderkartya.src = "karakterkartyak/darthvader.jpg";
vaderkartya.alt ="vader";
vaderkartya.width = 180;
vaderkartya.height = 240;
const sidiouskartya = document.createElement('img');
sidiouskartya.src = "karakterkartyak/darthsidious.jpg";
sidiouskartya.alt = "sidious";
sidiouskartya.width = 180;
sidiouskartya.height = 240;
const tarkinkartya = document.createElement('img');
tarkinkartya.src ="karakterkartyak/tarkin.jpg";
tarkinkartya.alt = "tarkin";
tarkinkartya.width = 180;
tarkinkartya.height = 240;
const rohamosztagoskartya = document.createElement('img');
rohamosztagoskartya.src = "karakterkartyak/stromtrooper.jpg";
rohamosztagoskartya.alt = "stromtrooper";
rohamosztagoskartya.width = 180;
rohamosztagoskartya.height = 240;
const thrawnkartya = document.createElement('img');
thrawnkartya.src = "karakterkartyak/thrawn.jpg";
thrawnkartya.alt = "thrawn";
thrawnkartya.width = 180;
thrawnkartya.height = 240;
const tiepilotkartya = document.createElement('img');
tiepilotkartya.src = "karakterkartyak/tiepilot.jpg";
tiepilotkartya.alt = "tiepilot";
tiepilotkartya.width = 180;
tiepilotkartya.height = 240;
const foinkvizitorkartya = document.createElement('img');
foinkvizitorkartya.src = "karakterkartyak/foinkvizitor.jpg";
foinkvizitorkartya.alt = "foinkvizitor";
foinkvizitorkartya.width = 180;
foinkvizitorkartya.height = 240;
const royalguardkartya = document.createElement('img');
royalguardkartya.src = "karakterkartyak/royalguard.jpg";
royalguardkartya.alt = "royalguard";
royalguardkartya.width = 180;
royalguardkartya.height = 240;


const gunraykartya = document.createElement('img');
gunraykartya.src = "karakterkartyak/gunray.jpg";
gunraykartya.alt = "gunray";
gunraykartya.width = 180;
gunraykartya.height = 240;
const darthmaulkartya = document.createElement('img');
darthmaulkartya.src = "karakterkartyak/darthmaul.jpg";
darthmaulkartya.alt = "darthmaul";
darthmaulkartya.width = 180;
darthmaulkartya.height = 240;
const grievouskartya = document.createElement('img');
grievouskartya.src = "karakterkartyak/grievous.jpg";
grievouskartya.alt = "grievous";
grievouskartya.width = 180;
grievouskartya.height = 240;
const rohamdoridkartya = document.createElement('img');
rohamdoridkartya.src = "karakterkartyak/battledroid.jpg";
rohamdoridkartya.alt = "battledroid";
rohamdoridkartya.width = 180;
rohamdoridkartya.height = 240;
const wattamborkartya = document.createElement('img');
wattamborkartya.src = "karakterkartyak/wattambor.jpg";
wattamborkartya.alt = "wattambor";
wattamborkartya.width = 180;
wattamborkartya.height = 240;
const szuperrohamdroidkartya = document.createElement('img');
szuperrohamdroidkartya.src = "karakterkartyak/superbattledroid.jpg";
szuperrohamdroidkartya.alt = "szuperrohamdroid";
szuperrohamdroidkartya.width = 180;
szuperrohamdroidkartya.height = 240;
const kommandodroidkartya = document.createElement('img');
kommandodroidkartya.src = "karakterkartyak/commandodroid.jpg";
kommandodroidkartya.alt = "commandodroid";
kommandodroidkartya.width = 180;
kommandodroidkartya.height = 240;
const dookukartya = document.createElement('img');
dookukartya.src = "karakterkartyak/dooku.jpg";
dookukartya.alt = "dooku";
dookukartya.width = 180;
dookukartya.height = 240;
const droidekakartya = document.createElement('img');
droidekakartya.src = "karakterkartyak/droideka.jpg";
droidekakartya.alt = "droideka";
droidekakartya.width = 180;
droidekakartya.height = 240;
const palpatinelimitkartya = document.createElement('img');
palpatinelimitkartya.src = "karakterkartyak/palpatinelimit.jpg";
palpatinelimitkartya.alt = "palpatinelimit";
palpatinelimitkartya.width = 180;
palpatinelimitkartya.height = 240;
const magnaguardkartya = document.createElement('img');
magnaguardkartya.src = "karakterkartyak/magnaguard.jpg";
magnaguardkartya.alt = "magnaguard";
magnaguardkartya.width = 180;
magnaguardkartya.height = 240;



const kylorenkartya = document.createElement('img');
kylorenkartya.src = "karakterkartyak/kyloren.jpg"
kylorenkartya.alt = "kyloren";
kylorenkartya.width = 180;
kylorenkartya.height = 240;
const snokekartya = document.createElement('img');
snokekartya.src = "karakterkartyak/snoke.jpg";
snokekartya.alt = "snoke";
snokekartya.width = 180;
snokekartya.height = 240;
const huxkartya = document.createElement('img');
huxkartya.src = "karakterkartyak/hux.jpg";
huxkartya.alt = "hux";
huxkartya.width = 180;
huxkartya.height = 240;
const elsorendirohamosztagoskartya = document.createElement('img');
elsorendirohamosztagoskartya.src = "karakterkartyak/fostromtrooper.jpg";
elsorendirohamosztagoskartya.alt = "fostromtrooper";
elsorendirohamosztagoskartya.width = 180;
elsorendirohamosztagoskartya.height = 240;
const phasmakartya = document.createElement('img');
phasmakartya.src = "karakterkartyak/phasma.jpg"
phasmakartya.alt = "phasma";
phasmakartya.width = 180;
phasmakartya.height = 240;
const fotiepilotkartya = document.createElement('img');
fotiepilotkartya.src = "karakterkartyak/fotiepilot.jpg";
fotiepilotkartya.alt = "fotiepilot";
fotiepilotkartya.width = 180;
fotiepilotkartya.height = 240;
const kylorenlimitkartya = document.createElement('img');
kylorenlimitkartya.src = "karakterkartyak/kylorenlimit.jpg"
kylorenlimitkartya.alt = "kylorenlimit";
kylorenlimitkartya.width = 180;
kylorenlimitkartya.height = 240;
const foguardkartya = document.createElement('img');
foguardkartya.src = "karakterkartyak/foguard.jpg"
foguardkartya.alt = "foguard";
foguardkartya.width = 180;
foguardkartya.height = 240;


const lukekartya = document.createElement('img');
lukekartya.src = "karakterkartyak/lukeskywalker.jpg"
lukekartya.alt = "lukeskywalker";
lukekartya.width = 180;
lukekartya.height = 240;
const solokartya = document.createElement('img');
solokartya.src = "karakterkartyak/hansolo.jpg";
solokartya.alt = "solo";
solokartya.width = 180;
solokartya.height = 240;
const leiakartya = document.createElement('img');
leiakartya.src = "karakterkartyak/leiaorgana.jpg";
leiakartya.alt = "leiaorgana";
leiakartya.width = 180;
leiakartya.height = 240;
const chewbaccakartya = document.createElement('img');
chewbaccakartya.src = "karakterkartyak/chewbacca.jpg";
chewbaccakartya.alt = " chewbacca";
chewbaccakartya.width = 180;
chewbaccakartya.height = 240;
const r2d2kartya = document.createElement('img');
r2d2kartya.src = "karakterkartyak/r2d2.jpg";
r2d2kartya.alt = " r2d2";
r2d2kartya.width = 180;
r2d2kartya.height = 240;
const landokartya = document.createElement('img');
landokartya.src = "karakterkartyak/landocalrissian.jpg";
landokartya.alt = " landocalrissian";
landokartya.width = 180;
landokartya.height = 240;
const lazadokartya = document.createElement('img');
lazadokartya.src = "karakterkartyak/rebel.jpg";
lazadokartya.alt = "rebel";
lazadokartya.width = 180;
lazadokartya.height = 240;
const sabinekartya = document.createElement('img');
sabinekartya.src = "karakterkartyak/sabinewren.jpg";
sabinekartya.alt = "sabine";
sabinekartya.width = 180;
sabinekartya.height = 240;
const c3pokartya = document.createElement('img');
c3pokartya.src = "karakterkartyak/c3po.jpg";
c3pokartya.alt = "c3po";
c3pokartya.width = 180;
c3pokartya.height = 240;
const obiwanlimitkartya = document.createElement('img');
obiwanlimitkartya.src = "karakterkartyak/obiwanlimit.jpg";
obiwanlimitkartya.alt = "obiwanlimit";
obiwanlimitkartya.width = 180;
obiwanlimitkartya.height = 240;


const obiwankartya = document.createElement('img');
obiwankartya.src = "karakterkartyak/obiwan.jpg";
obiwankartya.alt = "obiwan";
obiwankartya.width = 180;
obiwankartya.height = 240;
const windukartya = document.createElement('img');
windukartya.src = "karakterkartyak/macewindu.jpg";
windukartya.alt = "macewindu";
windukartya.width = 180;
windukartya.height = 240;
const padmekartya = document.createElement('img');
padmekartya.src = "karakterkartyak/padmeamidala.jpg";
padmekartya.alt = "padmeamidala";
padmekartya.width = 180;
padmekartya.height = 240;
const klonkartya = document.createElement('img');
klonkartya.src = "karakterkartyak/clonekartya.jpg";
klonkartya.alt = "klon";
klonkartya.width = 180;
klonkartya.height = 240;
const yodakartya = document.createElement('img');
yodakartya.src = "karakterkartyak/yoda.jpg";
yodakartya.alt = "yoda";
yodakartya.width = 180;
yodakartya.height = 240;
const ahsokakartya = document.createElement('img');
ahsokakartya.src = "karakterkartyak/ahsokatano.jpg";
ahsokakartya.alt = "ahsoka";
ahsokakartya.width = 180;
ahsokakartya.height = 240;
const klonpilotakartya = document.createElement('img');
klonpilotakartya.src = "karakterkartyak/clonepilot.jpg";
klonpilotakartya.alt = "klonpilota";
klonpilotakartya.width = 180;
klonpilotakartya.height = 240;
const kitfistokartya = document.createElement('img');
kitfistokartya.src = "karakterkartyak/kitfisto.jpg";
kitfistokartya.alt = "kitfisto";
kitfistokartya.width = 180;
kitfistokartya.height = 240;
const anakinkartya = document.createElement('img');
anakinkartya.src = "karakterkartyak/anakinskywalker.jpg";
anakinkartya.alt = "anakin";
anakinkartya.width = 180;
anakinkartya.height = 240;
const luminarakartya = document.createElement('img');
luminarakartya.src = "karakterkartyak/luminaraunduli.jpg";
luminarakartya.alt = "luminaraunduli";
luminarakartya.width = 180;
luminarakartya.height = 240;
const plokoonkartya = document.createElement('img');
plokoonkartya.src = "karakterkartyak/plokoon.jpg";
plokoonkartya.alt = "plokoon";
plokoonkartya.width = 180;
plokoonkartya.height = 240;
const shaaktikartya = document.createElement('img');
shaaktikartya.src = "karakterkartyak/shaakti.jpg";
shaaktikartya.alt = "shaakti";
shaaktikartya.width = 180;
shaaktikartya.height = 240;
const codykartya = document.createElement('img');
codykartya.src = "karakterkartyak/cody.jpg";
codykartya.alt = "cody";
codykartya.width = 180;
codykartya.height = 240;



const poekartya = document.createElement('img');
poekartya.src = "karakterkartyak/poedameron.jpg";
poekartya.alt = "poedameron";
poekartya.width = 180;
poekartya.height = 240;
const finnkartya = document.createElement('img');
finnkartya.src = "karakterkartyak/finn.jpg";
finnkartya.alt = "finn";
finnkartya.width = 180;
finnkartya.height = 240;
const reykartya = document.createElement('img');
reykartya.src = "karakterkartyak/rey.jpg";
reykartya.alt = "rey";
reykartya.width = 180;
reykartya.height = 240;
const ellenallokartya = document.createElement('img');
ellenallokartya.src = "karakterkartyak/resistance.jpg";
ellenallokartya.alt = "resistance";
ellenallokartya.width = 180;
ellenallokartya.height = 240;
const rosekartya = document.createElement('img');
rosekartya.src = "karakterkartyak/rosetico.jpg";
rosekartya.alt = "rose";
rosekartya.width = 180;
rosekartya.height = 240;
const bb8kartya = document.createElement('img');
bb8kartya.src = "karakterkartyak/bb8.jpg";
bb8kartya.alt = "bb8";
bb8kartya.width = 180;
bb8kartya.height = 240;
const leialimitkartya = document.createElement('img');
leialimitkartya.src = "karakterkartyak/leiaorganalimit.jpg";
leialimitkartya.alt = "leialimit";
leialimitkartya.width = 180;
leialimitkartya.height = 240;
const mazkanatakartya = document.createElement('img');
mazkanatakartya.src = "karakterkartyak/mazkanata.jpg";
mazkanatakartya.alt = "mazkanata";
mazkanatakartya.width = 180;
mazkanatakartya.height = 240;


const bobafettkartya = document.createElement('img');
bobafettkartya.src = "karakterkartyak/bobafett.jpg";
bobafettkartya.alt = "bobafett";
bobafettkartya.width = 180;
bobafettkartya.height = 240;
const dindjarinkartya = document.createElement('img');
dindjarinkartya.src = "karakterkartyak/dindjarin.jpg";
dindjarinkartya.alt = "dindjarin";
dindjarinkartya.width = 180;
dindjarinkartya.height = 240;
const cadbanekartya = document.createElement('img');
cadbanekartya.src = "karakterkartyak/cadbane.jpg";
cadbanekartya.alt = "cadbane";
cadbanekartya.width = 180;
cadbanekartya.height = 240;
const fennecshandkartya = document.createElement('img');
fennecshandkartya.src = "karakterkartyak/fennecshand.jpg";
fennecshandkartya.alt = "fennecshand";
fennecshandkartya.width = 180;
fennecshandkartya.height = 240;
const greedokartya = document.createElement('img');
greedokartya.src = "karakterkartyak/greedo.jpg";
greedokartya.alt = "greedo";
greedokartya.width = 180;
greedokartya.height = 240;
const jangokartya = document.createElement('img');
jangokartya.src = "karakterkartyak/jangofett.jpg";
jangokartya.alt = "jangofett";
jangokartya.width = 180;
jangokartya.height = 240;


const tuskenkartya = document.createElement('img');
tuskenkartya.src = "karakterkartyak/tusken.jpg";
tuskenkartya.alt = "tusken";
tuskenkartya.width = 180;
tuskenkartya.height = 240;
const tuskenwarriorkartya = document.createElement('img');
tuskenwarriorkartya.src = "karakterkartyak/tuskenwarrior.jpg";
tuskenwarriorkartya.alt = "tuskenw";
tuskenwarriorkartya.width = 180;
tuskenwarriorkartya.height = 240;
const jawakartya = document.createElement('img');
jawakartya.src = "karakterkartyak/jawa.jpg";
jawakartya.alt = "jawa";
jawakartya.width = 180;
jawakartya.height = 240;
const c3polimitkartya = document.createElement('img');
c3polimitkartya.src = "karakterkartyak/c3polimit.jpg";
c3polimitkartya.alt = "c3polimit";
c3polimitkartya.width = 180;
c3polimitkartya.height = 240;


const gungankartya = document.createElement('img');
gungankartya.src = "karakterkartyak/gungan.jpg";
gungankartya.alt = "gungan";
gungankartya.width = 180;
gungankartya.height = 240;


const ewokkartya = document.createElement('img');
ewokkartya.src = "karakterkartyak/ewok.jpg";
ewokkartya.alt = "ewok";
ewokkartya.width = 180;
ewokkartya.height = 240;
const wicketkartya = document.createElement('img');
wicketkartya.src = "karakterkartyak/wicket.jpg";
wicketkartya.alt = "wicket";
wicketkartya.width = 180;
wicketkartya.height = 240;

const rodiaikartya = document.createElement('img');
rodiaikartya.src = "karakterkartyak/rodian.jpg";
rodiaikartya.alt = "rodiai";
rodiaikartya.width = 180;
rodiaikartya.height = 240;


const geonosiankartya = document.createElement('img');
geonosiankartya.src = "karakterkartyak/geonosian.jpg";
geonosiankartya.alt = "geonosian";
geonosiankartya.width = 180;
geonosiankartya.height = 240;
const pogglekartya = document.createElement('img');
pogglekartya.src = "karakterkartyak/poggle.jpg";
pogglekartya.alt = "poggle";
pogglekartya.width = 180;
pogglekartya.height = 240;

const order66kartya = document.createElement('img');
order66kartya.src = "karakterkartyak/order66.jpg";
order66kartya.alt = "order66";
order66kartya.width = 180;
order66kartya.height = 240;


class Kartya {
    constructor(elolap, ero, tipus) {
        this.elolap2 = elolap;
        this.elolap = elolap;
        this.leforditva = hatlap.cloneNode(true);
        this.ero = ero;
        this.tipus = tipus;
        this.melyikoldal = true;
    }
    kartyamegjelenes() {
        if (this.melyikoldal == true) {
            this.elolap = this.elolap2;
        } else {
            this.elolap = this.leforditva;
        }
    }
}

const akcio = "akcio";
const birodalmi = "birodalmi";
const szeparatista = "szeparatista";
const elsorend = "elsorend";
const lazadok = "lazadok"
const koztarsasag = "koztarsasag";
const ellenallok = "ellenallok";
const fejvadasz = "fejvadasz";
const tatooine = "tatooine";
const naboo = "naboo";
const endor = "endor";
const rodia = "rodia";
const geonosis = "geonosis";

//akciokartyak
const order66 = new Kartya(order66kartya,0,akcio);

//birodalmiak
const darthVader = new Kartya(vaderkartya,88,birodalmi);
const darthSidious = new Kartya(sidiouskartya,90,birodalmi);
const tarkin = new Kartya(tarkinkartya,55,birodalmi);
const rohamosztagos = new Kartya(rohamosztagoskartya,25,birodalmi);
const thrawn = new Kartya(thrawnkartya,59,birodalmi);
const tiepilot = new Kartya(tiepilotkartya,23,birodalmi);
const nagyinkvizitor = new Kartya(foinkvizitorkartya,74,birodalmi);
const royalguard = new Kartya(royalguardkartya,30,birodalmi);


//szeparatistak
const gunray = new Kartya(gunraykartya,45,szeparatista);
const darthmaul = new Kartya(darthmaulkartya,81,szeparatista);
const grievous = new Kartya(grievouskartya,80,szeparatista);
const rohamdorid = new Kartya(rohamdoridkartya,21,szeparatista);
const wattambor = new Kartya(wattamborkartya,43,szeparatista);
const szuperrohamdroid = new Kartya(szuperrohamdroidkartya,24,szeparatista);
const dooku = new Kartya(dookukartya,87,szeparatista);
const commandodroid = new Kartya(kommandodroidkartya,25,szeparatista);
const droideka = new Kartya(droidekakartya,32,szeparatista);
const palpatinelimit = new Kartya(palpatinelimitkartya,95,szeparatista);
const magnaguard = new Kartya(magnaguardkartya,33,szeparatista);


//elso rend
const kyloRen = new Kartya(kylorenkartya,83,elsorend);
const snoke = new Kartya(snokekartya,81,elsorend);
const hux = new Kartya(huxkartya,50,elsorend);
const elsorendiRohamosztagos = new Kartya(elsorendirohamosztagoskartya,26,elsorend);
const phasma = new Kartya(phasmakartya,55,elsorend);
const fotiepilot = new Kartya(fotiepilotkartya,23,elsorend);
const kyloRenLimit = new Kartya(kylorenlimitkartya,87,elsorend);
const foguard = new Kartya (foguardkartya,43,elsorend);


//lazadok
const lukeSky = new Kartya(lukekartya,85,lazadok);
const hanSolo = new Kartya(solokartya,63,lazadok);
const leiaOrgana = new Kartya(leiakartya,55,lazadok);
const chewbacca = new Kartya(chewbaccakartya,65,lazadok);
const r2d2 = new Kartya(r2d2kartya,25,lazadok);
const landoCalrissian = new Kartya(landokartya,56,lazadok);
const lazadokatona = new Kartya(lazadokartya,26,lazadok);
const sabinewren = new Kartya(sabinekartya,55,lazadok);
const c3po = new Kartya(c3pokartya,15,lazadok);
const obiwanlimit = new Kartya(obiwanlimitkartya,87,lazadok);


//koztarsasag
const obiWan = new Kartya(obiwankartya,82,koztarsasag);
const maceWindu = new Kartya(windukartya,86,koztarsasag);
const padmeamidala = new Kartya(padmekartya,54,koztarsasag);
const klon = new Kartya(klonkartya,27,koztarsasag);
const yoda = new Kartya(yodakartya,89,koztarsasag);
const ahsokaTano = new Kartya(ahsokakartya,73,koztarsasag);
const klonpilota = new Kartya(klonpilotakartya,25,koztarsasag);
const kitfisto = new Kartya(kitfistokartya,82,koztarsasag);
const anakinSky = new Kartya(anakinkartya,84,koztarsasag);
const plokoon = new Kartya(plokoonkartya,83,koztarsasag);
const luminaraunduli = new Kartya(luminarakartya,81,koztarsasag);
const shaakti = new Kartya(shaaktikartya,81,koztarsasag);
const cody = new Kartya(codykartya,37,koztarsasag);


//ellenallok
const poeDameron = new Kartya(poekartya,62,ellenallok);
const finn = new Kartya(finnkartya,60,ellenallok);
const rey = new Kartya(reykartya,84,ellenallok);
const ellenallo = new Kartya(ellenallokartya,25,ellenallok);
const rosetico = new Kartya(rosekartya,48,ellenallok);
const bb8 = new Kartya(bb8kartya,23,ellenallok);
const leiaorganalimit = new Kartya(leialimitkartya,82,ellenallok);
const mazkanata = new Kartya(mazkanatakartya,46,ellenallok);
// const ellenallopilota = new Kartya(23);


//fejvadászok
const bobafett = new Kartya(bobafettkartya,63,fejvadasz);
const dindjarin = new Kartya(dindjarinkartya,64,fejvadasz);
const cadbane = new Kartya(cadbanekartya,63,fejvadasz);
const fennecshand = new Kartya(fennecshandkartya,55,fejvadasz);
const greedo = new Kartya(greedokartya,55,fejvadasz);
const jangofett = new Kartya(jangokartya,64,fejvadasz)
// const aurrasing = new Kartya(59);
// const bossk = new Kartya(57);
// const zamwessel = new Kartya(53);


//tatooine
const tusken = new Kartya(tuskenkartya,28,tatooine);
const tuskenwarrior = new Kartya(tuskenwarriorkartya,34,tatooine);
const jawa = new Kartya(jawakartya,18,tatooine);
const c3polimit = new Kartya(c3polimitkartya,20,tatooine);

//naboo
const gungan = new Kartya(gungankartya,24,naboo);


//endor
const ewok = new Kartya(ewokkartya,20,endor);
const wicket = new Kartya(wicketkartya,23,endor);

//rodia
const rodiai = new Kartya(rodiaikartya,22,rodia);

//geonosis
const geonosisi = new Kartya(geonosiankartya,26,geonosis);
const poggle = new Kartya(pogglekartya,38,geonosis);

//kashyyyk
//mandalore
//dathomir
//utapau



const mindenKartya = [darthVader, darthSidious, tarkin, rohamosztagos, thrawn, tiepilot, nagyinkvizitor, royalguard,
                    gunray, darthmaul, grievous, rohamdorid, wattambor, szuperrohamdroid, dooku, commandodroid, droideka, palpatinelimit, magnaguard,
                    kyloRen, snoke, hux, elsorendiRohamosztagos, phasma, fotiepilot, kyloRenLimit, foguard,
                    lukeSky, hanSolo, leiaOrgana, chewbacca, r2d2, landoCalrissian, lazadokatona, sabinewren, c3po, obiwanlimit,
                    obiWan, maceWindu, padmeamidala, klon, yoda, ahsokaTano, klonpilota, kitfisto, anakinSky, plokoon, luminaraunduli, shaakti, cody,
                    poeDameron, finn, rey, ellenallo, rosetico, bb8, leiaorganalimit, mazkanata,
                    bobafett, dindjarin, cadbane, fennecshand, greedo, jangofett,
                    tusken, tuskenwarrior, jawa, c3polimit,
                    gungan,
                    ewok, wicket,
                    rodiai,
                    geonosisi, poggle,
                    order66];

let korok = 0;      //ettol fugg hogy meddig tart a jatek, a kovetkezo fuggvenyben hasznalom
let fordulo = 0;    //ettol fugg hogy meddig tart egy kor, a kovetkezo fuggvenyben hasznalom
let jatekos1Pont = 0;   //pontszamlalo fuggvenyben hasznalom textcontent-kent es a kovetkezo fuggvenyben ez mutatja meg ki nyer
let jatekos2Pont = 0;

let kitettlap1 = 0;     //ezek jelzik hogy hany lapot raktunk ki es taroljak a teljes kartya osztalyt
let kitettlap1_2 = 0;
let kitettlap1_3 = 0;
let kitettlap1_4 = 0;
let kitettlap1_5 = 0;
let kitettero1 = 0;     //a kitett lapok erejenek osszege
let lehetoseg1 = 1;     //megmutatja hogy hany kartyat van lehetosege kirakni a jatekosnak
let valaszthato1 = [];   //valaszthatova teszi az azonos tipusu kartya
let valaszthato1_2 = [];
let valaszthato1_3 = []; 
let valaszthato1_4 = [];

let kitettlap2 = 0;
let kitettlap2_2 = 0;
let kitettlap2_3 = 0;
let kitettlap2_4 = 0;
let kitettlap2_5 = 0;
let kitettero2 = 0;
let lehetoseg2 = 1;
let valaszthato2 = [];
let valaszthato2_2 = [];
let valaszthato2_3 = []; 
let valaszthato2_4 = [];

let rakott1 = 1;    //tarolja, hogy mennyi kartyat rakott le a jatekos
let rakott2 = 1;
let cards1 = [];    //ebben a tombben egesz osztalyt tartalmazo valtozok vannak, amik taroljak a kartyak minden adatat, ezeknek az erejevel ertekelunk es az elolapjat jelenitjuk meg
let cards2 = [];

let kivkartyaindex1 = -1;   //azok az indexek melyeket a kartyara kattintaskor kapunk es a randomKartyak fuggveny ez alapjan oszt masik kartyat az kitett kartya indexenek a helyere
let kivkartyaindex1_2 = -1;
let kivkartyaindex1_3 = -1;
let kivkartyaindex1_4 = -1;
let kivkartyaindex1_5 = -1;
let kivkartyaindex2 = -1;
let kivkartyaindex2_2 = -1;
let kivkartyaindex2_3 = -1;
let kivkartyaindex2_4 = -1;
let kivkartyaindex2_5 = -1;

//random indexek generálása
function keveres(tomb, count) {

    const keveres = tomb.slice();
    let i = tomb.length;
    const min = i - count;
    while (i-- > min) {
        const index = Math.floor((i + 1) * Math.random());
        const temp = keveres[index];
        keveres[index] = keveres[i];
        keveres[i] = temp;
    }
    return keveres.slice(min);
}

//megkeveri az osszes kartyat ami a tombbe van
const pakli = keveres(mindenKartya, mindenKartya.length);

// random 5 lap
function randomKartyak1(x,hely) {
    pakli.forEach((index, i) => {

        if (i < x) {
            if(hely == -1){
                cards1[i] = pakli[0];
                pakli.splice(0, 1);
            }
            else{
                cards1[hely] = pakli[0];
                pakli.splice(0, 1);
            }
        }
    });
}

function randomKartyak2(x,hely) {
    pakli.forEach((index, i) => {

        if (i < x) {
            if(hely == -1){
                cards2[i] = pakli[0];
                pakli.splice(0, 1);
            }
            else{
                cards2[hely] = pakli[0];
                pakli.splice(0, 1);
            }
        }
    });
}

function elemekhozzaadasa1(){
    cards1[0].kartyamegjelenes()
    cards1[1].kartyamegjelenes()
    cards1[2].kartyamegjelenes()
    cards1[3].kartyamegjelenes()
    cards1[4].kartyamegjelenes()
    jatekos1kartyak1.appendChild(cards1[0].elolap);
    jatekos1kartyak2.appendChild(cards1[1].elolap);
    jatekos1kartyak3.appendChild(cards1[2].elolap);
    jatekos1kartyak4.appendChild(cards1[3].elolap);
    jatekos1kartyak5.appendChild(cards1[4].elolap);
}

function elemekhozzaadasa2(){
    cards2[0].kartyamegjelenes()
    cards2[1].kartyamegjelenes()
    cards2[2].kartyamegjelenes()
    cards2[3].kartyamegjelenes()
    cards2[4].kartyamegjelenes()
    jatekos2kartyak1.appendChild(cards2[0].elolap);
    jatekos2kartyak2.appendChild(cards2[1].elolap);
    jatekos2kartyak3.appendChild(cards2[2].elolap);
    jatekos2kartyak4.appendChild(cards2[3].elolap);
    jatekos2kartyak5.appendChild(cards2[4].elolap);
}

function elemekelvetele1(){
    jatekos1kartyak1.removeChild(cards1[0].elolap);
    jatekos1kartyak2.removeChild(cards1[1].elolap);
    jatekos1kartyak3.removeChild(cards1[2].elolap);
    jatekos1kartyak4.removeChild(cards1[3].elolap);
    jatekos1kartyak5.removeChild(cards1[4].elolap);
}

function elemekelvetele2(){
    jatekos2kartyak1.removeChild(cards2[0].elolap);
    jatekos2kartyak2.removeChild(cards2[1].elolap);
    jatekos2kartyak3.removeChild(cards2[2].elolap);
    jatekos2kartyak4.removeChild(cards2[3].elolap);
    jatekos2kartyak5.removeChild(cards2[4].elolap);
}

function kitettlapokmegjelenites(){
    if(rakott1 == 1){
        kijatszott1.appendChild(kitettlap1.elolap);
    }
    if(rakott1 == 2){
        kijatszott1.appendChild(kitettlap1.elolap);
        kijatszott1_2.appendChild(kitettlap1_2.elolap);
    }
    if(rakott1 == 3){
        kijatszott1.appendChild(kitettlap1.elolap);
        kijatszott1_2.appendChild(kitettlap1_2.elolap);
        kijatszott1_3.appendChild(kitettlap1_3.elolap);
    }
    if(rakott1 == 4){
        kijatszott1.appendChild(kitettlap1.elolap);
        kijatszott1_2.appendChild(kitettlap1_2.elolap);
        kijatszott1_3.appendChild(kitettlap1_3.elolap);
        kijatszott1_4.appendChild(kitettlap1_4.elolap);
    }
    if(rakott1 == 5){
        kijatszott1.appendChild(kitettlap1.elolap);
        kijatszott1_2.appendChild(kitettlap1_2.elolap);
        kijatszott1_3.appendChild(kitettlap1_3.elolap);
        kijatszott1_4.appendChild(kitettlap1_4.elolap);
        kijatszott1_5.appendChild(kitettlap1_5.elolap);
    }


    if(rakott2 == 1){
        kijatszott2.appendChild(kitettlap2.elolap);
    }
    if(rakott2 == 2){
        kijatszott2.appendChild(kitettlap2.elolap);
        kijatszott2_2.appendChild(kitettlap2_2.elolap);
    }
    if(rakott2 == 3){
        kijatszott2.appendChild(kitettlap2.elolap);
        kijatszott2_2.appendChild(kitettlap2_2.elolap);
        kijatszott2_3.appendChild(kitettlap2_3.elolap);
    }
    if(rakott2 == 4){
        kijatszott2.appendChild(kitettlap2.elolap);
        kijatszott2_2.appendChild(kitettlap2_2.elolap);
        kijatszott2_3.appendChild(kitettlap2_3.elolap);
        kijatszott2_4.appendChild(kitettlap2_4.elolap);
    }
    if(rakott2 == 5){
        kijatszott2.appendChild(kitettlap2.elolap);
        kijatszott2_2.appendChild(kitettlap2_2.elolap);
        kijatszott2_3.appendChild(kitettlap2_3.elolap);
        kijatszott2_4.appendChild(kitettlap2_4.elolap);
        kijatszott2_5.appendChild(kitettlap2_5.elolap);
    }
}

function kitettlapeltuntetese(){
    if(rakott1 == 1){
        kijatszott1.removeChild(kitettlap1.elolap);
    }
    if(rakott1 == 2){
        kijatszott1.removeChild(kitettlap1.elolap);
        kijatszott1_2.removeChild(kitettlap1_2.elolap);
    }
    if(rakott1 == 3){
        kijatszott1.removeChild(kitettlap1.elolap);
        kijatszott1_2.removeChild(kitettlap1_2.elolap);
        kijatszott1_3.removeChild(kitettlap1_3.elolap);
    }
    if(rakott1 == 4){
        kijatszott1.removeChild(kitettlap1.elolap);
        kijatszott1_2.removeChild(kitettlap1_2.elolap);
        kijatszott1_3.removeChild(kitettlap1_3.elolap);
        kijatszott1_4.removeChild(kitettlap1_4.elolap);
    }
    if(rakott1 == 5){
        kijatszott1.removeChild(kitettlap1.elolap);
        kijatszott1_2.removeChild(kitettlap1_2.elolap);
        kijatszott1_3.removeChild(kitettlap1_3.elolap);
        kijatszott1_4.removeChild(kitettlap1_4.elolap);
        kijatszott1_5.removeChild(kitettlap1_5.elolap);
    }


    if(rakott2 == 1){
        kijatszott2.removeChild(kitettlap2.elolap);
    }
    if(rakott2 == 2){
        kijatszott2.removeChild(kitettlap2.elolap);
        kijatszott2_2.removeChild(kitettlap2_2.elolap);
    }
    if(rakott2 == 3){
        kijatszott2.removeChild(kitettlap2.elolap);
        kijatszott2_2.removeChild(kitettlap2_2.elolap);
        kijatszott2_3.removeChild(kitettlap2_3.elolap);
    }
    if(rakott2 == 4){
        kijatszott2.removeChild(kitettlap2.elolap);
        kijatszott2_2.removeChild(kitettlap2_2.elolap);
        kijatszott2_3.removeChild(kitettlap2_3.elolap);
        kijatszott2_4.removeChild(kitettlap2_4.elolap);
    }
    if(rakott2 == 5){
        kijatszott2.removeChild(kitettlap2.elolap);
        kijatszott2_2.removeChild(kitettlap2_2.elolap);
        kijatszott2_3.removeChild(kitettlap2_3.elolap);
        kijatszott2_4.removeChild(kitettlap2_4.elolap);
        kijatszott2_5.removeChild(kitettlap2_5.elolap);
    }
}

function jatekmenet() {
    start.style.display = "none";
    megjelenesek();
    pontSzamlalo();
}

function megjelenesek() {
    next.style.display = "flex";
    back.style.display = "flex";
}

function pontSzamlalo() {
    const jatekos1pontok = document.getElementById('pontok1');
    jatekos1pontok.style.display = "block";
    const jatekos1pontszamlalomegjelenes = document.getElementById('jatekos1pontok');
    jatekos1pontszamlalomegjelenes.textContent = jatekos1Pont;
    jatekos1pontszamlalomegjelenes.style.display = "block";
    const jatekos2pontok = document.getElementById('pontok2');
    jatekos2pontok.style.display = "block";
    const jatekos2pontszamlalomegjelenes = document.getElementById('jatekos2pontok');
    jatekos2pontszamlalomegjelenes.textContent = jatekos2Pont;
    jatekos2pontszamlalomegjelenes.style.display = "block";
}

function kiirasok(){
    if(korok < 13){
        if(kitettlap1.tipus == kitettlap2.tipus){
            whowin.textContent = "Azonos típús miatt döntetlen!";
        }
        if(kitettlap1.tipus != kitettlap2.tipus){
            if (kitettero1 > kitettero2) {
                whowin.textContent = "Első játékos nyert!";
            }
            if (kitettero2 > kitettero1) {
                whowin.textContent = "Második játékos nyert!";
            }
            if (kitettero1 == kitettero2) {
                whowin.textContent = "Döntetlen!";
            }
        }
        whowin.style.display = "block";
    }
    if(korok == 13 && fordulo % 5 == 0){
        if (jatekos1Pont > jatekos2Pont) {
            whowin.textContent = "A csatát az első játékos nyerte!"
        }
        if (jatekos2Pont > jatekos1Pont) {
            whowin.textContent = "A csatát a második játékos nyerte!"
        }
        if (jatekos2Pont == jatekos1Pont){
            whowin.textContent = "A csatának nincs nyertese!"
        }
        whowin.style.display = "block";
    }
    if(korok == 13 && fordulo % 5 == 1){
        whowin.textContent = "Kezdejetek el újabb csatát!";
    }
}

function kovetkezo() {
    fordulo++;
    if (fordulo == 1){
        randomKartyak1(5,-1);
        randomKartyak2(5,-1);
    }
    if (fordulo % 5 == 1) {
        cards1[0].elolap.style.display = 'block';
        cards1[1].elolap.style.display = 'block';
        cards1[2].elolap.style.display = 'block';
        cards1[3].elolap.style.display = 'block';
        cards1[4].elolap.style.display = 'block';
        cards2[0].elolap.style.display = 'block';
        cards2[1].elolap.style.display = 'block';
        cards2[2].elolap.style.display = 'block';
        cards2[3].elolap.style.display = 'block';
        cards2[4].elolap.style.display = 'block';
        whowin.style.display = "none";
        elsojatekosKor();
    }
    if(fordulo % 5 ==2){
        lapforditas1();
    }
    if (fordulo % 5 == 3) {
        masodikjatekosKor();
    }
    if (fordulo % 5 == 4) {
        lapforditas2();
    }
    if (fordulo % 5 == 0) {
        kitettlapokmegjelenites();
        plusszPont();
        pontSzamlalo();
        cards1[0].elolap.style.display = 'none';
        cards1[1].elolap.style.display = 'none';
        cards1[2].elolap.style.display = 'none';
        cards1[3].elolap.style.display = 'none';
        cards1[4].elolap.style.display = 'none';
        cards2[0].elolap.style.display = 'none';
        cards2[1].elolap.style.display = 'none';
        cards2[2].elolap.style.display = 'none';
        cards2[3].elolap.style.display = 'none';
        cards2[4].elolap.style.display = 'none';
        korok++;
        kiirasok();
        if (korok == 13) {
            elemekelvetele1();
            elemekelvetele2();
        }
    }
}



function elsojatekosKor() {
    //megfordulnak az egyes játékos lapjai
    lehetoseg1 = 1;
    if( korok >= 1){
        elemekelvetele1();
        kitettlapeltuntetese();
        kitettlap1 = 0;
        kitettlap1_2 = 0;
        kitettlap1_3 = 0;
        kitettlap1_4 = 0;
        kitettlap1_5 = 0;
        kitettlap2 = 0;
    }
    rakott1 = 0;
    for(let i = 0; i < cards1.length; i++){
        cards1[i].melyikoldal = true;
    }

    elemekhozzaadasa1();

    //kirakhat egy kartyat
    jatekos1kartyak1.addEventListener("click", () => {
        if(fordulo % 5 == 1){
            if(cards1[0].tipus == akcio){
                akciokartya1_0();
            }
            if(cards1[0].tipus != akcio){
                //indexOf-fal megnézzük, hogy az elemet nem tartalmazza a tömb
                if(lehetoseg1 == 1 || (lehetoseg1 >= 2 && valaszthato1.indexOf(cards1[0]) === -1 && valaszthato1_2.indexOf(cards1[0]) === -1 && valaszthato1_3.indexOf(cards1[0]) === -1 && valaszthato1_4.indexOf(cards1[0]) === -1)){
                    alapeset1_0();
                }
                //ha mar egy kartyat kitettek es azonos a tipusa a 0. kartyaval es ranyomtam
                if(lehetoseg1 == 2 && valaszthato1.includes(cards1[0])){
                    kitettlap1_2 = cards1[0];
                    kivkartyaindex1_2 = 0;
                    rakott1 = 2;
                    valaszthato1_2 = [];
                    valaszthato1_3 = [];
                    valaszthato1_4 = [];
                    cards1[0].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 1; i < 5; i++){
                        if(cards1[kivkartyaindex1_2].tipus == cards1[i].tipus && cards1[i] != kitettlap1){
                            lehetoseg1 = 3;
                            cards1[i].elolap.style.border = '4px solid #a91a1a';
                            valaszthato1_2.push(cards1[i]);
                        }
                    }
                }
                if(lehetoseg1 == 3 && valaszthato1_2.includes(cards1[0])){
                    kitettlap1_3 = cards1[0];
                    kivkartyaindex1_3 = 0;
                    rakott1 = 3;
                    valaszthato1_3 = [];
                    valaszthato1_4 = [];
                    cards1[0].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 1; i < 5; i++){
                        if(cards1[kivkartyaindex1_3].tipus == cards1[i].tipus && cards1[i] != kitettlap1 && cards1[i] != kitettlap1_2){
                            lehetoseg1 = 4;
                            cards1[i].elolap.style.border = '4px solid #a91a1a';
                            valaszthato1_3.push(cards1[i]);
                        }
                    }
                }
                if(lehetoseg1 == 4 && valaszthato1_3.includes(cards1[0])){
                    kitettlap1_4 = cards1[0];
                    kivkartyaindex1_4 = 0;
                    rakott1 = 4;
                    valaszthato1_4 = [];
                    cards1[0].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 1; i < 5; i++){
                        if(cards1[kivkartyaindex1_4].tipus == cards1[i].tipus && cards1[i] != kitettlap1 && cards1[i] != kitettlap1_2 && cards1[i] != kitettlap1_3){
                            lehetoseg1 = 5;
                            cards1[i].elolap.style.border = '4px solid #a91a1a';
                            valaszthato1_4.push(cards1[i]);
                        }
                    }
                }
                if(lehetoseg1 == 5 && valaszthato1_4.includes(cards1[0])){
                    kitettlap1_5 = cards1[0];
                    kivkartyaindex1_5 = 0;
                    rakott1 = 5;
                    cards1[0].elolap.style.border = '4px solid #07cbd8';
                }
            }

        }
    });

    jatekos1kartyak2.addEventListener("click", () => {
        if(fordulo % 5 == 1){
            if(cards1[1].tipus == akcio){
                akciokartya1_1();
            }
            if(cards1[1].tipus != akcio){
                if(lehetoseg1 == 1 || (lehetoseg1 >= 2 && valaszthato1.indexOf(cards1[1]) === -1 && valaszthato1_2.indexOf(cards1[1]) === -1 && valaszthato1_3.indexOf(cards1[1]) === -1 && valaszthato1_4.indexOf(cards1[1]) === -1)){
                    alapeset1_1();
                }
                if(lehetoseg1 == 2 && valaszthato1.includes(cards1[1])){
                    kitettlap1_2 = cards1[1];
                    kivkartyaindex1_2 = 1;
                    rakott1 = 2;
                    valaszthato1_2 = [];
                    valaszthato1_3 = [];
                    valaszthato1_4 = [];
                    cards1[1].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 0; i < 5; i++){
                        if(i != kivkartyaindex1_2){
                            if(cards1[kivkartyaindex1_2].tipus == cards1[i].tipus && cards1[i] != kitettlap1){
                                lehetoseg1 = 3;
                                cards1[i].elolap.style.border = '4px solid #a91a1a';
                                valaszthato1_2.push(cards1[i]);
                            }
                        }
                    }
                }
                if(lehetoseg1 == 3 && valaszthato1_2.includes(cards1[1])){
                    kitettlap1_3 = cards1[1];
                    kivkartyaindex1_3 = 1;
                    rakott1 = 3;
                    valaszthato1_3 = [];
                    valaszthato1_4 = [];
                    cards1[1].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 0; i < 5; i++){
                        if(i != kivkartyaindex1_3){
                            if(cards1[kivkartyaindex1_3].tipus == cards1[i].tipus && cards1[i] != kitettlap1 && cards1[i] != kitettlap1_2){
                                lehetoseg1 = 4;
                                cards1[i].elolap.style.border = '4px solid #a91a1a';
                                valaszthato1_3.push(cards1[i]);
                            }
                        }
                    }
                }
                if(lehetoseg1 == 4 && valaszthato1_3.includes(cards1[1])){
                    kitettlap1_4 = cards1[1];
                    kivkartyaindex1_4 = 1;
                    rakott1 = 4;
                    valaszthato1_4 = [];
                    cards1[1].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 0; i < 5; i++){
                        if(i != kivkartyaindex1_4){
                            if(cards1[kivkartyaindex1_4].tipus == cards1[i].tipus && cards1[i] != kitettlap1 && cards1[i] != kitettlap1_2 && cards1[i] != kitettlap1_3){
                                lehetoseg1 = 5;
                                cards1[i].elolap.style.border = '4px solid #a91a1a';
                                valaszthato1_4.push(cards1[i]);
                            }
                        }
                    }
                }
                if(lehetoseg1 == 5 && valaszthato1_4.includes(cards1[1])){
                    kitettlap1_5 = cards1[1];
                    kivkartyaindex1_5 = 1;
                    rakott1 = 5;
                    cards1[1].elolap.style.border = '4px solid #07cbd8';
                }
            }
        }
    });
    
    jatekos1kartyak3.addEventListener("click", () => {
        if(fordulo % 5 == 1){
            if(cards1[2].tipus == akcio){
                akciokartya1_2();
            }
            if(cards1[2].tipus != akcio){
                if(lehetoseg1 == 1 || (lehetoseg1 >= 2 && valaszthato1.indexOf(cards1[2]) === -1 && valaszthato1_2.indexOf(cards1[2]) === -1 && valaszthato1_3.indexOf(cards1[2]) === -1 && valaszthato1_4.indexOf(cards1[2]) === -1)){
                    alapeset1_2();
                }
                if(lehetoseg1 == 2 && valaszthato1.includes(cards1[2])){
                    kitettlap1_2 = cards1[2];
                    kivkartyaindex1_2 = 2;
                    rakott1 = 2;
                    valaszthato1_2 = [];
                    valaszthato1_3 = [];
                    valaszthato1_4 = [];
                    cards1[2].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 0; i < 5; i++){
                        if(i != kivkartyaindex1_2){
                            if(cards1[kivkartyaindex1_2].tipus == cards1[i].tipus && cards1[i] != kitettlap1){
                                lehetoseg1 = 3;
                                cards1[i].elolap.style.border = '4px solid #a91a1a';
                                valaszthato1_2.push(cards1[i]);
                            }
                        }
                    }
                }
                if(lehetoseg1 == 3 && valaszthato1_2.includes(cards1[2])){
                    kitettlap1_3 = cards1[2];
                    kivkartyaindex1_3 = 2;
                    rakott1 = 3;
                    valaszthato1_3 = [];
                    valaszthato1_4 = [];
                    cards1[2].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 0; i < 5; i++){
                        if(i != kivkartyaindex1_3){
                            if(cards1[kivkartyaindex1_3].tipus == cards1[i].tipus && cards1[i] != kitettlap1 && cards1[i] != kitettlap1_2){
                                lehetoseg1 = 4;
                                cards1[i].elolap.style.border = '4px solid #a91a1a';
                                valaszthato1_3.push(cards1[i]);
                            }
                        }
                    }
                }
                if(lehetoseg1 == 4 && valaszthato1_3.includes(cards1[2])){
                    kitettlap1_4 = cards1[2];
                    kivkartyaindex1_4 = 2;
                    rakott1 = 4;
                    valaszthato1_4 = [];
                    cards1[2].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 0; i < 5; i++){
                        if(i != kivkartyaindex1_4){
                            if(cards1[kivkartyaindex1_4].tipus == cards1[i].tipus && cards1[i] != kitettlap1 && cards1[i] != kitettlap1_2 && cards1[i] != kitettlap1_3){
                                lehetoseg1 = 5;
                                cards1[i].elolap.style.border = '4px solid #a91a1a';
                                valaszthato1_4.push(cards1[i]);
                            }
                        }
                    }
                }
                if(lehetoseg1 == 5 && valaszthato1_4.includes(cards1[2])){
                    kitettlap1_5 = cards1[2];
                    kivkartyaindex1_5 = 2;
                    rakott1 = 5;
                    cards1[2].elolap.style.border = '4px solid #07cbd8';
                }
            }
        }
    });
    
    jatekos1kartyak4.addEventListener("click", () => {
        if(fordulo % 5 == 1){
            if(cards1[3].tipus == akcio){
                akciokartya1_3();
            }
            if(cards1[3].tipus != akcio){
                if(lehetoseg1 == 1 || (lehetoseg1 >= 2 && valaszthato1.indexOf(cards1[3]) === -1 && valaszthato1_2.indexOf(cards1[3]) === -1 && valaszthato1_3.indexOf(cards1[3]) === -1 && valaszthato1_4.indexOf(cards1[3]) === -1)){
                    alapeset1_3();
                }
                if(lehetoseg1 == 2 && valaszthato1.includes(cards1[3])){
                    kitettlap1_2 = cards1[3];
                    kivkartyaindex1_2 = 3;
                    rakott1 = 2;
                    valaszthato1_2 = [];
                    valaszthato1_3 = [];
                    valaszthato1_4 = [];
                    cards1[3].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 0; i < 5; i++){
                        if(i != kivkartyaindex1_2){
                            if(cards1[kivkartyaindex1_2].tipus == cards1[i].tipus && cards1[i] != kitettlap1){
                                lehetoseg1 = 3;
                                cards1[i].elolap.style.border = '4px solid #a91a1a';
                                valaszthato1_2.push(cards1[i]);
                            }
                        }
                    }
                }
                if(lehetoseg1 == 3 && valaszthato1_2.includes(cards1[3])){
                    kitettlap1_3 = cards1[3];
                    kivkartyaindex1_3 = 3;
                    rakott1 = 3;
                    valaszthato1_3 = [];
                    valaszthato1_4 = [];
                    cards1[3].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 0; i < 5; i++){
                        if(i != kivkartyaindex1_3){
                            if(cards1[kivkartyaindex1_3].tipus == cards1[i].tipus && cards1[i] != kitettlap1 && cards1[i] != kitettlap1_2){
                                lehetoseg1 = 4;
                                cards1[i].elolap.style.border = '4px solid #a91a1a';
                                valaszthato1_3.push(cards1[i]);
                            }
                        }
                    }
                }
                if(lehetoseg1 == 4 && valaszthato1_3.includes(cards1[3])){
                    kitettlap1_4 = cards1[3];
                    kivkartyaindex1_4 = 3;
                    rakott1 = 4;
                    valaszthato1_4 = [];
                    cards1[3].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 0; i < 5; i++){
                        if(i != kivkartyaindex1_4){
                            if(cards1[kivkartyaindex1_4].tipus == cards1[i].tipus && cards1[i] != kitettlap1 && cards1[i] != kitettlap1_2 && cards1[i] != kitettlap1_3){
                                lehetoseg1 = 5;
                                cards1[i].elolap.style.border = '4px solid #a91a1a';
                                valaszthato1_4.push(cards1[i]);
                            }
                        }
                    }
                }
                if(lehetoseg1 == 5 && valaszthato1_4.includes(cards1[3])){
                    kitettlap1_5 = cards1[3];
                    kivkartyaindex1_5 = 3;
                    rakott1 = 5;
                    cards1[3].elolap.style.border = '4px solid #07cbd8';
                }
            }
        }
    });
    
    jatekos1kartyak5.addEventListener("click", () => {
        if(fordulo % 5 == 1){
            if(cards1[4].tipus == akcio){
                akciokartya1_4();
            }
            if(cards1[4].tipus != akcio){
                if(lehetoseg1 == 1 || (lehetoseg1 >= 2 && valaszthato1.indexOf(cards1[4]) === -1 && valaszthato1_2.indexOf(cards1[4]) === -1 && valaszthato1_3.indexOf(cards1[4]) === -1 && valaszthato1_4.indexOf(cards1[4]) === -1)){
                    alapeset1_4();
                }
                if(lehetoseg1 == 2 && valaszthato1.includes(cards1[4])){
                    kitettlap1_2 = cards1[4];
                    kivkartyaindex1_2 = 4;
                    rakott1 = 2;
                    valaszthato1_2 = [];
                    valaszthato1_3 = [];
                    valaszthato1_4 = [];
                    cards1[4].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 0; i < 5; i++){
                        if(i != kivkartyaindex1_2){
                            if(cards1[kivkartyaindex1_2].tipus == cards1[i].tipus && cards1[i] != kitettlap1){
                                lehetoseg1 = 3;
                                cards1[i].elolap.style.border = '4px solid #a91a1a';
                                valaszthato1_2.push(cards1[i]);
                            }
                        }
                    }
                }
                if(lehetoseg1 == 3 && valaszthato1_2.includes(cards1[4])){
                    kitettlap1_3 = cards1[4];
                    kivkartyaindex1_3 = 4;
                    rakott1 = 3;
                    valaszthato1_3 = [];
                    valaszthato1_4 = [];
                    cards1[4].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 0; i < 5; i++){
                        if(i != kivkartyaindex1_3){
                            if(cards1[kivkartyaindex1_3].tipus == cards1[i].tipus && cards1[i] != kitettlap1 && cards1[i] != kitettlap1_2){
                                lehetoseg1 = 4;
                                cards1[i].elolap.style.border = '4px solid #a91a1a';
                                valaszthato1_3.push(cards1[i]);
                            }
                        }
                    }
                }
                if(lehetoseg1 == 4 && valaszthato1_3.includes(cards1[4])){
                    kitettlap1_4 = cards1[4];
                    kivkartyaindex1_4 = 4;
                    rakott1 = 4;
                    valaszthato1_4 = [];
                    cards1[4].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 0; i < 5; i++){
                        if(i != kivkartyaindex1_4){
                            if(cards1[kivkartyaindex1_4].tipus == cards1[i].tipus && cards1[i] != kitettlap1 && cards1[i] != kitettlap1_2 && cards1[i] != kitettlap1_3){
                                lehetoseg1 = 5;
                                cards1[i].elolap.style.border = '4px solid #a91a1a';
                                valaszthato1_4.push(cards1[i]);
                            }
                        }
                    }
                }
                if(lehetoseg1 == 5 && valaszthato1_4.includes(cards1[4])){
                    kitettlap1_5 = cards1[4];
                    kivkartyaindex1_5 = 4;
                    rakott1 = 5;
                    cards1[4].elolap.style.border = '4px solid #07cbd8';
                }
            }
        }
    });
}

function lapforditas1() {
    if(rakott1 == 1){
        kitettero1 = kitettlap1.ero;
    }
    if(rakott1 == 2){
        kitettero1 = kitettlap1.ero + kitettlap1_2.ero;
    }
    if(rakott1 == 3){
        kitettero1 = kitettlap1.ero + kitettlap1_2.ero + kitettlap1_3.ero;
    }
    if(rakott1 == 4){
        kitettero1 = kitettlap1.ero + kitettlap1_2.ero + kitettlap1_3.ero + kitettlap1_4.ero;
    }
    cards1[0].elolap.style.border = 'none';
    cards1[1].elolap.style.border = 'none';
    cards1[2].elolap.style.border = 'none';
    cards1[3].elolap.style.border = 'none';
    cards1[4].elolap.style.border = 'none';

    elemekelvetele1();
    if(rakott1 == 1){
        randomKartyak1(1,kivkartyaindex1);
    }
    if(rakott1 == 2){
        randomKartyak1(1,kivkartyaindex1);
        randomKartyak1(1,kivkartyaindex1_2);
    }
    if(rakott1 == 3){
        randomKartyak1(1,kivkartyaindex1);
        randomKartyak1(1,kivkartyaindex1_2);
        randomKartyak1(1,kivkartyaindex1_3);
    }
    if(rakott1 == 4){
        randomKartyak1(1,kivkartyaindex1);
        randomKartyak1(1,kivkartyaindex1_2);
        randomKartyak1(1,kivkartyaindex1_3);
        randomKartyak1(1,kivkartyaindex1_4);
    }
    if(rakott1 == 5){
        randomKartyak1(1,kivkartyaindex1);
        randomKartyak1(1,kivkartyaindex1_2);
        randomKartyak1(1,kivkartyaindex1_3);
        randomKartyak1(1,kivkartyaindex1_4);
        randomKartyak1(1,kivkartyaindex1_5);
    }

    for(let i = 0; i < cards1.length; i++){
        cards1[i].melyikoldal = false;
    }

    elemekhozzaadasa1();
}

function masodikjatekosKor() {
    //megfordulnak a kettes játékos lapjai
    rakott2 = 0;
    lehetoseg2 = 1;
    if( korok >= 1){
        elemekelvetele2();
        kitettlap2_2 = 0;
        kitettlap2_3 = 0;
        kitettlap2_4 = 0;
        kitettlap2_5 = 0;

    }

    for(let i = 0; i < cards2.length; i++){
        cards2[i].melyikoldal = true;
    }

    elemekhozzaadasa2();

    //kirakhat egy kartyat
    jatekos2kartyak1.addEventListener("click", () => {
        if(fordulo % 5 == 3){
            if(cards2[0].tipus == akcio){
                akciokartya2_0();
            }
            if(cards2[0].tipus != akcio){
                if(lehetoseg2 == 1 || (lehetoseg2 >= 2 && valaszthato2.indexOf(cards2[0]) === -1 && valaszthato2_2.indexOf(cards2[0]) === -1 && valaszthato2_3.indexOf(cards2[0]) === -1 && valaszthato2_4.indexOf(cards2[0]) === -1)){
                    alapeset2_0();
                }
                if(lehetoseg2 == 2 && valaszthato2.includes(cards2[0])){
                    kitettlap2_2 = cards2[0];
                    kivkartyaindex2_2 = 0;
                    rakott2 = 2;
                    valaszthato2_2 = [];
                    valaszthato2_3 = [];
                    valaszthato2_4 = [];
                    cards2[0].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 1; i < 5; i++){
                        if(cards2[kivkartyaindex2_2].tipus == cards2[i].tipus && cards2[i] != kitettlap2){
                            lehetoseg2 = 3;
                            cards2[i].elolap.style.border = '4px solid #a91a1a';
                            valaszthato2_2.push(cards2[i]);
                        }
                    }
                }
                if(lehetoseg2 == 3 && valaszthato2_2.includes(cards2[0])){
                    kitettlap2_3 = cards2[0];
                    kivkartyaindex2_3 = 0;
                    rakott2 = 3;
                    valaszthato2_3 = [];
                    valaszthato2_4 = [];
                    cards2[0].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 1; i < 5; i++){
                        if(cards2[kivkartyaindex2_3].tipus == cards2[i].tipus && cards2[i] != kitettlap2 && cards2[i] != kitettlap2_2){
                            lehetoseg2 = 4;
                            cards2[i].elolap.style.border = '4px solid #a91a1a';
                            valaszthato2_3.push(cards2[i]);
                        }
                    }
                }
                if(lehetoseg2 == 4 && valaszthato2_3.includes(cards2[0])){
                    kitettlap2_4 = cards2[0];
                    kivkartyaindex2_4 = 0;
                    rakott2 = 4;
                    valaszthato2_4 = [];
                    cards2[0].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 1; i < 5; i++){
                        if(cards2[kivkartyaindex2_4].tipus == cards2[i].tipus && cards2[i] != kitettlap2 && cards2[i] != kitettlap2_2 && cards2[i] != kitettlap2_3){
                            lehetoseg2 = 5;
                            cards2[i].elolap.style.border = '4px solid #a91a1a';
                            valaszthato2_4.push(cards2[i]);
                        }
                    }
                }
                if(lehetoseg2 == 5 && valaszthato2_4.includes(cards2[0])){
                    kitettlap2_5 = cards2[0];
                    kivkartyaindex2_5 = 0;
                    rakott2 = 5;
                    cards2[0].elolap.style.border = '4px solid #07cbd8';
                }
            }
        }
    });

    jatekos2kartyak2.addEventListener("click", () => {
        if(fordulo % 5 == 3){
            if(cards2[1].tipus == akcio){
                akciokartya2_1();
            }
            if(cards2[1].tipus != akcio){
                if(lehetoseg2 == 1 || (lehetoseg2 >= 2 && valaszthato2.indexOf(cards2[1]) === -1 && valaszthato2_2.indexOf(cards2[1]) === -1 && valaszthato2_3.indexOf(cards2[1]) === -1 && valaszthato2_4.indexOf(cards2[1]) === -1)){
                    alapeset2_1();
                }
                if(lehetoseg2 == 2 && valaszthato2.includes(cards2[1])){
                    kitettlap2_2 = cards2[1];
                    kivkartyaindex2_2 = 1;
                    rakott2 = 2;
                    valaszthato2_2 = [];
                    valaszthato2_3 = [];
                    valaszthato2_4 = [];
                    cards2[1].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 0; i < 5; i++){
                        if( i != kivkartyaindex2_2){
                            if(cards2[kivkartyaindex2_2].tipus == cards2[i].tipus && cards2[i] != kitettlap2){
                                lehetoseg2 = 3;
                                cards2[i].elolap.style.border = '4px solid #a91a1a';
                                valaszthato2_2.push(cards2[i]);
                            }
                        }

                    }
                }
                if(lehetoseg2 == 3 && valaszthato2_2.includes(cards2[1])){
                    kitettlap2_3 = cards2[1];
                    kivkartyaindex2_3 = 1;
                    rakott2 = 3;
                    valaszthato2_3 = [];
                    valaszthato2_4 = [];
                    cards2[1].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 0; i < 5; i++){
                        if(i != kivkartyaindex2_3){
                            if(cards2[kivkartyaindex2_3].tipus == cards2[i].tipus && cards2[i] != kitettlap2 && cards2[i] != kitettlap2_2){
                                lehetoseg2 = 4;
                                cards2[i].elolap.style.border = '4px solid #a91a1a';
                                valaszthato2_3.push(cards2[i]);
                            }
                        }

                    }
                }
                if(lehetoseg2 == 4 && valaszthato2_3.includes(cards2[1])){
                    kitettlap2_4 = cards2[1];
                    kivkartyaindex2_4 = 1;
                    rakott2 = 4;
                    valaszthato2_4 = [];
                    cards2[1].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 0; i < 5; i++){
                        if(i != kivkartyaindex2_4){
                            if(cards2[kivkartyaindex2_4].tipus == cards2[i].tipus && cards2[i] != kitettlap2 && cards2[i] != kitettlap2_2 && cards2[i] != kitettlap2_3){
                                lehetoseg2 = 5;
                                cards2[i].elolap.style.border = '4px solid #a91a1a';
                                valaszthato2_4.push(cards2[i]);
                            }
                        }

                    }
                }
                if(lehetoseg2 == 5 && valaszthato2_4.includes(cards2[1])){
                    kitettlap2_5 = cards2[1];
                    kivkartyaindex2_5 = 1;
                    rakott2 = 5;
                    cards2[1].elolap.style.border = '4px solid #07cbd8';
                }
            }
        }
    });

    jatekos2kartyak3.addEventListener("click", () => {
        if(fordulo % 5 == 3){
            if(cards2[2].tipus == akcio){
                akciokartya2_2();
            }
            if(cards2[2].tipus != akcio){
                if(lehetoseg2 == 1 || (lehetoseg2 >= 2 && valaszthato2.indexOf(cards2[2]) === -1 && valaszthato2_2.indexOf(cards2[2]) === -1 && valaszthato2_3.indexOf(cards2[2]) === -1 && valaszthato2_4.indexOf(cards2[2]) === -1)){
                    alapeset2_2();
                }
                if(lehetoseg2 == 2 && valaszthato2.includes(cards2[2])){
                    kitettlap2_2 = cards2[2];
                    kivkartyaindex2_2 = 2;
                    rakott2 = 2;
                    valaszthato2_2 = [];
                    valaszthato2_3 = [];
                    valaszthato2_4 = [];
                    cards2[2].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 0; i < 5; i++){
                        if( i != kivkartyaindex2_2){
                            if(cards2[kivkartyaindex2_2].tipus == cards2[i].tipus && cards2[i] != kitettlap2){
                                lehetoseg2 = 3;
                                cards2[i].elolap.style.border = '4px solid #a91a1a';
                                valaszthato2_2.push(cards2[i]);
                            }
                        }

                    }
                }
                if(lehetoseg2 == 3 && valaszthato2_2.includes(cards2[2])){
                    kitettlap2_3 = cards2[2];
                    kivkartyaindex2_3 = 2;
                    rakott2 = 3;
                    valaszthato2_3 = [];
                    valaszthato2_4 = [];
                    cards2[2].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 0; i < 5; i++){
                        if(i != kivkartyaindex2_3){
                            if(cards2[kivkartyaindex2_3].tipus == cards2[i].tipus && cards2[i] != kitettlap2 && cards2[i] != kitettlap2_2){
                                lehetoseg2 = 4;
                                cards2[i].elolap.style.border = '4px solid #a91a1a';
                                valaszthato2_3.push(cards2[i]);
                            }
                        }

                    }
                }
                if(lehetoseg2 == 4 && valaszthato2_3.includes(cards2[2])){
                    kitettlap2_4 = cards2[2];
                    kivkartyaindex2_4 = 2;
                    rakott2 = 4;
                    valaszthato2_4 = [];
                    cards2[2].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 0; i < 5; i++){
                        if(i != kivkartyaindex2_4){
                            if(cards2[kivkartyaindex2_4].tipus == cards2[i].tipus && cards2[i] != kitettlap2 && cards2[i] != kitettlap2_2 && cards2[i] != kitettlap2_3){
                                lehetoseg2 = 5;
                                cards2[i].elolap.style.border = '4px solid #a91a1a';
                                valaszthato2_4.push(cards2[i]);
                            }
                        }

                    }
                }
                if(lehetoseg2 == 5 && valaszthato2_4.includes(cards2[2])){
                    kitettlap2_5 = cards2[2];
                    kivkartyaindex2_5 = 2;
                    rakott2 = 5;
                    cards2[2].elolap.style.border = '4px solid #07cbd8';
                }
            }
        }
    });

    jatekos2kartyak4.addEventListener("click", () => {
        if(fordulo % 5 == 3){
            if(cards2[3].tipus == akcio){
                akciokartya2_3();
            }
            if(cards2[3].tipus != akcio){
                if(lehetoseg2 == 1 || (lehetoseg2 >= 2 && valaszthato2.indexOf(cards2[3]) === -1 && valaszthato2_2.indexOf(cards2[3]) === -1 && valaszthato2_3.indexOf(cards2[3]) === -1 && valaszthato2_4.indexOf(cards2[3]) === -1)){
                    alapeset2_3();
                }
                if(lehetoseg2 == 2 && valaszthato2.includes(cards2[3])){
                    kitettlap2_2 = cards2[3];
                    kivkartyaindex2_2 = 3;
                    rakott2 = 2;
                    valaszthato2_2 = [];
                    valaszthato2_3 = [];
                    valaszthato2_4 = [];
                    cards2[3].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 0; i < 5; i++){
                        if( i != kivkartyaindex2_2){
                            if(cards2[kivkartyaindex2_2].tipus == cards2[i].tipus && cards2[i] != kitettlap2){
                                lehetoseg2 = 3;
                                cards2[i].elolap.style.border = '4px solid #a91a1a';
                                valaszthato2_2.push(cards2[i]);
                            }
                        }

                    }
                }
                if(lehetoseg2 == 3 && valaszthato2_2.includes(cards2[3])){
                    kitettlap2_3 = cards2[3];
                    kivkartyaindex2_3 = 3;
                    rakott2 = 3;
                    valaszthato2_3 = [];
                    valaszthato2_4 = [];
                    cards2[3].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 0; i < 5; i++){
                        if(i != kivkartyaindex2_3){
                            if(cards2[kivkartyaindex2_3].tipus == cards2[i].tipus && cards2[i] != kitettlap2 && cards2[i] != kitettlap2_2){
                                lehetoseg2 = 4;
                                cards2[i].elolap.style.border = '4px solid #a91a1a';
                                valaszthato2_3.push(cards2[i]);
                            }
                        }

                    }
                }
                if(lehetoseg2 == 4 && valaszthato2_3.includes(cards2[3])){
                    kitettlap2_4 = cards2[3];
                    kivkartyaindex2_4 = 3;
                    rakott2 = 4;
                    valaszthato2_4 = [];
                    cards2[3].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 0; i < 5; i++){
                        if(i != kivkartyaindex2_4){
                            if(cards2[kivkartyaindex2_4].tipus == cards2[i].tipus && cards2[i] != kitettlap2 && cards2[i] != kitettlap2_2 && cards2[i] != kitettlap2_3){
                                lehetoseg2 = 5;
                                cards2[i].elolap.style.border = '4px solid #a91a1a';
                                valaszthato2_4.push(cards2[i]);
                            }
                        }

                    }
                }
                if(lehetoseg2 == 5 && valaszthato2_4.includes(cards2[3])){
                    kitettlap2_5 = cards2[3];
                    kivkartyaindex2_5 = 3;
                    rakott2 = 5;
                    cards2[3].elolap.style.border = '4px solid #07cbd8';
                }
            }
        }
    });

    jatekos2kartyak5.addEventListener("click", () => {
        if(fordulo % 5 == 3){
            if(cards2[4].tipus == akcio){
                akciokartya2_4();
            }
            if(cards2[4].tipus != akcio){
                if(lehetoseg2 == 1 || (lehetoseg2 >= 2 && valaszthato2.indexOf(cards2[4]) === -1 && valaszthato2_2.indexOf(cards2[4]) === -1 && valaszthato2_3.indexOf(cards2[4]) === -1 && valaszthato2_4.indexOf(cards2[4]) === -1)){
                    alapeset2_4();
                }
                if(lehetoseg2 == 2 && valaszthato2.includes(cards2[4])){
                    kitettlap2_2 = cards2[4];
                    kivkartyaindex2_2 = 4;
                    rakott2 = 2;
                    valaszthato2_2 = [];
                    valaszthato2_3 = [];
                    valaszthato2_4 = [];
                    cards2[4].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 0; i < 5; i++){
                        if( i != kivkartyaindex2_2){
                            if(cards2[kivkartyaindex2_2].tipus == cards2[i].tipus && cards2[i] != kitettlap2){
                                lehetoseg2 = 3;
                                cards2[i].elolap.style.border = '4px solid #a91a1a';
                                valaszthato2_2.push(cards2[i]);
                            }
                        }

                    }
                }
                if(lehetoseg2 == 3 && valaszthato2_2.includes(cards2[4])){
                    kitettlap2_3 = cards2[4];
                    kivkartyaindex2_3 = 4;
                    rakott2 = 3;
                    valaszthato2_3 = [];
                    valaszthato2_4 = [];
                    cards2[4].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 0; i < 5; i++){
                        if(i != kivkartyaindex2_3){
                            if(cards2[kivkartyaindex2_3].tipus == cards2[i].tipus && cards2[i] != kitettlap2 && cards2[i] != kitettlap2_2){
                                lehetoseg2 = 4;
                                cards2[i].elolap.style.border = '4px solid #a91a1a';
                                valaszthato2_3.push(cards2[i]);
                            }
                        }

                    }
                }
                if(lehetoseg2 == 4 && valaszthato2_3.includes(cards2[4])){
                    kitettlap2_4 = cards2[4];
                    kivkartyaindex2_4 = 4;
                    rakott2 = 4;
                    valaszthato2_4 = [];
                    cards2[4].elolap.style.border = '4px solid #07cbd8';
                    for(let i = 0; i < 5; i++){
                        if(i != kivkartyaindex2_4){
                            if(cards2[kivkartyaindex2_4].tipus == cards2[i].tipus && cards2[i] != kitettlap2 && cards2[i] != kitettlap2_2 && cards2[i] != kitettlap2_3){
                                lehetoseg2 = 5;
                                cards2[i].elolap.style.border = '4px solid #a91a1a';
                                valaszthato2_4.push(cards2[i]);
                            }
                        }

                    }
                }
                if(lehetoseg2 == 5 && valaszthato2_4.includes(cards2[4])){
                    kitettlap2_5 = cards2[4];
                    kivkartyaindex2_5 = 4;
                    rakott2 = 5;
                    cards2[4].elolap.style.border = '4px solid #07cbd8';
                }
            }
        }
    });
}

function lapforditas2() {
    //masodik jatekos lapja lefordul
    if(rakott2 == 1){
        kitettero2 = kitettlap2.ero;
    }
    if(rakott2 == 2){
        kitettero2 = kitettlap2.ero + kitettlap2_2.ero;
    }
    if(rakott2 == 3){
        kitettero2 = kitettlap2.ero + kitettlap2_2.ero + kitettlap2_3.ero;
    }
    if(rakott2 == 4){
        kitettero2 = kitettlap2.ero + kitettlap2_2.ero + kitettlap2_3.ero + kitettlap2_4.ero;
    }
    cards2[0].elolap.style.border = 'none';
    cards2[1].elolap.style.border = 'none';
    cards2[2].elolap.style.border = 'none';
    cards2[3].elolap.style.border = 'none';
    cards2[4].elolap.style.border = 'none';

    elemekelvetele2();

    if(rakott2 == 1){
        randomKartyak2(1,kivkartyaindex2);
    }
    if(rakott2 == 2){
        randomKartyak2(1,kivkartyaindex2);
        randomKartyak2(1,kivkartyaindex2_2);
    }
    if(rakott2 == 3){
        randomKartyak2(1,kivkartyaindex2);
        randomKartyak2(1,kivkartyaindex2_2);
        randomKartyak2(1,kivkartyaindex2_3);
    }
    if(rakott2 == 4){
        randomKartyak2(1,kivkartyaindex2);
        randomKartyak2(1,kivkartyaindex2_2);
        randomKartyak2(1,kivkartyaindex2_3);
        randomKartyak2(1,kivkartyaindex2_4);
    }
    if(rakott2 == 5){
        randomKartyak2(1,kivkartyaindex2);
        randomKartyak2(1,kivkartyaindex2_2);
        randomKartyak2(1,kivkartyaindex2_3);
        randomKartyak2(1,kivkartyaindex2_4);
        randomKartyak2(1,kivkartyaindex2_5);
    }

    for(let i = 0; i < cards2.length; i++){
        cards2[i].melyikoldal = false;
    }

    elemekhozzaadasa2();
}

function plusszPont() {

    if(kitettlap1.tipus == kitettlap2.tipus){
        jatekos1Pont++;
        jatekos2Pont++;
    }
    if(kitettlap1.tipus != kitettlap2.tipus){
        if (kitettero1 > kitettero2) {
            jatekos1Pont++;
        }
        if (kitettero2 > kitettero1) {
            jatekos2Pont++;
        }
        if (kitettero1 == kitettero2) {
            jatekos1Pont++;
            jatekos2Pont++;
        }
    }
}

//alapreakciok a kartyara kattintaskor, és az akciókártyák kezelése


function alapeset1_0(){
    duplakatt = false;
    lehetoseg1 = 1;
    kivkartyaindex1 = 0;
    rakott1 = 1;
    kitettlap1 = cards1[0];
    valaszthato1 = [];
    valaszthato1_2 = [];
    valaszthato1_3 = [];
    valaszthato1_4 = [];
    valaszthato1_5 = [];
    cards1[0].elolap.style.border = '4px solid #07cbd8';
    cards1[1].elolap.style.border = 'none';
    cards1[2].elolap.style.border = 'none';
    cards1[3].elolap.style.border = 'none';
    cards1[4].elolap.style.border = 'none';
    for(let i = 1; i < 5; i++){
        if(cards1[kivkartyaindex1].tipus == cards1[i].tipus){
            lehetoseg1 = 2;
            cards1[i].elolap.style.border = '4px solid #a91a1a';
            valaszthato1.push(cards1[i]);
        }
    }
}

function alapeset1_1(){
    duplakatt = false;
    lehetoseg1 = 1;
    kivkartyaindex1 = 1;
    rakott1 = 1;
    kitettlap1 = cards1[1];
    valaszthato1 = [];
    valaszthato1_2 = [];
    valaszthato1_3 = [];
    valaszthato1_4 = [];
    valaszthato1_5 = [];
    cards1[1].elolap.style.border = '4px solid #07cbd8';
    cards1[0].elolap.style.border = 'none';
    cards1[2].elolap.style.border = 'none';
    cards1[3].elolap.style.border = 'none';
    cards1[4].elolap.style.border = 'none';
    for(let i = 0; i < 5; i++){
        if(i != kivkartyaindex1){
            if(cards1[kivkartyaindex1].tipus == cards1[i].tipus){
                lehetoseg1 = 2;
                cards1[i].elolap.style.border = '4px solid #a91a1a';
                valaszthato1.push(cards1[i]);
            }
        }
    }
}

function alapeset1_2(){
    duplakatt = false;
    lehetoseg1 = 1;
    kivkartyaindex1 = 2;
    rakott1 = 1;
    kitettlap1 = cards1[2];
    valaszthato1 = [];
    valaszthato1_2 = [];
    valaszthato1_3 = [];
    valaszthato1_4 = [];
    valaszthato1_5 = [];
    cards1[2].elolap.style.border = '4px solid #07cbd8';
    cards1[0].elolap.style.border = 'none';
    cards1[1].elolap.style.border = 'none';
    cards1[3].elolap.style.border = 'none';
    cards1[4].elolap.style.border = 'none';
    for(let i = 0; i < 5; i++){
        if(i != kivkartyaindex1){
            if(cards1[kivkartyaindex1].tipus == cards1[i].tipus){
                lehetoseg1 = 2;
                cards1[i].elolap.style.border = '4px solid #a91a1a';
                valaszthato1.push(cards1[i]);
            }
        }
    }
}

function alapeset1_3(){
    duplakatt = false;
    lehetoseg1 = 1;
    kivkartyaindex1 = 3;
    rakott1 = 1;
    kitettlap1 = cards1[3];
    valaszthato1 = [];
    valaszthato1_2 = [];
    valaszthato1_3 = [];
    valaszthato1_4 = [];
    valaszthato1_5 = [];
    cards1[3].elolap.style.border = '4px solid #07cbd8';
    cards1[0].elolap.style.border = 'none';
    cards1[1].elolap.style.border = 'none';
    cards1[2].elolap.style.border = 'none';
    cards1[4].elolap.style.border = 'none';
    for(let i = 0; i < 5; i++){
        if(i != kivkartyaindex1){
            if(cards1[kivkartyaindex1].tipus == cards1[i].tipus){
                lehetoseg1 = 2;
                cards1[i].elolap.style.border = '4px solid #a91a1a';
                valaszthato1.push(cards1[i]);
            }
        }
    }
}

function alapeset1_4(){
    duplakatt = false;
    lehetoseg1 = 1;
    kivkartyaindex1 = 4;
    rakott1 = 1;
    kitettlap1 = cards1[4];
    valaszthato1 = [];
    valaszthato1_2 = [];
    valaszthato1_3 = [];
    valaszthato1_4 = [];
    valaszthato1_5 = [];
    cards1[4].elolap.style.border = '4px solid #07cbd8';
    cards1[0].elolap.style.border = 'none';
    cards1[1].elolap.style.border = 'none';
    cards1[2].elolap.style.border = 'none';
    cards1[3].elolap.style.border = 'none';
    for(let i = 0; i < 5; i++){
        if(i != kivkartyaindex1){
            if(cards1[kivkartyaindex1].tipus == cards1[i].tipus){
                lehetoseg1 = 2;
                cards1[i].elolap.style.border = '4px solid #a91a1a';
                valaszthato1.push(cards1[i]);
            }
        }
    }
}

function alapeset2_0(){
    duplakatt = false;
    lehetoseg2 = 1;
    kivkartyaindex2 = 0;
    rakott2 = 1;
    kitettlap2 = cards2[0];
    valaszthato2 = [];
    valaszthato2_2 = [];
    valaszthato2_3 = [];
    valaszthato2_4 = [];
    valaszthato2_5 = [];
    cards2[0].elolap.style.border = '4px solid #07cbd8';
    cards2[1].elolap.style.border = 'none';
    cards2[2].elolap.style.border = 'none';
    cards2[3].elolap.style.border = 'none';
    cards2[4].elolap.style.border = 'none';
    for(let i = 1; i < 5; i++){
        if(cards2[kivkartyaindex2].tipus == cards2[i].tipus){
            lehetoseg2 = 2;
            cards2[i].elolap.style.border = '4px solid #a91a1a';
            valaszthato2.push(cards2[i]);
        }
    }
}

function alapeset2_1(){
    duplakatt = false;
    lehetoseg2 = 1;
    kivkartyaindex2 = 1;
    rakott2 = 1;
    kitettlap2 = cards2[1];
    valaszthato2 = [];
    valaszthato2_2 = [];
    valaszthato2_3 = [];
    valaszthato2_4 = [];
    valaszthato2_5 = [];
    cards2[1].elolap.style.border = '4px solid #07cbd8';
    cards2[0].elolap.style.border = 'none';
    cards2[2].elolap.style.border = 'none';
    cards2[3].elolap.style.border = 'none';
    cards2[4].elolap.style.border = 'none';
    for(let i = 0; i < 5; i++){
        if(i != kivkartyaindex2){
            if(cards2[kivkartyaindex2].tipus == cards2[i].tipus){
                lehetoseg2 = 2;
                cards2[i].elolap.style.border = '4px solid #a91a1a';
                valaszthato2.push(cards2[i]);
            }
        }
    }
}

function alapeset2_2(){
    duplakatt = false;
    lehetoseg2 = 1;
    kivkartyaindex2 = 2;
    rakott2 = 1;
    kitettlap2 = cards2[2];
    valaszthato2 = [];
    valaszthato2_2 = [];
    valaszthato2_3 = [];
    valaszthato2_4 = [];
    valaszthato2_5 = [];
    cards2[2].elolap.style.border = '4px solid #07cbd8';
    cards2[0].elolap.style.border = 'none';
    cards2[1].elolap.style.border = 'none';
    cards2[3].elolap.style.border = 'none';
    cards2[4].elolap.style.border = 'none';
    for(let i = 0; i < 5; i++){
        if(i != kivkartyaindex2){
            if(cards2[kivkartyaindex2].tipus == cards2[i].tipus){
                lehetoseg2 = 2;
                cards2[i].elolap.style.border = '4px solid #a91a1a';
                valaszthato2.push(cards2[i]);
            }
        }
    }
}

function alapeset2_3(){
    duplakatt = false;
    lehetoseg2 = 1;
    kivkartyaindex2 = 3;
    rakott2 = 1;
    kitettlap2 = cards2[3];
    valaszthato2 = [];
    valaszthato2_2 = [];
    valaszthato2_3 = [];
    valaszthato2_4 = [];
    valaszthato2_5 = [];
    cards2[3].elolap.style.border = '4px solid #07cbd8';
    cards2[0].elolap.style.border = 'none';
    cards2[1].elolap.style.border = 'none';
    cards2[2].elolap.style.border = 'none';
    cards2[4].elolap.style.border = 'none';
    for(let i = 0; i < 5; i++){
        if(i != kivkartyaindex2){
            if(cards2[kivkartyaindex2].tipus == cards2[i].tipus){
                lehetoseg2 = 2;
                cards2[i].elolap.style.border = '4px solid #a91a1a';
                valaszthato2.push(cards2[i]);
            }
        }
    }
}

function alapeset2_4(){
    duplakatt = false;
    lehetoseg2 = 1;
    kivkartyaindex2 = 4;
    rakott2 = 1;
    kitettlap2 = cards2[4];
    valaszthato2 = [];
    valaszthato2_2 = [];
    valaszthato2_3 = [];
    valaszthato2_4 = [];
    valaszthato2_5 = [];
    cards2[4].elolap.style.border = '4px solid #07cbd8';
    cards2[0].elolap.style.border = 'none';
    cards2[1].elolap.style.border = 'none';
    cards2[2].elolap.style.border = 'none';
    cards2[3].elolap.style.border = 'none';
    for(let i = 0; i < 5; i++){
        if(i != kivkartyaindex2){
            if(cards2[kivkartyaindex2].tipus == cards2[i].tipus){
                lehetoseg2 = 2;
                cards2[i].elolap.style.border = '4px solid #a91a1a';
                valaszthato2.push(cards2[i]);
            }
        }
    }
}

function akciokartya1_0(){
    kivkartyaindex1 = 0;
    rakott1 = 0;
    kitettlap1 = 0;
    cards1[0].elolap.style.border = '4px solid #07cbd8';
    cards1[1].elolap.style.border = 'none';
    cards1[2].elolap.style.border = 'none';
    cards1[3].elolap.style.border = 'none';
    cards1[4].elolap.style.border = 'none';
    if(cards1[kivkartyaindex1] == order66){
        for(let i = 0; i < cards2.length; i++){
            if(cards2[i].tipus == koztarsasag){
                elemekelvetele2();
                randomKartyak2(1,i);
                for(let j = 0; j < cards2.length; j++){
                    cards2[i].melyikoldal = false;
                }
                elemekhozzaadasa2();
            }
        }
    }
    jatekos1kartyak1.removeChild(cards1[kivkartyaindex1].elolap);
    randomKartyak1(1,kivkartyaindex1);
    cards1[kivkartyaindex1].kartyamegjelenes();
    jatekos1kartyak1.appendChild(cards1[kivkartyaindex1].elolap);
}

function akciokartya1_1(){
    kivkartyaindex1 = 1;
    rakott1 = 0;
    kitettlap1 = 0;
    cards1[1].elolap.style.border = '4px solid #07cbd8';
    cards1[0].elolap.style.border = 'none';
    cards1[2].elolap.style.border = 'none';
    cards1[3].elolap.style.border = 'none';
    cards1[4].elolap.style.border = 'none';
    if(cards1[kivkartyaindex1] == order66){
        for(let i = 0; i < cards2.length; i++){
            if(cards2[i].tipus == koztarsasag){
                elemekelvetele2();
                randomKartyak2(1,i);
                for(let j = 0; j < cards2.length; j++){
                    cards2[j].melyikoldal = false;
                }
                elemekhozzaadasa2();
            }
        }
    }
    jatekos1kartyak2.removeChild(cards1[kivkartyaindex1].elolap);
    randomKartyak1(1,kivkartyaindex1);
    cards1[kivkartyaindex1].kartyamegjelenes();
    jatekos1kartyak2.appendChild(cards1[kivkartyaindex1].elolap);
}

function akciokartya1_2(){
    kivkartyaindex1 = 2;
    rakott1 = 0;
    kitettlap1 = 0;
    cards1[2].elolap.style.border = '4px solid #07cbd8';
    cards1[0].elolap.style.border = 'none';
    cards1[1].elolap.style.border = 'none';
    cards1[3].elolap.style.border = 'none';
    cards1[4].elolap.style.border = 'none';
    if(cards1[kivkartyaindex1] == order66){
        for(let i = 0; i < cards2.length; i++){
            if(cards2[i].tipus == koztarsasag){
                elemekelvetele2();
                randomKartyak2(1,i);
                for(let j = 0; j < cards2.length; j++){
                    cards2[j].melyikoldal = false;
                }
                elemekhozzaadasa2();
            }
        }
    }
    jatekos1kartyak3.removeChild(cards1[kivkartyaindex1].elolap);
    randomKartyak1(1,kivkartyaindex1);
    cards1[kivkartyaindex1].kartyamegjelenes();
    jatekos1kartyak3.appendChild(cards1[kivkartyaindex1].elolap);
}

function akciokartya1_3(){
    kivkartyaindex1 = 3;
    rakott1 = 0;
    kitettlap1 = 0;
    cards1[3].elolap.style.border = '4px solid #07cbd8';
    cards1[0].elolap.style.border = 'none';
    cards1[1].elolap.style.border = 'none';
    cards1[2].elolap.style.border = 'none';
    cards1[4].elolap.style.border = 'none';
    if(cards1[kivkartyaindex1] == order66){
        for(let i = 0; i < cards2.length; i++){
            if(cards2[i].tipus == koztarsasag){
                elemekelvetele2();
                randomKartyak2(1,i);
                for(let j = 0; j < cards2.length; j++){
                    cards2[j].melyikoldal = false;
                }
                elemekhozzaadasa2();
            }
        }
    }
    jatekos1kartyak4.removeChild(cards1[kivkartyaindex1].elolap);
    randomKartyak1(1,kivkartyaindex1);
    cards1[kivkartyaindex1].kartyamegjelenes();
    jatekos1kartyak4.appendChild(cards1[kivkartyaindex1].elolap);
}

function akciokartya1_4(){
    kivkartyaindex1 = 4;
    rakott1 = 0;
    kitettlap1 = 0;
    cards1[4].elolap.style.border = '4px solid #07cbd8';
    cards1[0].elolap.style.border = 'none';
    cards1[1].elolap.style.border = 'none';
    cards1[2].elolap.style.border = 'none';
    cards1[3].elolap.style.border = 'none';
    if(cards1[kivkartyaindex1] == order66){
        for(let i = 0; i < cards2.length; i++){
            if(cards2[i].tipus == koztarsasag){
                elemekelvetele2();
                randomKartyak2(1,i);
                for(let j = 0; j < cards2.length; j++){
                    cards2[j].melyikoldal = false;
                }
                elemekhozzaadasa2();
            }
        }
    }
    jatekos1kartyak5.removeChild(cards1[kivkartyaindex1].elolap);
    randomKartyak1(1,kivkartyaindex1);
    cards1[kivkartyaindex1].kartyamegjelenes();
    jatekos1kartyak5.appendChild(cards1[kivkartyaindex1].elolap);
}

function akciokartya2_0(){
    kivkartyaindex2 = 0;
    rakott2 = 0;
    kitettlap2 = 0;
    cards2[0].elolap.style.border = '4px solid #07cbd8';
    cards2[1].elolap.style.border = 'none';
    cards2[2].elolap.style.border = 'none';
    cards2[3].elolap.style.border = 'none';
    cards2[4].elolap.style.border = 'none';
    if(cards2[kivkartyaindex2] == order66){
        for(let i = 0; i < cards1.length; i++){
            if(cards1[i].tipus == koztarsasag){
                elemekelvetele1();
                randomKartyak1(1,i);
                for(let j = 0; j < cards1.length; j++){
                    cards1[j].melyikoldal = false;
                }
                elemekhozzaadasa1();
            }
        }
    }
    jatekos2kartyak1.removeChild(cards2[kivkartyaindex2].elolap);
    randomKartyak2(1,kivkartyaindex2);
    cards2[kivkartyaindex2].kartyamegjelenes();
    jatekos2kartyak1.appendChild(cards2[kivkartyaindex2].elolap);
}

function akciokartya2_1(){
    kivkartyaindex2 = 1;
    rakott2 = 0;
    kitettlap2 = 0;
    cards2[1].elolap.style.border = '4px solid #07cbd8';
    cards2[0].elolap.style.border = 'none';
    cards2[2].elolap.style.border = 'none';
    cards2[3].elolap.style.border = 'none';
    cards2[4].elolap.style.border = 'none';
    if(cards2[kivkartyaindex2] == order66){
        for(let i = 0; i < cards1.length; i++){
            if(cards1[i].tipus == koztarsasag){
                elemekelvetele1();
                randomKartyak1(1,i);
                for(let j = 0; j < cards1.length; j++){
                    cards1[j].melyikoldal = false;
                }
                elemekhozzaadasa1();
            }
        }
    }
    jatekos2kartyak2.removeChild(cards2[kivkartyaindex2].elolap);
    randomKartyak2(1,kivkartyaindex2);
    cards2[kivkartyaindex2].kartyamegjelenes();
    jatekos2kartyak2.appendChild(cards2[kivkartyaindex2].elolap);
}

function akciokartya2_2(){
    kivkartyaindex2 = 2;
    rakott2 = 0;
    kitettlap2 = 0;
    cards2[2].elolap.style.border = '4px solid #07cbd8';
    cards2[0].elolap.style.border = 'none';
    cards2[1].elolap.style.border = 'none';
    cards2[3].elolap.style.border = 'none';
    cards2[4].elolap.style.border = 'none';
    if(cards2[kivkartyaindex2] == order66){
        for(let i = 0; i < cards1.length; i++){
            if(cards1[i].tipus == koztarsasag){
                elemekelvetele1();
                randomKartyak1(1,i);
                for(let j = 0; j < cards1.length; j++){
                    cards1[j].melyikoldal = false;
                }
                elemekhozzaadasa1();
            }
        }
    }
    jatekos2kartyak3.removeChild(cards2[kivkartyaindex2].elolap);
    randomKartyak2(1,kivkartyaindex2);
    cards2[kivkartyaindex2].kartyamegjelenes();
    jatekos2kartyak3.appendChild(cards2[kivkartyaindex2].elolap);
}

function akciokartya2_3(){
    kivkartyaindex2 = 3;
    rakott2 = 0;
    kitettlap2 = 0;
    cards2[3].elolap.style.border = '4px solid #07cbd8';
    cards2[0].elolap.style.border = 'none';
    cards2[1].elolap.style.border = 'none';
    cards2[2].elolap.style.border = 'none';
    cards2[4].elolap.style.border = 'none';
    if(cards2[kivkartyaindex2] == order66){
        for(let i = 0; i < cards1.length; i++){
            if(cards1[i].tipus == koztarsasag){
                elemekelvetele1();
                randomKartyak1(1,i);
                for(let j = 0; j < cards1.length; j++){
                    cards1[j].melyikoldal = false;
                }
                elemekhozzaadasa1();
            }
        }
    }
    jatekos2kartyak4.removeChild(cards2[kivkartyaindex2].elolap);
    randomKartyak2(1,kivkartyaindex2);
    cards2[kivkartyaindex2].kartyamegjelenes();
    jatekos2kartyak4.appendChild(cards2[kivkartyaindex2].elolap);
}

function akciokartya2_4(){
    kivkartyaindex2 = 4;
    rakott2 = 0;
    kitettlap2 = 0;
    cards2[4].elolap.style.border = '4px solid #07cbd8';
    cards2[0].elolap.style.border = 'none';
    cards2[1].elolap.style.border = 'none';
    cards2[2].elolap.style.border = 'none';
    cards2[3].elolap.style.border = 'none';
    if(cards2[kivkartyaindex2] == order66){
        for(let i = 0; i < cards1.length; i++){
            if(cards1[i].tipus == koztarsasag){
                elemekelvetele1();
                randomKartyak1(1,i);
                for(let j = 0; j < cards1.length; j++){
                    cards1[j].melyikoldal = false;
                }
                elemekhozzaadasa1();
            }
        }
    }
    jatekos2kartyak5.removeChild(cards2[kivkartyaindex2].elolap);
    randomKartyak2(1,kivkartyaindex2);
    cards2[kivkartyaindex2].kartyamegjelenes();
    jatekos2kartyak5.appendChild(cards2[kivkartyaindex2].elolap);
}

//gombok
start.addEventListener("click", () => {
    zene.play();
    jatekmenet();
});

next.addEventListener("click", () => {
    if(rakott1 >= 1 && rakott2 >= 1){
        kovetkezo();
    }
});

ujjatek.addEventListener("click", () => {
    location.reload();
});


back.addEventListener("click", () => {
    if(fordulo % 5 == 1){
        cards1[0].elolap.style.border = 'none';
        cards1[1].elolap.style.border = 'none';
        cards1[2].elolap.style.border = 'none';
        cards1[3].elolap.style.border = 'none';
        cards1[4].elolap.style.border = 'none';
        kitettlap1 = 0;
        kitettlap1_2 = 0;
        kitettlap1_3 = 0;
        kitettlap1_4 = 0;
        kitettlap1_5 = 0;
        rakott1 = 0;
        kattintas = 0;
    }
    if(fordulo % 5 == 3){
        cards2[0].elolap.style.border = 'none';
        cards2[1].elolap.style.border = 'none';
        cards2[2].elolap.style.border = 'none';
        cards2[3].elolap.style.border = 'none';
        cards2[4].elolap.style.border = 'none';
        kitettlap2 = 0;
        kitettlap2_2 = 0;
        kitettlap2_3 = 0;
        kitettlap2_4 = 0;
        kitettlap2_5 = 0;
        rakott2 = 0;
        kattintas = 0;
    }
});