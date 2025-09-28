const siteConfig = {
  personal: {
    name: 'Esther Dzifa',
    title: 'MSc @ Carnegie Mellon University',
    institution: 'CMU Africa',
    department: 'College of Engineering',
    email: 'edmworkmail@gmail.com',
    location: 'Kigali, Rwanda',
    avatar:'assets/profile_photo.jpg',
    bio: '🥷 I am Designed For Success',
    social: {
      email: 'mailto:edmworkmail@gmail.com',
      github: 'https://github.com/esthermensah',
      linkedin: 'https://linkedin.com/in/edmensah',
      twitter: 'https://twitter.com/_esther_dzifa',
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
      `I hold a MSc. in Electrical & Computer Engineering from Carnegie Mellon University.  My research and projects interests center on Computer Networking, IoTs, and Cloud computing. 
    On the days when I am not being an engineer, I am either managing an event or creating content on my <a href="https://dzifaesther.wordpress.com" target="_blank" class="gradient-link">Blog</a> 
    or <a href="https://www.youtube.com/@growingwithDzidzi" target="_blank" class="gradient-link">YouTube channel</a>.`,

    interests: [
      'Networking infrastructure and Automation',
      'Cloud Computing',
      'Security by design',
    ],
    education: [
      {
        degree: 'MSc Electrical & Computer Engineering',
        institution: 'Carnegie Mellon University',
        year: '2023 - 2025',
      },
      {
        degree: "BSc Computer Engineering",
        institution: 'Ashesi University' ,
        year: '2018 - 2022',
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
      title: 'SSH Network Auditor',
      description:
        'Automated SSH collection of network state across two Kali VMs (host-only network). Demonstrated network troubleshooting and automation using Python (Paramiko).',
      year: '2025',
      link: 'https://github.com/esthermensah/ssh-network-auditor',
      tags: ['Python(Paramiko)','Network scripting and automation','linux', 'SSH'],
    },

    {
      title: 'Smart StreetLight Monitoring',
      description:
        'A retrofitting unit designed to attch intelligence to legacy streetlights',
      year: '2022',
      link: 'https://github.com/esthermensah/Smart_Streetlight_System',
      tags: ['Wireless communication','bit communication and coding', 'embedded systems ', 'IoT', 'LoRa'],
    },
    {
      title: 'Portfolio Website',
      description:
        'Personal portfolio website built with Next.js and Tailwind CSS, showcasing projects and skills',
      year: '2023',
      link: 'https://baimamboukar.dev',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    },
  
  ],
  certifications: [
    {
      title: 'Cisco Certified Network Associate',
      issuer: 'Cisco',
      date: '2024',
      credential: 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html',
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
