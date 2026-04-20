# 🧠 Cognition Network
**Batch 2029 End-Term Project | Course: Building Web Applications with React**

> *“Ideas are the building blocks of the future. Cognition Network ensures they are verified, stable, and persistent.”*

## 🎯 1. Problem Statement
**The Problem**: Breakthrough ideas and research concepts are often scattered across siloed platforms, lost in private notes, or lack a clear collaborative verification process. This leads to information fragmentation and "re-inventing the wheel."

**The Solution**: **Cognition Network** is a decentralized ideation graph. It provides a real-time environment where researchers can:
1. **Publish** insights to a permanent database (Firestore).
2. **Verify** stability and confidence through community voting.
3. **Graph** their ideas to visualize relationships and dependencies.

**Target User**: Researchers, students, and innovation teams looking for a structured, collaborative discovery platform.

---

## 🚀 2. Core Features
- **🔐 Secure Authentication**: Firebase Google Auth integration with protected dashboard routes.
- **📊 Real-time Feed**: Live Firestore synchronization for instant idea discovery and updates.
- **💹 Dynamic Scoring**: "Confidence" and "Stability" metrics calculated based on community interaction.
- **🕸️ Graph Visualization**: Interactive Force-Directed Graph visualizing relationships between ideas (Supports vs. Contradicts).
- **⚔️ Battle Arena**: Gamified "Idea Battles" to pit concepts against each other for community consensus.
- **🛠️ Full CRUD**: Create, Read, Update (Vote), and Delete operations fully implemented.

---

## ⚛️ 3. Advanced React Implementation
This project prioritizes performance and scalability:
- **State Management**: Context API (`AuthContext`, `IdeaContext`) for global state.
- **Optimization**: 
    - `useMemo`: For heavy graph data processing.
    - `useCallback`: Preventing unnecessary re-renders in interactive components.
    - `React.memo`: Ensuring the canvas-based graph doesn't re-render on unrelated state changes.
- **Architecture**: Modular services, hooks, and reusable UI components.

---

## 🛠️ 4. Tech Stack
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + Framer Motion
- **Backend**: Firebase Auth + Firestore
- **Visualization**: React Force Graph (Canvas API)
- **Deployment**: Ready for Vercel / Netlify

---

## 📦 5. Setup & Installation
Since this project uses a **Portable Node.js Runtime**, you can run it without a global Node installation.

1. **Clone the repository**
2. **Setup Runtime** (If using the portable version):
   ```bash
   export PATH=$PWD/node-runtime/bin:$PATH
   ```
3. **Install Dependencies**
   ```bash
   npm install
   ```
4. **Launch Live Server**
   ```bash
   npm run dev
   ```

---

## ⚖️ 6. Evaluation Criteria Checklist
- [x] Authentication (Firebase)
- [x] CRUD Operations (Firestore)
- [x] Dashboard & 3+ Features
- [x] Advanced Hooks (useMemo, useCallback)
- [x] Responsive UI (Tailwind)
- [x] Clean Architecture
