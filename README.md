# ANGULAR MATERIAL

## Installation
Lancer la cmd suivante.
```
ng add @angular/material
```
"angular.json": Désactiver le cache (erreurs de rendu).
```
  "cli": {
    "cache": {
      "enabled": false
    }
  },
```

## Détails: mat-slide-toggle
La classe "mat-slide-toggle" va utiliser des valeurs par défaut qui ne sont pas nécessairement celles redéfinies dans les palettes.
De plus, certaines valeurs sont appliquées "en dur" dans le code d'AM.
https://github.com/angular/components/blob/main/src/material/slide-toggle/slide-toggle.html

Pour coloriser un "mat-slide-toggle":
- 300: Track actif, 600: Button actif (sans focus), 900: Button actif (avec focus)
- Les icons (trait/tilde) nécessitent de valoriser le path/fill ou les vars var "--mdc-switch-selected-icon-color" & "--mdc-switch-unselected-icon-color" 

https://stackoverflow.com/questions/75264479/override-the-default-color-of-the-asterisk-in-the-label-of-an-angular-material-i
But if you're NOT writing this style in a global stylesheet, it won't work. This is due to the way that Angular components encapsulates every style rule in your component-level CSS and so that your styles don't go out of their scope, i.e. Material Design components.

Pour customizer un "mat-slide-toggle":
- Valoriser les vars SCSS ("--mdc-switch-selected-track-color", etc.). La redéfinition des classes CSS est à proscrire: le code est complexe, et force la redéfinition de nombreuses classes.
Attention: les variables CSS sont valorisées au runtime, tandis que les variables SASS sont valorisées en "preprocessor".
CSS variables get value at the runtime. Sass is a preprocessor. it can't read the value of a variable which will get value at runtime!
You can create your CSS var based on the SCSS variable (then in Sass function use $accent-color and in CSS Use var(--accent-color)).
```
$accent-color: #ff0000;
--accent-color: #{$accent-color};
```

https://stackoverflow.com/questions/75688610/can-get-the-value-from-map-get-in-scss

```
  .mat-mdc-slide-toggle {
    // Track
    --mdc-switch-selected-track-color: green; // ON/NoState
    --mdc-switch-selected-hover-track-color: teal; // ON/Hover
    --mdc-switch-selected-focus-track-color: aqua; // ON/Focus
    --mdc-switch-unselected-track-color: green; // OFF/NoState
    --mdc-switch-unselected-hover-track-color: teal; // OFF/Hover
    --mdc-switch-unselected-focus-track-color: aqua; // OFF/Focus
    --mdc-switch-selected-pressed-track-color: yellow; // Au click (selected --> unselected)
    --mdc-switch-unselected-pressed-track-color: purple; // Au click (unselected --> selected)

    // Button
    --mdc-switch-selected-handle-color: green; // ON/NoState
    --mdc-switch-selected-hover-handle-color: teal; // ON/Hover
    --mdc-switch-selected-focus-handle-color: aqua; // ON/Focus
    --mdc-switch-unselected-handle-color: green; // OFF/NoState
    --mdc-switch-unselected-hover-handle-color: teal; // OFF/Hover
    --mdc-switch-unselected-focus-handle-color: aqua; // OFF/Focus
    --mdc-switch-selected-pressed-handle-color: yellow; // Au click (selected --> unselected)
    --mdc-switch-unselected-pressed-handle-color: purple; // Au click (unselected --> selected)

    // Icons
    --mdc-switch-selected-icon-color: #{map.get($primary-palette, 500)}; // Icon "ON"
    --mdc-switch-unselected-icon-color: #{map.get($primary-palette, 500)}; // Icon "OFF"
  }
```

- Pour les icones, il est possible de valoriser le path/fill.
```
.mdc-switch__icon {
  &--on {
    path {
      fill: red;
    }
  }
  &--off {
    path {
      fill: blue;
    }
  }
}
```

## REPOSITORY: Angular Material
https://github.com/angular/components/blob/main/src/material/core/theming/_theming.scss

## Exemple de sass-map
  A100: red,
  A200: pink,
  A300: teal,
  A400: yellow,
  A700: brown,
  100: aqua,
  200: green,
  300: purple,
  400: pink,
  500: yellow,
  600: teal,
  700: purple,
  800: aqua,
  900: blue,
