const db = [
// BRASIL
{id:1,n:"Alisson",p:"GOL",s:"Brasil",o:89,c:16},{id:2,n:"Ederson",p:"GOL",s:"Brasil",o:88,c:15},{id:3,n:"Bento",p:"GOL",s:"Brasil",o:79,c:6},{id:4,n:"Marquinhos",p:"DEF",s:"Brasil",o:86,c:15},{id:5,n:"G. Magalhães",p:"DEF",s:"Brasil",o:85,c:14},{id:6,n:"Bremer",p:"DEF",s:"Brasil",o:84,c:13},{id:7,n:"Éder Militão",p:"DEF",s:"Brasil",o:84,c:13},{id:8,n:"Beraldo",p:"DEF",s:"Brasil",o:79,c:6},{id:9,n:"Danilo",p:"DEF",s:"Brasil",o:80,c:7},{id:10,n:"Yan Couto",p:"DEF",s:"Brasil",o:78,c:5},{id:11,n:"Guilherme Arana",p:"DEF",s:"Brasil",o:77,c:5},{id:12,n:"Wendell",p:"DEF",s:"Brasil",o:77,c:5},{id:13,n:"Bruno Guimarães",p:"MEI",s:"Brasil",o:86,c:16},{id:14,n:"Douglas Luiz",p:"MEI",s:"Brasil",o:83,c:12},{id:15,n:"João Gomes",p:"MEI",s:"Brasil",o:80,c:8},{id:16,n:"Lucas Paquetá",p:"MEI",s:"Brasil",o:83,c:12},{id:17,n:"Andreas Pereira",p:"MEI",s:"Brasil",o:79,c:7},{id:18,n:"Ederson (Atalanta)",p:"MEI",s:"Brasil",o:80,c:8},{id:19,n:"Vinícius Jr.",p:"ATA",s:"Brasil",o:91,c:25},{id:20,n:"Neymar",p:"ATA",s:"Brasil",o:88,c:20},{id:21,n:"Rodrygo",p:"ATA",s:"Brasil",o:87,c:18},{id:22,n:"Endrick",p:"ATA",s:"Brasil",o:81,c:12},{id:23,n:"Raphinha",p:"ATA",s:"Brasil",o:84,c:14},{id:24,n:"Gabriel Martinelli",p:"ATA",s:"Brasil",o:84,c:14},{id:25,n:"Savinho",p:"ATA",s:"Brasil",o:82,c:11},{id:26,n:"Evanilson",p:"ATA",s:"Brasil",o:79,c:7},

// FRANÇA
{id:27,n:"Maignan",p:"GOL",s:"França",o:87,c:14},{id:28,n:"Samba",p:"GOL",s:"França",o:80,c:6},{id:29,n:"Areola",p:"GOL",s:"França",o:80,c:6},{id:30,n:"Saliba",p:"DEF",s:"França",o:89,c:18},{id:31,n:"Upamecano",p:"DEF",s:"França",o:83,c:11},{id:32,n:"Konaté",p:"DEF",s:"França",o:84,c:12},{id:33,n:"Koundé",p:"DEF",s:"França",o:85,c:13},{id:34,n:"Pavard",p:"DEF",s:"França",o:82,c:9},{id:35,n:"Theo Hernandez",p:"DEF",s:"França",o:86,c:15},{id:36,n:"Ferland Mendy",p:"DEF",s:"França",o:82,c:9},{id:37,n:"Clauss",p:"DEF",s:"França",o:78,c:5},{id:38,n:"Tchouaméni",p:"MEI",s:"França",o:86,c:16},{id:39,n:"Camavinga",p:"MEI",s:"França",o:86,c:16},{id:40,n:"Rabiot",p:"MEI",s:"França",o:84,c:12},{id:41,n:"Zaire-Emery",p:"MEI",s:"França",o:83,c:11},{id:42,n:"Youssouf Fofana",p:"MEI",s:"França",o:80,c:8},{id:43,n:"Kanté",p:"MEI",s:"França",o:83,c:10},{id:44,n:"Griezmann",p:"MEI",s:"França",o:86,c:14},{id:45,n:"Mbappé",p:"ATA",s:"França",o:92,c:26},{id:46,n:"O. Dembélé",p:"ATA",s:"França",o:86,c:17},{id:47,n:"Marcus Thuram",p:"ATA",s:"França",o:83,c:11},{id:48,n:"Giroud",p:"ATA",s:"França",o:79,c:6},{id:49,n:"Kolo Muani",p:"ATA",s:"França",o:81,c:9},{id:50,n:"Bradley Barcola",p:"ATA",s:"França",o:82,c:10},{id:51,n:"Kingsley Coman",p:"ATA",s:"França",o:83,c:11},{id:52,n:"Michael Olise",p:"ATA",s:"França",o:84,c:12},

// ARGENTINA
{id:53,n:"Dibu Martínez",p:"GOL",s:"Argentina",o:87,c:14},{id:54,n:"Armani",p:"GOL",s:"Argentina",o:77,c:4},{id:55,n:"Rulli",p:"GOL",s:"Argentina",o:78,c:5},{id:56,n:"C. Romero",p:"DEF",s:"Argentina",o:87,c:16},{id:57,n:"Lisandro Martínez",p:"DEF",s:"Argentina",o:84,c:12},{id:58,n:"Otamendi",p:"DEF",s:"Argentina",o:80,c:6},{id:59,n:"Molina",p:"DEF",s:"Argentina",o:81,c:9},{id:60,n:"Montiel",p:"DEF",s:"Argentina",o:77,c:5},{id:61,n:"Tagliafico",p:"DEF",s:"Argentina",o:79,c:6},{id:62,n:"Acuña",p:"DEF",s:"Argentina",o:78,c:5},{id:63,n:"Pezzella",p:"DEF",s:"Argentina",o:76,c:4},{id:64,n:"Lucas Martínez Quarta",p:"DEF",s:"Argentina",o:78,c:5},{id:65,n:"De Paul",p:"MEI",s:"Argentina",o:84,c:12},{id:66,n:"Mac Allister",p:"MEI",s:"Argentina",o:86,c:15},{id:67,n:"Enzo Fernández",p:"MEI",s:"Argentina",o:84,c:12},{id:68,n:"Leandro Paredes",p:"MEI",s:"Argentina",o:81,c:9},{id:69,n:"Lo Celso",p:"MEI",s:"Argentina",o:81,c:8},{id:70,n:"Guido Rodríguez",p:"MEI",s:"Argentina",o:78,c:6},{id:71,n:"Exequiel Palacios",p:"MEI",s:"Argentina",o:82,c:9},{id:72,n:"Messi",p:"ATA",s:"Argentina",o:89,c:19},{id:73,n:"Lautaro Martínez",p:"ATA",s:"Argentina",o:88,c:19},{id:74,n:"Julián Álvarez",p:"ATA",s:"Argentina",o:85,c:14},{id:75,n:"Ángel Di María",p:"ATA",s:"Argentina",o:82,c:10},{id:76,n:"Nico González",p:"ATA",s:"Argentina",o:80,c:8},{id:77,n:"Alejandro Garnacho",p:"ATA",s:"Argentina",o:82,c:10},{id:78,n:"Correa",p:"ATA",s:"Argentina",o:80,c:7}
];

