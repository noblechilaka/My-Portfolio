# Implementation Plan: Section 03 - The Archive (The Monolith Spread)

## Overview
Transform the Projects section into a full-bleed editorial layout with stacking scroll effects, parallax depth, and buttery smooth animations.

---

## Step 1: HTML Structure Updates
- [x] Restructure `.projects` section for full-height stacking layout
- [x] Update `.project-monolith` to use 100vh height with 40/60 grid split
- [x] Ensure metadata (label) is positioned top-left with 1px horizontal line
- [x] Position raw + sign in bottom-left corner
- [x] Add scroll progress indicator HTML

## Step 2: CSS Styling - Layout & Component
- [x] Set `.project-monolith` to 100vh with sticky/pinned behavior
- [x] Create 40/60 asymmetrical grid (left: text, right: container)
- [x] Style macOS window container with 1px border (no drop shadow)
- [x] Position metadata label with horizontal guide line
- [x] Style raw floating + sign for bottom-left placement

## Step 3: CSS Styling - Enhanced Interactions
- [x] Implement plus sign hover effect (thickness increase, line extension)
- [x] Add tech stack reveal animation on plus hover
- [x] Style scroll progress indicator (vertical line + copper dot)

## Step 4: JavaScript - Stacking Scroll Effect
- [x] Implement ScrollTrigger pinning for stacking effect
- [x] Create scroll-driven animation where current project stays pinned
- [x] Next project slides up over current (like sheets of paper)

## Step 5: JavaScript - Parallax Depth
- [x] Add parallax to project title (0.9x scroll speed)
- [x] Add parallax to container (1.1x scroll speed)
- [x] Create depth illusion (text behind glass)

## Step 6: JavaScript - Scroll Progress
- [x] Connect copper dot to scroll progress within projects section
- [x] Ensure smooth movement along vertical line
- [x] Sync with stacking scroll effect

## Step 7: Testing & Refinement
- [ ] Test stacking effect smoothness
- [ ] Verify parallax depth illusion
- [ ] Check plus sign interaction
- [ ] Validate responsive behavior
- [ ] Ensure Lenis smooth scroll compatibility

---

## Completed Features

### 1. Full-Bleed Layout (100vh per project)
- Each project occupies full viewport height
- 40/60 split: Left (40%) for text, Right (60%) for macOS container

### 2. macOS Window Container
- 1px border (no drop shadow)
- Floating architectural depth
- Header with macOS-style dots

### 3. Metadata Label
- Top-left positioned with monospaced text
- 1px horizontal line extending to the right

### 4. Raw Plus Sign (Bottom-Left)
- Grows in thickness on hover (stroke-width: 1.5 → 2.5)
- Horizontal line extends to reveal tech stack
- Tech stack items fade in on hover

### 5. Parallax Depth
- Title moves slower (0.9x) - appears behind
- Container moves faster (1.1x) - appears in front
- Creates "text behind glass" illusion

### 6. Scroll Progress Indicator
- Fixed position on right edge
- Copper dot moves along vertical line
- Tracks progress through projects

### 7. Responsive Design
- Tablet (≤1024px): Adjusted grid proportions
- Mobile (≤768px): Vertical stack layout
- Tech stack always visible on mobile
