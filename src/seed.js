import { Movies } from "./models/Movies.js"
import { Plans } from "./models/Plans.js"
import {Tickets} from "./models/Tickets.js"
import {Users} from "./models/Users.js"

await Movies.create({
    'name':"ÓRFÃ 2: A ORIGEM",
    'creation_date': '2022-08-19',
    'synopsis':"Órfã 2: A Origem é do mesmo diretor dos sucessos Boneco do Mal (2016) e Filha do Mal (2012). Leena (Isabelle Fuhrman) consegue fugir de uma clínica psiquiátrica, na Europa. Ao fingir ser Esther, filha de um casal rico, desaparecida há quatro anos, ela consegue viajar para os Estados Unidos. Lá, é recebida com muita alegria e carinho pela nova família. Sob os cuidados especiais de uma psicóloga, Leena não demora muito para demonstrar um estranho comportamento. Enquanto isso, após investigar o passado recente da jovem, um detetive faz uma descoberta sinistra. Ao mesmo tempo, sua mãe (Julia Stiles) percebe algo de assustador nela e adota uma postura defensiva diante de um possível perigo.",
    'classification': 'CLASSIFICAÇÃO-16',
    'genre': "SUSPENSE / TERROR",
    'duration_minutes': 99,
    'movie_sessions': '12:00/12:30/13:00/13:30',
    'movie_image_link':'https://media.discordapp.net/attachments/1013933622576828507/1020143214793076778/aorfa2.jpg?width=315&height=473'
})

await Movies.create({
    'name':"O Telefone Preto",
    'creation_date': '2022-07-21',
    'synopsis':"Finney Shaw, de 13 anos, é sequestrado por um sádico assassino mascarado e mantido em um porão à prova de som. Até que um telefone desconectado na parede começa a tocar, e ele logo descobre que pode ouvir as vozes das vítimas anteriores do maníaco.",
    'classification': 'CLASSIFICAÇÃO-16',
    'genre': "SUSPENSE / TERROR",
    'duration_minutes': 102,
    'movie_sessions': '12:00/12:30/13:00/13:30',
    'movie_image_link': 'https://media.discordapp.net/attachments/1013933622576828507/1020143214793076778/aorfa2.jpg?width=315&height=473'
})

await Movies.create({
    'name':"After - Depois da Promessa",
    'creation_date': '2022-08-25',
    'synopsis':"Em AFTER - DEPOIS DA PROMESSA o casal 'Hessa' está crescendo e pode nunca mais ser o mesmo. Embora já tenham encarado inúmeras adversidades, o capítulo final trará um desfecho de conto de fadas ou destruirá o relacionamento apaixonado e tóxico? Tessa não é mais a garota doce e ingênua de antes. Ela entende todas as emoções que estão se formando em Hardin e sabe que é a única que pode acalmá-lo quando ele explode. Ele precisa dela, mas ela precisa dele?",
    'classification': 'CLASSIFICAÇÃO-16',
    'genre': "ROMANCE/DRAMA",
    'duration_minutes': 105,
    'movie_sessions': '12:00/12:30/13:00/13:30',
    'movie_image_link': 'https://media.discordapp.net/attachments/1013933622576828507/1020143214793076778/aorfa2.jpg?width=315&height=473'
})

await Movies.create({
    'name':"Minions 2: A Origem de Gru",
    'creation_date': '2022-06-30',
    'synopsis':"Nos anos 1970, o jovem Gru tenta entrar para um time de supervilões, mas a entrevista é desastrosa e ele e seus minions acabam fugindo do grupo de mal-feitores.",
    'classification': 'CLASSIFICAÇÃO-LIVRE',
    'genre': "Comédia/Aventura",
    'duration_minutes': 90,
    'movie_sessions': '12:00/12:30/13:00/13:30',
    'movie_image_link': 'https://media.discordapp.net/attachments/1013933622576828507/1020143214793076778/aorfa2.jpg?width=315&height=473'
    
})

await Movies.create({
    'name':"Thor: Amor e Trovão",
    'creation_date': '2022-07-07',
    'synopsis':"Thor: Amor e Trovão”, da Marvel Studios, encontra o Deus do Trovão numa jornada diferente de tudo o que já enfrentou – a procura pela paz interior. Mas a reforma de Thor é interrompida por um assassino galáctico conhecido como Gorr, o Carniceiro dos Deuses, que procura a extinção dos deuses. Para combater a ameaça, Thor pede a ajuda da Rei Valkiria, de Korg e da ex-namorada Jane Foster, que – para surpresa de Thor – empunha inexplicavelmente o seu martelo mágico, Mjolnir, e se intitula a Poderosa Thor. Juntos, eles embarcam numa angustiante aventura cósmica para descobrir o mistério da vingança do Carniceiro dos Deuses e detê-lo antes que seja tarde demais.",
    'classification': 'CLASSIFICAÇÃO-14',
    'genre': "Ação/Aventura",
    'duration_minutes': 119,
    'movie_sessions': '12:00/12:30/13:00/13:30',
    'movie_image_link': 'https://media.discordapp.net/attachments/1013933622576828507/1020143214793076778/aorfa2.jpg?width=315&height=473'
})

