export type CourseSidebarData = {
  totalLessons: string;
  previewLessons: { id: string; title: string; duration: string }[];
  moreVideosText: string;
  ctaText: string;
  price: string;
  billingPeriod: string;
  includes: string[];
  instructor: {
    name: string;
    title: string;
    avatarUrl: string;
    bioText: string;
  };
};

export type Course = {
  slug: string;
  title: string;
  cardTitle: string;
  creator: string;
  level: string;
  lessons: string;
  duration: string;
  comments: string;
  rating: number;
  price: string;
  image: string;
  heroImage?: string;
  sidebar?: CourseSidebarData;
  category?: string;
  subtitle?: string;
  description?: string[];
  sneakPeek?: string[];
  keyPoints?: string[];
};

export type CourseModule = {
  title: string;
  description: string;
};

export type ReviewRating = {
  stars: number;
  count: number;
  fill: number;
};

export type Review = {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
};

export type CreatorProfile = {
  id: string;
  name: string;
  role: string;
  title: string;
  tagline: string;
  bio: string[];
  avatar: string;
};

export const courses: Course[] = [
  {
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    cardTitle: "Learn Figma from Basic",
    creator: "purepearl studio",
    level: "Beginner",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: 4.5,
    price: "$25",
    image: "/figma.png",
    category: "UI/UX Design",
    subtitle: "Design Thinking for Modern Products",
    description: [
      "Learn the fundamentals of building digital interfaces in Figma, from frames and components to prototype flows that feel polished and intuitive.",
      "This course walks you through practical design decisions, smart layout systems, and reusable assets that help you move faster without sacrificing clarity.",
      "By the end, you’ll have a workflow for creating clean, user-friendly experiences that are ready to share and iterate on."
    ],
    sneakPeek: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80"
    ],
    keyPoints: [
      "Figma fundamentals",
      "Wireframing and layouts",
      "Design systems and auto layout",
      "Prototyping and feedback loops",
      "Exporting assets for handoff"
    ]
  },
  {
    slug: "build-digital-asset",
    title: "Build Digital Asset: A Comprehensive Guide",
    cardTitle: "Build Digital Asset",
    creator: "purepearl studio",
    level: "Intermediate",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: 4.8,
    price: "$25",
    image: "/build-digital.png",
    heroImage: "/build-girl.png",
    sidebar: {
      totalLessons: "112 Lessons (24 hours)",
      previewLessons: [
        { id: "01", title: "Introduction to Digital Assets", duration: "12 mins" },
        { id: "02", title: "Design Principles for Impacts", duration: "21 mins" },
        { id: "03", title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
      ],
      moreVideosText: "99 more videos",
      ctaText: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
      price: "$25",
      billingPeriod: "/lifetime",
      includes: [
        "Learning Resources",
        "Quality Lesson Videos",
        "Certificate of Completion",
        "Private Consultation",
      ],
      instructor: {
        name: "PurePearl Studio",
        title: "Professional Creator",
        avatarUrl: "/creator.png",
        bioText: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
      },
    },
    category: "Drawing & Painting",
    subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
    description: [
      "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, \"Build Digital Assets: A Comprehensive Guide.\" This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.",
      "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
      "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios."
    ],
    sneakPeek: [
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
    ],
    keyPoints: [
      "Foundational Concepts",
      "Design Principles Mastery",
      "Advanced Techniques in Digital Creation",
      "Project Showcase and Critique",
      "Optimizing for Various Platforms",
      "Digital Asset Management Best Practices",
      "Monetization Strategies",
      "Capstone Project: Building Your Portfolio"
    ]
  },
  {
    slug: "the-power-of-big-data",
    title: "the Power of Big Data",
    cardTitle: "the Power of Big Data",
    creator: "purepearl studio",
    level: "Beginner",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: 4.5,
    price: "$25",
    image: "/big-data.png",
    category: "Marketing",
    subtitle: "Make better decisions with insight-rich data",
    description: [
      "Understand how data becomes insight and how to turn signals into strategic action.",
      "This course covers dashboards, trends, storytelling, and practical analysis frameworks for teams and founders.",
      "You’ll learn how to frame questions, read patterns, and communicate results with confidence."
    ],
    sneakPeek: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    ],
    keyPoints: [
      "Analytics foundations",
      "Storytelling with data",
      "Forecasting patterns",
      "Dashboard design",
      "Business decision frameworks"
    ]
  },
  {
    slug: "balancing-productivity-and-self-care",
    title: "Balancing Productivity and Self-Care",
    cardTitle: "Balancing Productivity and Self-Care",
    creator: "purepearl studio",
    level: "Beginner",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: 4.5,
    price: "$25",
    image: "/productivity.png",
    category: "Social Media",
    subtitle: "Build systems that support your energy and your output",
    description: [
      "Create a sustainable workflow that supports deep work without draining your energy or focus.",
      "This course blends productivity frameworks, prioritization, and practical self-care rituals that sharpen performance over time.",
      "Work smarter while building habits that protect your wellbeing."
    ],
    sneakPeek: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80"
    ],
    keyPoints: [
      "Focused planning",
      "Energy management",
      "Boundary-setting",
      "Healthy routines",
      "Sustainable output"
    ]
  },
  {
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    cardTitle: "Mastering Money Management",
    creator: "purepearl studio",
    level: "Beginner",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: 4.5,
    price: "$25",
    image: "/mastering.png",
    category: "Marketing",
    subtitle: "Build healthier habits, smarter plans, and stronger financial clarity",
    description: [
      "Discover the habits and systems that turn financial uncertainty into a stable decision-making process.",
      "The course covers budgeting, planning, and long-term thinking without the jargon or overwhelm.",
      "You’ll leave with practical steps to improve discipline, confidence, and financial steadiness."
    ],
    sneakPeek: [
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    ],
    keyPoints: [
      "Budget design",
      "Savings systems",
      "Debt strategy",
      "Goal planning",
      "Mindful spending"
    ]
  },
  {
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    cardTitle: "From Idea to Startup Success",
    creator: "purepearl studio",
    level: "Beginner",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: 4.5,
    price: "$25",
    image: "/startup.png",
    category: "Creative Marketing",
    subtitle: "Turn emerging ideas into strong, validated plans",
    description: [
      "Learn how to frame a promising idea, validate demand, and build a focused roadmap for launch.",
      "This course blends strategy, product thinking, and lean execution so you can move from concept to momentum.",
      "You’ll see how disciplined planning and rapid feedback improve your chance of building something people actually want."
    ],
    sneakPeek: [
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80"
    ],
    keyPoints: [
      "Idea validation",
      "Lean planning",
      "Messaging and positioning",
      "Customer discovery",
      "Pitch readiness"
    ]
  }
];

