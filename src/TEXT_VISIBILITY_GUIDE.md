# 👁️ Text Visibility Quick Reference Guide

## 🎨 Color Conversion Chart

### For Dark Theme - Always Use These:

| ❌ DON'T USE (Not Visible) | ✅ USE INSTEAD (Visible) |
|----------------------------|------------------------|
| `text-gray-600` | `text-gray-300` or `text-gray-200` |
| `text-gray-700` | `text-gray-300` or `text-gray-200` |
| `text-gray-800` | `text-gray-200` or `text-white` |
| `text-gray-900` | `text-gray-100` or `text-white` |
| `bg-gray-100` | `bg-gray-800/50` or `bg-gray-700/50` |
| `bg-gray-200` | `bg-gray-700` |
| `text-blue-700` | `text-blue-300` or `text-blue-400` |
| `text-green-600` | `text-green-400` or `text-green-300` |
| `text-red-700` | `text-red-300` or `text-red-400` |

---

## 🏷️ Component Patterns

### 1. Status Badges

```tsx
// ❌ OLD (Not Visible)
<Badge className="bg-blue-100 text-blue-700">
  Status
</Badge>

// ✅ NEW (Visible + Beautiful)
<Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30">
  Status
</Badge>
```

### 2. Cards

```tsx
// ❌ OLD
<Card className="p-6">
  <h3 className="text-gray-800">Title</h3>
  <p className="text-gray-600">Description</p>
</Card>

// ✅ NEW
<Card className="p-6 bg-gray-800/50 border-gray-700">
  <h3 className="text-white">Title</h3>
  <p className="text-gray-300">Description</p>
</Card>
```

### 3. Stat Numbers

```tsx
// ❌ OLD
<p className="text-3xl text-gray-700">1,234</p>

// ✅ NEW
<p className="text-3xl text-white">1,234</p>
```

### 4. Links

```tsx
// ❌ OLD
<a className="text-gray-700 hover:underline">
  Click here
</a>

// ✅ NEW
<a className="text-cyan-400 hover:text-cyan-300 hover:underline">
  Click here
</a>
```

### 5. Form Labels

```tsx
// ❌ OLD
<Label className="text-gray-800">
  Email Address
</Label>

// ✅ NEW
<Label className="text-gray-300">
  Email Address
</Label>
```

---

## 🌈 Status Color System

### Success States

```tsx
// Background + Text + Border combo
className="bg-green-500/20 text-green-300 border border-green-500/30"
```

**Use for:**
- Completed items
- Success messages
- Positive metrics
- "Offer Received" status

### Warning States

```tsx
className="bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
```

**Use for:**
- In progress items
- Warnings
- "Under Review" status
- Pending actions

### Error/Danger States

```tsx
className="bg-red-500/20 text-red-300 border border-red-500/30"
```

**Use for:**
- Errors
- Rejected status
- Critical alerts
- Failed items

### Info States

```tsx
className="bg-blue-500/20 text-blue-300 border border-blue-500/30"
```

**Use for:**
- Information
- Interview scheduled
- Tips and hints
- General status

### Neutral States

```tsx
className="bg-gray-700/50 text-gray-200 border border-gray-600"
```

**Use for:**
- Default state
- Applied status
- Inactive items
- Placeholder content

---

## 📊 Glassmorphism Formula

### Perfect Glassmorphism Effect:

```tsx
className="
  bg-gray-800/50       // Semi-transparent background
  border-gray-700      // Subtle border
  backdrop-blur-sm     // Blur effect
  hover:bg-gray-800/70 // Slightly more opaque on hover
  transition-all       // Smooth transitions
"
```

**Breakdown:**
- `/50` = 50% opacity (semi-transparent)
- `/70` = 70% opacity (hover state)
- `/20` = 20% opacity (very transparent for badges)

---

## 🎯 Quick Decision Tree

### "What text color should I use?"

```
Is it a heading?
├─ Yes → text-white or text-gray-100
└─ No
    ├─ Is it important?
    │   ├─ Yes → text-gray-200
    │   └─ No → text-gray-300
    └─ Is it muted/secondary?
        └─ Yes → text-gray-400
```

### "What background should I use?"

```
Is it a card?
├─ Yes → bg-gray-800/50 border-gray-700
└─ No
    ├─ Is it a badge/pill?
    │   └─ Yes → bg-{color}-500/20 text-{color}-300
    └─ Is it a button?
        ├─ Primary → bg-gradient-to-r from-cyan-600 to-teal-600
        └─ Secondary → bg-gray-700 hover:bg-gray-600
```

---

## 🔍 Testing Your Colors

### Contrast Check:

1. **Background:** #1e293b (dark gray)
2. **Text should be:** 
   - Minimum: #cbd5e1 (gray-300) ✅
   - Recommended: #e2e8f0 (gray-200) ✅✅
   - Best: #f1f5f9 (gray-100) ✅✅✅

### Quick Test:
```
Background: Dark (#1e293b)
├─ text-gray-100 (#f1f5f9) → Excellent ✅✅✅
├─ text-gray-200 (#e2e8f0) → Good ✅✅
├─ text-gray-300 (#cbd5e1) → Acceptable ✅
├─ text-gray-400 (#94a3b8) → Use for muted only
└─ text-gray-600 (#475569) → ❌ NOT VISIBLE
```

