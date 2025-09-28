const siteConfig = {
  personal: {
    name: 'Esther Dzifa Mensah',
    title: 'MSc Electrical & Computer Engineering',
    institution: 'CMU',
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
        'A retrofitting unit designed to attach intelligence to legacy streetlights',
      year: '2022',
      link: 'https://github.com/esthermensah/Smart_Streetlight_System',
      tags: ['Wireless communication','bit communication and coding', 'embedded systems', 'IoT', 'LoRa'],
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
      title: 'IELTS General Training',
      issuer: 'British Council / IDP',
      date: '2025',
      credential: 'https://www.ielts.org/=',
      description: 'Validated English proficiency for professional and workplace settings, covering listening, reading, writing, and speaking.',
    },
  ],
  experience: [
     {
      position: 'Research & Data Engineering Intern',
      company: 'Carnegie Mellon University',
      location: 'Pittsburgh',
      period: 'Aug 2022 - Aug 2023',
      description:`
  <ul>
    <li>Engineered scalable Python ETL pipelines using Pandas and Cloudflare APIs, processing over 1 million data points and boosting data processing efficiency by 30%.</li>
    <li>Automated clustering of 50+ African countries using 15+ internet and World Bank data metrics to enhance network analytics and geospatial insights.</li>
    <li>Developed an interactive Flask dashboard to visualize this data, enabling user-driven analysis of trends.</li>
  </ul>
`,
     },
     {
      position: 'Network Research Intern',
      company: 'Cylab-Africa',
      location: 'Rwanda',
      period: 'Jun 2023 - Aug 2024',
      description: `
    <ul>
      <li>Contributed to the implementation of Bluetooth Low Energy (BLE) mesh for two-way local node connectivity and IoT device integration within an opportunistic delay-tolerant network prototype, facilitating data transfer between the nodes.</li>
    </ul>` ,
    },
    
   {
      position: 'Teaching Assistant',
      company: 'Ashesi University',
      location: 'Ghana',
      period: 'Aug 2022 - Aug 2023',
      description: `
    <ul>
      <li>Delivered real-time IT support for students and faculty, including troubleshooting hardware/software issues and maintaining computer systems and networked devices.</li>
      <li>Coordinated and facilitated lab sessions for 90+ students, assisting with technical concepts in Computer Systems and Applied Cryptography.</li>
    </ul>
  `,
        
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