export const featuredCourses = courses.slice(0, 6);
export const detailedCourse = courses.find((course) => course.slug === "build-digital-asset");

export const courseModules: CourseModule[] = [
  {
    title: "Module 1: Introduction to Digital Assets",
    description:
      "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    title: "Module 2: Design Principles for Impact",
    description:
      "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    title: "Module 4: User-Centric Design Strategies",
    description:
      "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    title: "Module 5: Interactive Media and Engagement",
    description:
      "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    title: "Module 6: Project Showcase and Critique",
    description:
      "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    title: "Module 7: Optimizing Digital Assets for Various Platforms",
    description:
      "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

export const courseRatingSummary: ReviewRating[] = [
  { stars: 5, count: 720, fill: 260 },
  { stars: 4, count: 120, fill: 103 },
  { stars: 3, count: 21, fill: 27 },
  { stars: 2, count: 12, fill: 10 },
  { stars: 1, count: 16, fill: 15 },
];

export const courseReviews: Review[] = [
  {
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "a year ago",
    text: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
  },
  {
    name: "Albert Flores",
    role: "Product Designer",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "a year ago",
    text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    name: "Cody Fisher",
    role: "Creative Strategist",
    avatar: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "a year ago",
    text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    name: "Brooklyn Simmons",
    role: "Visual Designer",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "a year ago",
    text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
];

export const creatorProfiles: CreatorProfile[] = [
  {
    id: "purepearl-studio",
    name: "PurePearl Studio",
    role: "Creator",
    title: "PurePearl Studio",
    tagline: "Passionate UI/UX, Web designer",
    bio: [
      "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
      "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
    ],
    avatar: "/creator.png",
  },
];

export const creatorCourseList = courses.slice(0, 6);
