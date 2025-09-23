const siteConfig = {
  personal: {
    name: 'Esther Dzifa',
    title: 'MSc @ Carnegie Mellon University',
    institution: 'CMU Africa',
    department: 'College of Engineering',
    email: 'edmworkmail@gmail.com',
    location: 'Kigali, Rwanda',
    avatar:
      'https://github.com/user-attachments/assets/19771f37-ee31-43d6-a993-29de6929379c',
    bio: '🥷 I am Designed For Success',
    social: {
      email: 'mailto:baimamboukar@gmail.com',
      github: 'https://github.com/baimamboukar',
      linkedin: 'https://linkedin.com/in/baimamboukar',
      twitter: 'https://twitter.com/baimamboukar',
    },
  },
  navigation: [
    { name: 'About', href: '#about', active: true },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Publications', href: '#publications' },
    { name: 'Portfolio', href: '#portfolio' },
  ],
  about: {
    title: 'About me',
    content:
      'I hold a MSc. in Electrical & Computer Engineering from Carnegie Mellon University. My research and projects interests center on Computer Networking Iots, and Cloud computing. On the days when I am not being an engineer, I am either manging an event or producing creating content on my blog or youtube channel.',
    interests: [
      'Networking infrastructure and Automation',
      'Cloud Computing',
      'Security by design',
    ],
    education: [
      {
        degree: "Bachelor's in Computer Science",
        institution: 'Ashesi University,Ghana',
        year: '2018 - 2022',
      },
      {
        degree: 'MLH Fellowship, Open Source',
        institution: 'MLH x G-Research',
        year: '2023 - 2023',
      },
      ],
  },
  publications: [
    {
      title:
        'Rural Connectivity: An Opportunistic Connectivity for Challenged Communities in Africa to Access Digital Public Goods/Infrastructures',
      authors: 'Mohamed Alimamy Fofanah, Izera Ifituburyo Pacifique, Esther Dzifa Mensah, Emmanuel Ndashimye, Assane Gueye',
      venue: 'ACM, the Association for Computing Machinery',
      year: '2025',
      type: 'Academic paper',
    },
   
  
  ],
  projects: [
        {
      title: 'Smart StreetLight Monitoring',
      description:
        'A retrofitting unit designed to attch intelligence to legacy streetlights',
      year: '2022',
      link: 'https://github.com/esthermensah/Smart_Streetlight_System',
      tags: ['Wireless communication, bit communication and coding', 'embedded systems ', 'IoT', 'LoRa'],
    },
    {
      title: 'Portfolio Website',
      description:
        'Personal portfolio website built with Next.js and Tailwind CSS, showcasing projects and skills',
      year: '2023',
      link: 'https://baimamboukar.dev',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    },
    {
      title: 'Asteroidly',
      description:
        'Which asteroids are close to Earth today? Asteroidly provides real-time data on near-Earth objects using NASA APIs, with visualizations and alerts',
      year: '2022',
      link: 'https://github.com/baimamboukar/weather-app',
      tags: ['Flutter', 'Weather API', 'Geolocation'],
    },
  ],
  certifications: [
    {
      title: 'Cisco Certified Network Associate',
      issuer: 'Cisco',
      date: '2024',
      credential: 'https://www.appbrewery.co/certificate/flutter',
      description: 'A globally recognized certification validating knowledge and skills in networking, security, automation, and IT infrastructure.',
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2022',
      credential: 'https://aws.amazon.com/certification',
      description: 'Foundational understanding of AWS Cloud',
    },
  ],
  experience: [
    {
      position: 'Full Stack Developer',
      company: 'Freelance',
      location: 'Remote',
      period: '2023 - Present',
      description:
        'Building custom web and mobile solutions for clients worldwide using Flutter, React, and Node.js',
    },
    
  ],
  colors: {
    reInventPurple: '#9D5CAE',
    reInventPink: '#E91E8C',
    reInventOrange: '#FF9900',
    darkBg: '#161E2D',
    lightBg: '#232F3E',
    textLight: '#B0B7C3',
    textDark: '#1B2530',
    accent: '#00D4FF',
  },
}
