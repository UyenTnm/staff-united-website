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
  const center = 320;

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
      viewBox="-30 -20 700 680"
      className="w-full h-auto overflow-visible touch-none select-none"
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
  // const center = 290;
  // const outerRadius = 230;
  // const innerRadius = 130;
  const center = 320; // tăng tâm SVG
  const outerRadius = 255; // vòng ngoài lớn hơn
  const innerRadius = 145;
  const segmentAngle = 72; // 360 / 5

  const segmentsWhoWeAre = [
    { letter: "S", title: "Strong", color: "#4f8de9", startAngle: -90 },
    { letter: "T", title: "Talented", color: "#4f8de9", startAngle: -18 },
    { letter: "A", title: "Ambitious", color: "#2f6fc2", startAngle: 54 },
    { letter: "F", title: "Focused", color: "#103663", startAngle: 126 },
    { letter: "F", title: "Females", color: "#103663", startAngle: 198 },
  ];

  const segments = [
    {
      letter: "S",
      title: "Structured Operations",
      color: "#E0A200", // rich golden amber
      startAngle: -90,
    },
    {
      letter: "T",
      title: "Targeted Sales",
      color: "#F6C21A", // vibrant premium gold
      startAngle: -18,
    },
    {
      letter: "A",
      title: "Accounting & Finance",
      color: "#FFD84D", // brightest highlight gold
      startAngle: 54,
    },
    {
      letter: "F",
      title: "Focused Marketing",
      color: "#F0B414", // warm luxury gold
      startAngle: 126,
    },
    {
      letter: "F",
      title: "Future Expansion",
      color: "#C98A00", // deep burnished gold
      startAngle: 198,
    },
  ];

  const segmentsExecute = [
    {
      letter: "S",
      title: "Structure",
      color: "#5E8F86", // Navy Blue
      startAngle: -90,
    },
    {
      letter: "T",
      title: "Technology",
      color: "#1B5E4B", // Deep Emerald
      startAngle: -18,
    },
    {
      letter: "A",
      title: "Accountability",
      color: "#2F7D68", // Premium Teal Green
      startAngle: 54,
    },
    {
      letter: "F",
      title: "Flexibility",
      color: "#4D9B85", // Soft Green Teal
      startAngle: 126,
    },
    {
      letter: "F",
      title: "Foresight",
      color: "#6BB59C", // Mint Emerald
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

  
  bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#f8fbff_18%,_#eaf3ff_36%,_#b9d0ee_56%,_#4f82bf_76%,_#103663_90%,_#06172d_100%),linear-gradient(to_bottom,_#06172d_0%,_transparent_14%,_transparent_82%,_#f3f4f6_100%)]

  /* Borders mềm để chuyển tiếp tự nhiên */
  border-b border-[rgba(255,255,255,0.72)]

  /* Luxury depth */
  shadow-[
    inset_0_1px_0_rgba(255,255,255,0.10),
    inset_0_60px_120px_rgba(255,255,255,0.10),
    inset_0_-80px_120px_rgba(243,244,246,0.45),
    0_30px_80px_rgba(2,10,24,0.08)
  ]

  text-white
  fade-up active
"
    >
      {/* BACKGROUND GLOW */}
      <div className="hidden md:block absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_rgba(79,141,201,0.18)_0%,_rgba(79,141,201,0.06)_35%,_transparent_75%)]"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Diagram */}
        <div
          className="w-full
    mx-auto
    px-2 md:px-3
    grid
    grid-cols-1
    md:grid-cols-3
    gap-6
    lg:gap-8
    items-start
    justify-items-center"
        >
          {/* segments who we are */}
          <div className="flex flex-col items-center">
            {/* TITLE PHÍA TRÊN CIRCLE */}
            {/* <h3
              className="
      mb-8
      text-3xl md:text-xl lg:text-3xl
      font-light
      tracking-wide
      text-[#06172d]
    "
            >
              Who We Are
            </h3> */}

            <h3
              className="
    mb-8
    text-3xl md:text-xl lg:text-3xl
    font-light
    tracking-wide
    text-[#06172d]

    drop-shadow-[0_2px_8px_rgba(255,255,255,0.65)]
    sm:drop-shadow-[0_2px_8px_rgba(255,255,255,0.65)]

    md:drop-shadow-none
  "
            >
              Who We Are
            </h3>

            <RotatingDiagram
              centerContent={
                <>
                  {/* Center Circle */}
                  <defs>
                    <radialGradient
                      id="who-centerCoreGradient"
                      cx="40%"
                      cy="35%"
                      r="70%"
                    >
                      <stop offset="0%" stopColor="#4f8de9" />
                      <stop offset="45%" stopColor="#2d6fc2" />
                      <stop offset="75%" stopColor="#103663" />
                      <stop offset="100%" stopColor="#0a2445" />
                    </radialGradient>

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

                  {/* Center Circle */}
                  <circle
                    cx={center}
                    cy={center}
                    r="150"
                    fill="url(#who-centerCoreGradient)"
                    stroke="rgba(255,255,255,0.92)"
                    strokeWidth="7"
                    filter="
          drop-shadow(0 4px 20px rgba(2,10,24,0.95))
          drop-shadow(0 0 10px rgba(255,255,255,0.08))
          drop-shadow(0 0 22px rgba(255,255,255,0.05))
          drop-shadow(0 0 40px rgba(143,211,255,0.08))
        "
                  />

                  {/* Dashed Inner Ring */}
                  <circle
                    cx={center}
                    cy={center}
                    r="126"
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
                    People
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
                  {/* <feGaussianBlur stdDeviation="4" /> */}
                  <feGaussianBlur stdDeviation="1.5" />
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
                          fillOpacity="0.95"
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
                        // y={center - 178}
                        y={center - 198}
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
                            // outerRadius + 25,
                            outerRadius + 30,
                          )}
                          fill="none"
                          stroke="none"
                        />

                        {/* Curved title */}
                        <text
                          // fill="rgba(255,255,255,0.96)"
                          fontSize="22"
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
                  id="who-centerCoreGradient"
                  cx="40%"
                  cy="35%"
                  r="70%"
                >
                  <stop offset="0%" stopColor="#4f8de9" />
                  <stop offset="45%" stopColor="#2d6fc2" />
                  <stop offset="75%" stopColor="#103663" />
                  <stop offset="100%" stopColor="#0a2445" />
                </radialGradient>
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
                r="126"
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

              {/* Center Title Only */}
              <text
                x={center}
                y="290"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#FFFFFF"
                fontSize="42"
                fontWeight="500"
                fontFamily="Poppins, sans-serif"
                letterSpacing="0.5"
                style={{
                  filter: "none",
                }}
              >
                People
              </text>
            </RotatingDiagram>
          </div>

          {/* segments - services - provide */}
          <div className="flex flex-col items-center">
            {/* TITLE PHÍA TRÊN CIRCLE */}
            <h3
              className="
      mb-8
      text-3xl md:text-xl lg:text-3xl
      font-light
      tracking-wide
      text-[#06172d]
    "
            >
              What We Provide
            </h3>
            <RotatingDiagram
              centerContent={
                <>
                  {/* Center Circle Gradient */}
                  <defs>
                    {/* <radialGradient
                      id="provide-centerCoreGradient"
                      cx="50%"
                      cy="70%"
                      r="98%"
                    >
                      <stop offset="0%" stopColor="#FFF4E2" />
                      <stop offset="16%" stopColor="#F4DEC0" />
                      <stop offset="38%" stopColor="#E6BE8A" />
                      <stop offset="65%" stopColor="#D7A96D" />
                      <stop offset="100%" stopColor="#BF8952" />
                    </radialGradient> */}

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

                  {/* Center Circle */}
                  <circle
                    cx={center}
                    cy={center}
                    r="150"
                    fill="url(#provide-centerCoreGradient)"
                    stroke="rgba(255,255,255,0.72)"
                    strokeWidth="9"
                    filter="
          drop-shadow(0 4px 12px rgba(160,120,70,0.58))
        "
                  />

                  {/* Dashed Inner Ring */}
                  <circle
                    cx={center}
                    cy={center}
                    r="126"
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
                    style={{
                      filter: `
            drop-shadow(0 2px 6px rgba(11,27,51,0.65))
            drop-shadow(0 0 14px rgba(79,141,233,0.23))
          `,
                    }}
                  >
                    Services
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
                  {/* <feGaussianBlur stdDeviation="4" /> */}
                  <feGaussianBlur stdDeviation="1.5" />
                </filter>
              </defs>

              {/* =========================================
     CIRCULAR GLASS PANEL BEHIND DONUT
     ========================================= */}
              <circle
                cx={center}
                cy={center}
                r="150"
                fill="url(#provide-centerCoreGradient)"
                stroke="rgba(255,255,255,0.14)"
                strokeWidth="7"
                filter="
    drop-shadow(0 4px 10px rgba(160,120,70,0.06))
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
                          stroke="rgba(255,255,255,0.96)"
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
          transition-all
          duration-700
          ease-out
          group-hover:stroke-[rgba(255,255,255,0.75)]
          group-hover:stroke-[3]
        "
                        />
                      </g>
                      {/* Large branding letter inside segment */}
                      <text
                        x={center}
                        // y={center - 178}
                        y={center - 198}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="rgba(255,255,235,0.92)"
                        fontSize="78"
                        fontWeight="400"
                        fontFamily="Poppins, sans-serif"
                        style={{
                          letterSpacing: "-0.02em",
                          filter: "none", // QUAN TRỌNG: bỏ toàn bộ glow
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
                            // outerRadius + 25,
                            outerRadius + 30,
                          )}
                          fill="none"
                          stroke="none"
                        />

                        {/* Curved title */}
                        <text
                          fontSize="22"
                          fontWeight="700"
                          fontFamily="Poppins, sans-serif"
                          fill="rgba(32,16,4,1)"
                          letterSpacing="0.2"
                          className="
      transition-all
      duration-700
      ease-out
    "
                          style={{
                            filter: `drop-shadow(0 2px 6px rgba(255,255,255,0.75))
      drop-shadow(0 0 8px rgba(255,239,217,0.45))`,
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
                {/* Center Circle Gradient */}
                <radialGradient
                  id="provide-centerCoreGradient"
                  cx="50%"
                  cy="42%"
                  r="75%"
                >
                  <stop offset="0%" stopColor="#FFFBEA" />
                  <stop offset="10%" stopColor="#FFEFB0" />
                  <stop offset="28%" stopColor="#FFD44A" />
                  <stop offset="55%" stopColor="#F5B300" />
                  <stop offset="78%" stopColor="#D99500" />
                  <stop offset="100%" stopColor="#A56A00" />
                </radialGradient>

                {/* Center Circle */}
                <circle
                  cx={center}
                  cy={center}
                  r="150"
                  fill="url(#provide-centerCoreGradient)"
                  stroke="rgba(255,255,255,0.14)"
                  strokeWidth="2"
                  filter="
    drop-shadow(0 4px 10px rgba(191,137,82,0.08))
  "
                />
              </defs>

              {/* Center Circle */}
              <circle
                cx={center}
                cy={center}
                r="150"
                fill="url(#provide-centerCoreGradient)"
                stroke="rgba(255,255,255,0.72)"
                strokeWidth="9"
                filter="
    drop-shadow(0 4px 12px rgba(160,120,70,0.58))
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
                r="126"
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

              {/* Tagline */}
              <text
                x={center}
                y="290"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#FFFFFF"
                fontSize="42"
                fontWeight="500"
                fontFamily="Poppins, sans-serif"
                letterSpacing="0.5"
                style={{
                  filter: `drop-shadow(0 2px 6px rgba(11,27,51,0.45)) drop-shadow(0 0 14px rgba(79,141,233,0.18))`,
                }}
              >
                Services
              </text>
            </RotatingDiagram>
          </div>

          {/* segments - how we execute */}
          <div className="flex flex-col items-center">
            {/* TITLE PHÍA TRÊN CIRCLE */}
            <h3
              className="
      mb-8
      text-3xl md:text-xl lg:text-3xl
      font-light
      tracking-wide
      text-[#06172d]
    "
            >
              How We Execute
            </h3>
            <RotatingDiagram
              centerContent={
                <>
                  {/* Center Circle Gradient */}
                  <defs>
                    <radialGradient
                      id="execute-centerCoreGradient"
                      cx="42%"
                      cy="38%"
                      r="72%"
                    >
                      <stop offset="0%" stopColor="#5FBF9F" />
                      <stop offset="25%" stopColor="#2F7D68" />
                      <stop offset="55%" stopColor="#1B5E4B" />
                      <stop offset="80%" stopColor="#103663" />
                      <stop offset="100%" stopColor="#081F3A" />
                    </radialGradient>

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

                  {/* Center Circle */}
                  <circle
                    cx={center}
                    cy={center}
                    r="150"
                    fill="url(#execute-centerCoreGradient)"
                    stroke="rgba(255,255,255,0.92)"
                    strokeWidth="7"
                    filter="
          drop-shadow(0 6px 20px rgba(6,23,45,0.45))
          drop-shadow(0 0 24px rgba(95,191,159,0.10))
        "
                  />

                  {/* Dashed Inner Ring */}
                  <circle
                    cx={center}
                    cy={center}
                    r="126"
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
                    style={{
                      letterSpacing: "0.01em",
                      filter: "none",
                    }}
                  >
                    Execution
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
                  {/* <feGaussianBlur stdDeviation="4" /> */}
                  <feGaussianBlur stdDeviation="1.5" />
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
                        // y={center - 178}
                        y={center - 198}
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
                            // outerRadius + 25,
                            outerRadius + 30,
                          )}
                          fill="none"
                          stroke="none"
                        />

                        {/* Curved title */}
                        <text
                          fontSize="22"
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
                  id="execute-centerCoreGradient"
                  cx="42%"
                  cy="38%"
                  r="72%"
                >
                  <stop offset="0%" stopColor="#5FBF9F" />
                  <stop offset="25%" stopColor="#2F7D68" />
                  <stop offset="55%" stopColor="#1B5E4B" />
                  <stop offset="80%" stopColor="#103663" />
                  <stop offset="100%" stopColor="#081F3A" />
                </radialGradient>
              </defs>

              <circle
                cx={center}
                cy={center}
                r="150"
                fill="url(#execute-centerCoreGradient)"
                stroke="rgba(255,255,255,0.92)"
                strokeWidth="7"
                filter="
    drop-shadow(0 6px 20px rgba(6,23,45,0.45))
    drop-shadow(0 0 24px rgba(95,191,159,0.10))
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
                r="126"
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

              <text
                x={center}
                y={center}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#FFFFFF"
                fontSize="42"
                fontWeight="500"
                fontFamily="Poppins, sans-serif"
                style={{
                  letterSpacing: "0.01em",
                  filter: "none",
                }}
              >
                Execution
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
