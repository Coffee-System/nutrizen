# Padrões de Código do NutriZen 🧮

Para manter nosso código limpo, legível e fácil de manter, seguimos um conjunto de padrões e convenções. Pedimos que toda contribuição de código adira a estas diretrizes.

## Ferramentas (A Fonte da Verdade)

Nós usamos **ESLint** para análise estática de código e **Prettier** para formatação automática. As configurações desses dois projetos são a fonte da verdade para o nosso estilo de código.

**Recomendamos fortemente que você configure seu editor de código para usar o Prettier e o ESLint do projeto ao salvar um arquivo.**

## Convenções de Nomenclatura

* **Componentes (React):** Use `PascalCase`. Ex: `UserProfileCard.tsx`.
* **Arquivos e Pastas:** Use `kebab-case` para nomes de arquivos e pastas, exceto para componentes. Ex: `user-profile`.
* **Variáveis e Funções:** Use `camelCase`. Ex: `const userProfile = getUserProfile();`.
* **Tipos e Interfaces (TypeScript):** Use `PascalCase`. Ex: `interface UserProfile { ... }`.

## Estilo de Commits

Nós seguimos o padrão [**Conventional Commits**](https://www.conventionalcommits.org/en/v1.0.0/). Isso nos ajuda a manter um histórico de commits legível e a automatizar a geração de changelogs.

**Formato:** `<tipo>(<escopo opcional>): <descrição>`

* **Exemplos:**
    * `feat: adiciona login com Google`
    * `fix(auth): corrige bug de redirecionamento após logout`
    * `docs: atualiza guia de setup local`

## Diretrizes Gerais de Código

* **TypeScript:**
    * Use tipos explícitos para props de componentes, parâmetros e retornos de funções.
    * Prefira interfaces (`interface`) para definir a forma de objetos e tipos (`type`) para uniões e tipos mais complexos.
* **React:**
    * Prefira componentes funcionais com Hooks.
    * Mantenha os componentes pequenos e focados em uma única responsabilidade.
