"use client";

import React, { useEffect, useRef, useState } from "react";

// =====================================================
// RotatingDiagram
// - children: phần donut bên ngoài sẽ xoay
// - centerContent: phần trung tâm sẽ đứng yên hoàn toàn
// =====================================================
function RotatingDiagram({
  children,
  centerContent,
}: {
  children: React.ReactNode;
  centerContent?: React.ReactNode;
}) {
  const center = 340;

  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const svgRef = useRef<SVGSVGElement>(null);
  const dragStartAngle = useRef(0);
  const startRotation = useRef(0);

  const getAngle = (clientX: number, clientY: number) => {
    const svg = svgRef.current;
    if (!svg) return 0;

    const rect = svg.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    return Math.atan2(clientY - cy, clientX - cx) * (180 / Math.PI);
  };

  // Auto rotate
  useEffect(() => {
    if (isDragging) return;

    // const id = setInterval(() => {
    //   setRotation((prev) => prev + 0.08);
    // }, 16);
    const isMobile = window.innerWidth < 768;

    const id = setInterval(() => {
      setRotation((prev) => prev + (isMobile ? 0.025 : 0.05));
    }, 33);

    return () => clearInterval(id);
  }, [isDragging]);

  return (
    <svg
      ref={svgRef}
      // viewBox="-40 0 660 580"
      // viewBox="-30 -20 700 680"
      // viewBox="-60 -60 760 760"
      viewBox="-45 -45 760 760"
      className="w-[115%]
  xl:w-[122%]
  2xl:w-[128%]

  h-auto
  overflow-visible
  touch-none
  select-none"
      style={{
        touchAction: "none",
        WebkitUserSelect: "none",
        userSelect: "none",
      }}
    >
      {/* =====================================================
          PHẦN XOAY: TOÀN BỘ DONUT + CHỮ XUNG QUANH
      ===================================================== */}
      <g
        onPointerDown={(e) => {
          setIsDragging(true);

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
        onPointerUp={() => {
          setIsDragging(false);
        }}
        onPointerCancel={() => {
          setIsDragging(false);
        }}
        style={{
          transformBox: "view-box",
          transformOrigin: `${center}px ${center}px`,
          transform: `rotate(${rotation}deg)`,
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        {children}
      </g>

      {/* =====================================================
          PHẦN TRUNG TÂM: ĐỨNG YÊN HOÀN TOÀN
          (KHÔNG NẰM TRONG <g> XOAY)
      ===================================================== */}
      {centerContent}
    </svg>
  );
}

export default function StaffUnitedFiveDiagram() {
  const center = 340; // tăng tâm SVG
  const outerRadius = 305;
  const innerRadius = 175;
  const segmentAngle = 72;

  const segmentsWhoWeAre = [
    { letter: "S", title: "Strong", color: "#132844", startAngle: -90 },
    { letter: "T", title: "Talented", color: "#132844", startAngle: -18 },
    { letter: "A", title: "Ambitious", color: "#132844", startAngle: 54 },
    { letter: "F", title: "Focused", color: "#132844", startAngle: 126 },
    { letter: "F", title: "Females", color: "#132844", startAngle: 198 },
  ];

  const segments = [
    {
      letter: "S",
      title: "Structured Operations",
      color: "#21507d",
      startAngle: -90,
    },
    {
      letter: "T",
      title: "Targeted Sales",
      color: "#21507d",
      startAngle: -18,
    },
    {
      letter: "A",
      title: "Accounting & Finance",
      color: "#21507d",
      startAngle: 54,
    },
    {
      letter: "F",
      title: "Focused Marketing",
      color: "#21507d",
      startAngle: 126,
    },
    {
      letter: "F",
      title: "Future Expansion",
      color: "#21507d",
      startAngle: 198,
    },
  ];

  const segmentsExecute = [
    {
      letter: "S",
      title: "Structure",
      color: "#6c7f95",
      startAngle: -90,
    },
    {
      letter: "T",
      title: "Technology",
      color: "#6c7f95",
      startAngle: -18,
    },
    {
      letter: "A",
      title: "Accountability",
      color: "#6c7f95",
      startAngle: 54,
    },
    {
      letter: "F",
      title: "Flexibility",
      color: "#6c7f95",
      startAngle: 126,
    },
    {
      letter: "F",
      title: "Foresight",
      color: "#6c7f95",
      startAngle: 198,
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

  return (
    <section
      className="
  relative
  w-screen
  left-1/2
  right-1/2
  -ml-[50vw]
  -mr-[50vw]

  pt-12 md:pt-24 lg:pt-20
pb-12 md:pb-20

  overflow-hidden

bg-[linear-gradient(135deg,_#07111f_0%,_#0a1b33_18%,_#103663_42%,_#4a596e_68%,_#d5dadf_100%)]  border-b border-[rgba(255,255,255,0.12)]

  /* Luxury depth */
  shadow-[
    inset_0_1px_0_rgba(255,255,255,0.10),
    inset_0_60px_120px_rgba(255,255,255,0.10),
    inset_0_-80px_120px_rgba(243,244,246,0.18),
    0_30px_80px_rgba(2,10,24,0.08)
  ]

  text-white
  fade-up active
"
    >
      {/* CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="
    absolute
    inset-0
    opacity-40
    bg-[radial-gradient(circle_at_50%_35%,_rgba(255,255,255,0.10)_0%,_transparent_52%)]
  "
        />
        {/* Main center glow */}
        <div
          className="
    absolute
    left-[68%]
    top-[42%]

    h-[420px]
    w-[1400px]

    -translate-x-1/2
    -translate-y-1/2

    rotate-[4deg]

    rounded-full

    bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_0%,_rgba(255,255,255,0.02)_38%,_transparent_72%)]

    blur-xl
  "
        />
      </div>
      <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-10 xl:px-14">
        {/* Diagram */}
        <div
          className="w-full
    mx-auto px-2 md:px-4 xl:px-6
    grid grid-cols-1 md:grid-cols-3 gap-10 xl:gap-14 lg:gap-8
    items-start
    justify-items-center"
        >
          {/* segments who we are */}
          {/* <div className="flex flex-col items-center relative"> */}
          <div
            className="
    flex
    flex-col
    items-center
    relative

    transition-transform 
    duration-700

    hover:-translate-y-3
    hover:scale-[1.01]
  "
            style={{
              transform: "perspective(1400px) rotateX(6deg)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* TITLE PHÍA TRÊN CIRCLE */}
            <div
              className="
    absolute
    inset-0
    -z-10
    blur-xl
    opacity-45
    bg-[radial-gradient(circle,_rgba(79,141,233,0.22)_0%,_transparent_70%)]
  "
            />

            {/* BIG DEPTH SHADOW */}
            <div
              className="
    absolute
    left-1/2
    top-[82%]
    -translate-x-1/2

    h-[130px]
    w-[85%]

    rounded-full

    blur-xl
    opacity-60

    bg-[radial-gradient(circle,_rgba(2,10,24,0.58)_0%,_transparent_72%)]

    -z-10
  "
            />

            <h3
              className="relative mb-10

    text-3xl md:text-xl lg:text-3xl

    font-bold
    tracking-[0.02em]

    text-white

    transition-transform
    duration-500

    select-none
  "
              style={{
                WebkitTextStroke: "0.6px rgba(255,255,255,0.18)",
                transform: "perspective(800px) rotateX(8deg) translateX(8px)",
                textShadow: `
  0px 1px 0px rgba(255,255,255,0.95),
  0px 2px 4px rgba(15,23,42,0.22)
`,
              }}
            >
              Who We Are
            </h3>

            <RotatingDiagram
              centerContent={
                <>
                  {/* Center Circle */}
                  <defs>
                    {/* <radialGradient
                      id="who-centerCoreGradient"
                      cx="40%"
                      cy="35%"
                      r="70%"
                    >
                      <stop offset="0%" stopColor="#8fc5ff" />
                      <stop offset="30%" stopColor="#4f8dc9" />
                      <stop offset="65%" stopColor="#173d66" />
                      <stop offset="100%" stopColor="#0a1b33" />
                    </radialGradient> */}

                    <linearGradient
                      id="who-centerCoreGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#6f97bf" />
                      <stop offset="26%" stopColor="#4c78a6" />
                      <stop offset="58%" stopColor="#244d78" />
                      <stop offset="100%" stopColor="#102845" />
                    </linearGradient>

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

                    <linearGradient
                      id="metallicLetter"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="18%" stopColor="#F8F8F8" />
                      <stop offset="38%" stopColor="#D9D9D9" />
                      <stop offset="52%" stopColor="#FFFFFF" />
                      <stop offset="72%" stopColor="#BEBEBE" />
                      <stop offset="100%" stopColor="#FFFFFF" />
                    </linearGradient>
                  </defs>

                  {/* Center Circle */}
                  <circle
                    cx={center}
                    cy={center}
                    r="175"
                    fill="url(#who-centerCoreGradient)"
                    stroke="rgba(255,255,255,0.22)"
                    strokeWidth="5"
                    filter="
  drop-shadow(0 4px 10px rgba(11,27,51,0.12))
"
                  />

                  {/* Dashed Inner Ring */}
                  <circle
                    cx={center}
                    cy={center}
                    r="150"
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
                      animationDuration: "80s",
                      animationTimingFunction: "linear",
                      animationIterationCount: "infinite",
                      filter: `
            drop-shadow(0 0 4px rgba(255,255,255,0.16))
drop-shadow(0 0 10px rgba(255,255,255,0.08))
          `,
                    }}
                  />

                  {/* Center Title */}
                  <text
                    x={center}
                    y={center}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#FFFFFF"
                    fontSize="42"
                    fontWeight="500"
                    fontFamily="Poppins, sans-serif"
                    letterSpacing="0.5"
                    style={{ filter: "none" }}
                  >
                    <tspan x={center} dy="-20">
                      Our
                    </tspan>
                    <tspan x={center} dy="42">
                      People
                    </tspan>
                  </text>
                </>
              }
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
                  {/* <feGaussianBlur stdDeviation="2.2" /> */}
                  <feGaussianBlur stdDeviation="1.2" />
                </filter>

                {/* Main glass overlay */}
                <linearGradient
                  id="glassOverlay"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="rgba(255,255,255,0.42)" />
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
                  <stop offset="0%" stopColor="rgba(255,255,255,0.28)" />
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
                  {/* <feGaussianBlur stdDeviation="4" /> */}
                  {/* <feGaussianBlur stdDeviation="1.5" /> */}
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
              <g>
                {segmentsWhoWeAre.map((segment, index) => {
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
        transition-transform
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
                          fillOpacity="0.78"
                          stroke="rgba(255,255,255,0.82)"
                          strokeWidth="7"
                          strokeLinejoin="miter"
                          strokeMiterlimit="2"
                          strokeLinecap="butt"
                          // filter="url(#glassShadow)"
                        />

                        {/* Stronger shadow when hovered */}
                        <path
                          d={path}
                          fill={segment.color}
                          opacity="0"
                          pointerEvents="none"
                          className="
          transition-transform
          duration-700
          ease-out
          group-hover:opacity-100
        "
                          style={{
                            filter: `
            drop-shadow(0 14px 18px rgba(11,27,51,0.18))
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
          transition-transform
          duration-700
          ease-out
          group-hover:stroke-[rgba(255,255,255,0.55)]
          group-hover:stroke-[3]
        "
                        />
                      </g>

                      {/* create 3d word bg */}
                      <text
                        x={center + 3}
                        y={center - 235}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="rgba(0,0,0,0.32)"
                        fontSize="82"
                        fontWeight="700"
                        fontFamily="Poppins, sans-serif"
                        letterSpacing="-0.02em"
                        transform={`rotate(${segment.startAngle + segmentAngle / 2 + 90} ${center} ${center})`}
                      >
                        {segment.letter}
                      </text>
                      {/* Large branding letter inside segment */}
                      <text
                        x={center}
                        y={center - 240}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="url(#metallicLetter)"
                        fontSize="72"
                        fontWeight="600"
                        fontFamily="Poppins, sans-serif"
                        style={{
                          letterSpacing: "-0.02em",
                          filter: `
    drop-shadow(0 2px 0 rgba(255,255,255,0.95))
    drop-shadow(0 5px 8px rgba(0,0,0,0.22))
  `,
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
                            // outerRadius + 25,
                            outerRadius + 42,
                          )}
                          fill="none"
                          stroke="none"
                        />

                        {/* Curved title */}
                        <text
                          // fill="rgba(255,255,255,0.96)"
                          fontSize="31"
                          fill="rgba(255,255,255,0.94)"
                          fontWeight="700"
                          fontFamily="Poppins, sans-serif"
                          letterSpacing="0.2"
                          className="
      transition-transform
      duration-700
      ease-out
    "
                          style={{
                            filter: `
  drop-shadow(0 1px 2px rgba(15,23,42,0.22))
`,
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
                r="150"
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
                  animationDuration: "80s",
                  animationTimingFunction: "linear",
                  animationIterationCount: "infinite",
                  filter: `
      drop-shadow(0 0 8px rgba(255,255,255,0.45))
      drop-shadow(0 0 16px rgba(255,255,255,0.25))
    `,
                }}
              />
            </RotatingDiagram>
          </div>

          {/* segments - services - provide */}
          {/* <div className="flex flex-col items-center relative"> */}
          <div
            className="
    flex
    flex-col
    items-center
    relative

    transition-transform
    duration-700

    hover:-translate-y-3
    hover:scale-[1.01]
  "
            style={{
              transform: "perspective(1400px) rotateX(6deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="
    absolute
    inset-0
    -z-10
    blur-xl
    opacity-45
    bg-[radial-gradient(circle,_rgba(120,220,255,0.18)_0%,_transparent_70%)]
  "
            />
            <div
              className="
    absolute
    left-1/2
    top-[82%]
    -translate-x-1/2

    h-[130px]
    w-[85%]

    rounded-full

    blur-xl
    opacity-65

    bg-[radial-gradient(circle,_rgba(6,18,38,0.52)_0%,_transparent_72%)]

    -z-10
  "
            />
            {/* TITLE PHÍA TRÊN CIRCLE */}

            <h3
              className="relative mb-10

    text-3xl md:text-xl lg:text-3xl

    font-bold
    tracking-[0.02em]

    text-white

    transition-transform
    duration-500

    select-none
  "
              style={{
                WebkitTextStroke: "0.6px rgba(255,255,255,0.18)",
                transform: "perspective(800px) rotateX(8deg) translateX(4px)",
                textShadow: `
  0px 1px 0px rgba(255,255,255,0.95),
  0px 2px 4px rgba(15,23,42,0.22)
`,
              }}
            >
              What We Provide
            </h3>

            <RotatingDiagram
              centerContent={
                <>
                  {/* Center Circle Gradient */}
                  <defs>
                    <linearGradient
                      id="provide-centerCoreGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#b9ecff" />
                      <stop offset="28%" stopColor="#6eb5e7" />
                      <stop offset="65%" stopColor="#2c6597" />
                      <stop offset="100%" stopColor="#173a5c" />
                    </linearGradient>
                  </defs>

                  {/* Center Circle */}
                  <circle
                    cx={center}
                    cy={center}
                    r="175"
                    fill="url(#provide-centerCoreGradient)"
                    stroke="rgba(255,255,255,0.26)"
                    strokeWidth="5"
                    filter="
          drop-shadow(0 10px 24px rgba(6,18,38,0.28))
        "
                  />

                  {/* Dashed Inner Ring */}
                  <circle
                    cx={center}
                    cy={center}
                    r="150"
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
                      animationDuration: "80s",
                      animationTimingFunction: "linear",
                      animationIterationCount: "infinite",
                      filter: `
            drop-shadow(0 0 4px rgba(255,255,255,0.16))
drop-shadow(0 0 10px rgba(255,255,255,0.08))
          `,
                    }}
                  />

                  {/* Center Title */}
                  <text
                    x={center}
                    y={center}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#FFFFFF"
                    fontSize="40"
                    fontWeight="500"
                    fontFamily="Poppins, sans-serif"
                    letterSpacing="0.5"
                    style={{
                      filter: `
            drop-shadow(0 2px 6px rgba(11,27,51,0.65))
            drop-shadow(0 0 14px rgba(79,141,233,0.23))
          `,
                    }}
                  >
                    <tspan x={center} dy="-23">
                      Our
                    </tspan>
                    <tspan x={center} dy="42">
                      Services
                    </tspan>
                  </text>
                </>
              }
            >
              <defs>
                {/* Soft blur for realistic glass */}
                <filter
                  id="wholeDonutGlassBlur"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  {/* <feGaussianBlur stdDeviation="2.2" /> */}
                  <feGaussianBlur stdDeviation="1.2" />
                </filter>

                {/* Main glass overlay */}
                <linearGradient
                  id="glassOverlay"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="rgba(255,255,255,0.42)" />
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
                  <stop offset="0%" stopColor="rgba(255,255,255,0.28)" />
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
                  {/* <feGaussianBlur stdDeviation="4" /> */}
                  {/* <feGaussianBlur stdDeviation="1.5" /> */}
                </filter>
              </defs>

              {/* =========================================
     CIRCULAR GLASS PANEL BEHIND DONUT
     ========================================= */}
              <circle
                cx={center}
                cy={center}
                r="175"
                fill="url(#provide-centerCoreGradient)"
                stroke="rgba(255,255,255,0.14)"
                strokeWidth="7"
                filter="
    drop-shadow(0 4px 10px rgba(79,141,201,0.06))
  "
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
              <g>
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
        transition-transform
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
                          stroke="rgba(255,255,255,0.96)"
                          strokeWidth="7"
                          strokeLinejoin="miter"
                          strokeMiterlimit="2"
                          strokeLinecap="butt"
                          // filter="url(#glassShadow)"
                        />

                        {/* Stronger shadow when hovered */}
                        <path
                          d={path}
                          fill={segment.color}
                          opacity="0"
                          pointerEvents="none"
                          className="
          transition-transform
          duration-700
          ease-out
          group-hover:opacity-100
        "
                          style={{
                            filter: `
            drop-shadow(0 30px 35px rgba(158,101,51,0.18))
      drop-shadow(0 10px 18px rgba(216,168,107,0.18))
      drop-shadow(0 0 24px rgba(255,239,217,0.16))
          `,
                          }}
                        />

                        <path
                          d={path}
                          fill="none"
                          stroke="rgba(255,255,255,0.40)"
                          strokeWidth="2"
                          strokeLinejoin="miter"
                          strokeMiterlimit="2"
                          pointerEvents="none"
                          strokeLinecap="butt"
                          className="
          transition-transform
          duration-700
          ease-out
          group-hover:stroke-[rgba(255,255,255,0.75)]
          group-hover:stroke-[3]
        "
                        />
                      </g>

                      {/* create 3d word bg */}
                      <text
                        x={center + 3}
                        y={center - 235}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="rgba(0,0,0,0.32)"
                        fontSize="82"
                        fontWeight="700"
                        fontFamily="Poppins, sans-serif"
                        letterSpacing="-0.02em"
                        transform={`rotate(${segment.startAngle + segmentAngle / 2 + 90} ${center} ${center})`}
                      >
                        {segment.letter}
                      </text>

                      {/* Large branding letter inside segment */}
                      <text
                        x={center}
                        y={center - 240}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="url(#metallicLetter)"
                        fontSize="78"
                        fontWeight="600"
                        fontFamily="Poppins, sans-serif"
                        style={{
                          letterSpacing: "-0.02em",
                          filter: `
    drop-shadow(0 2px 0 rgba(255,255,255,0.95))
    drop-shadow(0 5px 8px rgba(0,0,0,0.22))
  `,
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
                            segment.startAngle + 12,
                            segment.startAngle + segmentAngle - 12,
                            outerRadius + 42,
                          )}
                          fill="none"
                          stroke="none"
                        />

                        {/* Curved title */}
                        <text
                          fontSize="31"
                          fontWeight="700"
                          fontFamily="Poppins, sans-serif"
                          fill="rgba(255,255,255,0.94)"
                          letterSpacing="0.2"
                          className="
      transition-transform
      duration-700
      ease-out
    "
                          style={{
                            filter: `
  drop-shadow(0 1px 2px rgba(15,23,42,0.22))
`,
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
                {/* Center Circle */}
                <circle
                  cx={center}
                  cy={center}
                  r="175"
                  fill="url(#provide-centerCoreGradient)"
                  stroke="rgba(255,255,255,0.14)"
                  strokeWidth="2"
                  filter="
    drop-shadow(0 4px 10px rgba(191,137,82,0.08))
  "
                />
              </defs>

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
                r="150"
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
                  animationDuration: "80s",
                  animationTimingFunction: "linear",
                  animationIterationCount: "infinite",
                  filter: `
                  drop-shadow(0 0 4px rgba(255,255,255,0.16))
drop-shadow(0 0 10px rgba(255,255,255,0.08))
                `,
                }}
              />
            </RotatingDiagram>
          </div>

          {/* segments - how we execute */}
          {/* <div className="flex flex-col items-center relative"> */}

          <div
            className="
    flex
    flex-col
    items-center
    relative

    transition-transform
    duration-700

    hover:-translate-y-3
    hover:scale-[1.01]
  "
            style={{
              transform: "perspective(1400px) rotateX(6deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="
    absolute
    inset-0
    -z-10
    blur-xl
    opacity-60
    bg-[radial-gradient(circle,_rgba(210,220,235,0.12)_0%,_transparent_70%)]
  "
            />

            {/* BIG DEPTH SHADOW */}
            <div
              className="
    absolute
    left-1/2
    top-[82%]
    -translate-x-1/2

    h-[130px]
    w-[85%]

    rounded-full

    blur-xl
    opacity-70

    bg-[radial-gradient(circle,_rgba(2,10,24,0.65)_0%,_transparent_72%)]

    -z-10
  "
            />
            {/* TITLE PHÍA TRÊN CIRCLE */}

            <h3
              className="relative mb-10

    text-3xl md:text-xl lg:text-3xl

    font-bold
    tracking-[0.02em]

    text-white

    transition-transform
    duration-500

    select-none
  "
              style={{
                WebkitTextStroke: "0.6px rgba(255,255,255,0.18)",
                transform: "perspective(800px) rotateX(8deg) translateX(6px)",
                textShadow: `
  0px 1px 0px rgba(255,255,255,0.95),
  0px 2px 4px rgba(15,23,42,0.22)
`,
              }}
            >
              How We Execute
            </h3>

            <RotatingDiagram
              centerContent={
                <>
                  {/* Center Circle Gradient */}
                  <defs>
                    {/* <radialGradient
                      id="execute-centerCoreGradient"
                      cx="42%"
                      cy="38%"
                      r="72%"
                    >
                      <stop offset="0%" stopColor="#8a97a5" />
                      <stop offset="24%" stopColor="#8c9bac" />
                      <stop offset="52%" stopColor="#5d6d80" />
                      <stop offset="78%" stopColor="#38495f" />
                      <stop offset="100%" stopColor="#1a2938" />
                    </radialGradient> */}
                    <linearGradient
                      id="execute-centerCoreGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#8a97a5" />
                      <stop offset="28%" stopColor="#687587" />
                      <stop offset="65%" stopColor="#434f60" />
                      <stop offset="100%" stopColor="#1b2835" />
                    </linearGradient>

                    
                  </defs>

                  {/* Center Circle */}
                  <circle
                    cx={center}
                    cy={center}
                    r="175"
                    fill="url(#execute-centerCoreGradient)"
                    stroke="rgba(255,255,255,0.20)"
                    strokeWidth="6"
                    filter="none"
                  />

                  {/* Dashed Inner Ring */}
                  <circle
                    cx={center}
                    cy={center}
                    r="150"
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
                      animationDuration: "80s",
                      animationTimingFunction: "linear",
                      animationIterationCount: "infinite",
                      filter: "none",
                    }}
                  />

                  {/* Center Title */}
                  <text
                    x={center}
                    y={center}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#FFFFFF"
                    fontSize="38"
                    fontWeight="500"
                    fontFamily="Poppins, sans-serif"
                    style={{
                      letterSpacing: "0.01em",
                      filter: "none",
                    }}
                  >
                    <tspan x={center} dy="-30">
                      Our
                    </tspan>
                    <tspan x={center} dy="42">
                      Approach
                    </tspan>
                  </text>
                </>
              }
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
                  {/* <feGaussianBlur stdDeviation="2.2" /> */}
                  <feGaussianBlur stdDeviation="1.2" />
                </filter>

                {/* Main glass overlay */}
                <linearGradient
                  id="glassOverlay"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="rgba(255,255,255,0.42)" />
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
                  <stop offset="0%" stopColor="rgba(255,255,255,0.28)" />
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
                  {/* <feGaussianBlur stdDeviation="4" /> */}
                  {/* <feGaussianBlur stdDeviation="1.5" /> */}
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
              <g>
                {segmentsExecute.map((segment, index) => {
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
        transition-transform
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
                          // filter="url(#glassShadow)"
                        />

                        {/* Stronger shadow when hovered */}
                        <path
                          d={path}
                          fill={segment.color}
                          opacity="0"
                          pointerEvents="none"
                          className="
          transition-transform
          duration-700
          ease-out
          group-hover:opacity-100
        "
                          style={{
                            filter: `
            drop-shadow(0 14px 18px rgba(11,27,51,0.18))
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
          transition-transform
          duration-700
          ease-out
          group-hover:stroke-[rgba(255,255,255,0.55)]
          group-hover:stroke-[3]
        "
                        />
                      </g>

                      {/* create 3d word bg */}
                      <text
                        x={center + 3}
                        y={center - 235}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="rgba(0,0,0,0.32)"
                        fontSize="82"
                        fontWeight="700"
                        fontFamily="Poppins, sans-serif"
                        letterSpacing="-0.02em"
                        transform={`rotate(${segment.startAngle + segmentAngle / 2 + 90} ${center} ${center})`}
                      >
                        {segment.letter}
                      </text>

                      {/* Large branding letter inside segment */}
                      <text
                        x={center}
                        y={center - 240}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="url(#metallicLetter)"
                        fontSize="72"
                        fontWeight="600"
                        fontFamily="Poppins, sans-serif"
                        style={{
                          letterSpacing: "-0.02em",
                          filter: `
    drop-shadow(0 2px 0 rgba(255,255,255,0.95))
    drop-shadow(0 5px 8px rgba(0,0,0,0.22))
  `,
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
                            // outerRadius + 25,
                            outerRadius + 42,
                          )}
                          fill="none"
                          stroke="none"
                        />

                        {/* Curved title */}
                        <text
                          fontSize="31"
                          fontWeight="700"
                          fill="rgba(255,255,255,0.94)"
                          fontFamily="Poppins, sans-serif"
                          letterSpacing="0.2"
                          className="
      transition-transform
      duration-700
      ease-out
    "
                          style={{
                            filter: `drop-shadow(0 1px 2px rgba(15,23,42,0.22))`,
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
                r="150"
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
                  animationDuration: "80s",
                  animationTimingFunction: "linear",
                  animationIterationCount: "infinite",
                  filter: `
      drop-shadow(0 0 8px rgba(255,255,255,0.45))
      drop-shadow(0 0 16px rgba(255,255,255,0.12))
    `,
                }}
              />

              <text
                x={center}
                y={center}
                textAnchor="middle"
                dominantBaseline="middle"
                // fill="#FFFFFF"
                fill="rgba(255,255,255,0.60)"
                fontSize="32"
                fontWeight="500"
                fontFamily="Poppins, sans-serif"
                style={{
                  letterSpacing: "0.01em",
                  filter: "none",
                }}
              >
                Our Approach
              </text>
            </RotatingDiagram>
          </div>
        </div>
        {/* End: max-w-2xl mx-auto px-6 */}
      </div>{" "}
      {/* End: relative z-10 max-w-6xl mx-auto px-6 */}
    </section>
  );
}
