# Article 15

> *"La societe a le droit de demander compte a tout agent public de son administration."*
> -- Article 15, Declaration des Droits de l'Homme et du Citoyen, 1789

**Article 15** est une application iOS citoyenne, gratuite, independante et non partisane qui rassemble les donnees publiques sur les institutions, les elus, la transparence et la vie democratique francaise.

Concue comme un outil pedagogique complet pour l'EMC (Enseignement Moral et Civique), elle s'adresse aux eleves du college au superieur, aux enseignants et a tout citoyen curieux.

---

## Chiffres cles

| | |
|---|---|
| **350+** fichiers Swift | **5** onglets principaux |
| **100+** institutions detaillees | **40+** ecrans specialises |
| **6** parcours educatifs avec quiz | **30+** sources officielles |
| **200+** termes dans le glossaire | **19** traites internationaux |

---

## Garanties

| Garantie | Detail |
|---|---|
| 100% gratuite | Pas d'abonnement, pas d'achat integre, pas de freemium |
| Zero publicite | Aucun sponsor, aucune influence commerciale |
| Non partisane | Donnees brutes sans orientation politique |
| Conforme RGPD | Aucune donnee personnelle collectee, aucun traceur, aucun cookie |
| Open data | 30+ sources publiques et verifiables |
| Projet citoyen | Developpee benevolement par un citoyen independant |

---

## Plan complet de l'application

