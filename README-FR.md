# Test Technique Infobam

## Pour Commencer

1. **Forker le Dépôt (Obligatoire)**
   - Forkez ce dépôt sur votre compte GitHub avant de commencer
   - Tout le travail doit être effectué dans votre dépôt forké
   - Assurez-vous que votre dépôt reste public jusqu'à l'évaluation
   - Créez des branches de fonctionnalités pour chaque composant ou fonctionnalité
   - Soumettez votre travail via des Pull Requests

## Contexte

Ce test technique simule un environnement de développement réel où vous travaillerez au sein d'une équipe de 5 développeurs. Nous attendons de vous que vous suiviez les pratiques standard de développement en équipe, notamment un workflow git approprié, une documentation claire et un code maintenable. Votre travail doit refléter la façon dont vous contribueriez à une base de code partagée.

## Objectif

Créer une application de présentation de véhicules en utilisant Next.js et un backend de votre choix (NestJS ou Routes API Next.js). L'application doit afficher une liste de véhicules avec des capacités de filtrage et de tri.
Vous pouvez soit :

- Utiliser les données fictives fournies
- Implémenter votre propre backend avec la structure de données fournie

## Fonctionnalités Requises

- Design responsive (mobile, tablette, desktop)
- Afficher une liste paginée de véhicules
- Filtrer les véhicules par fabricant, type et année
- Trier les véhicules par prix et année
- Afficher des informations détaillées sur les véhicules
- Implémenter un workflow git approprié (branches de fonctionnalités, commits clairs, PRs)

## Structure de Données

```typescript
interface Vehicle {
  id: string;
  manufacturer: string; // ex., "BMW", "Tesla", "Toyota"
  model: string; // ex., "X5", "Model 3", "Camry"
  year: number;
  type: VehicleType;
  price: number;
  fuelType: string;
  transmission: string;
  mileage?: number;
  features: string[];
  images: string[];
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
enum VehicleType {
  SUV = "SUV",
  SEDAN = "SEDAN",
  TRUCK = "TRUCK",
  SPORTS = "SPORTS",
  LUXURY = "LUXURY",
  ELECTRIC = "ELECTRIC",
}
enum FuelType {
  GASOLINE = "GASOLINE",
  DIESEL = "DIESEL",
  ELECTRIC = "ELECTRIC",
  HYBRID = "HYBRID",
  PLUGIN_HYBRID = "PLUGIN_HYBRID",
}
```

## Critères d'Évaluation

### Présentation Technique (50%)

La partie la plus importante de l'évaluation sera un appel vidéo où vous présenterez :

- Vos choix techniques et leur justification
- Décisions d'architecture
- Organisation du code
- Défis rencontrés et solutions
- Améliorations potentielles et scalabilité
- Démonstration en direct de l'application

### Qualité du Code (30%)

- Code propre et maintenable
- Utilisation de TypeScript
- Organisation des composants
- Gestion des erreurs
- Approche de test
- Implémentation du design responsive

### Pratiques de Développement (20%)

- Workflow Git
- Documentation
- Organisation du code
- Clarté des commits

## Calendrier

- Temps attendu : 4-6 heures
- Présentation technique : 20 minutes + 10 minutes de questions-réponses

## Directives de Présentation

Préparez-vous à discuter :

1. Choix de la stack technique
2. Décisions d'architecture
3. Approche de gestion d'état
4. Stratégie de récupération de données
5. Considérations de performance
6. Stratégie de test
7. Améliorations potentielles
8. Considérations de scalabilité

## Exigences de Développement

### Workflow Git

1. Forker le dépôt (obligatoire)
2. Créer des branches de fonctionnalités pour chaque composant
3. Faire des commits atomiques avec des messages clairs
4. Soumettre le travail via des Pull Requests
5. Documenter les décisions majeures dans les descriptions de PR

### Organisation du Code

1. Suivre les principes de Clean Architecture
2. Implémenter des types/interfaces TypeScript appropriés
3. Créer des composants réutilisables
4. Inclure des tests unitaires pour les fonctionnalités principales
5. Documenter les endpoints API et les composants
   Bonne chance ! 🚀