---

## 💡 Pro Tips

### 1. Layer Colors
```tsx
// Good hierarchy
<div className="space-y-2">
  <h2 className="text-white">          {/* Most important */}
  <h3 className="text-gray-200">       {/* Important */}
  <p className="text-gray-300">        {/* Normal */}
  <small className="text-gray-400">   {/* Least important */}
</div>
```

### 2. Use Opacity for Badges
```tsx
// Instead of light backgrounds
bg-blue-100  // ❌ Too light for dark theme

// Use semi-transparent
bg-blue-500/20  // ✅ Perfect!
```

### 3. Add Borders for Definition
```tsx
// Without border - flat
bg-gray-800/50

// With border - defined
bg-gray-800/50 border border-gray-700  // ✅ Better!
```

### 4. Hover States
```tsx
// Make hover states slightly more opaque
className="
  bg-gray-800/50
  hover:bg-gray-800/70  // +20% opacity
  hover:border-gray-600 // Slightly lighter border
"
```

---

## 🎨 Complete Color Palette

### Gray Scale (Dark Theme):
```
gray-100: #f1f5f9  ← Headings
gray-200: #e2e8f0  ← Important text
gray-300: #cbd5e1  ← Normal text
gray-400: #94a3b8  ← Muted text
gray-500: #64748b  ← [Skip in dark theme]
gray-600: #475569  ← ❌ Not visible
gray-700: #334155  ← Backgrounds/Borders
gray-800: #1e293b  ← Card backgrounds
gray-900: #0f172a  ← Page background
```

### Accent Colors (Dark Theme):
```
Cyan:   300-400  ← Primary actions
Purple: 300-400  ← Secondary  
Pink:   300-400  ← Highlights
Green:  300-400  ← Success
Yellow: 300-400  ← Warning
Red:    300-400  ← Error/Danger
Blue:   300-400  ← Info
```

---

## 📋 Checklist for New Components

Before committing new components, verify:

- [ ] All headings use `text-white` or `text-gray-100`
- [ ] Body text uses `text-gray-200` or `text-gray-300`
- [ ] No `text-gray-600/700/800/900` anywhere
- [ ] Badges use `/20` opacity backgrounds
- [ ] Cards have `bg-gray-800/50 border-gray-700`
- [ ] Icons match text color (not darker)
- [ ] Links are `text-cyan-400` or similar bright color
- [ ] Hover states are defined
- [ ] Status indicators use correct color system

---

## 🚨 Common Mistakes

### Mistake #1: Using Light Backgrounds
```tsx
// ❌ WRONG
bg-gray-100 text-gray-800

// ✅ CORRECT
bg-gray-800/50 text-gray-200
```

### Mistake #2: Dark Text on Dark Background
```tsx
// ❌ WRONG (invisible!)
<div className="bg-gray-900">
  <p className="text-gray-700">Hello</p>
</div>

// ✅ CORRECT
<div className="bg-gray-900">
  <p className="text-gray-200">Hello</p>
</div>
```

### Mistake #3: Forgetting Card Backgrounds
```tsx
// ❌ WRONG (inherits dark page background)
<Card className="p-6">
  <p>Content</p>
</Card>

// ✅ CORRECT
<Card className="p-6 bg-gray-800/50 border-gray-700">
  <p className="text-gray-300">Content</p>
</Card>
```

### Mistake #4: Using Solid Badge Backgrounds
```tsx
// ❌ WRONG (blocks background)
bg-blue-500 text-white

// ✅ CORRECT (glassmorphism)
bg-blue-500/20 text-blue-300 border border-blue-500/30
```

---

## 🎓 Examples from InternHub

### Sidebar Navigation
```tsx
// Active state
className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white"

// Inactive state
className="text-gray-300 hover:bg-gray-700/50"
```

### Application Status Badge
```tsx
// Interview Scheduled
className="bg-blue-500/20 text-blue-300"

// Offer Received
className="bg-green-500/20 text-green-300"

// Rejected
className="bg-red-500/20 text-red-300"
```

### Stats Card
```tsx
<Card className="p-4 bg-gray-800/50 border-gray-700">
  <p className="text-3xl text-white">50,000+</p>
  <p className="text-sm text-gray-400">Students Placed</p>
</Card>
```

### Skill Badge
```tsx
<Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30">
  JavaScript
</Badge>
```

---

## 🔗 Related Files

- `/styles/globals.css` - Global dark theme overrides
- `/components/Sidebar.tsx` - Navigation example
- `/components/GamificationDashboard.tsx` - Badge examples
- `/components/ApplicationTracker.tsx` - Status colors
- `/DARK_THEME_FIX.md` - Complete fix documentation

---

**Remember:** When in doubt, use `text-gray-200` for text and `bg-gray-800/50` for backgrounds!

**Last Updated:** 2025-01-14
**Status:** ✅ Production Ready

#DarkTheme #TextVisibility #QuickReference
