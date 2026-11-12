/* Índice de demonstração baseado nas quatro páginas fornecidas pelo usuário.
   Os títulos foram adaptados/resumidos para navegação, não são reprodução das lições. */
window.IDIOMAFELIX_SECOES = [
{title:'Present and past',pt:'Presente e passado',units:[
'Present continuous (I am doing)','Present simple (I do)','Present continuous x present simple — 1','Present continuous x present simple — 2','Past simple (I did)','Past continuous (I was doing)']},
{title:'Present perfect and past',pt:'Present perfect e passado',units:[
'Present perfect — 1 (I have done)','Present perfect — 2 (I have done)','Present perfect continuous (I have been doing)','Present perfect continuous x simple','How long have you (been)…?','For / since / when / how long','Present perfect x past simple — 1','Present perfect x past simple — 2','Past perfect (I had done)','Past perfect continuous','Have and have got','Used to (do)']},
{title:'Future',pt:'Futuro',units:[
'Present tenses for the future','Be going to','Will and shall — 1','Will and shall — 2','Will x going to','Will be doing / will have done','When I do / when I’ve done']},
{title:'Modals',pt:'Verbos modais',units:[
'Can / could / be able to','Could (do) / could have (done)','Must and can’t','May and might — 1','May and might — 2','Have to and must','Must / mustn’t / needn’t','Should — 1','Should — 2','I’d better / It’s time','Would','Can / could / would you…?']},
{title:'If and wish',pt:'Condições e desejos',units:['If I do / if I did','If I knew / I wish I knew','If I had known / I wish I had known','Wish']},
{title:'Passive',pt:'Voz passiva',units:['Passive — 1 (is done / was done)','Passive — 2 (be done / been done)','Passive — 3','It is said that / he is said to','Have something done']},
{title:'Reported speech',pt:'Discurso indireto',units:['Reported speech — 1','Reported speech — 2']},
{title:'Questions and auxiliary verbs',pt:'Perguntas e auxiliares',units:['Questions — 1','Questions — 2','Auxiliary verbs (have/do/can…)','Question tags']},
{title:'-ing and to…',pt:'Gerúndio e infinitivo',units:['Verb + -ing','Verb + to','Verb (+ object) + to','Verb + -ing or to — 1','Verb + -ing or to — 2','Verb + -ing or to — 3','Prefer / would rather','Preposition + -ing','Be/get used to','Verb + preposition + -ing','There’s no point in -ing','To… / for… / so that…','Adjective + to','To… / preposition + -ing','See somebody do / doing','-ing clauses']},
{title:'Articles and nouns',pt:'Artigos e substantivos',units:['Countable / uncountable — 1','Countable / uncountable — 2','Countable nouns with a/an and some','A/an and the','The — 1','The — 2','The — 3','The — 4','Names with / without the — 1','Names with / without the — 2','Singular and plural','Noun + noun','Possessive ’s and of']},
{title:'Pronouns and determiners',pt:'Pronomes e determinantes',units:['Myself / yourself / themselves','A friend of mine / my own','There… and it…','Some and any','No / none / any / nothing','Much / many / little / few','All / all of / most','Both / neither / either','All / every / whole','Each and every']},
{title:'Relative clauses',pt:'Orações relativas',units:['Relative clauses — 1: who/that/which','Relative clauses — 2','Relative clauses — 3: whose/whom/where','Relative clauses — 4','Relative clauses — 5','-ing and -ed clauses']},
{title:'Adjectives and adverbs',pt:'Adjetivos e advérbios',units:['Adjectives ending -ing and -ed','Adjectives: a nice new house','Adjectives and adverbs — 1','Adjectives and adverbs — 2','So and such','Enough and too','Quite / pretty / rather / fairly','Comparative — 1','Comparative — 2','Comparative — 3','Superlative','Word order — 1','Word order — 2','Still / any more / yet / already','Even']},
{title:'Conjunctions and prepositions',pt:'Conjunções e preposições',units:['Although / though / even though','In case','Unless / as long as / provided','As','Like and as','Like / as if','During / for / while','By and until / by the time']},
{title:'Prepositions',pt:'Preposições',start:121,units:['At / on / in (time)','On time / in time','In / at / on (position) — 1','In / at / on (position) — 2','In / at / on (position) — 3','To / at / in / into','In / on / at (other uses)','By','Noun + preposition','Adjective + preposition — 1','Adjective + preposition — 2','Verb + preposition — 1','Verb + preposition — 2','Verb + preposition — 3','Verb + preposition — 4','Verb + preposition — 5']},
{title:'Phrasal verbs',pt:'Phrasal verbs',units:['Phrasal verbs — Introduction','Phrasal verbs — in/out','Phrasal verbs — out','Phrasal verbs — on/off (1)','Phrasal verbs — on/off (2)','Phrasal verbs — up/down','Phrasal verbs — up (1)','Phrasal verbs — up (2)','Phrasal verbs — away/back']}
];
let n=1;for(const s of window.IDIOMAFELIX_SECOES){if(s.start)n=s.start;s.units=s.units.map(label=>({number:n++,label,hasLesson:[1,27].includes(n-1)}));}
