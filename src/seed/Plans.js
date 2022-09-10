import { Plans } from "../models/Plans.js"

await Plans.create({
    'type':"Plan Basic",
    'price': 5000,
    'benefits':"1 ingresso Bronze por mês, 25% de desconto no combo de pipoca e refrigerante",
    'duration_months': 1
})

await Plans.create({
    'type':"Plan Standart",
    'price': 7990,
    'benefits':"2 ingressos Prata por mês, 35% de desconto no combo de pipoca e refrigerante, 35% de descontos nas salas IMAX 4K e 3D",
    'duration_months': 1
})

await Plans.create({
    'type':"Plan Premium",
    'price': 9990,
    'benefits':"3 ingressos Gold por mês, 60% de desconto no combo de pipoca e refrigerante, 60% de descontos nas salas IMAX 4K e 3D",
    'duration_months': 1
})


await Plans.create({
    'type':"Plan Black Duo",
    'price': 15990,
    'benefits':"4 ingressos Duplos Platina por mês, combo de pipoca e refrigerante inclusos, salas IMAX 4K e 3D inclusos ",
    'duration_months': 1
})
