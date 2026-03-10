# 🕒 Modern Next.js Digital Clock

A sleek, high-performance digital clock built with **Next.js 16**, featuring real-time updates, smooth animations, and a premium glassmorphism UI.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

##  Features

- **Real-time Clock:** Precision time tracking using React hooks and `setInterval`.
- **12-Hour Format:** Built-in AM/PM indicator for user-friendly reading.
- **Dynamic Date:** Shows the full date, including the day of the week.
- **Glassmorphism UI:** Modern dark-themed design with backdrop blurs and gradients.
- **Responsive Animations:** Powered by **Framer Motion** for smooth entrance and scroll effects.

##  Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

##  Logic Breakdown

1. **State Management:** Uses `useState` to hold the current `Date` object.
2. **Lifecycle:** Employs `useEffect` to trigger a 1-second interval timer and cleans up on unmount to prevent memory leaks.
3. **Hydration Fix:** Implements a `mounted` state to ensure the client-side time matches the rendered HTML, avoiding hydration errors.
4. **Formating:** Uses `padStart(2, '0')` to ensure a consistent `00:00:00` display format.

##  Getting Started

**First, clone the repository:**

```bash
git clone [https://github.com/Khan-Shuvo/digital_clock](https://github.com/Khan-Shuvo/digital_clock.git)

**Navigate to the project directory:**

```bash
cd digital_clock

**Install dependencies:**

```bash 
npm install 
# or
yarn install 

**Run the project**

```bash
npm run dev
#or
yarn install

