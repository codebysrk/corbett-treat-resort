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
├── app/
│   ├── (public)/
│   │   ├── page.tsx
│   │   ├── about/
│   │   ├── rooms/
│   │   ├── dining/
│   │   ├── experiences/
│   │   ├── gallery/
│   │   ├── contact/
│   │   └── offers/
│   │
│   ├── api/
│   │   └── inquiry/
│   │       └── route.ts
│   │
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── globals.css
│
├── features/
│   │
│   ├── home/
│   │   ├── components/
│   │   ├── sections/
│   │   ├── hooks/
│   │   └── data.ts
│   │
│   ├── rooms/
│   │   ├── components/
│   │   ├── sections/
│   │   ├── hooks/
│   │   └── data.ts
│   │
│   ├── dining/
│   ├── experiences/
│   ├── gallery/
│   ├── contact/
│   └── booking/
│
├── components/
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   ├── Card.tsx
│   │   └── SectionHeading.tsx
│   │
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Container.tsx
│   │
│   └── shared/
│       ├── InquiryForm.tsx
│       ├── GalleryGrid.tsx
│       └── BookingCTA.tsx
│
├── lib/
│   ├── constants.ts
│   ├── utils.ts
│   ├── validations.ts
│   └── seo.ts
│
├── services/
│   ├── inquiry.service.ts
│   ├── room.service.ts
│   └── gallery.service.ts
│
├── hooks/
│   ├── useScroll.ts
│   ├── useMediaQuery.ts
│   └── useModal.ts
│
├── data/
│   ├── rooms.ts
│   ├── dining.ts
│   ├── testimonials.ts
│   ├── amenities.ts
│   └── offers.ts
│
├── types/
│   ├── room.ts
│   ├── booking.ts
│   └── gallery.ts
│
├── assets/
│   ├── icons/
│   └── fonts/
│
└── styles/
    ├── animations.css
    └── variables.css
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

---

## 14. Responsive Units Rule

- Hamesha layout grids, margins, paddings aur typography ke liye responsive/relative units ka use karein.
- Hardcoded pixels (`px`) ke bajae relative units jaise `rem`, `em`, `%`, `vh`, `vw` aur dynamic CSS functions jaise `clamp()`, `min()`, `max()` ka use karein.
- Isse text content aur visual elements different screen resolutions aur mobile orientations par stretch ya scale automatically ho jate hain bina overflow/clipping ke.

---

## 15. Centralized Theme Structure & Consistency Rule

- Poore project me theme aur colors ki consistency (ekroopta) honi chahiye.
- Kisi bhi color, gradient, ya style tokens ko component files me hardcode karne ke bajae [globals.css](file:///e:/SRK/Codes/Corbett/corbetttreatresort/app/globals.css) me centralized CSS Custom Properties (CSS Variables) ke roop me define aur use karein.
- Isse poori website me ek color change karne ke liye multiple files me badlaav karne ki zaroorat nahi padegi; sirf ek global variable change karne se update poore project me reflect ho jayega.

---

## 16. Component Isolation Rule

Har component apne aap mein poora aur self-contained hona chahiye. Ek component ko doosre component ke andar se directly depend nahi karna chahiye.

### Isolation Ke Niyam

- **Apna Data Khud Manage Kare:** Agar component ko koi static data chahiye (jaise slide content, menu items, etc.), to wo data ya to component ke bahar (module level par) define kiya jayega, ya ek alag `data.js`/`data.ts` file mein. Component ke andar inline define karna avoid karein.

- **Props Ke Zariye Communication:** Components ke beech data ka aadaan-pradaan (exchange) sirf `props` ke zariye hoga. Ek component doosre component ki internal state ko directly access nahi karega.

- **Koi Cross-Component CSS Nahi:** Ek component ki CSS sirf usi component ke elements ko style karegi. Doosre component ke class names ko target karna **bilkul mana hai** (forbidden).

  ```css
  /* ❌ Galat — doosre component ko target karna */
  .header-bar .hero-slide-title { ... }

  /* ✅ Sahi — sirf apne scope mein styling */
  .hero-slide-title { ... }
  ```

- **Independent Render:** Har component ko is tarah design kiya jayega ki wo kisi bhi page par import karke seedha use kiya ja sake, bina kisi specific parent component ki zaroorat ke.

- **Single Responsibility:** Har component ka ek hi kaam hoga. Agar koi component bahut bada ho jaye (50+ lines JSX), to usse chhote sub-components mein todna chahiye.

  ```
  ✅ Sahi structure example:
  Header.jsx       → sirf header bar logic
  MobileDrawer.jsx → sirf mobile drawer logic (Header ke andar import hoga)
  ```

- **No Global State Dependency (Bina zaroorat ke):** Jab tak bilkul zaroori na ho, component kisi global store (Redux, Context) par depend nahi karega. Local state (`useState`) ko prefer karein.

### Fayde (Benefits)

- Koi bhi component alag test kiya ja sakta hai
- Ek component mein change karne se doosra component affect nahi hoga
- Code reuse aasaan ho jata hai
- Debugging fast hoti hai kyunki problem scope limited hoti hai

