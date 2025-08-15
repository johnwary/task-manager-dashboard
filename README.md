Task Management Dashboard
A clean, production-ready task management app built with Vite + React + TypeScript + TailwindCSS.

✅ Features (Completed in Part 1 & 2)

Core Features:

    ✅ Add new tasks with title, description, priority
    ✅ Edit existing tasks inline
    ✅ Delete tasks with one click
    ✅ Toggle task status (Active / Completed)
    ✅ Filter tasks by status (All, Active, Completed)
    ✅ Search tasks by title
    ✅ Task counter showing Total, Completed, Remaining
    ✅ Tasks persist via localStorage

Task object structure

{
id: string;
title: string;
description: string;
status: 'active' | 'completed';
priority: 'low' | 'medium' | 'high';
createdAt: Date;
updatedAt: Date;
}

Architecture & Best Practices (Part 2)

1. Clean Code

   Components are small, reusable, and focused
   Clear variable names and readable logic
   All reusable hooks (useTaskContext) and helpers (generateId) are abstracted properly
   File structure is organized into components/, context/, hooks/, types/, utils/

2. Error & Loading Handling
   Graceful fallback UI for: - Task loading from localStorage - LocalStorage read/write failures - Empty task state via EmptyState component
   Feedback UX: Loading tasks..., error display, empty task message

3. Accessibility
   Semantic HTML for buttons, lists, headings
   Keyboard-accessible components
   ARIA-friendly practices in counter and form controls
   Focused styling for buttons and state changes

4. Advanced Patterns (Part 3)

   Compound Components – `TaskCard` was built using the compound component pattern with `<TaskCard.Header />`, `<TaskCard.Body />`, and `<TaskCard.Actions />`, allowing flexible task layout reuse.

   Higher-Order Component (HOC) – `withLoading(Component)` was implemented to provide loading state support to any component (e.g., `TaskList`), displaying fallback UI when needed.

TEACH STACK
React - UI & component structure
TypeScript - Static typing
Vite - Lightning-fast dev server
TailwindCSS -Utility-first styling
React Context + useReducer - Global state management
localStorage - Persisting tasks across sessions

# 1. Clone the repo

git clone https://github.com/your-username/task-dashboard.git

# 2. Install dependencies

cd task-dashboard
npm install

# 3. Start the dev server

npm run dev