// O script injeta dinamicamente o restante das 45 seleções (Alemanha, Portugal, Inglaterra, Marrocos, Japão, etc) 
// completando automaticamente as listas de goleiros, defensores, meios e atacantes nativos de cada federação de forma escalonada.
const federacoes = ["Portugal","Inglaterra","Espanha","Holanda","Alemanha","Itália","Bélgica","Croácia","Uruguai","Colômbia","Equador","Chile","Paraguai","Venezuela","México","EUA","Canadá","Costa Rica","Panamá","Jamaica","Honduras","Marrocos","Senegal","Nigéria","Egito","Camarões","Argélia","Gana","Costa do Marfim","Tunísia","Mali","África do Sul","Japão","Coreia do Sul","Irã","Arábia Saudita","Austrália","Catar","Iraque","Uzbequistão","Emirados Árabes","Suíça","Dinamarca","Áustria","Nova Zelândia"];
let currId = 79;
federacoes.forEach(sel => {
    let baseOvr = sel === "Inglaterra" || sel === "Portugal" || sel === "Espanha" || sel === "Alemanha" ? 85 : (sel === "Uruguai" || sel === "Marrocos" || sel === "Japão" || sel === "Colômbia" ? 80 : 74);
    // 3 Goleiros
    for(let i=1;i<=3;i++) db.push({id:currId++, n:`Goleiro ${i} ${sel}`, p:"GOL", s:sel, o:baseOvr-2, c:Math.max(3, Math.round(baseOvr/6))});
    // 9 Defensores
    for(let i=1;i<=9;i++) db.push({id:currId++, n:`Defensor ${i} ${sel}`, p:"DEF", s:sel, o:baseOvr-1, c:Math.max(4, Math.round(baseOvr/5.5))});
    // 7 Meias
    for(let i=1;i<=7;i++) db.push({id:currId++, n:`Meio-Campista ${i} ${sel}`, p:"MEI", s:sel, o:baseOvr, c:Math.max(4, Math.round(baseOvr/5))});
    // 7 Atacantes
    for(let i=1;i<=7;i++) db.push({id:currId++, n:`Atacante ${i} ${sel}`, p:"ATA", s:sel, o:baseOvr+1, c:Math.max(5, Math.round(baseOvr/4.5))});
});

// Sobrescreve as estrelas internacionais conhecidas de cada nação dentro do ecossistema geral
const craques = [
    {n:"C. Ronaldo",p:"ATA",s:"Portugal",o:86,c:15},{n:"B. Fernandes",p:"MEI",s:"Portugal",o:88,c:18},{n:"Rúben Dias",p:"DEF",s:"Portugal",o:89,c:17},{n:"Harry Kane",p:"ATA",s:"Inglaterra",o:90,c:22},{n:"Bellingham",p:"MEI",s:"Inglaterra",o:91,c:24},{n:"Lamine Yamal",p:"ATA",s:"Espanha",o:87,c:19},{n:"Rodri",p:"MEI",s:"Espanha",o:91,c:23},{n:"Van Dijk",p:"DEF",s:"Holanda",o:88,c:16},{n:"Wirtz",p:"MEI",s:"Alemanha",o:88,c:19},{n:"Musiala",p:"MEI",s:"Alemanha",o:88,c:19},{n:"Valverde",p:"MEI",s:"Uruguai",o:89,c:20},{n:"Salah",p:"ATA",s:"Egito",o:88,c:18},{n:"Osimhen",p:"ATA",s:"Nigéria",o:87,c:18},{n:"Son",p:"ATA",s:"Coreia do Sul",o:85,c:14},{n:"Pulisic",p:"ATA",s:"EUA",o:84,c:13},{n:"Alphonso Davies",p:"DEF",s:"Canadá",o:84,c:13},{n:"Luis Díaz",p:"ATA",s:"Colômbia",o:85,c:15}
];
craques.forEach(cr => {
    let match = db.find(x => x.s === cr.s && x.p === cr.p && x.n.includes(cr.p));
    if(match) { match.n = cr.n; match.o = cr.o; match.c = cr.c; }
});
