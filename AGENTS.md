# Agent Rules & Instructions

Har session aur coding tasks ke dauran in rules ko follow karna zaroori hai:

## 1. Mobile-First Responsiveness

- Website hamesha mobile-first responsive design ko follow karegi.
- Coding aur styling pehle mobile screen layouts ke liye likhi jayegi.
- Uske baad media queries ke zariye tablet aur desktop layouts ko enhance kiya jayega.
- Har UI component mobile devices par properly test aur optimize kiya jayega.

---

## 2. Hindi & Simple Language for Implementations

- Jo bhi implementation plans ya files (`implementation_plan.md`, `walkthrough.md`, `task.md`, etc.) banengi, wo proper Hindi/Hinglish aur simple language me likhi jayengi.
- Documentation aisi honi chahiye jo technical aur non-technical dono users aasani se samajh saken.
- Complex technical terms ke saath simple explanation bhi di jayegi.

---

## 3. Detailed & Simple Explanations for Code Changes

Har code change ke saath clear aur simple language me ye points explain kiye jayenge:

### Kya

- Kya change kiya gaya hai?

### Kyun

- Ye change kyun kiya gaya hai?

### Kisliye

- Is change ka main purpose kya hai?

### Benefits

- Is change se kya faayde honge?
- Performance, maintainability ya user experience par kya impact padega?

---

## 4. Component-Based Architecture

- Code hamesha component-based structure ko follow karega.
- Reusable aur independent components banaye jayenge.
- Har component ka ek clear responsibility area hoga.
- Business logic aur UI ko possible ho to alag rakha jayega.
- Components loosely coupled aur easily maintainable hone chahiye.

---

## 5. Small & Reusable Components

- Jitna possible ho utne chhote aur manageable components banaye jayenge.
- Bade components ko multiple small components me divide kiya jayega.
- Reusability ko priority di jayegi.
- Duplicate UI aur duplicate logic avoid kiya jayega.
- Common elements jaise Button, Input, Modal, Card, Loader, Badge, Table, etc. reusable components ke roop me banaye jayenge.

---

## 6. Separate CSS for Every Component

- Har component ki apni separate CSS/SCSS file hogi.

- Component-specific styling component ke saath hi maintain ki jayegi.

- Global CSS sirf:
  - Reset styles
  - Variables
  - Typography
  - Utility classes
  - Theme settings
    ke liye use hogi.

- CSS structure clean aur scalable rakhi jayegi.

---

## 7. Optimized & Scalable Code

- Code clean, readable aur maintainable hona chahiye.
- Performance optimization ko dhyan me rakhkar implementation ki jayegi.
- Unnecessary re-renders avoid kiye jayenge.
- Duplicate logic aur dead code remove rakha jayega.
- Proper folder structure aur naming conventions follow ki jayengi.
- Future scalability ko dhyan me rakhkar architecture design ki jayegi.
- Hardcoded values ko minimize kiya jayega.
- Constants, configuration files aur utility functions ka use kiya jayega.

---

## 8. Reusability First Approach

- Naya code likhne se pehle existing components aur utilities ko reuse karne ki koshish ki jayegi.
- DRY (Don't Repeat Yourself) principle follow kiya jayega.
- Shared logic ke liye helper functions, services, utilities aur custom hooks ka use kiya jayega.
- Repeated patterns ko abstract karke reusable modules me convert kiya jayega.

---

## 9. Folder Structure & Project Organization

- Folder structure clean aur predictable honi chahiye.
- Related files ko logically organize kiya jayega.
- Components, hooks, services, utilities aur assets ko separate folders me maintain kiya jayega.
- Project structure future growth aur scalability ko support kare.

---

## 10. Code Quality Standards

- Meaningful variable, function aur component names use kiye jayenge.
- Proper code formatting maintain ki jayegi.
- Unnecessary comments avoid kiye jayenge.
- Self-explanatory aur readable code likha jayega.
- Consistent coding standards poore project me maintain kiye jayenge.

---

## 11. Maintainability First

- Har implementation future updates ko dhyan me rakhkar ki jayegi.
- Feature modifications aasani se kiye ja saken is tarah ka structure maintain kiya jayega.
- Tight coupling avoid ki jayegi.
- Extensible architecture follow ki jayegi.

---

## 12. Future Rule Expansion

- Future me naye rules add kiye ja sakte hain.
- Naye rules automatically existing development workflow ka part ban jayenge.
- Sabhi naye aur purane rules ko equally follow kiya jayega.

---

## 13. JSX Only Development Rule

- React UI components hamesha `.jsx` files me likhe jayenge.
- Jab tak koi specific requirement na ho, `.tsx` ya TypeScript use nahi kiya jayega.
- Naye components, pages aur layouts JSX format me create kiye jayenge.
- Component structure modern React Functional Components par based hoga.
- Hooks-based approach follow ki jayegi.
- Props validation ke liye zarurat padne par `PropTypes` ka use kiya jayega.
- JSX code clean, readable aur reusable hona chahiye.
- Business logic ko JSX components se alag rakhne ki koshish ki jayegi (custom hooks, services, utilities ke through).
- Har JSX component ke saath uski separate CSS/SCSS file maintain ki jayegi.
- Folder structure me component aur uski related files ko saath organize kiya jayega.

### Example Structure

```text
src/
│
├── components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   ├── Button.css
│   │   └── index.js
│   │
│   ├── Card/
│   │   ├── Card.jsx
│   │   ├── Card.css
│   │   └── index.js
│
├── pages/
│   ├── Home/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   └── index.js
│
├── hooks/
├── services/
├── utils/
├── constants/
└── assets/
```

### Purpose

- Pure JSX based codebase maintain karna.
- Project structure ko simple aur beginner-friendly rakhna.
- Development speed improve karna.
- Consistent coding standards maintain karna.
- Reusable aur maintainable React architecture follow karna.

### Default Stack

- React + JSX default development stack rahega.
- Agar future me TypeScript ki requirement aaye, to uske liye alag rule explicitly add kiya jayega.
