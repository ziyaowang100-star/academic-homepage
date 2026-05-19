export const profile = {
  name: "Ziyao Wang",
  title: "Postdoctoral Researcher",
  affiliation: "University of Macau",
  department: "Electrical Engineering",
  location: "Macau SAR, China",
  email: "ziyaowang100@sina.com",
  image: "/images/ziyao-wang.jpg",
  imageAlt: "Professional portrait of Ziyao Wang",
  canonicalUrl: "https://ziyaowang100-star.github.io/academic-homepage/",
  keywords: [
    "Ziyao Wang",
    "Postdoctoral Researcher",
    "University of Macau",
    "Electrical Engineering",
    "Distribution Network Planning",
    "Smart Distribution Networks",
    "Reliability Assessment",
    "Resilience Assessment",
    "Power System Planning",
    "Artificial Intelligence for Power Systems"
  ],
  links: {
    googleScholar: "https://scholar.google.com/citations?user=Ug9UvvAAAAAJ&hl=zh-CN",
    orcid: "https://orcid.org/my-orcid?orcid=0000-0003-0195-1038",
    github: "https://github.com/WZY10065",
    linkedin: "https://www.linkedin.com/in/ziyao-wang-7ba84b326/?locale=zh_CN",
    university: ""
  },
  bio: [
    "Ziyao Wang is a Postdoctoral Researcher in Electrical Engineering at the University of Macau. His research focuses on reliability and resilience assessment, digital planning, and AI-assisted decision-making for smart distribution networks.",
    "His work integrates explicit model-based reliability assessment, mathematical optimization, artificial intelligence, and practical distribution network planning applications."
  ],
  longBio:
    "He received the B.Eng. degree in Electrical Engineering and Automation from South China University of Technology in 2019 and the Doctor of Engineering degree in Electrical Engineering from South China University of Technology in 2025. He was also a joint-training PhD student at the National University of Singapore from 2024 to 2025.",
  researchInterests: [
    "Reliability and resilience assessment of distribution networks",
    "Digital planning of smart distribution networks",
    "Power grid planning under climate change",
    "Distribution network planning with high renewable energy penetration",
    "Advanced operations research and artificial intelligence methods for power systems",
    "Explicit model-based reliability and topology-variable-based planning methods"
  ],
  education: [
    {
      institution: "South China University of Technology",
      degree: "B.Eng. in Electrical Engineering and Automation",
      period: "2015-2019",
      supervisor: "Prof. Tao Yu",
      logo: "/images/logos/scut.png"
    },
    {
      institution: "South China University of Technology",
      degree: "Doctor of Engineering in Electrical Engineering",
      period: "2019-2025",
      supervisor: "Prof. Tao Yu",
      logo: "/images/logos/scut.png"
    },
    {
      institution: "National University of Singapore",
      degree: "Joint Training PhD Student in Electrical Engineering",
      period: "2024-2025",
      supervisor: "Prof. Jimmy Peng",
      logo: "/images/logos/nus.png"
    }
  ],
  experience: [
    {
      institution: "University of Macau",
      role: "Postdoctoral Researcher in Electrical Engineering",
      period: "2025-Present",
      supervisor: "Minghao Wang, Yonghua Song's Group",
      logo: "/images/logos/um.png"
    }
  ],
  patents: [
    "Ziyao Wang, Tao Yu. A Distribution Network Planning Method Considering Topological Constraints of Connection Modes. CN 110197302 B, Granted.",
    "Junxi Tang, Junxiao Zhang, Chong Gao, Huazhen Cao, Ziyao Wang. A Distribution Network Wiring Line Planning Method, Device, and Equipment. Granted."
  ],
  books: [
    "Tao Yu, Ziyao Wang, Liming Sun, et al. Intelligent Planning of New-Type Distribution Networks. Science Press."
  ],
  service: [
    "Reviewer for IEEE Transactions on Power Systems",
    "Reviewer for Applied Energy",
    "Reviewer for International Journal of Electrical Power & Energy Systems",
    "Founder of the Energy Systems Planning Group, an academic discussion group with more than 200 members",
    "Shared power system knowledge through academic blogs with more than 100,000 reads"
  ]
};

export type Profile = typeof profile;
