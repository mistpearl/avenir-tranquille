import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Rules' })

export default function Rules() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-1xl sm:text-1xl leading-9 font-extrabold tracking-tight text-gray-900 sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Les règles du jeu
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Et voilà... l'heure est enfin arrivée !
          </p>
        </div>
        <div className="container py-12">
          <h4 className="block p-2 text-lg">Concept du jeu</h4>
          <p className="max-w-3xl text-base leading-relaxed font-normal text-slate-500 sm:text-sm">
            Bienvenue dans l'univers d'Avenir Tranquille ! <br />
            <br />
            Tellement de choses se sont passées ici-bas, si bien qu'un univers entier s'est
            développé autour de ces légendes.
            <br />
            Le jeu est un clone de Munchkin matiné du thème [Avenir Tranquille]. C'est un jeu pour 3
            à 7 joueurs.
            <br />
            Vous incarnerez une{' '}
            <span className="rounded bg-blue-400 px-2 py-1 text-white">Légende</span> qui affrontera
            d'autres légendes... <br />
            Ce ne seront pas les seuls embûches, car des{' '}
            <span className="rounded bg-red-400 px-2 py-1 text-white">monstres</span>, ainsi que des{' '}
            <span className="rounded bg-neutral-900 px-2 py-1 text-white">calamités</span> seront là
            !<br />
            Pour vous aider à travers ce périple à nul autre pareil, vous pourrez bénéficier de
            pouvoirs, et d'autres frioritures bien pensées que vous découvrirez plus tard... (voir
            plus bas)
            <br />
            <br />
            <i>Aussi étant</i> ... <br /> Le joueur ayant le plus gros solde de jours de congés est
            par défaut premier joueur ! <br />
            <i>
              (Eh oui, c'est l'avantage d'être <u>corporate</u>)
            </i>
            <br />
            Et n'oubliez-pas, comme dirait l'autre : "petit pas, petit pas, petis pas" !
          </p>

          <h4 className="mt-5 block p-2 text-lg">Préparation</h4>
          <p className="max-w-3xl text-base leading-relaxed font-normal text-slate-500 sm:text-sm">
            1. On mélange les cartes de type{' '}
            <span className="rounded bg-blue-400 px-2 py-1 text-white">Légende</span> et chaque
            joueur en pioche une au hasard. <br />
            2. Toutes les autres légendes sont mises de côté. Elles ne seront pas utilisées pour
            cette partie.
            <br />
            3. On mélange le reste des cartes pour former un deck.
            <br />
            4. Chaque joueur reçoit 3 cartes parmi le deck de base, qu'il peut équiper ou non (voir
            table des types)
          </p>

          <h4 className="mt-5 block p-2 text-lg">Avant de débuter le premier tour de jeu</h4>
          <p className="max-w-3xl text-base leading-relaxed font-normal text-slate-500 sm:text-sm">
            Chaque joueur pose sa{' '}
            <span className="rounded bg-blue-400 px-2 py-1 text-white">Légende</span> et les cartes
            qu'il souhaite équiper sur la table, face visible. <br />
            Chaque légende est limitée par défaut en équipements :
            <ul>
              <li>
                - deux <span className="rounded bg-green-400 px-2 py-1 text-white">trucs</span>
              </li>
              <li>
                - une <span className="rounded bg-purple-400 px-2 py-1 text-white">monture</span>
              </li>
              <li>
                - un <span className="rounded bg-orange-400 px-2 py-1 text-white">familier</span>
              </li>
            </ul>
            <u>Exemple</u> : la légende{' '}
            <span className="rounded bg-blue-400 px-2 py-1 text-white">Electrogène-man</span> a la
            monture
            <span className="rounded bg-purple-400 px-2 py-1 text-white">
              Le groupe électrogène
            </span>{' '}
            et le truc{' '}
            <span className="rounded bg-green-400 px-2 py-1 text-white">La fricadelle</span>{' '}
            équipés.
            <br />
            Attention ! Une carte équipée ne peut plus être déséquipée (sauf carte mentionnant cet
            effet)
          </p>

          <h4 className="mt-5 block p-2 text-lg">Un tour de jeu</h4>
          <p className="max-w-3xl text-base leading-relaxed font-normal text-slate-500 sm:text-sm">
            <ul>
              <li>
                - Le joueur peut optionnellement jouer une carte monstre pour : le combattre /
                attaquer un autre joueur
              </li>
              <li>- Puis il doit piocher la première carte du deck central</li>
              <small>
                Si c'est un monstre, il doit le combattre, sinon il récupère la carte en main.
              </small>
            </ul>
            A tout moment, les joueurs peuvent intervenir pour jouer une carte qui le permet.
            <h5>
              Règle d'or : en cas d'exception, le texte de la carte prévaut sur la règle du jeu!
            </h5>
          </p>

          <h4 className="mt-5 block p-2 text-lg">Les combats</h4>
          <p className="max-w-3xl text-base leading-relaxed font-normal text-slate-500 sm:text-sm">
            Pour vaincre un monstre, il faut atteindre ou dépasser sa force. <br />
            On additionne l'ensemble des cartes équipées par le / les joueurs qui participent.{' '}
            <br />
            Par défaut, la légende a 1 de force.
            <br />
            <ul>
              <li>
                - En cas de succès, le joueur gagne les bénéfices, et peut éventuellement les
                partager
              </li>
              <li>- En cas d'échec, il doit subir l'effet correspondant (si existant)</li>
            </ul>
            A tout moment, un joueur peut intervenir lors d'un combat pour jouer une carte. <br />
            <br />
            <u>Exemple de combat :</u>
            <ul>
              <li>
                -<span className="rounded bg-blue-400 px-2 py-1 text-white">Electrogène-man</span> a
                une force de 1 de base +
                <span className="rounded bg-purple-400 px-2 py-1 text-white">
                  le groupe électrogène
                </span>{' '}
                (+2)
              </li>
              <li>
                - Il combat un{' '}
                <span className="rounded bg-red-400 px-2 py-1 text-white">monstre</span> qui a 4 de
                force. Sans aide supplémentaire, il perdrait le combat
              </li>
              <li>
                -<span className="rounded bg-blue-400 px-2 py-1 text-white">Gregmli</span> joue un
                <span className="rounded bg-neutral-100 px-2 py-1">beignet au chocolat</span> pour
                ajouter 1 de force à{' '}
                <span className="rounded bg-blue-400 px-2 py-1 text-white">Electrogène-man</span>
              </li>
              <li>
                -<span className="rounded bg-blue-400 px-2 py-1 text-white">Gregmli</span> joue un
                <span className="rounded bg-neutral-900 px-2 py-1 text-white">
                  beignet à la pomme
                </span>{' '}
                pour enlever 1 de force à{' '}
                <span className="rounded bg-blue-400 px-2 py-1 text-white">Electrogène-man</span>
              </li>
              <li>
                - Sans cartes supplémentaires jouables ni jouées,
                <span className="rounded bg-blue-400 px-2 py-1 text-white">
                  Electrogène-man
                </span>{' '}
                perd le combat.
              </li>
            </ul>
          </p>

          <h4 className="mt-5 block p-2 text-lg">Type de carte</h4>
          <div className="relative flex h-full w-full flex-col overflow-scroll rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  <th className="border-blue-gray-100 bg-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-none font-normal antialiased opacity-70">
                      Typologie
                    </p>
                  </th>
                  <th className="border-blue-gray-100 bg-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-none font-normal antialiased opacity-70">
                      Description
                    </p>
                  </th>
                  <th className="border-blue-gray-100 bg-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-none font-normal antialiased opacity-70">
                      Limite
                    </p>
                  </th>
                  <th className="border-blue-gray-100 bg-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-none font-normal antialiased opacity-70">
                      Couleur
                    </p>
                  </th>
                  <th className="border-blue-gray-100 bg-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-none font-normal antialiased opacity-70">
                      Divers
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Légende
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Votre personnage pendant la partie. <br />
                      C'est vous quoi. Oui vous !
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Unique
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      <span className="rounded bg-blue-400 px-4 py-2 text-white">Bleu</span>
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Chaque Légende possède un super-pouvoir activable <br />
                      une fois par partie. Ce super-pouvoir peut être <br />
                      réactivé ou désactivé à l'aide de cartes spéciales.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Familier
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Un allié inestimable qui vous vient en aide <br />
                      Parfois il peut aussi vous être un peu inutile...
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Unique
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      <span className="rounded bg-orange-400 px-4 py-2 text-white">Orange</span>
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Reste sur le terrain sauf si une carte la bannit
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Monture
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Vroum vroum, tut tut ! <br />
                      Chaque légende a sa monture ! <br />
                      Trouvez-là, et bénéficiez du max!
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Unique
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      <span className="rounded bg-purple-400 px-4 py-2 text-white">Violet</span>
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Reste sur le terrain sauf si une carte la bannit
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Truc
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Des objets plus ou moins loufoques <br />
                      qui sont associés ou non aux légendes <br />
                      leur donnant de la force !
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Deux
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      <span className="rounded bg-green-400 px-4 py-2 text-white">Vert</span>
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Reste sur le terrain sauf si une carte la bannit
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Calamité
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Effet négatif qui vise à pénaliser un joueur <br />
                      par exemple : faire perdre de la force
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Aucune
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      <span className="rounded bg-neutral-900 px-4 py-2 text-white">Noir</span>
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Est défaussé dès l'utilisation
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Bénédiction
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Effet positif qui vise un joueur <br />
                      par exemple : faire gagner de la force
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Aucune
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      <span className="rounded bg-neutral-100 px-4 py-2">Blanc</span>
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Est défaussé dès l'utilisation
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Bêtise
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Effet un peu bêbête mais qui servira !<br />
                      Surprenez vos adversaires avec ces cartes.
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Aucune
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      <span className="rounded bg-gray-400 px-4 py-2 text-white">Gris</span>
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Est défaussé dès l'utilisation
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Monstre
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      L'ensemble de nos ennemis jurés!
                      <br />
                      Clients, compagnies, et bien d'autres!
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Aucune
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      <span className="rounded bg-red-400 px-4 py-2 text-white">Rouge</span>
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Vient dans les points de victoire
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Rôle
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Ajoute des statistiques à votre légende
                      <br />
                      Telles que : le nombre de trucs équipables...
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Unique
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      <span className="rounded bg-yellow-400 px-4 py-2 text-white">Jaune</span>
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b p-4">
                    <p className="text-blue-gray-900 block font-sans text-sm leading-normal font-normal antialiased">
                      Reste sur le terrain sauf si une carte la bannit
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="mt-5 block p-2 text-lg">Fin de partie</h4>
          <p className="max-w-3xl text-base leading-relaxed font-normal text-slate-500 sm:text-sm">
            La partie s'arrête quand la carte
            <span className="rounded bg-neutral-900 px-2 py-1 text-white">
              L'heure est arrivée
            </span>{' '}
            a été dévoilée. <br />
            On compte alors le total de force de chaque joueur. <br />
            Pour ce faire, on ajoute le total de force de chaque joueur (sa force de base, tout ce
            qui lui est équipé, plus l'ensemble des monstres qu'il a vaincu.(1 point par monstre){' '}
            <br />
            <br />
            En cas d'égalité, celui qui a la carte [Jaque] décide qui gagne !
          </p>
        </div>
      </div>
    </>
  )
}
