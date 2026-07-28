"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { galleryProjects } from "../data/gallery";
import type { GalleryCategory, GalleryProject } from "../types";
import { GalleryFilter } from "./GalleryFilter";
import { GalleryModal } from "./GalleryModal";

const surfaces = {
  gold: "from-stone-900 via-stone-700 to-amber-200",
  green: "from-emerald-950 via-emerald-800 to-emerald-200",
  plum: "from-stone-900 via-rose-950 to-rose-200",
  stone: "from-zinc-900 via-stone-600 to-stone-200",
} as const;
const ratioClasses = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
} as const;

function ProjectArt({ project }: { project: GalleryProject }) {
  return (
    <div
      className={`group relative isolate h-full w-full overflow-hidden bg-linear-to-br ${surfaces[project.accent]}`}
      role="img"
      aria-label={`${project.title} placeholder`}
    >
      <div className="absolute -right-12 -top-12 size-[66%] rounded-full bg-white/20 blur-3xl" />
      <div className="absolute inset-[11%] rounded-[43%_43%_18%_18%] border border-white/25 transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-[22%] rounded-t-full border border-white/20 bg-white/10 transition-transform duration-700 group-hover:scale-110" />
    </div>
  );
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: GalleryProject;
  onOpen: () => void;
}) {
  return (
    <motion.button
      layout
      type="button"
      onClick={onOpen}
      className="group relative block w-full overflow-hidden rounded-2xl text-left shadow-sm ring-1 ring-black/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring dark:ring-white/10"
    >
      <div className={ratioClasses[project.ratio]}>
        <ProjectArt project={project} />
      </div>
      <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-[linear-gradient(transparent,rgba(0,0,0,.8))] px-5 pb-5 pt-16 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
        <p className="text-[.65rem] font-semibold tracking-[.18em] text-white/70 uppercase">
          {project.category} · {project.frameStyle}
        </p>
        <p className="mt-1 font-serif text-xl">{project.title}</p>
      </div>
    </motion.button>
  );
}

export function GalleryShowcase() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [activeId, setActiveId] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();
  const visibleProjects = useMemo(
    () =>
      activeCategory === "All"
        ? galleryProjects
        : galleryProjects.filter(
            (project) => project.category === activeCategory,
          ),
    [activeCategory],
  );
  const activeIndex = visibleProjects.findIndex(
    (project) => project.id === activeId,
  );
  const activeProject =
    activeIndex === -1 ? null : visibleProjects[activeIndex];

  const openProject = useCallback((projectId: string) => {
    setActiveId(projectId);
  }, []);

  const closeModal = useCallback(() => {
    setActiveId(null);
  }, []);

  const move = useCallback(
    (delta: number) => {
      if (!visibleProjects.length) {
        setActiveId(null);
        return;
      }

      const nextIndex = activeIndex < 0 ? 0 : activeIndex;
      const nextProject =
        visibleProjects[
          (nextIndex + delta + visibleProjects.length) % visibleProjects.length
        ];
      setActiveId(nextProject.id);
    },
    [activeIndex, visibleProjects],
  );

  useEffect(() => {
    if (
      activeId &&
      !visibleProjects.some((project) => project.id === activeId)
    ) {
      setActiveId(null);
    }
  }, [activeId, visibleProjects]);

  const featured = galleryProjects.filter((project) => project.featured);

  return (
    <section
      id="projects"
      className="scroll-mt-24 px-6 py-20 lg:px-10 lg:py-32"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[.26em] text-(--luxury-gold) uppercase">
            Selected work
          </p>
          <h2
            id="projects-heading"
            className="mt-5 font-serif text-4xl leading-tight sm:text-5xl"
          >
            Made for real lives and remarkable spaces.
          </h2>
          <p className="mt-5 leading-8 text-muted-foreground">
            Every piece begins with a story. Explore a selection of the work
            we’ve brought to life.
          </p>
        </div>
        <div className="mt-14 space-y-16 lg:mt-20">
          {featured.map((project, index) => (
            <article
              key={project.id}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
            >
              <button
                type="button"
                onClick={() => openProject(project.id)}
                className={`group overflow-hidden rounded-3xl text-left shadow-[0_24px_55px_rgba(30,25,20,.14)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring ${index % 2 ? "lg:order-2" : ""}`}
              >
                <div className="aspect-4/3">
                  <ProjectArt project={project} />
                </div>
              </button>
              <div className={index % 2 ? "lg:order-1" : ""}>
                <p className="text-xs font-semibold tracking-[.22em] text-(--luxury-gold) uppercase">
                  {project.category} · {project.frameStyle}
                </p>
                <h3 className="mt-4 font-serif text-4xl">{project.title}</h3>
                <p className="mt-4 max-w-lg leading-8 text-muted-foreground">
                  {project.description}
                </p>
                {project.location && (
                  <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="size-4 text-primary" />
                    {project.location}
                  </p>
                )}
                <button
                  type="button"
                  onClick={() => openProject(project.id)}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  View project <ArrowUpRight className="size-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-24 border-t border-border pt-16 lg:mt-32">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[.26em] text-(--luxury-gold) uppercase">
                More from the studio
              </p>
              <h2 className="mt-4 font-serif text-4xl">Browse the gallery.</h2>
            </div>
            <GalleryFilter
              active={activeCategory}
              onChange={setActiveCategory}
            />
          </div>
          <motion.div
            layout
            className="mt-10 columns-1 gap-4 sm:columns-2 xl:columns-3"
          >
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={
                  reducedMotion ? false : { opacity: 0, scale: 0.98, y: 8 }
                }
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  delay: Math.min(index * 0.025, 0.2),
                  duration: 0.35,
                }}
                className="mb-4 break-inside-avoid"
              >
                <ProjectCard
                  project={project}
                  onOpen={() => openProject(project.id)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <GalleryModal
        project={activeProject}
        onClose={closeModal}
        onPrevious={() => move(-1)}
        onNext={() => move(1)}
      />
    </section>
  );
}
