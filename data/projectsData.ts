interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Le beignet au chocolat',
    description: `Le fameux beignet au chocolat apprécié par tous !.`,
    imgSrc: '/static/images/benediction/beignet_au_chocolat.png',
    href: '/blog/benediction/beignet-au-chocolat',
  },
  {
    title: 'La prime de participation',
    description: `Ouiiii de l'argent ! Et il coule à flots en plus !`,
    imgSrc: '/static/images/benediction/Prime_de_participation.png',
    href: '/blog/benediction/prime-de-participation',
  },
  {
    title: 'xSpYDer',
    description: `Le streamer décliné en légende, il détient les clefs du château, il détient le pouvoir de la fame et du rire !.`,
    imgSrc: '/static/images/legende/xspyder59x.png',
    href: '/blog/legende/xspyder59x',
  },
  {
    title: "Le pipi dans l'imprimante",
    description: `Une situation loufoque, oh que oui... qui met en scène un chat, un service entier, et du pipi...`,
    imgSrc: '/static/images/calamite/le_pipi_dans_l_imprimante.png',
    href: '/blog/calamite/pipi-imprimante',
  },
  {
    title: 'Benard',
    description: `C'est la légende imitatrice, spécialiste du canard !`,
    imgSrc: '/static/images/legende/benard.png',
    href: '/blog/legende/benard',
  },
  {
    title: "L'enfant perdu",
    description: `IL a besoin d'aide, alors aidez-le !`,
    imgSrc: '/static/images/familier/enfant_perdu.png',
    href: '/blog/familier/enfant-perdu',
  },
  {
    title: "L'heure est arrivée",
    description: `La partie est terminée, c'est tout ! Remballez vos cartes, il est l'heure de savoir qui est le meilleur !`,
    imgSrc: '/static/images/calamite/lheure_est_arrivee.png',
    href: '/blog/calamite/heure-arrivee',
  },
]

export default projectsData
