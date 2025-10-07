const siteConfig = {
  personal: {
    name: 'Esther Dzifa Mensah',
    title: 'Computer Networking Associate',
    institution: 'MSc',
    department: 'Electrical & Computer Engineering',
    email: 'edmworkmail@gmail.com',
    location: 'Kigali, Rwanda',
    avatar:'assets/profile_photo.jpg',
    bio: '🥷Kaizen - 改善 ',
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
    or <a href="https://www.youtube.com/@growingwithDzidzi" target="_blank" class="gradient-link">YouTube channel</a>. <br><br>
    My strength lies not only in my technical expertise but also in my mindset and approach to growth. My academic and professional journey across Rwanda, the United States, and Germany has shaped a global perspective and a deep appreciation for working with diverse teams and environments. 
    I thrive in collaborative spaces, adapt quickly to new challenges, and bring curiosity and initiative to every project I take on.
    I am eager to contribute meaningfully to innovative teams, continuously learn, and grow as I build solutions that make a tangible impact. 
    I am open to associate and entry-level opportunities that allow me to apply my skills while developing new ones.
    `
    ,

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
      url: 'https://dl.acm.org/doi/10.1145/3711650.3711654',
    },
   
  
  ],
  projects: [

    {
      title: 'SSH Network Auditor',
      description:
        'Automated SSH collection of network state across two Kali VMs (host-only network). Demonstrated network troubleshooting and automation using Python (Paramiko).',
      year: '2025',
      link: 'https://github.com/esthermensah/ssh-network-auditor',
      tags: ['Python(Paramiko)','Infrastructure as Code','linux', 'SSH', 'DevOps'],
    },

    {
      title: 'Small Office Network Design & Implementation with Cisco Packet Tracer',
      description:
        'Designed and implemented a small office LAN in Cisco Packet Tracer with multi-VLAN segmentation, router-on-a-stick inter-VLAN routing, and DHCP services. Configured switch VLANs and trunking between core and access switches. Assigned static IPs for servers and printers, ensuring consistent access to critical network services. Demonstrated skills in network design, troubleshooting, and configuration of enterprise-level features.',
      year: '2022',
      link: 'https://github.com/esthermensah/small-office-network-design',
      tags: ['Subnetting','VLAN','Router-on-a-Stick', 'DHCP', 'Trunking', 'CCNA', 'Network Design'],
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
      title: 'ALX Professional Foundations',
      issuer: 'ALX Africa',
      date: '2025',
      credential: 'https://savanna.alxafrica.com/certificates/PnB5Ce7mrH?utm_campaign=53995757-ALX%20-%202025%20-%20TR%20-%20PF%20C0&utm_medium=email&_hsenc=p2ANqtz--pnG0j87UWSvM4aA9Jyt3LdLrQiRXPFKNgXikTqoY9M18qLD8MFQ4bWtdMFlEu04hlMDIum1ujj0HmIjTfdZhubIC7xA&_hsmi=104714207&utm_content=104714207&utm_source=hs_email',
      description: 'An intensive 12 week work place readiness program designed to build critical meta-skills for tech careers — including leadership, communication, entrepreneurship, critical thinking, quantitative reasoning, task management, and foundational tech skills.',
    },
    {
      title: 'IELTS General Training',
      issuer: 'British Council / IDP',
      date: '2025',
      credential: 'https://ielts.org/organisations/ielts-for-organisations/test-types/ielts-general-training-test/general-training-test-format-in-detail#:~:text=The%20IELTS%20General%20Training%20test%20is,your%20needs%20please%20get%20in%20contact.',
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
      </li>Co-authored a paper on the Rural Connectivity Project, accepted for presentation at the 13th International Conference on Networks, Communication and Computing (ICNCC 2024) and published by the Association for Computing Machinery (ACM). </li>
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
