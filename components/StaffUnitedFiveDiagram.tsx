"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function StaffUnitedFiveDiagram() {
  const center = 290;
  const outerRadius = 230;
  const innerRadius = 130;
  const segmentAngle = 72; // 360 / 5
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const svgRef = useRef<SVGSVGElement>(null);
  const dragStartAngle = useRef(0);
  const startRotation = useRef(0);

  const segments = [
    {
      letter: "S",

      title: "Structured Operations",
      // subtitle: "Clarity & control",
      color: "#4a90d9",
      startAngle: -90,
      labelX: 465,
      labelY: 95,
      align: "start",
    },
    {
      letter: "T",

      title: "Targeted Sales",
      // subtitle: "Structure & efficiency",
      color: "#0d1b36",
      startAngle: -18,
      labelX: 540,
      labelY: 280,
      align: "start",
    },
    {
      letter: "A",

      title: "Accounting & Finance",
      // subtitle: "Customers & revenue",
      color: "#7a9ab8",
      startAngle: 54,
      labelX: 291,
      labelY: 565,
      align: "middle",
    },
    {
      letter: "F",

      title: "Focused Marketing",
      // subtitle: "Visibility & brand",
      color: "#2255a0",
      startAngle: 126,
      labelX: 40,
      labelY: 280,
      align: "end",
    },
    {
      letter: "F",

      title: "Future Expansion",
      // subtitle: "Setup & expansion",
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

  const createArcPath = (
    startAngle: number,
    endAngle: number,
    radius: number,
  ) => {
    const start = polarToCartesian(center, center, radius, startAngle);
    const end = polarToCartesian(center, center, radius, endAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

    return `M ${start.x.toFixed(3)} ${start.y.toFixed(3)} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x.toFixed(3)} ${end.y.toFixed(3)}`;
  };

  const getAngle = (clientX: number, clientY: number) => {
    const svg = svgRef.current;
    if (!svg) return 0;

    const rect = svg.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    return Math.atan2(clientY - cy, clientX - cx) * (180 / Math.PI);
  };

  const handlePointerDown = (e: React.PointerEvent<SVGGElement>) => {
    setIsDragging(true);
    setIsPaused(true);

    dragStartAngle.current = getAngle(e.clientX, e.clientY);
    startRotation.current = rotation;

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<SVGGElement>) => {
    if (!isDragging) return;

    const currentAngle = getAngle(e.clientX, e.clientY);
    const delta = currentAngle - dragStartAngle.current;

    setRotation(startRotation.current + delta);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    setIsPaused(false); // thả ra sẽ tự xoay lại
  };

  useEffect(() => {
    if (isPaused || isDragging) return;

    const id = setInterval(() => {
      setRotation((prev) => prev + 0.08);
    }, 16);

    return () => clearInterval(id);
  }, [isPaused, isDragging]);

  return (
    <section
      className="
    relative
    w-screen
    left-1/2
    right-1/2
    -ml-[50vw]
    -mr-[50vw]

    pt-16 md:pt-32 lg:pt-36
    pb-16 md:pb-24

    overflow-hidden

    bg-gradient-to-b
    from-[#06172d]
    via-[#0a1b33]
    to-[#103663]

    text-white
    fade-up active
  "
    >
      {/* BACKGROUND GLOW */}
      <div className="hidden md:block absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_rgba(79,141,201,0.45)_0%,_rgba(79,141,201,0.12)_35%,_transparent_75%)]"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center">
          {/* BADGE */}
          <div className="flex justify-center">
            <span
              className="
            inline-block
            text-[11px] sm:text-xs
            px-4 py-1.5
            rounded-full
            font-semibold
            tracking-wide
            text-[#8FD3FF]
            bg-white/10
            backdrop-blur-md
            border border-white/10
            shadow-[0_4px_20px_rgba(79,141,201,0.15)]
          "
            >
              OUR SERVICES
            </span>
          </div>

          {/* LOGO */}
          <div className="mt-2 flex justify-center">
            <Image
              src="/services/5taff-logo-services.webp"
              alt="5TAFF United"
              width={320}
              height={120}
              className="
            w-auto
            h-auto
            max-w-[220px]
            sm:max-w-[280px]
            md:max-w-[320px]
          "
              priority
            />
          </div>

          {/* SUBTITLE */}
          <p className="mt-2 mb-10 max-w-4xl mx-auto text-white/80 leading-relaxed">
            5-Core Support™ Ecosystem business functions. One scalable support
            ecosystem.
          </p>
        </div>
        {/* Existing Diagram Content */}
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
              ref={svgRef}
              viewBox="-40 0 660 580"
              className="w-full h-auto overflow-visible touch-none select-none"
              style={{
                touchAction: "none",
                WebkitUserSelect: "none",
                userSelect: "none",
              }}
            >
              <defs>
                {/* Whole donut glass overlay */}
                <radialGradient id="wholeDonutGlass" cx="28%" cy="18%" r="90%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
                  <stop offset="18%" stopColor="rgba(255,255,255,0.42)" />
                  <stop offset="40%" stopColor="rgba(255,255,255,0.16)" />
                  <stop offset="70%" stopColor="rgba(255,255,255,0.05)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </radialGradient>
                {/* Soft blur for realistic glass */}
                <filter
                  id="wholeDonutGlassBlur"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feGaussianBlur stdDeviation="2.2" />
                </filter>

                {/* Main glass overlay */}
                <linearGradient
                  id="glassOverlay"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="rgba(255,255,255,0.78)" />
                  <stop offset="15%" stopColor="rgba(255,255,255,0.42)" />
                  <stop offset="35%" stopColor="rgba(255,255,255,0.18)" />
                  <stop offset="65%" stopColor="rgba(255,255,255,0.07)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.00)" />
                </linearGradient>

                {/* Glossy reflection */}
                <linearGradient
                  id="glassShine"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="rgba(255,255,255,0.65)" />
                  <stop offset="12%" stopColor="rgba(255,255,255,0.34)" />
                  <stop offset="28%" stopColor="rgba(255,255,255,0.12)" />
                  <stop offset="55%" stopColor="rgba(255,255,255,0.03)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.00)" />
                </linearGradient>

                {/* Frosted tint */}
                <linearGradient
                  id="glassTint"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="rgba(255,255,255,0.14)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.03)" />
                </linearGradient>

                {/* Premium glass shadow */}
                <filter
                  id="glassShadow"
                  x="-80%"
                  y="-80%"
                  width="260%"
                  height="260%"
                >
                  <feDropShadow
                    dx="0"
                    dy="10"
                    stdDeviation="8"
                    floodColor="#02101f"
                    floodOpacity="0.14"
                  />

                  <feDropShadow
                    dx="0"
                    dy="2"
                    stdDeviation="4"
                    floodColor="#8FD3FF"
                    floodOpacity="0.08"
                  />

                  <feDropShadow
                    dx="0"
                    dy="-1"
                    stdDeviation="2"
                    floodColor="#ffffff"
                    floodOpacity="0.16"
                  />
                </filter>

                {/* Background glass panel gradient */}
                <linearGradient
                  id="backGlassGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="rgba(255,255,255,0.40)" />
                  <stop offset="45%" stopColor="rgba(255,255,255,0.12)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
                </linearGradient>

                {/* Background glass blur */}
                <filter
                  id="backGlassBlur"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feGaussianBlur stdDeviation="4" />
                </filter>
              </defs>

              {/* =========================================
     CIRCULAR GLASS PANEL BEHIND DONUT
     ========================================= */}
              <circle
                cx={center}
                cy={center}
                r={outerRadius + 12}
                fill="url(#backGlassGradient)"
                filter="url(#backGlassBlur)"
                opacity="1"
                pointerEvents="none"
              />

              {/* Soft glowing edge */}
              <circle
                cx={center}
                cy={center}
                r={outerRadius + 10}
                fill="none"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="2"
                opacity="0.9"
                pointerEvents="none"
              />

              {/* Donut Segments */}
              <g
                onMouseEnter={(e) => {
                  if (!isDragging) {
                    e.currentTarget.style.animationPlayState = "paused";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isDragging) {
                    e.currentTarget.style.animationPlayState = "running";
                  }
                }}
                onPointerDown={(e) => {
                  setIsDragging(true);

                  // Dừng animation CSS
                  e.currentTarget.style.animationPlayState = "paused";

                  // Lấy góc xoay hiện tại từ CSS transform
                  const computed = window.getComputedStyle(e.currentTarget);
                  const matrix = new DOMMatrix(computed.transform);

                  const currentRotation =
                    Math.atan2(matrix.b, matrix.a) * (180 / Math.PI);

                  setRotation(currentRotation);
                  startRotation.current = currentRotation;
                  dragStartAngle.current = getAngle(e.clientX, e.clientY);

                  e.currentTarget.setPointerCapture(e.pointerId);
                }}
                onPointerMove={(e) => {
                  if (!isDragging) return;

                  const currentAngle = getAngle(e.clientX, e.clientY);
                  const delta = currentAngle - dragStartAngle.current;

                  setRotation(startRotation.current + delta);
                }}
                onPointerUp={(e) => {
                  setIsDragging(false);

                  // Xóa transform thủ công
                  e.currentTarget.style.transform = "";

                  // Tiếp tục animation CSS
                  e.currentTarget.style.animationPlayState = "running";
                }}
                onPointerCancel={(e) => {
                  setIsDragging(false);
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.animationPlayState = "running";
                }}
                className={isDragging ? "" : "animate-spin origin-center"}
                style={{
                  transformBox: "view-box",
                  transformOrigin: `${center}px ${center}px`,
                  animationDuration: "60s",
                  animationTimingFunction: "linear",
                  animationIterationCount: "infinite",
                  cursor: isDragging ? "grabbing" : "grab",
                  ...(isDragging
                    ? {
                        transform: `rotate(${rotation}deg)`,
                      }
                    : {}),
                }}
              >
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
                      className="group "
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
                          fillOpacity="0.72"
                          stroke="rgba(255,255,255,0.82)"
                          strokeWidth="7"
                          strokeLinejoin="miter"
                          strokeMiterlimit="2"
                          strokeLinecap="butt"
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

                        <path
                          d={path}
                          fill="none"
                          stroke="rgba(255,255,255,0.22)"
                          strokeWidth="2"
                          strokeLinejoin="miter"
                          strokeMiterlimit="2"
                          pointerEvents="none"
                          strokeLinecap="butt"
                          className="
          transition-all
          duration-700
          ease-out
          group-hover:stroke-[rgba(255,255,255,0.55)]
          group-hover:stroke-[3]
        "
                        />
                      </g>
                      {/* Large branding letter inside segment */}
                      <text
                        x={center}
                        y={center - 178}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="rgba(255,255,255,0.60)"
                        fontSize="72"
                        fontWeight="400"
                        fontFamily="Poppins, sans-serif"
                        style={{
                          filter:
                            "drop-shadow(0 0 20px rgba(255,255,255,0.22))",
                        }}
                        transform={`rotate(${segment.startAngle + segmentAngle / 2 + 90} ${center} ${center})`}
                      >
                        {segment.letter}
                      </text>

                      {/* LABEL */}
                      <g pointerEvents="none">
                        {/* Invisible curved path for title */}
                        <path
                          id={`title-path-${index}`}
                          d={createArcPath(
                            segment.startAngle + 8,
                            segment.startAngle + segmentAngle - 8,
                            outerRadius + 25,
                          )}
                          fill="none"
                          stroke="none"
                        />

                        {/* Curved title */}
                        <text
                          fill="rgba(255,255,255,0.96)"
                          fontSize="20"
                          fontWeight="700"
                          fontFamily="Poppins, sans-serif"
                          letterSpacing="0.2"
                          className="
      transition-all
      duration-700
      ease-out
    "
                          style={{
                            filter:
                              "drop-shadow(0 4px 12px rgba(74,144,217,0.22))",
                          }}
                        >
                          <textPath
                            href={`#title-path-${index}`}
                            startOffset="50%"
                            textAnchor="middle"
                            method="align"
                            spacing="auto"
                          >
                            {segment.title}
                          </textPath>
                        </text>
                      </g>
                    </g>
                  );
                })}
              </g>

              {/* =========================================
     WHOLE DONUT GLASS PANEL
     ========================================= */}

              {/* Frosted glass base */}
              <path
                d={createDonutSegment(-90, 270, outerRadius, innerRadius)}
                fill="rgba(255,255,255,0.14)"
                filter="url(#wholeDonutGlassBlur)"
                pointerEvents="none"
              />

              {/* Main glossy overlay */}
              <path
                d={createDonutSegment(-90, 270, outerRadius, innerRadius)}
                fill="url(#wholeDonutGlass)"
                opacity="1"
                pointerEvents="none"
              />

              {/* Strong top-left reflection */}
              <path
                d={createDonutSegment(-90, 270, outerRadius, innerRadius)}
                fill="url(#glassOverlay)"
                opacity="0.75"
                pointerEvents="none"
              />

              {/* Glossy shine */}
              <path
                d={createDonutSegment(-90, 270, outerRadius, innerRadius)}
                fill="url(#glassShine)"
                opacity="0.55"
                pointerEvents="none"
              />

              {/* Center Circle */}
              <defs>
                <radialGradient
                  id="centerCoreGradient"
                  cx="45%"
                  cy="45%"
                  r="50%"
                >
                  {/* Highlight góc trên trái */}
                  <stop offset="0%" stopColor="#1f4f85" />

                  {/* Mid tone */}
                  <stop offset="35%" stopColor="#103663" />

                  {/* Main section tone */}
                  <stop offset="70%" stopColor="#0a1b33" />

                  {/* Dark outer edge */}
                  <stop offset="100%" stopColor="#06172d" />
                </radialGradient>
              </defs>

              {/* <circle
                cx={center}
                cy={center}
                r="130"
                fill="url(#centerCoreGradient)"
                stroke="rgba(143,211,255,0.42)"
                strokeWidth="15"
                filter="
    drop-shadow(0 14px 40px rgba(2,10,24,0.95))
    drop-shadow(0 0 30px rgba(143,211,255,0.30))
    drop-shadow(0 0 80px rgba(79,141,201,0.18))
  "
              /> */}

              <circle
                cx={center}
                cy={center}
                r="130"
                fill="url(#centerCoreGradient)" // Giữ nguyên màu nền xanh bên trong
                stroke="rgba(255,255,255,0.92)"
                strokeWidth="7"
                filter="
    drop-shadow(0 4px 20px rgba(2,10,24,0.95))
    drop-shadow(0 0 10px rgba(255,255,255,0.08))
    drop-shadow(0 0 22px rgba(255,255,255,0.05))
    drop-shadow(0 0 40px rgba(143,211,255,0.08))
  "
              />

              {/* Outer Rotating Ring using STAFF light colors */}
              <defs>
                <linearGradient
                  id="staffRingGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
                  <stop offset="25%" stopColor="rgba(255,255,255,0.85)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,1)" />
                  <stop offset="75%" stopColor="rgba(255,255,255,0.85)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.95)" />
                </linearGradient>
              </defs>

              {/* Dashed Inner Ring */}
              <circle
                cx={center}
                cy={center}
                r="118"
                fill="none"
                stroke="url(#staffRingGradient)"
                strokeWidth="3"
                strokeDasharray="7 9"
                strokeLinecap="round"
                opacity="0.95"
                className="animate-spin origin-center"
                style={{
                  transformBox: "fill-box",
                  transformOrigin: "center center",
                  animationDuration: "40s",
                  animationTimingFunction: "linear",
                  animationIterationCount: "infinite",
                  filter: `
      drop-shadow(0 0 8px rgba(255,255,255,0.45))
      drop-shadow(0 0 16px rgba(255,255,255,0.25))
    `,
                }}
              />

              {/* Center Logo */}
              <image
                href="/services/5taff-logo-services.webp"
                x={center - 85}
                y="236"
                width="170"
                height="64"
                preserveAspectRatio="xMidYMid meet"
                style={{
                  filter: `
      drop-shadow(0 2px 4px rgba(255,255,255,0.35))
      drop-shadow(0 8px 18px rgba(11,27,51,0.12))
    `,
                }}
              />

              {/* Tagline */}
              <text
                x={center}
                y="322"
                textAnchor="middle"
                fill="#FFFFFF"
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
            <p className="text-white/85 leading-relaxed text-base md:text-lg">
              The 5-Core Support™ Ecosystem. Core Functions Every Business Needs
              to Grow and Scale. At STAFF United, we provide scalable
              operational support across Structured Operations, Targeted Sales,
              Accounting & Finance, Focused Marketing, and Future Expansion.
            </p>
          </div>
        </div>{" "}
        {/* End: max-w-2xl mx-auto px-6 */}
      </div>{" "}
      {/* End: relative z-10 max-w-6xl mx-auto px-6 */}
    </section>
  );
}
