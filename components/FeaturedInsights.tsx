"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { getInsights } from "@/lib/sanity";
import Link from "next/link";
import { getImageUrl } from "@/lib/image";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

export default function FeaturedInsights() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  useEffect(() => {
    async function loadInsights() {
      try {
        const res = await fetch("/api/featured-insights");

        const data = await res.json();

        setPosts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadInsights();
  }, []);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());

    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <AnimatedSection>
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="max-w-8xl mx-auto px-5 md:px-8 xl:px-12">
          {/* HEADER */}
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[auto_1fr_auto]
              lg:grid-rows-[auto_auto]

              gap-x-10
              gap-y-6

              text-center
              lg:text-left
            "
          >
            {/* BADGE */}
            <div className="flex justify-center lg:block">
              <span
                className="
                  inline-block
                  text-[11px]
                  sm:text-xs
                  px-4
                  py-1.5
                  rounded-full

                  font-semibold
                  tracking-wide

                  text-[#4f8fcb]

                  bg-white/70
                  backdrop-blur-md
                  border border-[#0b1b33]/10
                  shadow-[0_4px_20px_rgba(79,143,203,0.15)]
                "
              >
                INSIGHTS
              </span>
            </div>

            {/* TITLE */}
            <h2
              className="
                text-2xl
                sm:text-3xl
                md:text-[2.5rem]
                lg:text-[2.8rem]
                xl:text-[2.9rem]

                font-semibold

                text-[#0b1b33]

                leading-[1.05]
                tracking-[-0.02em]

                mx-auto
                lg:mx-0
              "
            >
              Featured Business Insights
              {/* <br className="block lg:hidden" />
              <span className="hidden lg:inline">&nbsp;</span>
              <span className="text-[#4f8fcb]">Insights</span> */}
            </h2>

            {/* BUTTON */}
            <div className="flex justify-center lg:justify-end">
              <Link
                href="/insights"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2

                  px-5
                  sm:px-6
                  py-2.5
                  sm:py-3

                  rounded-full

                  bg-[#4f8fcb]
                  text-[#0b1b33]

                  text-sm
                  sm:text-base

                  font-medium

                  transition-all
                  duration-700

                  hover:bg-[#103663]
                  hover:text-white
                "
              >
                VIEW ALL INSIGHTS
                <span
                  className="
                    rotate-[-45deg]
                    transition-transform
                    duration-700
                    group-hover:rotate-0
                  "
                >
                  →
                </span>
              </Link>
            </div>

            {/* DESCRIPTION */}
            <p
              className="
                lg:col-start-2

                text-[#0b1b33]

                leading-7

                text-sm
                sm:text-[15px]
                md:text-base

                mx-auto
                lg:mx-0

                max-w-xl
              "
            >
              Discover practical strategies, operational thinking, and business
              insights designed to help businesses grow with confidence.
            </p>
          </div>

          {/* CAROUSEL */}
          {/* GRID */}
          <div className="overflow-hidden mt-12" ref={emblaRef}>
            <div className="flex">
              {loading ? (
                <div className="col-span-full text-center py-10 text-[#0b1b33]/60">
                  Loading insights...
                </div>
              ) : (
                posts.map((post: any) => {
                  const imageUrl = getImageUrl(post.thumbnail);

                  return (
                    <div
                      key={post._id}
                      className="
        flex-[0_0_100%]
        md:flex-[0_0_50%]
        xl:flex-[0_0_33.333%]
        px-3
      "
                    >
                      <Link
                        href={`/insights/${post.slug}`}
                        className="group block h-full"
                      >
                        <div className="border rounded-2xl overflow-hidden h-full flex flex-col">
                          {imageUrl && (
                            <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                              <Image
                                src={imageUrl}
                                alt={post.title}
                                fill
                                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                              />
                            </div>
                          )}

                          <div className="p-6 flex flex-col flex-1">
                            <h3
                              className="
    text-base
    sm:text-lg
    font-semibold
    text-[#0b1b33]

    leading-tight

    line-clamp-2

    overflow-hidden

    transition-colors
    duration-300
    group-hover:text-[#4f8fcb]
  "
                            >
                              {post.title}
                            </h3>

                            <div className="mt-auto pt-6">
                              <span
                                className="text-[#4f8fcb] font-medium group-hover:underline text-sm
    sm:text-lg"
                              >
                                Read Article →
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/*  Dots Navigation*/}
          <div className="flex items-center justify-center gap-3 mt-10">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`
        rounded-full
        transition-all
        duration-500
        ease-out

        ${
          index === selectedIndex
            ? "w-10 h-2.5 bg-[#4f8fcb]"
            : "w-2.5 h-2.5 bg-[#0b1b33]/20 hover:bg-[#4f8fcb]/50"
        }
      `}
              />
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