await Movies.create({
    'name':"O Lendário Cão Guerreiro",
    'creation_date': '2022-08-25',
    'synopsis':"O perverso vilão felino Ika Chu (Ricky Gervais) e seu capanga Ohga (George Takei) se preparam para pôr um plano terrível em prática que pode acabar com a cidade de Kakamucho. A tarefa de combater esse perigo é tomada por Hank (Michael Cera), um cachorro que sonha em ser um grande samurai. Ele acaba convencendo Jimbo (Samuel L. Jackson), um gato que outrora fora um grande guerreiro, a se tornar seu mentor, o que faz com que comece uma incrível amizade entre os dois. ",
    'classification': 'CLASSIFICAÇÃO-LIVRE',
    'genre': "Animação, Comédia, Artes Marciais, Família",
    'duration_minutes': 97,
    'movie_sessions': '12:00/12:30/13:00/13:30',
    'movie_image_link': 'https://media.discordapp.net/attachments/1013933622576828507/1020143214793076778/aorfa2.jpg?width=315&height=473'
})

await Movies.create({
    'name':"Sorria",
    'creation_date': '2022-09-29',
    'synopsis':"Após um paciente sofrer um trauma, um médico começa a se distrair em seus próprios pensamentos.",
    'classification': 'CLASSIFICAÇÃO-14',
    'genre': "Terror/Terror psicológico ",
    'duration_minutes': 115,
    'movie_sessions': '12:00/12:30/13:00/13:30',
    'movie_image_link': 'https://media.discordapp.net/attachments/1013933622576828507/1020143214793076778/aorfa2.jpg?width=315&height=473'
})

await Movies.create({
    'name':"HOMEM-ARANHA- SEM VOLTA PARA CASA-VERSÃO ESTENDIDA",
    'creation_date': '2022-09-02',
    'synopsis':"Após o enorme sucesso nos cinemas, em 2021, Homem-Aranha: Sem Volta Para Casa retorna aos cinemas com mais 11 minutos de cenas adicionais inéditas. A vida de Peter Parker (Tom Holland) tornou-se um verdadeiro caos depois que sua identidade foi revelada para o mundo pelo vilão Mysterio. A inseparável Mary Jane (Zendaya) tenta ajudá-lo a encarar o fato como algo positivo, mas o jovem super-herói não se conforma e busca uma solução. Parker procura o parceiro Doutor Estranho (Benedict Cumberbatch) e pergunta se ele não conseguiria retirar essa informação da memória das pessoas. O arriscado feitiço foi colocado em prática, mas ao alterar a realidade eles criaram uma situação ainda mais perigosa. ",
    'classification': 'CLASSIFICAÇÃO-12',
    'genre': "AÇÃO / AVENTURA",
    'duration_minutes': 157,
    'movie_sessions': '12:00/12:30/13:00/13:30',
    'movie_image_link': 'https://media.discordapp.net/attachments/1013933622576828507/1020143214793076778/aorfa2.jpg?width=315&height=473'
    
})

await Movies.create({
    'name':"NÃO! NÃO OLHE!",
    'creation_date': '2022-08-25',
    'synopsis':"Não! Não Olhe! é de Jordan Peele, diretor e roteirista dos sucessos Corra! (2017) e Nós (2019). A vida da bem sucedida criadora de cavalos Emerald (Keke Palmer), orgulhosa da propriedade em Hollywood, nunca mais será a mesma. E a de seu irmão OJ (Daniel Kaluuya) não será diferente. Após a estranha morte do pai deles, curiosos fenômenos vindos do céu pareciam ser promissores para o rancho. Quando eles descobrem que as coisas não são bem como imaginavam, tudo muda radicalmente e o local isolado transforma-se em um cenário assustador. Agora, o orgulho deu lugar ao medo e as misteriosas descobertas tornam-se cada vez mais aterrorizantes. Do mesmo produtor do recente A Lenda de Candyman (2021).",
    'classification': 'CLASSIFICAÇÃO-14',
    'genre': "TERROR",
    'duration_minutes': 130,
    'movie_sessions': '12:00/12:30/13:00/13:30',
    'movie_image_link': 'https://media.discordapp.net/attachments/1013933622576828507/1020143214793076778/aorfa2.jpg?width=315&height=473'
    
})