```
Article 15
│
├── Accueil
│   ├── Compte a rebours electoral (presidentielle 2027)
│   ├── Petitions tendance (carrousel)
│   ├── Focus Sur (carrousel, 13+ dossiers thematiques)
│   ├── Fil d'actualites (carrousel)
│   ├── Recherche globale
│   ├── Onboarding (premier lancement)
│   └── A propos
│       ├── Application
│       ├── Onglets
│       ├── Sources
│       ├── Contact
│       ├── Legal
│       ├── Accessibilite
│       └── Diagnostic API
│
├── Politique
│   ├── Institutions
│   │   ├── Presidence de la Republique
│   │   ├── Assemblee nationale
│   │   ├── Senat
│   │   ├── Gouvernement
│   │   ├── Conseil constitutionnel
│   │   ├── Autorites independantes
│   │   ├── Institutions europeennes
│   │   └── ... (100+ institutions avec fiches detaillees)
│   │       ├── Annuaire (membres, organigramme)
│   │       ├── Budget
│   │       └── Recherche mairie
│   │
│   ├── Representants
│   │   ├── Politiciens (filtres: leaders, deputes, senateurs)
│   │   │   ├── Fiche detaillee
│   │   │   ├── Votes et positions
│   │   │   ├── Interets et declarations
│   │   │   └── Relations et contacts
│   │   ├── Partis politiques
│   │   │   ├── Fiche parti
│   │   │   ├── Membres
│   │   │   └── Positions
│   │   └── Groupes parlementaires
│   │       ├── Fiche groupe
│   │       └── Membres
│   │
│   ├── Debat d'idees
│   │   ├── Themes politiques
│   │   │   └── Positions des groupes par theme
│   │   ├── Propositions electorales 2022 (15 candidats, 464 propositions)
│   │   └── Promesses (Hollande & Macron)
│   │
│   └── Vie democratique
│       ├── Travaux parlementaires
│       │   ├── Assemblee nationale (seances, textes, QAG, rapports)
│       │   └── Senat (seances, textes, rapports)
│       ├── Calendrier politique (evenements cles)
│       ├── Scrutins (recherche, detail, votes par groupe)
│       └── Elections (detail par election)
│
├── Citoyen
│   ├── Focus Sur
│   │   ├── Antisemitisme
│   │   ├── Immigration
│   │   ├── Aide active a mourir
│   │   ├── Immunite presidentielle
│   │   ├── Lanceurs d'alerte
│   │   ├── Catastrophes naturelles
│   │   ├── Narcotrafic
│   │   ├── Neonicotinoides
│   │   ├── Parking hospitalier
│   │   ├── PFAS
│   │   ├── Prix des carburants
│   │   ├── SMIC
│   │   └── ... (liste evolutive)
│   │
│   ├── Participer & proposer
│   │   ├── Petitions
│   │   ├── S'exprimer (expression citoyenne)
│   │   ├── Democratie participative
│   │   ├── RIC & referendums
│   │   ├── Participation locale
│   │   └── Outils numeriques citoyens
│   │
│   ├── Transparence
│   │   ├── Scrutins (base de donnees des votes)
│   │   ├── Lobbying (registre HATVP)
│   │   ├── Declarations (patrimoine, interets)
│   │   ├── Cumul des mandats
│   │   ├── Justice
│   │   ├── Statistiques
│   │   ├── Cout de la democratie
│   │   └── Levee d'immunite
│   │
│   ├── Economie & travail
│   │   ├── Budget de l'Etat
│   │   │   ├── Apercu general
│   │   │   ├── Recettes
│   │   │   ├── Missions budgetaires (+ detail par mission)
│   │   │   ├── Dette
│   │   │   └── Simulateur interactif
│   │   ├── Etat & economie
│   │   │   ├── Budget
│   │   │   ├── Portefeuille de l'Etat
│   │   │   ├── Frise chronologique
│   │   │   └── Debats
│   │   ├── Revenus
│   │   │   ├── Apercu
│   │   │   ├── Inegalites
│   │   │   └── Comparaison europeenne
│   │   ├── Travail & emploi
│   │   │   ├── Apercu
│   │   │   ├── Population active
│   │   │   ├── Donnees regionales
│   │   │   └── Comparaison europeenne
│   │   ├── Commerce exterieur
│   │   │   ├── Secteurs
│   │   │   ├── Balance et partenaires
│   │   │   └── Dependances et reperes
│   │   └── Fraudes (comparatif)
│   │       ├── Comparatif general
│   │       ├── Fraude fiscale
│   │       ├── Fraude sociale
│   │       ├── Corruption
│   │       ├── Evasion fiscale
│   │       ├── Blanchiment
│   │       └── Donnees regionales
│   │
│   ├── Social
│   │   ├── Jeunesse
│   │   │   ├── Apercu
│   │   │   ├── Formation
│   │   │   ├── Comparaison europeenne
│   │   │   └── Chomage des jeunes
│   │   ├── Retraites
│   │   │   └── Depenses
│   │   ├── Pauvrete en France
│   │   ├── Minima sociaux
│   │   │   └── Profils beneficiaires
│   │   └── Handicap
│   │       ├── Aides
│   │       ├── Evolution
│   │       └── Structures
│   │
│   ├── Environnement & ethique
│   │   ├── Ecologie
│   │   │   ├── Climat
│   │   │   ├── Energie & emissions
│   │   │   ├── Automobile
│   │   │   ├── Logement (DPE, DVF, SRU)
│   │   │   └── Budget & debats
│   │   ├── Energie
│   │   │   ├── En direct (mix energetique RTE)
│   │   │   ├── Donnees regionales
│   │   │   ├── Historique
│   │   │   └── Echanges
│   │   └── Bioethique
│   │       ├── Apercu
│   │       ├── Chiffres
│   │       ├── Themes
│   │       └── Legislation
│   │
│   └── Defense & service public
│       ├── Service national
│       │   ├── SNU
│       │   ├── JDC
│       │   ├── Defense
│       │   ├── Budget
│       │   ├── Effectifs
│       │   ├── Histoire
│       │   └── Service civique
│       ├── Anciens combattants
│       │   ├── Apercu
│       │   ├── Pensions
│       │   ├── Memoire
│       │   └── Budget
│       ├── Metiers de l'Etat
│       │   ├── Apercu
│       │   ├── Police
│       │   ├── Gendarmerie
│       │   ├── Justice
│       │   ├── Douanes
│       │   └── Secours
│       ├── Population active
│       └── Fonction publique
│           ├── Apercu
│           ├── Avantages
│           ├── Inconvenients
│           ├── Territoire
│           ├── Remunerations
│           └── Hauts fonctionnaires
│
├── Savoir
│   ├── Mode Consulter
│   │   ├── Le vote
│   │   │   ├── Fondamentaux du vote (concepts)
│   │   │   └── Elections (nationales, locales, autres)
│   │   │
│   │   ├── La Republique
│   │   │   ├── Principes republicains
│   │   │   └── Symboles de la Republique
│   │   │
│   │   ├── Institutions & pouvoirs
│   │   │   ├── Schemas de gouvernance
│   │   │   └── Concepts institutionnels
│   │   │
│   │   ├── Textes & droit
│   │   │   ├── Textes francais (DDHC, Constitution, Preambule 1946, Charte environnement)
│   │   │   ├── Textes internationaux (DUDH, CEDH, traites UE)
│   │   │   ├── 19 traites internationaux ratifies
│   │   │   ├── Hierarchie des normes
│   │   │   └── Recherche juridique
│   │   │
│   │   ├── Societe & territoires
│   │   │   ├── Jours feries (histoire et signification)
│   │   │   ├── Outre-mer (13 territoires)
│   │   │   ├── Frise coloniale (5 siecles)
│   │   │   └── Francafrique
│   │   │
│   │   └── Ressources
│   │       ├── Esprit critique (guide)
│   │       ├── Glossaire (200+ termes)
│   │       └── Sites utiles
│   │
│   └── Mode Parcours (6 parcours educatifs)
│       ├── [Debutant] Les fondamentaux de la Republique (3e-Seconde)
│       ├── [Debutant] Voter, mode d'emploi (3e-Seconde)
│       ├── [Intermediaire] Comprendre les institutions (1re-Terminale)
│       ├── [Intermediaire] Societe et democratie (1re-Terminale)
│       ├── [Avance] La France dans le monde (Terminale-Superieur)
│       └── [Avance] Histoire coloniale et Outre-mer (Terminale-Superieur)
│           └── Chaque parcours :
│               ├── Etapes / lecons
│               ├── Quiz d'evaluation
│               └── Resultats et suivi de progression
│
├── Actu
│   ├── Actualites (fil RSS parlementaire)
│   └── Journal Officiel (publications en temps reel)
│
└── Widget iOS
    └── Contenu at-a-glance sur l'ecran d'accueil
```

