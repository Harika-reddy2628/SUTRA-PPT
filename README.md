# 🚁 PROJECT SUTRA — Defense & Disaster Robotics Interactive Landing Page & Pitch Deck

> **Swarm Unified Tactical Reconnaissance Architecture**  
> Autonomous Multi-Drone Swarm System for High-Altitude Tactical Reconnaissance, Forest Canopy Penetration, and Survivor Geolocation in GPS-Denied & RF-Degraded Disaster Environments.

---

## 🌟 Interactive Landing Page & Presentation Engine (React 18 + Vite)

Built with **React 18, Vite 6, TypeScript, Tailwind CSS, Lucide Icons, Framer Motion, and Canvas Confetti** in the **Vitt Light Elegant Sandstone & Sovereign Forest Theme**.

### 🎨 Design System: Sandstone Alabaster & Sovereign Forest
* **Palette**: Sandstone Canvas (`#FAF7F2`), Sovereign Deep Forest Green (`#183A2B`), Warm Terracotta Clay (`#9E4D34`), Vedic Sage Green (`#4A7A58`), Heritage Ochre (`#B68637`), Sky Slate (`#2B6CB0`).
* **Typography**: Plus Jakarta Sans (Headings/Body), Lora (Serif Subtitles), JetBrains Mono (Telemetry/Code).

---

## 🕹️ Interactive Landing Page Features

1. **Animated Drone Mesh Canvas Background**: Organic particle and 5-UAV node mesh connected with dynamic range links reacting to mouse cursor movements.
2. **Interactive Swarm Fleet Inspector**: Real-time tabs to inspect diagnostics for UAV-01, UAV-02, UAV-03, UAV-04, UAV-05 (altitudes, velocities, battery levels, EKF2 variance, active ORCA 3D repulsion, and copyable WGS84 coordinates).
3. **The 3 Fatal Bottlenecks Tabbed Comparison**: Deep dive into why commercial drones fail in mountain search-and-rescue (The Digital Cliff, GPS Denial, and $100K+ Centralized Failure).
4. **Interactive ORCA 3D Push Calculator**: Slide drone separation distance to visualize the unconditional static penetration push $\vec{u} = \hat{n} \cdot v_{\text{push}} - \vec{v}_{\text{rel}}$ and CBF safety shield.
5. **Interactive RF Jamming & SNR Stress Test Simulator**: Real-time slider from $+15\text{ dB}$ down to $-10\text{ dB}$ SNR showing live PSNR degradation and side-by-side comparison of standard H.264 blackout vs SUTRA Deep JSCC analog thermal retention.
6. **SwarmRAFT Quorum Failover Simulator**: 1-Click simulation of leader UAV-01 destruction with instant sub-50ms leader re-election ($Q = \lfloor N/2 \rfloor + 1 = 3/5$) and 0 split-brain state.
7. **Interactive DEM Raycaster Geolocation Calculator**: Slider for gimbal pitch depression and altitude showing true 3D ray intersection with mountain terrain DEM ($3.59\text{ cm}$ error vs $2.54\text{ m}$ flat 2D IPM error).
8. **Pegasus 3D GIS GCS & ATAK CoT XML**: Decoupled WebGPU 60.0 FPS video buffer showcase, live MIL-STD-2525 Cursor-on-Target XML generator with 1-click copy, and 1-Click Emergency Swarm RTL failsafe with celebration confetti.
9. **232/232 Verified Test Matrix & Cost ROI Calculator**: Filterable test runner across all subsystems and interactive fleet scaling calculator ($145 ESP32-S3 Micro Swarm, $269 F450 Tactical Rig, 99.6% budget savings over enterprise defense drones).
10. **Dual-Mode 16:9 Presentation Deck**: Switch between the full animated Landing Page and the 16:9 widescreen presentation slides with one click!

---

## 👥 Core Architecture Team & Attribution
* **Nikhil (Tech Lead)** — Subsystem A (GNC & SUTRA-FSD) & Subsystem B (Deep JSCC & SwarmRAFT)
* **Vedanth Sai Ram** — Subsystem C (Tri-Modal Edge AI Perception & WGS84 Raycaster)
* **Siva Kesava** — Subsystem D (Pegasus 3D GIS WebGPU Ground Control Station)
* **Harika** — Subsystem E (Verification Audits & Pitch Strategy)
* **Rohith Kumar** — Subsystem F (Hardware-in-the-Loop & Compute Infrastructure)

---

## 🚀 Quick Start & Development

```bash
# 1. Install dependencies
npm install

# 2. Start local interactive development server
npm run dev

# 3. Build production bundle (Verified: 0 errors in 2.2s)
npm run build

# 4. Preview production build
npm run preview
```

---

## 📦 Artifacts & File Structure

* [`slide_01.png`](slide_01.png) — 1080p preview screenshot of the light elegant presentation slide.
* [`slide_01.pdf`](slide_01.pdf) — Print-ready vector PDF presentation export.
* [`slide_01.html`](slide_01.html) — Standalone HTML5 presentation slide.
* [`generate_deck.py`](generate_deck.py) — Programmatic PowerPoint generation script.
* [`sutra_pitch_deck.pptx`](sutra_pitch_deck.pptx) — Native Microsoft PowerPoint 16:9 slide deck.
* [`PROJECT_SUTRA_MASTER_COMPREHENSIVE_BLUEPRINT.md`](PROJECT_SUTRA_MASTER_COMPREHENSIVE_BLUEPRINT.md) — Full 6-subsystem defense research blueprint.