await Movies.create({
    'name':"UM LUGAR BEM LONGE DAQUI",
    'creation_date': '2022-09-01',
    'synopsis':"Baseado no best seller de mesmo nome, escrito por Delia Owens. Durante anos, a cidade de Barkley Cove conviveu com a história da garotinha que sobreviveu sozinha, abandonada em um brejo. Agora, a jovem reclusa Kya (Daisy Edgar-Jones) continua, indiretamente, alimentando os rumores sobre a Menina do Brejo. Sem qualquer vestígio de maldade sobre as pessoas, ela é inteligente, pura e bonita. Ao conhecer dois jovens da comunidade, um novo e estimulante mundo é descoberto. Tudo muda quando um deles é encontrado morto e Kya é considerada a principal suspeita. Na medida em que a investigação avança, aumenta o mistério e a ameaça de revelação de segredos do brejo é real. ",
    'classification': 'CLASSIFICAÇÃO-14',
    'genre': "DRAMA / SUSPENSE",
    'duration_minutes': 126,
    'movie_sessions': '12:00/12:30/13:00/13:30',
    'movie_image_link': 'https://media.discordapp.net/attachments/1013933622576828507/1020143214793076778/aorfa2.jpg?width=315&height=473'
})

await Plans.create({
    'type':"Plan Basic",
    'price': 5000,
    'benefits':"1 ingresso Bronze por mês, 25% de desconto no combo de pipoca e refrigerante",
    'duration_months': 1
})

await Plans.create({
    'type':"Plan Standart",
    'price': 7990,
    'benefits':"2 ingressos Prata por mês, 35% de desconto no combo de pipoca e refrigerante, 25% de desconto em todos os ingressos, exceto platina e diamante",
    'duration_months': 1
})

await Plans.create({
    'type':"Plan Premium",
    'price': 9990,
    'benefits':"3 ingressos Gold por mês, 50% de desconto no combo de pipoca e refrigerante, 35% de desconto em todos os ingressos",
    'duration_months': 1
})


await Plans.create({
    'type':"Plan Black Duo",
    'price': 17990,
    'benefits':"2 ingressos Platina e Diamante por mês, 2 combos de pipoca e refrigerante inclusos por mês, 50% de desconto em todos os ingressos",
    'duration_months': 1
})

await Tickets.create({
    'type':"bronze",
    'price': 1500,
    'description':"Acesso à sala bronze",
    'score': 5
})

await Tickets.create({
    'type':"prata",
    'price': 2500,
    'description':"Acesso à sala prata",
    'score': 10
})


await Tickets.create({
    'type':"gold",
    'price': 3500,
    'description':"Acesso à sala gold",
    'score': 15
})


await Tickets.create({
    'type':"platina",
    'price': 4500,
    'description':"Acesso à sala platina",
    'score': 20
})


await Tickets.create({
    'type':"diamante",
    'price': 5500,
    'description':"Acesso à sala diamante",
    'score': 25
})

await Users.create({
    "name":"Amanda Pereira da Silva",
    "age": 24,
    "birthday": "1996-05-18",
    "cell_phone_number": "(31) 98788-9999",
    "cpf":"899.999.999-91",
    "email":"amanda.silva@gmail.com",
    "password":"Am@nda9605",
    "amount_points": 500,
    "plan_id": 1
})

await Users.create({
    "name":"Luciane Diniz Oliveira",
    "age": 40,
    "birthday": "1982-03-21",
    "cell_phone_number": "(81) 97788-9919",
    "cpf":"199.999.999-92",
    "email":"luciane.diniz@yahoo.com",
    "password":"Oliveir@2103",
    "amount_points": 200,
    "plan_id": 2
})


await Users.create({
    "name":"Carlos Alberto da Silva",
    "age": 33,
    "birthday": "1989-01-08",
    "cell_phone_number": "(81) 98188-9912",
    "cpf":"119.999.999-91",
    "email":"carlos1989@gmail.com",
    "password":"Albertosilv@",
    "amount_points": 800,
    "plan_id": 3
})

await Users.create({
    "name":"Alexandre bastos",
    "age": 20,
    "birthday": "2002-03-21",
    "cell_phone_number":"(75) 99188-7565",
    "cpf":"089.456.999-04",
    "email":"ale21@gmail.com",
    "password":"al3bastos",
    "amount_points": 4500,
    "plan_id": 4
})

await Users.create({
    "name": "Luma",
    "age": 20,
    "birthday": "2003-03-08",
    "cell_phone_number":"(81) 97718-9919",
    "cpf":"087.145.321-04",
    "email":"luma.novo@gmail.com",
    "password":"Luma123",
    "amount_points": 10000,
    "plan_id": 3
})

await Users.create({
    "name": "Beatriz",
    "age": 20,
    "birthday": "2000-03-05",
    "cell_phone_number": "(25) 92345-1365",
    "cpf":"087.453.097-04",
    "email":"bia321@gmail.com",
    "password":"B1a123",
    "amount_points": 1300,
    "plan_id": 2
})