---

## Sources de donnees

Les donnees proviennent exclusivement de sources publiques et ouvertes, consultees en temps reel via leurs API officielles. Aucun serveur intermediaire.

| Source | Donnees |
|---|---|
| Assemblee nationale | Deputes, scrutins, travaux, commissions |
| Senat | Senateurs, scrutins, rapports, publications |
| Legifrance | Textes de loi, Journal Officiel |
| data.gouv.fr | Donnees ouvertes gouvernementales |
| HATVP | Lobbying, declarations de patrimoine et interets |
| RTE | Mix energetique en temps reel |
| INSEE | Statistiques economiques et sociales |
| Eurostat | Comparaisons europeennes |
| Banque mondiale | Donnees internationales |
| Wikidata | Photos officielles des elus |
| Gouvernement.fr | Actualites, calendrier |

---

## Architecture technique

| | |
|---|---|
| **Plateforme** | iOS (App Store) |
| **Framework** | SwiftUI |
| **Navigation** | TabView (5 onglets) + NavigationStack |
| **Backend** | Aucun (appels directs aux API publiques) |
| **Cache** | CacheService local + NetworkMonitor |
| **Services tiers** | Firebase Firestore (feedback), Crashlytics (crash reports) |
| **Deep links** | `article15://` (accueil, politique, citoyen, savoir, actu, scrutin, parlementaire, institution...) |
| **Siri Shortcuts** | Integration AppShortcuts |
| **Spotlight** | Indexation du contenu dans la recherche iOS |
| **Widget** | Widget iOS pour l'ecran d'accueil |
| **Accessibilite** | VoiceOver, labels, motion reduction, conformite WCAG |
| **Code source** | Proprietaire |

---

## Ancrage dans les programmes scolaires

| Cycle / Niveau | Theme | Contenus Article 15 |
|---|---|---|
| Cycle 3 (CM1-6e) | Le droit et la regle | Symboles, valeurs republicaines, fiches institutions |
| Cycle 4 (5e-3e) | Le jugement et l'engagement | Elections, scrutins, petitions, participation citoyenne |
| Seconde | La liberte, les libertes | Textes fondamentaux, hierarchie des normes, organigramme des pouvoirs |
| Premiere | La societe democratique | Transparence, lobbying HATVP, vie parlementaire |
| Terminale (HGGSP) | Democratie et enjeux contemporains | Budget, ecologie, donnees economiques, relations internationales |
| Superieur | Sciences politiques et droit | Traites internationaux, recherche juridique, institutions europeennes |

---

## Donnees personnelles et confidentialite

- **Aucune donnee personnelle collectee**
- Aucun compte utilisateur requis
- Aucun traceur, cookie ou SDK publicitaire
- Firebase utilise uniquement pour les retours utilisateurs volontaires et les rapports de crash anonymes

Pages legales detaillees :
- [Politique de confidentialite](privacy.html)
- [Conditions generales d'utilisation](cgu.html)

---

## Contact

- Email : contact@article15.app
- Email legal : article15app@proton.me
