"use client";

import Image from "next/image";
import React from "react";

export default function StaffUnitedFiveDiagram() {
  const center = 290;
  const outerRadius = 230;
  const innerRadius = 130;
  const segmentAngle = 72; // 360 / 5

  const segments = [
    {
      title: "Finance",
      subtitle: "Clarity & control",
      color: "#4a90d9",
      startAngle: -90,
      labelX: 465,
      labelY: 95,
      align: "start",
    },
    {
      title: "Operations",
      subtitle: "Structure & efficiency",
      color: "#0d1b36",
      startAngle: -18,
      labelX: 540,
      labelY: 280,
      align: "start",
    },
    {
      title: "Sales",
      subtitle: "Customers & revenue",
      color: "#7a9ab8",
      startAngle: 54,
      labelX: 291,
      labelY: 565,
      align: "middle",
    },
    {
      title: "Marketing",
      subtitle: "Visibility & brand",
      color: "#2255a0",
      startAngle: 126,
      labelX: 40,
      labelY: 280,
      align: "end",
    },
    {
      title: "Growth",
      subtitle: "Setup & expansion",
      color: "#7aabdf",
      startAngle: 198,
      labelX: 105,
      labelY: 95,
      align: "end",
    },
  ];

  // Convert polar coordinates to cartesian
  const polarToCartesian = (
    cx: number,
    cy: number,
    radius: number,
    angleInDegrees: number,
  ) => {
    const angleInRadians = (angleInDegrees * Math.PI) / 180;
    return {
      x: cx + radius * Math.cos(angleInRadians),
      y: cy + radius * Math.sin(angleInRadians),
    };
  };

  // Create donut segment path
  const createDonutSegment = (
    startAngle: number,
    endAngle: number,
    outerR: number,
    innerR: number,
  ) => {
    const startOuter = polarToCartesian(center, center, outerR, startAngle);
    const endOuter = polarToCartesian(center, center, outerR, endAngle);
    const startInner = polarToCartesian(center, center, innerR, startAngle);
    const endInner = polarToCartesian(center, center, innerR, endAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

    return `
      M ${startOuter.x} ${startOuter.y}
      A ${outerR} ${outerR} 0 ${largeArcFlag} 1 ${endOuter.x} ${endOuter.y}
      L ${endInner.x} ${endInner.y}
      A ${innerR} ${innerR} 0 ${largeArcFlag} 0 ${startInner.x} ${startInner.y}
      Z
    `;
  };

  return (
    <section
      className="pb-12 md:pb-16 lg:pb-24
    fade-up active"
    >
      <div className="max-w-2xl mx-auto px-6">
        {/* Diagram */}
        <div
          className="
    max-w-[320px]
    sm:max-w-[420px]
    md:max-w-[560px]
    lg:max-w-[680px]
    xl:max-w-[760px]
    2xl:max-w-[820px]
    mx-auto px-4 "
        >
          <svg
            viewBox="-40 0 660 580"
            className="w-full h-auto overflow-visible"
          >
            <defs>
              {/* Glass gradient overlay */}
              <linearGradient
                id="glassOverlay"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="rgba(255,255,255,0.38)" />
                <stop offset="30%" stopColor="rgba(255,255,255,0.14)" />
                <stop offset="65%" stopColor="rgba(255,255,255,0.05)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>

              {/* Soft glossy highlight */}
              <linearGradient id="glassShine" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.28)" />
                <stop offset="35%" stopColor="rgba(255,255,255,0.08)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>

              {/* Outer shadow */}
              <filter
                id="glassShadow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feDropShadow
                  dx="0"
                  dy="14"
                  stdDeviation="4"
                  floodColor="#0b1b33"
                  floodOpacity="0.14"
                />
              </filter>

              {/* Inner glow */}
              <filter
                id="glassGlow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feDropShadow
                  dx="0"
                  dy="-2"
                  stdDeviation="4"
                  floodColor="#ffffff"
                  floodOpacity="0.5"
                />
              </filter>
            </defs>

            {/* Donut Segments */}
            {segments.map((segment, index) => {
              const path = createDonutSegment(
                segment.startAngle,
                segment.startAngle + segmentAngle,
                outerRadius,
                innerRadius,
              );

              return (
                <g
                  key={index}
                  className="group cursor-pointer"
                  style={{
                    transformBox: "fill-box",
                    transformOrigin: "center",
                  }}
                >
                  {/* Segment Wrapper */}
                  <g
                    className="
        transition-all
        duration-700
        ease-out
        group-hover:scale-[1.04]
      "
                    style={{
                      transformBox: "fill-box",
                      transformOrigin: "center center",
                    }}
                  >
                    {/* Main segment */}
                    <path
                      d={path}
                      fill={segment.color}
                      stroke="rgba(255,255,255,0.75)"
                      strokeWidth="10"
                      strokeLinejoin="round"
                      filter="url(#glassShadow)"
                    />

                    {/* Stronger shadow when hovered */}
                    <path
                      d={path}
                      fill={segment.color}
                      opacity="0"
                      pointerEvents="none"
                      className="
          transition-all
          duration-700
          ease-out
          group-hover:opacity-100
        "
                      style={{
                        filter: `
            drop-shadow(0 30px 35px rgba(11,27,51,0.28))
            drop-shadow(0 10px 18px rgba(74,144,217,0.18))
          `,
                      }}
                    />

                    {/* Glass overlay */}
                    <path
                      d={path}
                      fill="url(#glassOverlay)"
                      opacity="0.95"
                      pointerEvents="none"
                    />

                    {/* Top shine */}
                    <path
                      d={path}
                      fill="url(#glassShine)"
                      filter="url(#glassGlow)"
                      opacity="0.9"
                      pointerEvents="none"
                    />

                    {/* Bright edge highlight on hover */}
                    <path
                      d={path}
                      fill="none"
                      stroke="rgba(255,255,255,0.22)"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      pointerEvents="none"
                      className="
          transition-all
          duration-700
          ease-out
          group-hover:stroke-[rgba(255,255,255,0.55)]
          group-hover:stroke-[3]
        "
                    />
                  </g>

                  {/* LABEL */}
                  <g
                    pointerEvents="none"
                    className="
        transition-all
        duration-700
        ease-out
        group-hover:scale-[1.08]
        group-hover:-translate-y-1
      "
                    style={{
                      transformBox: "fill-box",
                      transformOrigin: "center center",
                    }}
                  >
                    {/* Title */}
                    <text
                      x={segment.labelX}
                      y={segment.labelY}
                      textAnchor={segment.align as any}
                      fill={segment.color}
                      fontSize="20"
                      fontWeight="700"
                      fontFamily="Poppins, sans-serif"
                      className="
          transition-all
          duration-700
          ease-out
          group-hover:font-extrabold
        "
                      style={{
                        filter: "drop-shadow(0 4px 12px rgba(74,144,217,0.22))",
                      }}
                    >
                      {segment.title}
                    </text>

                    {/* Subtitle */}
                    <text
                      x={segment.labelX}
                      y={segment.labelY + 28}
                      textAnchor={segment.align as any}
                      fill="#6b7a96"
                      fontSize="14"
                      fontWeight="400"
                      fontFamily="Poppins, sans-serif"
                      opacity="0.95"
                      className="
          transition-all
          duration-700
          ease-out
          group-hover:opacity-100
        "
                    >
                      {segment.subtitle}
                    </text>
                  </g>
                </g>
              );
            })}

            {/* Center White Circle */}
            <circle
              cx={center}
              cy={center}
              r="114"
              fill="rgba(255,255,255,0.92)"
              filter="drop-shadow(0 10px 30px rgba(11,27,51,0.10))"
            />

            {/* Dashed Inner Ring */}
            <circle
              cx={center}
              cy={center}
              r="104"
              fill="none"
              stroke="rgba(79,141,201,0.22)"
              strokeWidth="2"
              strokeDasharray="6 8"
              className="animate-spin origin-center"
              style={{
                transformBox: "fill-box",
                transformOrigin: "center center",
                animationDuration: "40s", // chỉnh tốc độ quay
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
              }}
            />

            {/* Center Logo */}
            <foreignObject x="205" y="225" width="170" height="90">
              <div className="flex items-center justify-center w-full h-full">
                <Image
                  src="/services/5taff-logo-services.webp"
                  alt="5TAFF United"
                  width={160}
                  height={60}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </foreignObject>

            {/* Tagline */}
            <text
              x={center}
              y="322"
              textAnchor="middle"
              fill="#0b1b33"
              fontSize="22"
              fontWeight="300"
              fontFamily="Poppins, sans-serif"
            >
              Scalable Support
            </text>
          </svg>
        </div>

        {/* Description */}
        <div className="mt-10 max-w-4xl mx-auto text-center">
          <p className="text-[#0a1b33] leading-relaxed text-base md:text-lg">
            The 5 Core Functions Every Business Needs to Grow and Scale. At
            STAFF United, we provide scalable operational support across
            finance, operations, sales, marketing, and growth.
          </p>
        </div>
      </div>
    </section>
  );
}
