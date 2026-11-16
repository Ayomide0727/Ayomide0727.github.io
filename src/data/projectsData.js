import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'DermaBridge - Trustworthy AI for Skin Lesion Screening',
        projectDesc: 'A fairness-first multimodal AI app for skin lesion screening, built during the Morgan State SAIRI research program. Integrated six public dermatology datasets into a 10,250-image benchmark, compared five deep learning models (up to 76.7% test accuracy), and used Grad-CAM and SHAP to check fairness across skin tones.',
        tags: ['Python', 'PyTorch', 'React Native', 'Expo', 'TypeScript'],
        code: 'https://github.com/blessadeik/DermaBridge',
        demo: '',
        image: five
    },
    {
        id: 2,
        projectName: 'CRAM - Learning Management System',
        projectDesc: 'Co-founded and developing a lightweight learning management system for a school in Nigeria, covering assignment submission, course resources and announcements. Designed role-based access for admins, course representatives and students, plus the database schema behind it.',
        tags: ['React', 'Node.js', 'SQLite', 'JWT'],
        code: 'https://github.com/Anydav/CRAM',
        demo: '',
        image: six
    },
    {
        id: 3,
        projectName: 'S.P.A.R.K.I. - AI Coding Tutor',
        projectDesc: 'Research project in the Cypher Lab at Bowie State: an AI-powered platform for personalized coding education. Built Flask backend and database components, integrated LLMs for hints and feedback, and prototyped scalable inference with Docker, vLLM, Redis and load balancing.',
        tags: ['Python', 'Flask', 'Docker', 'vLLM', 'Redis'],
        code: '',
        demo: '',
        image: seven
    },
    {
        id: 4,
        projectName: 'Smart Meeting AI Assistant',
        projectDesc: 'Built a Smart Meeting Assistant with a team to capture meeting decisions and track action items. The assistant integrates AI to transcribe meetings, summarize key points, and assign tasks, enhancing productivity and collaboration.',
        tags: ['React', 'CSS', 'Node.js','IBM Watson.ai'],
        code: 'https://github.com/shafayatsaad/Smart_Meeting_Assistant_IBM_Hackathon',
        demo: 'https://smart-meeting-assistant-ibm-hackathon.onrender.com',
        image: one
    },
    {
        id: 5,
        projectName: 'Hotel Booking Management System',
        projectDesc: ' Designed hotel management system using inheritance, enumeration, and one-to-many relationships. The system allows users to book rooms, manage reservations, and handle customer information efficiently.',
        tags: ['java', 'Draw.io'],
        code: 'https://github.com/Ayomide0727/Hotel-booking-system',
        demo: '',
        image: two
    },
    {
        id: 6,
        projectName: 'Igbo Yam Festival Website',
        projectDesc: 'Built an interactive single-page website showcasing the cultural heritage and traditions of the Igbo Yam Festival, featuring clean layouts and front-end best practices for an improved user experience.',
        tags: [ 'CSS', 'HTML', 'JavaScript'],
        code: 'https://github.com/Ayomide0727/IGBOFESTIVAL',
        demo: '',
        image: three
    },
    {
        id: 7,
        projectName: 'MarketMind - AI-Powered Stock Market Analysis',
        projectDesc: 'MarketMind is a no-risk stock market simulator designed to help beginners learn how to invest without losing real money. It provides real-time market data, virtual trading capabilities, and educational resources to build confidence and knowledge in stock trading.',
        tags: ['HTML', 'CSS', 'Finnhub API', 'JavaScript'],
        code: 'https://github.com/Ayomide0727/MarketMind',
        demo: 'https://www.youtube.com/watch?v=s-SaNTvekto&t=2s',
        image: four
    },
]
