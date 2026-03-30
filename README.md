## 🧱 Codebase Guidelines (Staff United Website)

---

### 📁 Project Structure

```bash
app/                # App Router (Next.js)
├── page.tsx        # Homepage
├── layout.tsx      # Root layout
├── globals.css     # Global styles
├── insights/       # Blog / insights
│   ├── page.tsx
│   ├── data.ts     # Static data source
│   └── [slug]/     # Dynamic route
├── join/
├── services/
├── team/
├── request-support/
├── privacy-notice/
├── the-standard/

components/         # Reusable components
├── ui/             # shadcn/ui components (DO NOT MODIFY)
├── hero.tsx
├── navigation.tsx
├── footer.tsx
├── insights.tsx
├── services.tsx
├── team1.tsx

hooks/              # Custom hooks
lib/                # Utilities & helpers
public/             # Static assets (images, videos)
styles/             # Additional styles
```

---

### 🧠 Core Principles

* Use **Next.js App Router**
* Default to **Server Components**
* Use `"use client"` only when necessary
* Keep code **modular & scalable**

---

### ⚛️ Component Architecture

#### ✅ Server Component (default)

* Fetch data
* Render static content

#### ✅ Client Component (when needed)

Add:

```ts
"use client";
```

Use when:

* useState / useEffect
* user interaction (click, form)
* animation

---

### 📦 Component Rules

* Use **PascalCase** for components:

```bash
Hero.tsx
TeamCard.tsx
```

* Avoid lowercase file names:

```bash
hero.tsx ❌
footer.tsx ❌
```

👉 (nên refactor dần)

---

### ⚠️ UI Components (shadcn)

* Located in `components/ui/`
* ❌ Do NOT modify directly
* ✅ Extend via wrapper components

---

### 🔄 Data Management

* Static content: `app/insights/data.ts`
* Dynamic routes: `[slug]`

👉 Recommendation (future):

```bash
lib/api/
services/
```

---

### 🧩 Routing

* File-based routing via `app/`
* Example:

```bash
/insights/[slug]
```

* Uses:

  * Static generation (SSG)
  * Dynamic rendering

---

### 🎨 Styling

* Global styles: `app/globals.css`
* TailwindCSS used
* Avoid inline styles
* Keep consistent spacing & design

---

### 🖼️ Assets

* Stored in `public/`
* Use:

```tsx
import Image from "next/image";
```

* Avoid hardcoding paths

---

### 🚀 Performance

* Prefer **SSG (static pages)**
* Use dynamic routes only when needed
* Optimize images with `next/image`

---

### 🧹 Code Quality

Before pushing:

```bash
npm run build
```

* Build must pass
* No runtime errors

---

### 🚫 Avoid

* Overusing `"use client"`
* Large components (>200 lines)
* Hardcoded content
* Logic inside UI components

---

### 🚀 Getting Started

```bash
npm install
npm run dev
```

---

### 📝 Notes

* Built with Next.js (App Router)
* Supports SSG + Dynamic Routing
* Optimized for performance & SEO
* Ready for team development
