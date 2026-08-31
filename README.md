# 🚁 PROJECT SUTRA — Master Presentation Deck & Architecture

> **Swarm Unified Tactical Reconnaissance Architecture**  
> Autonomous Multi-Drone Swarm System for High-Altitude Tactical Reconnaissance, Forest Canopy Penetration, and Survivor Geolocation in GPS-Denied & RF-Degraded Disaster Environments.

---

## 👥 Core Architecture Team & Attribution
* **Nikhil (Tech Lead)** — Subsystem A (GNC, SUTRA-FSD & ORCA 3D) & Subsystem B (Deep JSCC Neural Transceiver & SwarmRAFT)
* **Vedanth Sai Ram** — Subsystem C (Tri-Modal Edge AI Perception & WGS84 Raycaster)
* **Siva Kesava** — Subsystem D (Pegasus 3D GIS WebGPU Ground Control Station)
* **Harika** — Subsystem E (Verification Audits & Pitch Strategy)
* **Rohith Kumar** — Subsystem F (Hardware-in-the-Loop & Compute Infrastructure)

---

## 📊 Zero-Mock Empirical Benchmark Scorecard

| Metric | Measured Value | Baseline / Competitor | Subsystem & Verification Method |
| :--- | :--- | :--- | :--- |
| **Verification Suite** | **232 / 232 Passed (100%)** | 0 Failing / 0 Mocked | `pytest` stdout across all 6 subsystems |
| **Deep JSCC Video Compression** | **96.9% ($512\text{KB} \to 16\text{KB}$)** | Raw H.264 / RTSP (Fails at $>5\%$ loss) | PyTorch / ONNX Autoencoder at $-5\text{ dB}$ SNR |
| **WGS84 Geolocation Accuracy** | **$3.59\text{ cm}$ Error @ 30m AGL** | Flat 2D IPM ($>2.50\text{m}$ error) | Rotation Matrix $\mathbf{R}_b^w$ + DEM Raycast |
| **GCS WebGPU Framerate** | **Locked 60.0 FPS** | React state updates ($12 - 18\text{ FPS}$) | Decoupled binary WebSocket to WebGPU ringbuffer |
| **NeuroFlight Inference Latency** | **$0.04\text{ ms}$ on Jetson / GPU** | Traditional PID ($18\text{ m/s}$ gust divergence) | PyTorch Dynamic Inversion ONNX Engine |
| **Swarm Collision Avoidance** | **Zero Collisions ($d \ge 3.80\text{m}$)** | Scalar Repulsion (Sticks on parallel tracks) | `Orca3DSolver` + 3D Multi-Layer Echelons |

---

## 🎨 Design System: Hallmark Tactical Monolith

Crafted using the **Hallmark** anti-AI-slop design framework:
* **Palette**: Dark Carbon (`#07090E`), Surface Slate (`#0D121F`), Nothing Red (`#E11D48`), Telemetry Emerald (`#10B981`), Cyan (`#06B6D4`), Sky Blue (`#38BDF8`).
* **Typography**: Montserrat (Display), Inter (Body / UI), JetBrains Mono (Telemetry & Metrics).
* **Format**: 16:9 Widescreen Presentation Canvas.

---

## 📁 Artifacts & File Structure

* [`slide_01.html`](slide_01.html) — Interactive 16:9 Master Title & Mission Architecture slide (HTML5 / KaTeX / Web Fonts).
* [`slide_01.png`](slide_01.png) — High-resolution 1080p preview screenshot.
* [`slide_01.pdf`](slide_01.pdf) — Print-ready vector PDF presentation export.
* [`generate_deck.py`](generate_deck.py) — Programmatic PowerPoint deck generator.
* [`sutra_pitch_deck.pptx`](sutra_pitch_deck.pptx) — Native Microsoft PowerPoint 16:9 slide deck.
* [`PROJECT_SUTRA_MASTER_COMPREHENSIVE_BLUEPRINT.md`](PROJECT_SUTRA_MASTER_COMPREHENSIVE_BLUEPRINT.md) — Complete 6-subsystem architectural blueprint and defense compendium.

---

## 🚀 Usage & Generation Commands

```bash
# 1. Regenerate PNG screenshot & PDF export
google-chrome --headless=new --disable-gpu --window-size=1920,1080 --screenshot=slide_01.png --print-to-pdf=slide_01.pdf --no-pdf-header-footer slide_01.html

# 2. Build PowerPoint .pptx deck
python3 generate_deck.py
```
