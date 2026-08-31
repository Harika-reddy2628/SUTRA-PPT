import { Users } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const team = [
    {
      name: 'Nikhil',
      role: 'Tech Lead & Core Architect',
      subsystems: 'Subsystems A (GNC & FSD) & B (Deep JSCC Comms)',
      focus: 'PX4 Offboard, ORCA 3D Solver, 3D Voxel Cost-Volume, Deep JSCC Autoencoder, SwarmRAFT Consensus.',
      tag: 'TECH LEAD'
    },
    {
      name: 'Vedanth Sai Ram',
      role: 'AI Perception & Geolocation Lead',
      subsystems: 'Subsystem C (Perception & DEM Raycasting)',
      focus: 'Tri-modal RGB/FLIR/mmWave cross-attention fusion, SAHI slicing, terrain-corrected WGS84 raymarching (3.59cm error).',
      tag: 'AI PERCEPTION'
    },
    {
      name: 'Siva Kesava',
      role: '3D GIS & GCS Lead',
      subsystems: 'Subsystem D (Pegasus 3D GIS & ATAK Bridge)',
      focus: 'React 18, Mapbox GL JS 3D mountain elevation models, decoupled 60.0 FPS WebGPU buffer, MIL-STD-2525 CoT XML generator.',
      tag: '3D GIS GCS'
    },
    {
      name: 'Harika',
      role: 'Verification Audits & Pitch Strategy Lead',
      subsystems: 'Subsystem E (Verification & Zero-Mock QA)',
      focus: '232/232 automated test orchestration, zero-mock benchmark audits, disaster field CONOPS, and presentation architecture.',
      tag: 'QA & PITCH'
    },
    {
      name: 'Rohith Kumar',
      role: 'Hardware-in-the-Loop & Compute Runner',
      subsystems: 'Subsystem F (HIL Simulation & Benchmarking)',
      focus: 'Gazebo Sim 8 digital twin orchestration, NVIDIA RTX 3050 TensorRT dynamic inversion exports, ESP32-S3 firmware flashing.',
      tag: 'COMPUTE & HIL'
    }
  ];

  return (
    <section id="team" className="py-24 px-6 max-w-7xl mx-auto z-10 relative">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-earth-forestSoft border border-earth-forest/20 text-earth-forest">
          <Users className="w-3.5 h-3.5" />
          <span>SUTRA CORE ARCHITECTURE TEAM</span>
        </div>
        <h2 className="font-heading text-4xl sm:text-5xl font-black text-earth-forest uppercase tracking-tight">
          Engineered by Swarm Specialists
        </h2>
        <p className="text-sandstone-muted text-base sm:text-lg font-serif italic">
          Dedicated subsystem owners delivering end-to-end mathematical rigor and empirical validation.
        </p>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member, i) => (
          <div
            key={member.name}
            className={`p-7 rounded-3xl bg-white border border-sandstone-border shadow-card-light hover:shadow-card-hover transition-all flex flex-col justify-between ${i === 0 ? 'lg:col-span-2' : ''}`}
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-earth-forest">
                    {member.name}
                  </h3>
                  <div className="text-xs font-mono font-semibold text-earth-sage mt-0.5">
                    {member.role}
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-earth-forest text-white">
                  {member.tag}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-canvas-raised border border-sandstone-border mb-4 font-mono text-[11px] text-earth-forest font-semibold">
                {member.subsystems}
              </div>

              <p className="text-sandstone-muted text-xs leading-relaxed font-sans">
                {member.focus}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-sandstone-border flex justify-between items-center text-[11px] font-mono text-sandstone-muted">
              <span>Grand Finals Edition</span>
              <span className="text-emerald-700 font-bold">● Active Lead</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
