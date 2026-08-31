# 🚁 PROJECT SUTRA — Master Presentation Deck (React + Vite)

> **Swarm Unified Tactical Reconnaissance Architecture**  
> Autonomous Multi-Drone Swarm System for High-Altitude Tactical Reconnaissance, Forest Canopy Penetration, and Survivor Geolocation in GPS-Denied & RF-Degraded Disaster Environments.

---

## 🚀 Live Interactive React Presentation Deck

This repository contains a full **React 18 + Vite + TypeScript + Tailwind CSS + Lucide Icons** presentation engine built specifically for defense & disaster robotics pitch competitions (NDMA / DARPA-tier standard).

### ⌨️ Presentation Keyboard Controls
* **Next Slide**: `→` (Right Arrow), `Space`, `PageDown`
* **Previous Slide**: `←` (Left Arrow), `PageUp`
* **First / Last Slide**: `Home` / `End`
* **Toggle Fullscreen**: `F`
* **Toggle Slide Drawer / Menu**: `O`

---

## 📑 Slide Deck Structure (7 Slides)

1. **Slide 01 — Master Title & Mission Architecture**: Aerospace telemetry HUD, live mesh status, WGS84 coordinates, 4 subsystem badges, and 4 empirical benchmark cards.
2. **Slide 02 — Disaster Search Bottlenecks**: The 3 fatal failure modes of commercial drones in mountain valleys (Digital cliff, GPS denial, $100K+ cost).
3. **Slide 03 — Subsystem A (GNC & SUTRA-FSD)**: 50Hz PX4 offboard interface, 32×32×16 metric voxel occupancy grid, quintic polynomial splines (Jerk < 4.2m/s³), and ORCA 3D collision barrier shield.
4. **Slide 04 — Subsystem B (Deep JSCC Neural Comms & SwarmRAFT)**: 96.9% latent video compression ($512\text{KB} \to 16\text{KB}$), -5 dB RF jamming resilience without digital cliff, and sub-50ms quorum failover.
5. **Slide 05 — Subsystem C (Tri-Modal Edge AI & DEM Raycast)**: Cross-attention fusion (RGB + FLIR LWIR + mmWave) with terrain-corrected DEM raycaster achieving **3.59 cm** WGS84 error from 30m altitude.
6. **Slide 06 — Subsystem D (Pegasus 3D GIS GCS & ATAK)**: Decoupled WebGPU 60 FPS multi-stream video engine and MIL-STD-2525 Cursor-on-Target (CoT) XML broadcast.
7. **Slide 07 — Empirical Scorecard & Hardware Economics**: 232 / 232 verified pytest suite, $145 ESP32-S3 Micro Swarm / $269 F450 Quadcopter economics (100x cost scaling).

---

## 👥 Core Architecture Team & Attribution
* **Nikhil (Tech Lead)** — Subsystem A (GNC & SUTRA-FSD) & Subsystem B (Deep JSCC & SwarmRAFT)
* **Vedanth Sai Ram** — Subsystem C (Tri-Modal Edge AI Perception & WGS84 Raycaster)
* **Siva Kesava** — Subsystem D (Pegasus 3D GIS WebGPU Ground Control Station)
* **Harika** — Subsystem E (Verification Audits & Pitch Strategy)
* **Rohith Kumar** — Subsystem F (Hardware-in-the-Loop & Compute Infrastructure)

---

## 🛠️ Quick Start & Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build production distribution
npm run build

# 4. Preview production build
npm run preview
```

---

## 📦 Static Slide & PowerPoint Artifacts

* [`slide_01.html`](slide_01.html) — Standalone HTML5 / KaTeX slide 01.
* [`slide_01.png`](slide_01.png) — 1080p preview screenshot.
* [`slide_01.pdf`](slide_01.pdf) — Print-ready vector PDF presentation export.
* [`generate_deck.py`](generate_deck.py) — Programmatic PowerPoint generation script.
* [`sutra_pitch_deck.pptx`](sutra_pitch_deck.pptx) — Native Microsoft PowerPoint 16:9 slide deck.
