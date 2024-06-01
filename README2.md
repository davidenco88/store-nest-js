# Lista para documentar

- configuración del editor config.

### 1. Configurar ESLint para ignorar los finales de línea

Puedes deshabilitar la regla de ESLint que está causando el error de finales de línea. Para hacer esto, debes modificar tu archivo de configuración de ESLint (generalmente `.eslintrc.js` o `.eslintrc.json`):

#### `.eslintrc.js`

```javascript
module.exports = {
  // otras configuraciones
  rules: {
    'linebreak-style': 0, // 0 para deshabilitar la regla
    // otras reglas
  },
};
```

#### `.eslintrc.json`

```json
{
  "rules": {
    "linebreak-style": 0 // 0 para deshabilitar la regla
  }
}
```

### 2. Usar un archivo `.editorconfig` para unificar las configuraciones de finales de línea

Puedes usar un archivo `.editorconfig` para asegurarte de que todos los desarrolladores utilicen la misma convención de finales de línea en sus editores. Aquí tienes un ejemplo de cómo debería verse el archivo `.editorconfig`:

```editorconfig
# EditorConfig ayuda a definir y mantener estilos de codificación consistentes entre diferentes editores y IDEs.
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
indent_style = space
indent_size = 2
trim_trailing_whitespace = true
```

### 3. Configurar Git para manejar los finales de línea

Git puede ayudarte a manejar los finales de línea de manera uniforme entre diferentes sistemas operativos. Puedes configurar Git para que normalice los finales de línea en tus repositorios:

```sh
# Configura Git para convertir CRLF a LF al hacer commits
git config --global core.autocrlf input

# Configura Git para convertir LF a CRLF al hacer checkout en Windows
git config --global core.autocrlf true
```

### 4. Convertir los finales de línea en todo el proyecto

Si ya tienes archivos en tu proyecto con diferentes finales de línea, puedes convertirlos todos a una convención homogénea utilizando una herramienta como `dos2unix` o `prettier`.

#### Usando Prettier

Prettier es una herramienta de formateo de código que puede manejar finales de línea. Puedes agregar Prettier a tu proyecto y configurarlo para usar `lf`:

1. Instala Prettier:

   ```sh
   npm install --save-dev prettier
   ```

2. Crea un archivo de configuración `.prettierrc`:

   ```json
   {
     "endOfLine": "lf"
   }
   ```

3. Ejecuta Prettier en tus archivos:
   ```sh
   npx prettier --write .
   ```
