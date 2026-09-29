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
  category?: string;
  subtitle?: string;
  description?: string[];
  sneakPeek?: string[];
  keyPoints?: string[];
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
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    category: "Design",
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
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    category: "Design",
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
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    category: "Data Science",
    subtitle: "Make better decisions with insight-rich data",
    description: [
      "Understand how data becomes insight and how to turn signals into strategic action.",
      "This course covers dashboards, trends, storytelling, and practical analysis frameworks for teams and founders.",
      "You’ll learn how to frame questions, read patterns, and communicate results with confidence."
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
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    category: "Productivity",
    subtitle: "Build systems that support your energy and your output",
    description: [
      "Create a sustainable workflow that supports deep work without draining your energy or focus.",
      "This course blends productivity frameworks, prioritization, and practical self-care rituals that sharpen performance over time.",
      "Work smarter while building habits that protect your wellbeing."
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
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=900&q=80",
    category: "Finance",
    subtitle: "Build healthier habits, smarter plans, and stronger financial clarity",
    description: [
      "Discover the habits and systems that turn financial uncertainty into a stable decision-making process.",
      "The course covers budgeting, planning, and long-term thinking without the jargon or overwhelm.",
      "You’ll leave with practical steps to improve discipline, confidence, and financial steadiness."
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
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    category: "Business",
    subtitle: "Turn emerging ideas into strong, validated plans",
    description: [
      "Learn how to frame a promising idea, validate demand, and build a focused roadmap for launch.",
      "This course blends strategy, product thinking, and lean execution so you can move from concept to momentum.",
      "You’ll see how disciplined planning and rapid feedback improve your chance of building something people actually want."
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
