export interface Job {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;

  description: string;
  whatYouDo: string[];
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export const jobs: Job[] = [
  {
    slug: "travel-experience-curator",
    title: "Travel Experience Curator",
    department: "Marketing",
    location: "Ho Chi Minh",
    type: "Full-time",

    description:
      "STAFF United is hiring a Creative Travel Experience Curator to support an international client in the after-dark cultural travel space. This role focuses on building travel experiences from idea to execution — researching destinations, shaping concepts, and turning them into structured, ready-to-use travel packages.",

    whatYouDo: [
      "Research destinations, neighborhoods, venues, and cultural scenes",
      "Discover unique ideas beyond standard travel experiences",
      "Shape ideas into structured travel concepts",
      "Build travel packages from idea to execution-ready format",
      "Ensure packages are complete, logical, and easy to follow",
      "Continuously update and improve travel packages",
      "Write clear and professional travel descriptions in English",
      "Create summaries, highlights, and key points for each package",
      "Design travel brochures and presentation materials using Canva",
      "Organize all information in Monday.com",
      "Maintain accurate and up-to-date data and materials",
      "Collaborate with marketing and design teams",
    ],

    responsibilities: [
      "Develop and manage travel experience concepts",
      "Ensure all travel packages are structured and execution-ready",
      "Maintain organization and accuracy of all travel-related data",
      "Support cross-team collaboration for consistent presentation",
    ],

    requirements: [
      "Good English communication (written and spoken)",
      "Strong organizational and structured thinking skills",
      "High attention to detail",
      "Comfortable working with systems and tools",
      "Creative mindset with practical execution ability",
      "Interest in travel and culture",
      "Reliable and consistent work ethic",
      "Willingness to learn and improve",
    ],

    benefits: [
      "Salary up to 10,000,000 VND/month",
      "Performance bonus up to 15% monthly",
      "Opportunity to work on international travel projects",
      "Collaborative and creative working environment",
    ],
  },
  {
    slug: "female-website-developer",
    title: "Female Website Developer",
    department: "Engineering",
    location: "Ho Chi Minh",
    type: "Full-time",

    description:
      "STAFF United is hiring a Female Website Developer to support international clients in building and maintaining high-quality websites. This role focuses on developing responsive interfaces, optimizing performance, and ensuring websites are clean, functional, and user-friendly.",

    whatYouDo: [
      "Develop and maintain websites using modern web technologies",
      "Build responsive and user-friendly interfaces",
      "Ensure clean, maintainable, and scalable code",
      "Optimize website speed and performance",
      "Ensure cross-browser and cross-device compatibility",
      "Identify and fix bugs or technical issues",
      "Collaborate with designers and team members on web projects",
      "Translate design concepts into functional websites",
      "Ensure consistency across multiple projects",
      "Troubleshoot and improve existing websites",
      "Update features and functionalities when needed",
      "Ensure websites remain secure and up to date",
    ],

    responsibilities: [
      "Build and maintain high-quality websites for international clients",
      "Ensure performance, responsiveness, and usability of websites",
      "Collaborate with cross-functional teams to deliver projects",
      "Continuously improve and maintain existing web systems",
    ],

    requirements: [
      "Strong knowledge of website development (HTML, CSS, JavaScript or similar)",
      "Fluent English communication (written and spoken)",
      "Ability to write clean, structured, and maintainable code",
      "Strong problem-solving skills",
      "Detail-oriented and responsible",
      "Structured and organized working style",
      "Comfortable working in a collaborative environment",
      "Willingness to learn and improve",
    ],

    benefits: [
      "Work on international web projects",
      "Opportunity to grow technical and problem-solving skills",
      "Collaborative and professional working environment",
      "Flexible remote working setup",
    ],
  },
  {
    slug: "operations-support-specialist",
    title: "Operations Support Specialist",
    department: "Operations",
    location: "Remote (Vietnam)",
    type: "Full-time",

    description:
      "STAFF United is hiring an Operations Support Specialist to support an international client managing a residential property portfolio in Southern California. This role focuses on handling tenant communications, leasing workflows, and operational coordination to ensure smooth and reliable property operations.",

    whatYouDo: [
      "Handle high volumes of inbound calls and messages from tenants",
      "Respond clearly and professionally in English and Spanish",
      "Ensure timely follow-ups and issue resolution",
      "Support leasing pipeline and tenant onboarding",
      "Review and screen rental applications",
      "Verify documents and ensure compliance",
      "Track and manage issues across property units",
      "Maintain accurate records and operational reports",
      "Assist with advertising available units on online platforms",
      "Update listings and ensure information accuracy",
      "Work within Buildium to manage property and tenant data",
      "Keep all records, communications, and workflows organized",
    ],

    responsibilities: [
      "Manage day-to-day property operations and tenant communication",
      "Ensure smooth leasing and onboarding processes",
      "Maintain accurate and organized operational data",
      "Support marketing and listing updates for available units",
    ],

    requirements: [
      "Proven experience using Buildium property management software",
      "Fluent in Spanish (written and spoken)",
      "Experience handling high-volume tenant communication",
      "Strong understanding of property management workflows",
      "Highly organized and detail-oriented",
      "Responsive and reliable under pressure",
      "Strong communication and customer handling skills",
      "Ability to manage multiple tasks simultaneously",
    ],

    benefits: [
      "Salary up to 20,000,000 VND/month (based on experience)",
      "Work remotely from Vietnam",
      "Opportunity to work with international clients",
      "Exposure to U.S. property management systems and workflows",
    ],
  },
  {
    slug: "long-form-video-editor",
    title: "Long-Form Video Editor",
    department: "Creative",
    location: "Remote (Vietnam)",
    type: "Full-time",

    description:
      "STAFF United is hiring a Long-Form Video Editor to support international clients in creating high-quality, engaging video content. This role focuses on transforming raw footage into structured, well-paced, and compelling long-form videos such as YouTube content, interviews, podcasts, and educational videos.",

    whatYouDo: [
      "Edit long-form content such as YouTube videos, interviews, and podcasts",
      "Structure videos for clarity, pacing, and engagement",
      "Cut, trim, and organize footage into cohesive final products",
      "Add motion graphics, captions, and visual elements",
      "Improve audio quality and ensure clear sound",
      "Apply transitions, music, and effects appropriately",
      "Shape content into compelling narratives",
      "Maintain viewer engagement throughout videos",
      "Highlight key moments and important messages",
      "Incorporate feedback and revise videos as needed",
      "Ensure consistency in style and quality across projects",
      "Export videos in correct formats for different platforms",
      "Manage files and assets in an organized workflow",
      "Follow structured timelines and processes",
    ],

    responsibilities: [
      "Produce high-quality long-form video content for international clients",
      "Ensure videos are engaging, well-structured, and aligned with content goals",
      "Maintain consistency in editing style and output quality",
      "Manage editing workflow and deliver projects on time",
    ],

    requirements: [
      "Experience editing long-form video content",
      "Proficiency in tools like Adobe Premiere Pro, Final Cut Pro, or similar",
      "Strong understanding of pacing, storytelling, and structure",
      "Basic knowledge of audio editing and color correction",
      "Detail-oriented and consistent",
      "Creative but structured in execution",
      "Ability to take feedback and improve quickly",
      "Comfortable working independently and meeting deadlines",
    ],

    benefits: [
      "Work remotely from Vietnam",
      "Opportunity to work on international video projects",
      "Develop storytelling and content production skills",
      "Collaborative and creative working environment",
    ],
  },
];
