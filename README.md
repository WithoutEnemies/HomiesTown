<div align="center">

# 🏡 Homies Town

### A little town, built one commit at a time.

Um projeto colaborativo criado por amigos, para amigos.
Aprendemos programação enquanto construímos algo nosso.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma)

</div>

## 🌱 Sobre o projeto

**Homies Town** é um projeto colaborativo de programação onde cada participante possui um terreno numa cidade virtual compartilhada.

Cada desenvolvedor pode construir e personalizar sua própria casa, enquanto aprende e experimenta conceitos de desenvolvimento full-stack.

O objetivo é simples: **aprender programação construindo algo divertido juntos.**

## ⚙️ Tech Stack

| Tecnologia       | Utilização                    |
| ---------------- | ----------------------------- |
| **Next.js**      | Framework full-stack          |
| **React**        | Interface e componentes       |
| **TypeScript**   | Linguagem principal           |
| **Tailwind CSS** | Estilização                   |
| **PostgreSQL**   | Banco de dados (etapa futura) |
| **Prisma**       | ORM (etapa futura)            |

## 🚀 Executar localmente

Com Node.js 20.9 ou superior e npm instalados:

```bash
npm install
npm run dev
```

Abre [localhost:3000](http://localhost:3000). Não é necessário configurar serviços, banco de dados ou variáveis de ambiente.

```bash
npm run lint       # ESLint, sem warnings
npm run typecheck  # TypeScript em strict mode
npm run build     # Build de produção
npm start         # Servir o build de produção
```

## 🗺️ Estrutura

```text
src/
├── app/                 # Página da cidade e rota /house/[id]
├── components/ui/       # Cabeçalho e ilustração reutilizável
├── features/town/       # Mapa em CSS Grid e terrenos
├── houses/
│   ├── starter/         # Casa de exemplo com props e useState
│   └── registry.ts      # Associação explícita entre IDs e componentes
├── data/                # Casas e terrenos locais tipados
├── lib/town.ts          # Funções de acesso aos dados
└── types/               # Contratos House, HouseProps e Plot
```

O mapa lê os terrenos e os dados das casas. Ao visitar `/house/[id]`, a página procura o componente no registry e passa-lhe `house` e `plot`. Cada casa gere a sua própria interface e estado. As três casas iniciais reutilizam `StarterHouse` com props diferentes.

## 🏠 Criar a tua casa

1. Cria `src/houses/minha-casa/minha-casa.tsx`, seguindo o contrato `HouseProps`:

   ```tsx
   import type { HouseProps } from "@/types/house";

   export function MinhaCasa({ house, plot }: HouseProps) {
     return (
       <section className="rounded-2xl bg-amber-50 p-8">
         <h2 className="text-2xl">Bem-vindo à {house.name}!</h2>
         <p>
           {plot.street}, terreno {plot.number}
         </p>
       </section>
     );
   }
   ```

   Para adicionar hooks ou eventos, coloca `"use client";` no início do ficheiro. A `StarterHouse` demonstra uma luz e um rádio imaginário com `useState`.

2. Importa o componente em `src/houses/registry.ts` e acrescenta uma entrada:

   ```tsx
   import { MinhaCasa } from "@/houses/minha-casa/minha-casa";

   // Dentro de houseRegistry:
   "minha-casa": MinhaCasa,
   ```

3. Acrescenta os dados em `src/data/houses.ts`. Usa um ID único, igual ao do registry:

   ```ts
   {
     id: "minha-casa",
     name: "Casa da Ana",
     owner: "Ana",
     description: "Um cantinho para experimentar.",
     color: "sage", // "terracotta", "sage" ou "ochre"
   },
   ```

4. Em `src/data/plots.ts`, escolhe um terreno disponível e associa-lhe esse ID:

   ```ts
   {
     id: "plot-02",
     number: "02",
     street: "Rua das Flores",
     status: "occupied",
     houseId: "minha-casa",
   },
   ```

A casa aparece no mapa e fica acessível em `/house/minha-casa`, sem alterar o mapa ou a rota. Cada casa deve ocupar um único terreno; mantém os IDs das casas e dos terrenos únicos. A cor escolhe a ilustração no mapa; o interior pode ser inteiramente teu.

## 🌱 Próximas etapas

Esta fundação usa dados locais e estado temporário no navegador. As interações reiniciam ao sair da casa. PostgreSQL, Prisma, autenticação, reservas de terrenos e multiplayer em tempo real ficam para etapas futuras. Os terrenos disponíveis são convites para contribuir pelo código; ainda não existe um sistema de reserva.

Quando chegar a persistência, `src/lib/town.ts` é o ponto de entrada para substituir as leituras dos dados locais.

---

<div align="center">

**Built by homies, for homies. ❤️**

</div>
