# Como Contribuir com o NutriZen 😺

Olá! Ficamos extremamente felizes com o seu interesse em contribuir. O NutriZen é um projeto construído **pela comunidade e para a comunidade**. Toda ajuda é bem-vinda e essencial para criarmos a melhor plataforma de saúde do mundo.

Este guia foi feito para todos, **especialmente para quem não sabe programar**. Queremos que designers, nutricionistas, redatores e entusiastas se sintam em casa.

## Código de Conduta

Antes de tudo, esperamos que todos sigam nosso [Código de Conduta](CODE_OF_CONDUCT.md). Nosso objetivo é manter um ambiente amigável, respeitoso e onde todos se sintam seguros para colaborar.

---

## Nossos Canais de Contribuição

Não se assuste com o GitHub! Para a maioria das contribuições, usaremos apenas duas ferramentas simples:

1.  **GitHub Issues:** Pense nisso como nosso quadro de ideias e tarefas. É aqui que sugerimos novas funcionalidades, reportamos bugs e discutimos propostas de design. É o lugar perfeito para começar.
2.  **Discord:** É o nosso café virtual, onde a comunidade conversa em tempo real, tira dúvidas e colabora de forma mais informal. **[Entre no nosso Discord aqui!](https://discord.gg/VpmkEKMa7D)**.

---

## Trilhas de Contribuição: Encontre a Sua!

Preparamos guias específicos para cada tipo de talento.

### 🎨 Para Designers (UI/UX) e Artistas

Sua criatividade é fundamental para tornar o NutriZen amigável e bonito.

* **O que você pode fazer?**
    * Criar mockups e protótipos para novas telas.
    * Sugerir melhorias na experiência do usuário (UX).
    * Desenhar ícones, ilustrações ou até mesmo o nosso mascote.
    * Dar feedback sobre o design atual.
* **Como contribuir?**
    1.  Procure por [Issues com a etiqueta `design-needed`](https://github.com/Coffee-System/nutrizen/labels/design-needed) ou [crie uma nova Issue](https://github.com/Coffee-System/nutrizen/issues/new?assignees=&labels=design%2Cenhancement&template=feature_request.md&title=) para sua proposta.
    2.  Use ferramentas como Figma, Penpot, ou qualquer outra de sua preferência.
    3.  Na Issue, descreva sua ideia e anexe imagens (PNG, JPG) ou o link do seu projeto de design (ex: link público do Figma). O debate acontecerá ali!

### ✍️ Para Redatores, Tradutores e Criadores de Conteúdo

Sua habilidade com palavras pode tornar o app mais claro e motivador.

* **O que você pode fazer?**
    * Melhorar os textos dentro do aplicativo (UX Writing).
    * Traduzir o NutriZen para outros idiomas.
    * Escrever posts para o nosso blog ou guias de ajuda.
* **Como contribuir?**
    * **Para pequenas correções (ex: um erro de digitação):** Você pode usar a interface do próprio GitHub para editar um arquivo. [Veja este guia rápido de como fazer isso](https://docs.github.com/pt/repositories/working-with-files/managing-files/editing-files).
    * **Para contribuições maiores:** [Crie uma Issue](https://github.com/Coffee-System/nutrizen/issues/new) para discutir sua ideia. Você pode escrever o conteúdo em um Google Docs e compartilhar o link na Issue para recebermos feedback.

### 👩‍⚕️ Para Especialistas (Nutricionistas, Personal Trainers)

Seu conhecimento é o que dará credibilidade e eficácia ao NutriZen.

* **O que você pode fazer?**
    * Validar as fórmulas de cálculo de calorias e macros.
    * Dar feedback sobre os planos de dieta e treino gerados pela IA.
    * Sugerir novas funcionalidades baseadas na sua experiência profissional.
* **Como contribuir?**
    * Participe das discussões nas [Issues](https://github.com/Coffee-System/nutrizen/issues), especialmente as que tiverem a etiqueta `expert-feedback-needed`.
    * Traga suas ideias e insights para o nosso canal `#especialistas` no Discord. Sua opinião é ouro para nós.

### 🧑‍💻 Para Desenvolvedores: Contribuindo com Código

Se você quer colocar a mão na massa, o processo é o seguinte.

1.  **Faça um Fork do Repositório:** Crie uma cópia do projeto na sua conta.
2.  **Clone o seu Fork:** Clone a *sua* cópia do projeto para a sua máquina. Lembre-se de substituir `<SEU-USUARIO>` pelo seu nome de usuário do GitHub.
    ```bash
    git clone [https://github.com/](https://github.com/)<SEU-USUARIO>/nutrizen.git
    ```
3.  **Crie uma Nova Branch:** Navegue até o diretório e crie uma branch para sua alteração.
    ```bash
    cd nutrizen
    git checkout -b feature/minha-nova-funcionalidade
    ```
4.  **Instale as Dependências e Codifique:**
    ```bash
    # Use o comando específico do projeto, ex: pnpm install
    npm install 
    # Agora, faça a mágica acontecer!
    ```
5.  **Faça o Commit e Envie:** Use o padrão de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
    ```bash
    git commit -m "feat: Adiciona funcionalidade de login com Google"
    git push origin feature/minha-nova-funcionalidade
    ```
6.  **Abra um Pull Request (PR):** Volte ao seu fork no GitHub e abra um PR para o repositório original, descrevendo bem o que você fez.

---

Obrigado por dedicar seu tempo e talento ao NutriZen. Juntos, estamos construindo algo incrível!
