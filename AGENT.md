# 🤖 PROJECT SUTRA — MULTI-AGENT COLLABORATION & REPOSITORY DIRECTIVE (`AGENT.md`)

> **Repository:** [`https://github.com/Harika-reddy2628/SUTRA-PPT`](https://github.com/Harika-reddy2628/SUTRA-PPT)  
> **Project:** SUTRA (Swarm Unified Tactical Reconnaissance Architecture)  
> **Classification:** Open-Architecture Defense & Disaster Robotics Protocol (NDMA / DARPA-Tier Standard)  
> **Date:** August 31, 2026 | Grand Finals Pre-Deployment Edition

---

## 🎯 1. Repository Purpose & Collaboration Mandate

This repository hosts the **official interactive landing page, presentation engine, and defense architecture compendium** for Project SUTRA.

All collaborating human engineers, AI agents, and subagents contributing to this repository **MUST** adhere to the protocols, invariants, and design system documented in this file to guarantee zero regressions, clean git history, and continuous remote synchronization.

---

## 👥 2. Subsystem Ownership & Team Attribution

| Subsystem | Scope & Modules | Lead Architect |
| :--- | :--- | :--- |
| **Subsystem A** | **GNC & Autopilot** — PX4 50Hz Offboard, SUTRA-FSD 3D Occupancy, Quintic Splines, ORCA 3D Solver, SutraNeuroFlight (0.04ms) | **Nikhil (Tech Lead)** |
| **Subsystem B** | **Semantic Comms & Consensus** — Deep JSCC Neural Autoencoder (-5 dB SNR), SwarmRAFT Quorum Failover ($Q=3/5$), CRC-32 Mesh Framing | **Nikhil (Tech Lead)** |
| **Subsystem C** | **Edge AI Perception & Geolocation** — Tri-Modal RGB/FLIR/mmWave Fusion, SAHI 1080p Slicing, Terrain-Corrected WGS84 DEM Raycaster | **Vedanth Sai Ram** |
| **Subsystem D** | **Pegasus 3D GIS GCS** — React 18 + Mapbox GL JS 3D Topography, Decoupled WebGPU 60 FPS Video Buffer, MIL-STD-2525 ATAK CoT XML | **Siva Kesava** |
| **Subsystem E** | **Verification Audits & QA** — 232/232 Automated Pytest Suite, Zero-Mock Benchmark Enforcement, Pitch Narrative Strategy | **Harika** |
| **Subsystem F** | **HIL Simulation & Compute** — Gazebo Sim 8 Digital Twin, NVIDIA RTX 3050 TensorRT Dynamic Inversion, ESP32-S3 Firmware | **Rohith Kumar** |

---

## 🚫 3. The 7 Engineering Invariants (Zero-Regression Policy)

Collaborating agents and developers must NEVER violate these mathematical and architectural rules:

1. **ORCA 3D Collision Shield (`Orca3DSolver`)**:
   * *Rule:* Standard ORCA fails when drones fly parallel because $\vec{v}_{\text{rel}} \approx 0 \implies \text{repulsion} = 0$.
   * *Invariant:* SUTRA enforces an **unconditional static normal push** $\vec{u} = \hat{n} \cdot v_{\text{push}} - \vec{v}_{\text{rel}}$ whenever separation $d < 2.80\text{m}$, combined with **3D Echelon cruise altitudes** ($3.50\text{m}$ to $4.60\text{m}$) and Control Barrier Functions ($h(x) \ge 0$).
2. **2-Phase Offboard Takeoff State Machine**:
   * *Rule:* Never command horizontal avoidance before receiving valid peer VIO odometry.
   * *Invariant:* Drones climb strictly vertically in Phase 1 until $z \ge z_{\text{cruising}} - 0.3\text{m}$ before engaging Phase 2 swarm FSD.
3. **SUTRA-FSD 3D Voxel Cost-Volume**:
   * *Rule:* Never use brittle 2D geometric obstacle points.
   * *Invariant:* Discretize volume into a $32\times 32\times 16$ voxel grid with temporal log-odds decay $\lambda = 0.92$, planning $5^{\text{th}}$-order quintic splines with bounded jerk $< 4.20\text{ m/s}^3$.
4. **Deep JSCC Semantic Neural Video Streaming**:
   * *Rule:* Never rely exclusively on standard H.264/RTSP bitstreams in disaster mountain environments ($>5\%$ loss blackouts).
   * *Invariant:* Transmit analog latent constellation symbols with $96.9\%$ compression ($512\text{KB} \to 16\text{KB}$), guaranteeing graceful analog blur down to $-5.0\text{ dB}$ SNR ($\ge 41.5\text{ dB}$ PSNR).
5. **Terrain-Corrected WGS84 DEM Raycasting**:
   * *Rule:* Never use flat 2D inverse perspective mapping in mountainous terrain ($>2.5\text{m}$ error on slopes).
   * *Invariant:* Transform unit ray with rotation matrix $\mathbf{R}_b^w$ and raymarch against local 3D digital elevation models to guarantee $< 0.0359\text{m}$ ($3.59\text{cm}$) error from 30m altitude.
6. **Decoupled WebGPU 60.0 FPS Video Engine**:
   * *Rule:* Never update React state directly for 5 live high-bandwidth binary video streams.
   * *Invariant:* Blit binary WebSocket frame payloads directly into WebGPU canvas texture draw buffers to maintain a locked 60.0 FPS.
7. **Zero-Mock Verification Standard**:
   * *Rule:* Never invent, simulate, or fabricate benchmark numbers.
   * *Invariant:* All scorecard numbers must be captured directly from automated live `pytest` stdout across the 232 test cases.

---

## 🎨 4. Design System & Theme Specification

The repository enforces the **Vitt Light Elegant Sandstone & Sovereign Forest Theme** (anti-AI-slop standard):

### Color Tokens
* **Canvas Alabaster:** `#FAF7F2`
* **Raised Parchment Surface:** `#F4ECE1`
* **Card Surface:** `#FFFFFF` (Pure white with `#EDE4D6` border and `shadow-card-light`)
* **Sovereign Forest Green:** `#183A2B` (Primary headings, wordmarks, and key emphasis)
* **Warm Terracotta Clay:** `#9E4D34` (Defense badges, tactical alerts, and failure mode accents)
* **Vedic Sage Green:** `#4A7A58` (Active status beacons, perception markers, and verified indicators)
* **Heritage Ochre:** `#B68637` (Consensus state highlights and quorum locks)
* **Sky Blue:** `#2B6CB0` (3D GIS GCS telemetry streams and technical badges)

### Typography Stack
* **Display / Headings:** `Plus Jakarta Sans`, sans-serif
* **Editorial / Subtitles:** `Lora`, serif (italicized)
* **Body / UI:** `Plus Jakarta Sans` / `Inter`
* **Telemetry / Code:** `JetBrains Mono`, monospace

---

## 🔄 5. Git Collaboration & Synchronization Protocol

To ensure local and remote repositories remain clean, synchronized, and error-free:

1. **Pre-Flight Sync**: Always pull before making changes:
   ```bash
   git pull origin main
   ```
2. **Build Verification**: Ensure TypeScript and Vite build passes with **0 errors**:
   ```bash
   npm run build
   ```
3. **Structured Semantic Commits**: Commit messages must follow Conventional Commits:
   * `feat(...)`: New features, interactive components, or slide additions
   * `fix(...)`: Bug fixes, alignment repairs, or token corrections
   * `docs(...)`: Documentation, README, or AGENT.md updates
   * `refactor(...)`: Code cleanup without feature changes
4. **Immediate Push**: Push verified commits to `origin/main`:
   ```bash
   git push origin main
   ```

---

## 🛠️ 6. Build, Test & Run Commands

```bash
# Install node dependencies
npm install

# Start local interactive development server
npm run dev

# Run full TypeScript & Vite production build
npm run build

# Preview production build
npm run preview

# Generate updated PowerPoint deck (.pptx)
python3 generate_deck.py

# Generate updated high-resolution PDF & PNG slide export
google-chrome --headless=new --disable-gpu --window-size=1920,1080 --screenshot=slide_01.png --print-to-pdf=slide_01.pdf --no-pdf-header-footer slide_01.html
```

---

## 📂 7. Repository File Map

```
├── .gitignore
├── .hallmark/
│   └── log.json                                    # Hallmark design log & theme record
├── AGENT.md                                        # Master multi-agent collaboration directive
├── PROJECT_SUTRA_MASTER_COMPREHENSIVE_BLUEPRINT.md # 335-line comprehensive defense research compendium
├── README.md                                       # User-facing repository overview & scorecard
├── generate_deck.py                                # Programmatic PPTX slide generation engine
├── index.html                                      # Vite HTML entry point with Vitt fonts
├── package.json                                    # Project dependencies & scripts
├── slide_01.html                                   # Standalone HTML5 16:9 slide
├── slide_01.pdf                                    # Print-ready vector PDF slide export
├── slide_01.png                                    # High-resolution 1080p preview image
├── sutra_pitch_deck.pptx                           # Native Microsoft PowerPoint 16:9 presentation
├── tailwind.config.js                              # Tailwind configuration with Vitt design tokens
├── tsconfig.json                                   # TypeScript configuration
├── vite.config.ts                                  # Vite configuration
└── src/
    ├── App.tsx                                     # Dual-mode root orchestrator (Landing + Deck)
    ├── index.css                                   # Global CSS styles & design tokens
    ├── main.tsx                                    # React DOM entry point
    ├── components/
    │   ├── PresentationDeck.tsx                    # 16:9 widescreen presentation deck engine
    │   ├── landing/
    │   │   ├── DeepJsccSection.tsx                 # Subsystem B: RF Jamming SNR simulator & SwarmRAFT
    │   │   ├── DroneMeshCanvasBackground.tsx       # Interactive animated canvas node background
    │   │   ├── Footer.tsx                          # Footer with downloads & GitHub links
    │   │   ├── FsdSection.tsx                      # Subsystem A: SUTRA-FSD & ORCA 3D calculator
    │   │   ├── GcsSection.tsx                      # Subsystem D: Pegasus 3D GCS & CoT XML generator
    │   │   ├── HeroSection.tsx                     # Hero banner & interactive fleet inspector
    │   │   ├── Navbar.tsx                          # Sticky glass navbar with dual-mode switch
    │   │   ├── PerceptionSection.tsx               # Subsystem C: Tri-modal AI & DEM raycaster
    │   │   ├── ProblemSection.tsx                  # The 3 fatal operational bottlenecks
    │   │   ├── ScorecardSection.tsx                # 232/232 test matrix & swarm ROI calculator
    │   │   └── TeamSection.tsx                     # Core architecture team attribution
    │   └── slides/
    │       ├── Slide01Title.tsx                    # Slide 1: Master Title & Mission Architecture
    │       ├── Slide02Problem.tsx                  # Slide 2: Disaster Search Bottlenecks
    │       ├── Slide03FSD.tsx                      # Slide 3: SUTRA-FSD & ORCA 3D Autopilot
    │       ├── Slide04DeepJSCC.tsx                 # Slide 4: Deep JSCC Neural Comms
    │       ├── Slide05Perception.tsx               # Slide 5: Tri-Modal Edge AI & DEM Raycast
    │       ├── Slide06GCS.tsx                      # Slide 6: Pegasus 3D GIS GCS & ATAK
    │       └── Slide07Scorecard.tsx                # Slide 7: Empirical Scorecard & Hardware
```
