export interface Job {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;

  description: string;

  sections?: {
    title: string;
    content: string[];
  }[];

  benefits: string[];
}

export const jobs: Job[] = [
  {
    slug: "travel-experience-curator",
    title: "Travel Experience Curator",
    department: "Marketing",
    location: "Ho Chi Minh City",
    type: "Full-time",

    description:
      "STAFF United is hiring a Creative Travel Experience Curator to support an international client in the after-dark cultural travel space. We are building something focused and long-term — not mass travel, not generic itineraries, but unique, premium travel experiences designed with intention, clarity, and strong creative direction.",

    sections: [
      {
        title: "About the Client",
        content: [
          "You will be working with an international travel brand focused on after-dark culture and immersive experiences.",
          "The brand sits at the intersection of travel, people, music, culture, creating journeys that go beyond traditional tourism.",
          "Their approach is centered on experiences that feel distinctive, energetic, and culturally connected — from major global events to local scenes that most travelers would not easily access.",
          "Rather than offering standard packages, the brand develops experience-led itineraries shaped by atmosphere, storytelling, and emotional impact — designed to feel memorable, well-crafted, and premium.",
        ],
      },

      {
        title: "About the Role",
        content: [
          "This role focuses on building unique after-dark cultural travel experiences across Asia and selected global destinations.",
          "You will research destinations, explore cultural scenes, and shape ideas into clear, structured, and execution-ready travel packages.",
          "This goes beyond listing places — it’s about designing experiences that feel intentional, distinctive, and aligned with a premium audience.",
          "Every detail matters — from how an experience is positioned, to how it flows, to how it is presented.",
          "We’re looking for someone who can think creatively while working with structure — someone who can take ideas and turn them into outputs that are organized, practical, and consistently high-quality.",
        ],
      },

      {
        title: "What You’ll Do",
        content: [
          "Design Distinctive Travel Experiences",
          "Build unique after-dark cultural travel experiences across Asia and selected global destinations",
          "Research destinations, neighborhoods, venues, and cultural scenes",
          "Identify experiences that go beyond standard tourism",
          "Shape ideas into clear, structured travel concepts",

          "Develop Premium Travel Packages",
          "Build travel packages from concept to execution-ready format",
          "Ensure each package is logical, detailed, and professionally presented",
          "Curate experiences that feel distinctive, memorable, and premium",

          "Content & Presentation",
          "Write clear, compelling travel descriptions in strong English",
          "Translate concepts into marketing-ready formats (summaries, highlights, key points)",
          "Design travel brochures and presentation materials in Canva",

          "Structure & Systems",
          "Organize and maintain all travel data in Monday.com",
          "Keep all details, references, and materials accurate, clean, and easy to access",
          "Maintain consistency across all packages and documentation",

          "Collaboration",
          "Work closely with the website and design team to ensure each package is presented clearly, professionally, and at a high visual standard",
          "Work closely with the social media marketing team to support promotion through clear messaging, positioning, and content direction",

          "Continuous Improvement",
          "Refine and improve packages based on feedback and performance",
          "Stay updated on travel, culture, nightlife, and lifestyle trends",
          "Continuously bring new ideas while maintaining structure and quality",
        ],
      },

      {
        title: "Who We’re Looking For",
        content: [
          "We’re looking for someone who can balance creative thinking with structured execution.",

          "Core Skills",
          "Strong English communication (written and spoken)",
          "Clear thinking and ability to organize ideas",
          "High attention to detail",
          "Comfortable working with systems and structured workflows",

          "Mindset",
          "Creative, curious, and thoughtful",
          "Able to turn ideas into clear, structured outputs",
          "Strong sense of taste — understands what feels refined vs generic",
          "Reliable and consistent in execution",
          "Interested in travel, culture, and global experiences",

          "Nice to Have",
          "Experience in content writing, research, or travel-related work",
          "Familiarity with Canva or similar tools",
          "Experience using Monday.com or similar systems",
        ],
      },

      {
        title: "Who Will Do Well in This Role",
        content: [
          "This role suits someone who:",
          "Enjoys building and improving things over time",
          "Notices details others might miss",
          "Has strong creative judgment and taste",
          "Can take ideas and turn them into structured, usable outputs",
          "Understands that high-quality work requires both creativity and precision",
        ],
      },

      {
        title: "Why This Role Matters",
        content: [
          "This role sits at the center of building a premium travel offering.",
          "The ability to create distinctive, well-structured experiences — and support them with clarity and consistency — will directly shape how the final product is experienced and presented.",
          "This is not about completing tasks. It’s about contributing to something that is thoughtful, scalable, and consistently high-quality over time.",
        ],
      },

      {
        title: "Position Details",
        content: [
          "Role Type: Full-Time",
          "Work Setting: Office-Based",
          "Location: Ho Chi Minh City",
        ],
      },

      {
        title: "Compensation & Benefits",
        content: [
          "Salary: Up to 10,000,000 VND/month",
          "Performance bonus: Up to 15% monthly",
          "Access to premium office facilities (gym, swimming pool, pantry)",
        ],
      },

      {
        title: "Apply",
        content: [
          "If you’re someone who can turn ideas into structured, high-quality experiences — and you care about building work that feels clear, thoughtful, and unique — we’d like to hear from you.",
        ],
      },
    ],

    benefits: [],
  },
  {
    slug: "female-website-developer",
    title: "Female Website Developer",
    department: "Engineering",
    location: "Ho Chi Minh City",
    type: "Full-time",

    description:
      "STAFF United is hiring a Female Website Developer to support international clients in building and maintaining high-quality websites.",

    sections: [
      {
        title: "About the Role",
        content: [
          "This role is about building and maintaining websites from development to optimization.",
          "You will work on creating responsive interfaces, improving performance, and ensuring websites are clean, functional, and user-friendly.",
          "The focus is not just on coding, but on making sure everything works smoothly, is well-structured, and delivers a strong user experience.",
          "We’re looking for someone who can think technically, but also stay organized — someone who can turn requirements into clean, working digital products.",
          "This is a full-time remote role for someone who is comfortable working with systems and taking ownership of their work.",
        ],
      },

      {
        title: "What You’ll Do",
        content: [
          "Website Development",
          "Develop and maintain websites using modern web technologies.",
          "Build responsive, user-friendly interfaces.",
          "Ensure clean, maintainable, and scalable code.",

          "Performance & Optimization",
          "Optimize website speed and performance.",
          "Ensure cross-browser and cross-device compatibility.",
          "Identify and fix bugs or issues.",

          "Collaboration",
          "Work with designers and team members on web projects.",
          "Translate design concepts into functional websites.",
          "Ensure consistency across projects.",

          "Maintenance & Improvement",
          "Troubleshoot and improve existing websites.",
          "Update features and functionalities as needed.",
          "Ensure websites remain secure and up to date",
        ],
      },

      {
        title: "Who We’re Looking For",
        content: [
          "Core Skills",
          "Strong knowledge of website development (HTML, CSS, JavaScript or similar).",
          "Fluent English communication (written and spoken).",
          "Ability to write clean and structured code.",
          "Strong problem-solving skills.",

          "Mindset",
          "Detail-oriented and responsible.",
          "Structured and organized in your work.",
          "Comfortable working in a collaborative team.",
          "Willing to learn and improve over time",

          "Nice to Have",
          "Experience with CMS platforms or Webflow.",
          "Basic understanding of UI/UX principles.",
          "Experience working on international projects.",
        ],
      },

      {
        title: "Who This Role Is Good For",
        content: [
          "This role is a good fit if you:",
          "Enjoy building websites that are both functional and user-friendly.",
          "Like working in a structured and disciplined environment.",
          "Want to grow your technical skills while working on real projects",
        ],
      },

      {
        title: "Working Details",
        content: [
          "Role Type: Full-Time",
          "Work Setting: On-site",
          "Location: Ho Chi Minh city",
        ],
      },

      {
        title: "Apply",
        content: [
          "If you are someone who enjoys building clean, high-performing websites and wants to grow in a structured, professional environment, we’d like to hear from you.",
        ],
      },
    ],

    benefits: [],
  },
  {
    slug: "operations-support",
    title: "Operations Support Specialist",
    department: "Operations",
    location: "Vietnam",
    type: "Full-time",

    description:
      "STAFF United is hiring an Operations Support Specialist to support an international client managing a residential property portfolio in Southern California.",

    sections: [
      {
        title: "About the Role",
        content: [
          "This role is about managing day-to-day property operations from communication to execution.",
          "You will handle tenant communications, leasing workflows, and operational coordination to ensure everything runs smoothly across the portfolio.",
          "The focus is not just on support tasks, but on making sure operations are organized, responsive, and reliable.",
          "We’re looking for someone who can handle high volumes of communication, stay structured under pressure, and take ownership of operational workflows.",
          "This is a full-time remote role for someone who is comfortable working with systems and managing real-time operations.",
        ],
      },

      {
        title: "What You’ll Do",
        content: [
          "Tenant Communication",
          "Handle a high volume of inbound calls and messages from prospective and current tenants.",
          "Respond clearly and professionally in both English and Spanish.",
          "Ensure timely follow-ups and issue resolution.",

          "Leasing & Application Management",
          "Support leasing pipeline and tenant onboarding.",
          "Review and screen rental applications.",
          "Verify documentation and ensure compliance.",

          "Property Operations",
          "Track and manage issues across units.",
          "Maintain accurate records and operational reports.",
          "Support day-to-day property management workflows",

          "Digital Marketing",
          "Assist with advertising available units across online platforms.",
          "Update listings and ensure information is accurate and consistent.",

          "Systems & Organization",
          "Work within Buildium to manage properties and tenant data.",
          "Keep all records, communications, and workflows organized.",
          "Ensure accuracy and completeness of all operational information.",
        ],
      },

      {
        title: "Who We’re Looking For",
        content: [
          "Core Skills",
          "Proven experience using Buildium property management software.",
          "Fluent in Spanish (written and spoken).",
          "Experience handling high-volume tenant communication.",
          "Strong understanding of property management workflows.",

          "Mindset",
          "Organized and detail-oriented.",
          "Responsive and reliable under pressure.",
          "Clear communicator with strong customer handling skills.",
          "Able to manage multiple tasks and workflows simultaneously.",

          "Nice to Have",
          "Experience in property marketing or digital listings.",
          "Familiarity with U.S. property management processes.",
          "Experience working with international clients.",
        ],
      },

      {
        title: "Who This Role Is Good For",
        content: [
          "This role is a good fit if you:",
          "Are comfortable handling high-volume communication and operations.",
          "Enjoy structured work with clear systems and workflows.",
          "Want to build strong operational skills in property management.",
        ],
      },

      {
        title: "Working Details",
        content: [
          "Role Type: Full-Time.",
          "Work Setting: Remote.",
          "Location: Vietnam.",
          "Working Hours: PST (U.S. Time Zone).",
        ],
      },

      {
        title: "Compensation & Benefits",
        content: [
          "Salary: Up to 20,000,000 VND/month (based on experience)",
          "Access to premium office facilities (gym, swimming pool, pantry)",
        ],
      },

      {
        title: "Apply",
        content: [
          "If you are someone who can manage operations with structure, communicate effectively, and handle real responsibility, we’d like to hear from you.",
        ],
      },
    ],

    benefits: [],
  },
  {
    slug: "long-form-video-editor",
    title: "Long-Form Video Editor",
    department: "Creative",
    location: "Vietnam",
    type: "Full-time",

    description:
      "STAFF United is hiring a Long-Form Video Editor to support international clients in creating high-quality, engaging video content.",

    sections: [
      {
        title: "About the Role",
        content: [
          "This role is about turning raw footage into structured, engaging long-form videos.",
          "You will work on editing content such as YouTube videos, interviews, podcasts, and educational content.",
          "The focus is not just on cutting clips, but on creating videos that are clear, well-paced, and enjoyable to watch.",
          "We’re looking for someone who can think in terms of storytelling and structure — someone who can take content and turn it into a polished final product.",
          "This is a full-time remote role for someone who is comfortable working with systems and taking ownership of their work.",
        ],
      },

      {
        title: "What You’ll Do",
        content: [
          "Video Editing",
          "Edit long-form content (YouTube videos, interviews, podcasts, etc.)",
          "Structure videos for clarity, pacing, and engagement",
          "Cut, trim, and organize footage into a cohesive final product",

          "Content Enhancement",
          "Add basic motion graphics, captions, and visual elements",
          "Improve audio quality and ensure clear sound",
          "Apply transitions, music, and effects appropriately",

          "Storytelling & Structure",
          "Understand the content and shape it into a compelling narrative",
          "Maintain viewer engagement throughout the video",
          "Highlight key moments and important messages",

          "Revisions & Optimization",
          "Incorporate feedback and revise videos as needed",
          "Ensure consistency in style and quality across projects",
          "Export videos in correct formats for different platforms",

          "Organization & Workflow",
          "Manage files and assets in an organized way",
          "Follow structured workflows and timelines",
          "Ensure all project files are complete and properly stored",
        ],
      },

      {
        title: "Who We’re Looking For",
        content: [
          "Core Skills",
          "Experience editing long-form video content",
          "Proficiency in tools like Adobe Premiere Pro, Final Cut Pro, or similar",
          "Strong sense of pacing, storytelling, and structure",
          "Basic knowledge of audio editing and color correction",

          "Mindset",
          "Detail-oriented and consistent",
          "Creative, but also structured in execution",
          "Able to take feedback and improve quickly",
          "Comfortable working independently and meeting deadlines",

          "Nice to Have",
          "Experience editing YouTube or educational content",
          "Familiarity with motion graphics (After Effects or similar)",
          "Understanding of content performance and viewer retention",
        ],
      },

      {
        title: "Who This Role Is Good For",
        content: [
          "This role is a good fit if you:",
          "Enjoy turning raw footage into structured, engaging content",
          "Like both creative work and organized workflows",
          "Want to grow your skills in video editing for international projects",
        ],
      },

      {
        title: "Working Details",
        content: [
          "Role Type: Full-Time",
          "Work Setting: Remote",
          "Location: Vietnam",
        ],
      },

      {
        title: "Apply",
        content: [
          "If you are someone who enjoys editing long-form content and turning ideas into polished videos, we’d like to hear from you.",
        ],
      },
    ],

    benefits: [],
  },
  {
    slug: "brand-social-media-coordinator",
    title: "Brand & Social Media Coordinator",
    department: "Marketing",
    location: "Ho Chi Minh City",
    type: "Full-time",

    description:
      "STAFF United is hiring a Brand & Social Media Coordinator to build and manage a strong, consistent brand presence across social platforms and website content.",

    sections: [
      {
        title: "About the Role",
        content: [
          "This role is about building and maintaining a strong, credible brand presence across digital platforms.",
          "You will create and manage content across Instagram, Facebook, LinkedIn, and the company blog.",
          "The focus is not just on posting content, but on ensuring clarity, consistency, and alignment with business goals.",
          "We’re looking for someone who can translate ideas into structured, high-quality content that reflects the brand professionally.",
          "This is an office-based role in Ho Chi Minh City for someone who can take ownership and execute independently.",
        ],
      },

      {
        title: "What You’ll Do",
        content: [
          "Content Creation",
          "Create clear, structured content aligned with brand voice and positioning",
          "Translate business ideas into concise and engaging posts",
          "Develop content for LinkedIn, Instagram, Facebook, and blog articles",
          "Maintain consistency in tone, messaging, and quality",

          "Social Media Management",
          "Manage and schedule content across Instagram, Facebook, and LinkedIn",
          "Ensure consistent posting and engagement",
          "Monitor performance and refine content direction",
          "Maintain a clean, professional digital presence",

          "Visual Content & Video",
          "Design social media visuals using Canva",
          "Create and edit short-form video content using Capcut",
          "Ensure all visuals align with brand identity",
          "Maintain consistency across formats and platforms",

          "Brand Positioning Support",
          "Support positioning STAFF United as a reliable offshore execution partner",
          "Align content with sales messaging and growth strategy",
          "Help build trust and authority through content",
          "Support content that attracts, educates, and converts potential clients",
        ],
      },

      {
        title: "Who We’re Looking For",
        content: [
          "Core Skills",
          "Strong English speaking and writing skills",
          "Experience managing Instagram, Facebook, and LinkedIn",
          "Proficiency in Canva and Capcut",
          "Good sense of design, layout, and visual balance",

          "Mindset",
          "Organized, consistent, and detail-oriented",
          "Able to execute without constant direction",
          "Comfortable combining creativity with discipline",
          "Takes ownership of outcomes, not just tasks",

          "Nice to Have",
          "Experience writing blog content",
          "Understanding of brand positioning and content strategy",
          "Experience working in B2B or international environments",
        ],
      },

      {
        title: "Who This Role Is Good For",
        content: [
          "This role is a good fit if you:",
          "Enjoy building brand presence through structured content",
          "Like both creative execution and organized workflows",
          "Want to grow in branding, content, and marketing strategy",
        ],
      },

      {
        title: "Working Details",
        content: [
          "Role Type: Full-Time",
          "Work Setting: Office-based (District 1, Ho Chi Minh City)",
          "Location: Ho Chi Minh City, Vietnam",
        ],
      },

      {
        title: "Compensation & Benefits",
        content: [
          "Base salary + performance bonus",
          "Work with modern tools and equipment",
          "Access to premium office facilities (gym, swimming pool, pantry)",
          "Structured, international-facing working environment",
          "Exposure to global clients and real business operations",
          "Opportunity to grow into Brand / Marketing Lead roles",
        ],
      },

      {
        title: "Why This Role Matters",
        content: [
          "This role directly supports sales and revenue growth by shaping how STAFF United is perceived.",
          "You will help build trust and credibility before the first client interaction.",
          "You will create a consistent, high-quality brand presence.",
          "You will support sales with content that drives inbound interest and engagement.",
        ],
      },

      {
        title: "Apply",
        content: [
          "If you are someone who enjoys building brand presence and creating structured, high-quality content, we’d like to hear from you.",
          "Apply here: https://www.staffunitedgroup.com/join",
        ],
      },
    ],

    benefits: [],
  },
  {
    slug: "business-growth-representatives",
    title: "Business Growth Representatives",
    department: "Sales",
    location: "Ho Chi Minh City",
    type: "Full-time",

    description:
      "STAFF United is hiring Business Growth Representatives to help introduce our services to businesses, build relationships, book Free Business Support Reviews, and support business growth through our Vietnam Forward Initiative.",

    sections: [
      {
        title: "About the Role",
        content: [
          "STAFF United is building a women-powered business support team in Vietnam.",
          "Through our Vietnamese Business Growth Initiative, we help international and local businesses operate smarter, execute better, and grow stronger.",
          "We are looking for Business Growth Representatives based in Ho Chi Minh City to help introduce STAFF United to potential clients, build professional relationships, and support business growth.",
          "This role focuses on communication, relationship building, outreach, and helping businesses access the support they need.",
          "You will play an important role in expanding the reach of STAFF United and supporting Vietnam’s growing business community.",
        ],
      },

      {
        title: "What You’ll Do",
        content: [
          "Introduce STAFF United to potential business clients",
          "Support both international and local business growth",
          "Promote the Vietnam Forward Initiative",
          "Identify businesses that may need support",
          "Book Free Business Support Reviews",
          "Follow up with leads and referral partners",
          "Keep lead information updated in Monday.com",
          "Help guide qualified clients to the right next step",
        ],
      },

      {
        title: "Our Core Service Areas",
        content: [
          "You will introduce businesses to our 5-Core Support Ecosystem™",

          "Strategic Operations — structure, admin support, workflows, documentation, and daily execution",

          "Targeted Sales — lead follow-up, client communication, CRM activity, and sales coordination",

          "Accounting & Legal — financial records, documentation, compliance coordination, and partner support",

          "Focused Marketing — content support, brand visibility, campaign coordination, and marketing execution",

          "Future Expansion — market research, growth planning, new opportunities, and expansion preparation",
        ],
      },

      {
        title: "Who We’re Looking For",
        content: [
          "Fluent in English",
          "Strong in Vietnamese communication",
          "Confident speaking with business owners and professionals",
          "Professional, organized, and reliable",
          "Ambitious and motivated to grow",
          "Comfortable with outreach, follow-up, and relationship building",
          "Interested in business, sales, marketing, operations, or entrepreneurship",
          "Experience in sales, business development, client service, or marketing is helpful, but communication, attitude, and follow-through matter most.",
        ],
      },

      {
        title: "Who This Role Is Good For",
        content: [
          "This role is a good fit if you:",
          "Enjoy building relationships and managing client pipelines",
          "Like structured systems and organized workflows",
          "Want to grow in sales, business development, and client strategy",
        ],
      },

      {
        title: "Working Details",
        content: [
          "Role Type: Full-Time",
          "Work Setting: Office-based (District 1, Ho Chi Minh City)",
          "Location: Ho Chi Minh City, Vietnam",
        ],
      },

      {
        title: "Compensation & Benefits",
        content: [
          "Base Salary: VND 12,000,000/month",
          "Performance Bonus: Up to 15% monthly",
          "Signing Commission: 2.5% of first contract value for new clients signed",
          "Commission is paid after the client signs and STAFF United receives the first payment",
          "Work with modern tools and equipment",
          "Access to premium office facilities (gym, swimming pool, pantry)",
          "Structured international-facing working environment",
          "Direct exposure to founders and business leaders",
        ],
      },

      {
        title: "Why This Role Matters",
        content: [
          "You will help connect businesses with the support they need to grow.",
          "You will contribute directly to the Vietnam Forward Initiative.",
          "You will help expand the reach of STAFF United across Vietnam and international markets.",
          "You will support long-term business growth while building your own professional career.",
        ],
      },

      {
        title: "Apply",
        content: [
          "Apply through our Talent Fast Track form on the STAFF United website.",
          "Please upload your CV, salary expectation, availability, and a short English voice introduction.",
          "Apply here: https://www.staffunitedgroup.com/join",
          // "STAFF United",
          // "ALL WOMEN. ALL BUSINESS.",
          // "Strong women. United purpose. Moving Vietnam forward.",
        ],
      },
    ],

    benefits: [],
  },
];
