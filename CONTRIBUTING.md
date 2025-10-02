# How to Contribute to NutriZen 😺

Hello! We are extremely happy about your interest in contributing. NutriZen is a project built **by the community, for the community**. All help is welcome and essential for us to build the world's best open-source health platform together.

This guide is made for everyone, **especially for those who don't code**. We want designers, nutritionists, writers, and enthusiasts to feel at home here.

## Code of Conduct

First and foremost, we expect all community members to follow our [Code of Conduct](CODE_OF_CONDUCT.md). Our goal is to maintain a friendly, respectful, and inclusive environment where everyone feels safe to collaborate.

---

## Our Contribution Channels

Don't be scared of GitHub! For most contributions, we'll only use two simple tools:

1.  **GitHub Issues:** Think of this as our ideas and tasks board. This is where we suggest new features, report bugs, and discuss design proposals. It's the perfect place to start.
2.  **Discord:** This is our virtual coffee shop, where the community talks in real-time, asks questions, and collaborates more informally. **[Join our Discord here!](https://discord.gg/fHB8xHYBvX)**.

---

## Contribution Paths: Find Yours!

We have prepared specific guides for every type of talent.

### 🎨 For Designers (UI/UX) and Artists

Your creativity is fundamental to making NutriZen friendly and beautiful.

- **How to contribute:**
  1.  Look for [Issues with the `design-needed` label](https://github.com/Coffee-System/nutrizen/labels/design-needed).
  2.  Describe your idea in an Issue and attach images or a link to your design project (e.g., Figma).

### ✍️ For Writers, Translators, and Content Creators

Your skill with words can make the app clearer and more motivating.

- **How to contribute:**
  - **For small fixes:** Use the GitHub interface to edit a file directly.
  - **For larger contributions:** Create an Issue to discuss your idea.

### 👩‍⚕️ For Experts (Nutritionists, Personal Trainers)

Your knowledge is what will give NutriZen credibility and effectiveness.

- **How to contribute:**
  - Participate in discussions in the [Issues](https://github.com/Coffee-System/nutrizen/issues).
  - Bring your ideas and insights to our `#experts` channel on Discord.

### 🧑‍💻 For Developers: Contributing with Code

If you want to get your hands dirty with code, here's the process. **Before you start, we strongly recommend reading our development guides to understand our standards:**

- **📖 [Frontend Development Guide](/docs/FRONTEND_GUIDE.md)**
- **⚙️ [Backend Development Guide](/docs/BACKEND_GUIDE.md)**

1.  **Fork the Repository:** Create a copy of the project in your own account.
2.  **Clone Your Fork:** Clone _your_ copy of the project to your local machine.
    ```bash
    git clone [https://github.com/](https://github.com/)<YOUR-USERNAME>/nutrizen.git
    ```
3.  **Create a New Branch:** Navigate to the project directory and create a specific branch for your change.
    ```bash
    cd nutrizen
    git checkout -b feature/my-new-feature
    ```
4.  **Install Dependencies and Code:**
    ```bash
    npm install
    # Now, work your magic!
    ```
5.  **Commit and Push:** Use the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard.
    ```bash
    git commit -m "feat: Add Google login functionality"
    git push origin feature/my-new-feature
    ```
6.  **Open a Pull Request (PR):** Go back to your fork on GitHub and open a PR to the original NutriZen repository, describing what you've done.

### ✅ Pull Request Checklist

Before marking a PR as ready for review, ensure:

1. `npm run build:packages` passa sem erros
2. `npm run typecheck` sem erros
3. `npm run lint:check` sem warnings novos
4. Atualizou docs se mudou comportamento público
5. Variáveis de ambiente novas documentadas em `.env.example`
6. Commit messages seguem **Conventional Commits**

### 🧾 Conventional Commits

Usamos o padrão para gerar changelogs de forma automatizada no futuro.
Prefixes comuns:

```
feat: nova funcionalidade
fix: correção de bug
docs: somente documentação
refactor: alteração interna sem mudança de comportamento
chore: tarefas de manutenção
perf: melhoria de performance
test: adiciona ou ajusta testes
build: mudanças em build tooling
ci: mudanças em pipelines
```

Escopos recomendados:
`ui`, `components`, `constants`, `tokens`, `web`, `infra`, `docs`.

Exemplos:

```
feat(ui): adiciona variante ghost ao Button
fix(web): corrige cálculo de macros diárias
docs(architecture): inclui roadmap de backend
```

---

Thank you for dedicating your time and talent to NutriZen. Together, we are building something incredible!
