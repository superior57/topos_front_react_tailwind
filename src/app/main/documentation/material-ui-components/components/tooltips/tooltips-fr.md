---
title: Composant React Info-bulle
components: Tooltip
---

# Tooltips (Info-bulle)

<p class="description">Les info-bulles affichent un texte informatif lorsque les utilisateurs survolent, se concentrent ou tapent sur un élément.</p>

Lorsqu'elles sont activées, [Info-bulles](https://material.io/design/components/tooltips.html) affiche une étiquette de texte identifiant un élément, telle qu'une description de sa fonction.

## Info-bulles simples

{{"demo": "pages/components/tooltips/SimpleTooltips.js"}}

## Info-bulles positionnées

La `Tooltip` comporte 12 **placements** choix. Ils n'ont pas de flèches directionnelles; au lieu de cela, ils comptent sur le mouvement émanant de la source pour indiquer la direction.

{{"demo": "pages/components/tooltips/PositionedTooltips.js"}}

## Customized tooltips

Voici quelques exemples de personnalisation du composant. Vous pouvez en apprendre plus sur [la page de documentation de personnalisation](/customization/components/).

{{"demo": "pages/components/tooltips/CustomizedTooltips.js"}}

## Élément enfant personnalisé

L'info-bulle doit appliquer les écouteurs d'événement DOM à son élément enfant. Si l'enfant est un élément React personnalisé, vous devez vous assurer qu'il étend ses propriétés à l'élément DOM sous-jacent.

```jsx
function MyComponent(props) {
  // We spread the properties to the underlying DOM element.
  return <div {...props}>Bin</div>
}

// ...

<Tooltip title="Delete">
  <MyComponent>
</Tooltip>
```

Vous pouvez trouver un concept similaire dans le [composants d'emballage](/guides/composition/#wrapping-components) guide.

## Activation

Vous pouvez définir les types d'événements qui entraînent l'affichage d'une info-bulle.

{{"demo": "pages/components/tooltips/TriggersTooltips.js"}}

## Info-bulles contrôlées

Vous pouvez utiliser les propriétés `open`, `onOpen` et `onClose` pour contrôler le comportement de l'info-bulle.

{{"demo": "pages/components/tooltips/ControlledTooltips.js"}}

## Largeur Variable

Le `Tooltip` enveloppements long texte par défaut pour le rendre lisible.

{{"demo": "pages/components/tooltips/VariableWidth.js"}}

## Interactive

Une info-bulle peut être interactive. Il ne se fermera pas lorsque l'utilisateur survolera l'info-bulle avant l'expiration du congé `congé`.

{{"demo": "pages/components/tooltips/InteractiveTooltips.js"}}

## Éléments désactivés

Par éléments désactivés par défaut comme `<button>` ne déclenchent pas les interactions utilisateur si un `infobulle` ne sera pas activée sur les événements normaux comme vol stationnaire. Pour recevoir des éléments handicapés, ajoutez un simple élément d'emballage comme un `durée`.

{{"demo": "pages/components/tooltips/DisabledTooltips.js"}}

## Les transitions

Utilisez une transition différente.

{{"demo": "pages/components/tooltips/TransitionsTooltips.js"}}

## Montrer et se cacher

L'info-bulle est normalement affichée immédiatement lorsque la souris de l'utilisateur survole l'élément, et se cache immédiatement lorsque la souris de l'utilisateur quitte la souris. Un retard dans l'affichage ou le masquage de l'info-bulle peut être ajouté via les propriétés suivantes `enterDelay` et `leaveDelay`, comme indiqué dans la démo Infobulles contrôlées ci-dessus.

Sur le mobile, l'info-bulle s'affiche lorsque l'utilisateur appuie longuement sur l'élément et se cache après un délai de 1500 ms. Vous pouvez désactiver cette fonctionnalité avec la propriété `disableTouchListener`.

{{"demo": "pages/components/tooltips/DelayTooltips.js"}}