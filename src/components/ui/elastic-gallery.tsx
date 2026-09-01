import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export interface ElasticItemProps {
  id: string;
  title: string;
  category: string;
  src: string;
  alt: string;
  description?: string;
  spec1?: string;
  spec2?: string;
  badge?: string;
}

export interface ElasticGalleryProps {
  items?: ElasticItemProps[];
  activeId?: string | null;
  onItemChange?: (id: string) => void;
  className?: string;
}

const DEFAULT_ITEMS: ElasticItemProps[] = [
  {
    id: "01",
    title: "Neon Cyber",
    category: "Photography",
    src: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg",
    alt: "Neon lights",
  },
  {
    id: "02",
    title: "Urban Brutalism",
    category: "Architecture",
    src: "https://images.pexels.com/photos/2224424/pexels-photo-2224424.jpeg",
    alt: "Brutalist architecture",
  },
  {
    id: "03",
    title: "Abstract Fluid",
    category: "Design",
    src: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg",
    alt: "Abstract fluid art",
  },
  {
    id: "04",
    title: "Silent Nature",
    category: "Landscape",
    src: "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg",
    alt: "Misty forest",
  },
  {
    id: "05",
    title: "Future Tech",
    category: "Innovation",
    src: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
    alt: "Futuristic technology",
  },
];

export function ElasticGallery({
  items = DEFAULT_ITEMS,
  activeId: controlledActiveId,
  onItemChange,
  className,
}: ElasticGalleryProps) {
  const [internalActiveId, setInternalActiveId] = useState<string | null>(
    controlledActiveId || (items.length > 0 ? items[0].id : null)
  );

  useEffect(() => {
    if (controlledActiveId !== undefined) {
      setInternalActiveId(controlledActiveId);
    }
  }, [controlledActiveId]);

  const handleSelect = (id: string) => {
    setInternalActiveId(id);
    onItemChange?.(id);
  };

  const currentActiveId = controlledActiveId !== undefined ? controlledActiveId : internalActiveId;

  return (
    <div className={cn("w-full py-4 dark:bg-black", className)}>
      {/* Container: Fixed height on mobile/desktop to ensure animation stability */}
      <div className="mx-auto flex h-[380px] sm:h-[420px] lg:h-[450px] w-full flex-col gap-2 md:flex-row md:gap-3.5">
        {items.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => handleSelect(item.id)}
            onClick={() => handleSelect(item.id)} // Touch & click support
            className={cn(
              "relative cursor-pointer overflow-hidden rounded-[24px] border border-neutral-200 bg-neutral-900 dark:border-neutral-800",
              // Layout & Flex Transition
              "transition-[flex,filter] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
              // Flex Logic:
              // If active, take up 3.5-4 parts of space. If inactive, take 1 part.
              currentActiveId === item.id ? "flex-[3.8]" : "flex-[1]",
              // Brightness logic for focus
              currentActiveId === item.id
                ? "brightness-100 ring-2 ring-white/20 shadow-2xl"
                : "brightness-60 hover:brightness-80"
            )}
          >
            {/* Background Image Layer */}
            <div className="absolute inset-0 h-full w-full">
              <img
                src={item.src}
                alt={item.alt}
                className={cn(
                  "h-full w-full object-cover transition-transform duration-1000 ease-out",
                  // Subtle zoom on active
                  currentActiveId === item.id ? "scale-105" : "scale-115"
                )}
              />
              {/* Gradient Overlay for Text Readability */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 via-50% to-transparent transition-opacity duration-500",
                  currentActiveId === item.id ? "opacity-100" : "opacity-70"
                )}
              />
            </div>

            {/* Top Badge (if provided) */}
            {item.badge && (
              <div className="absolute top-3 left-3 right-3 z-10 flex justify-between items-center pointer-events-none">
                <span className="rounded-full bg-black/60 px-2.5 py-1 text-[9px] font-mono font-bold tracking-wider text-white backdrop-blur-md border border-white/20">
                  {item.id}
                </span>
                <span className="rounded-full bg-red-600/90 px-2.5 py-1 text-[9px] font-mono font-bold tracking-wider text-white backdrop-blur-md border border-white/20">
                  {item.badge}
                </span>
              </div>
            )}

            {/* --- Content Container --- */}
            <div className="absolute bottom-0 left-0 right-0 flex h-full flex-col justify-end p-4 md:p-6">
              {/* Active Content: Title, Specs & Button */}
              <div
                className={cn(
                  "flex flex-col gap-2 transition-all duration-500",
                  // Hide/Show based on active state with translation for smooth entry
                  currentActiveId === item.id
                    ? "translate-y-0 opacity-100 delay-150 pointer-events-auto"
                    : "translate-y-12 opacity-0 pointer-events-none absolute bottom-4"
                )}
              >
                {/* Category Tag */}
                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-white/30 bg-white/15 px-2.5 py-0.5 text-[9.5px] font-mono font-bold uppercase tracking-wider text-red-300 backdrop-blur-md">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight font-sans tracking-tight drop-shadow-md">
                  {item.title}
                </h3>

                {/* Optional Spec / Subtitle */}
                {(item.spec1 || item.spec2) && (
                  <div className="flex items-center gap-2 text-xs font-sans font-semibold text-slate-200">
                    {item.spec1 && <span className="text-red-300 font-bold">{item.spec1}</span>}
                    {item.spec1 && item.spec2 && <span className="text-white/40">•</span>}
                    {item.spec2 && <span className="text-white">{item.spec2}</span>}
                  </div>
                )}

                {/* Optional Description Box */}
                {item.description && (
                  <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white shadow-inner">
                    <p className="text-[11px] font-sans text-slate-100 font-normal leading-snug">
                      {item.description}
                    </p>
                  </div>
                )}

                {/* Call to Action Button */}
                <div className="mt-1 flex items-center justify-between rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-[0.98]">
                  <span className="font-sans text-[11.5px] tracking-wide uppercase">
                    Explore Solution
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Inactive Content: Vertical Text (Desktop) / Short Label (Mobile) */}
              <div
                className={cn(
                  "absolute transition-all duration-500",
                  // Position logic
                  "bottom-4 left-1/2 -translate-x-1/2 md:bottom-8",
                  // Hide when active
                  currentActiveId === item.id
                    ? "opacity-0 scale-50 pointer-events-none"
                    : "opacity-100 delay-300 pointer-events-auto"
                )}
              >
                {/* Desktop: Vertical Text */}
                <div className="hidden flex-col items-center gap-3 md:flex">
                  <span className="rounded-full bg-white/15 px-2 py-0.5 text-[9px] font-mono font-bold text-white/90">
                    {item.id}
                  </span>
                  <span className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.2em] text-white/90 [writing-mode:vertical-rl] rotate-180 drop-shadow-sm">
                    {item.title}
                  </span>
                </div>

                {/* Mobile: Horizontal ID/Label */}
                <span className="block text-xs font-bold text-white md:hidden">
                  {item.id}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ElasticGallery;
