import { useState } from 'react';
import './App.css'

type SkillCategory = 'Frontend' | 'Backend' | 'Data & Analytics' | 'Tools';

const skills: Record<SkillCategory, string[]> = {
  Frontend: [
    'React',
    'JavaScript',
    'TypeScript',
    'HTML5',
    'CSS3',
  ],

  Backend: [
    'Python',
    'Flask',
    'Node.js',
    'Express.js',
  ],

  'Data & Analytics': [
    'PostgreSQL',
    'SQL',
    'Pandas',
    'Microsoft Excel',
    'Tableau',
    'Matplotlib',
  ],

  Tools: [
    'Git',
    'GitHub',
    'VS Code',
    'Cloudflare Pages',
  ],
};

function TechStack() {
  const [activeCategory, setActiveCategory] =
    useState<SkillCategory>('Frontend');

  const categories = Object.keys(skills) as SkillCategory[];

  return (
    <section className="stack-section" id="stack">

      <div className="section-heading">
        <span className="section-label">
          02 / MY TECHNICAL TOOLKIT
        </span>

        <h2>
          Technologies I use to <span>build.</span>
        </h2>

        <p className="stack-description">
          A growing collection of technologies and tools
          I've explored and applied through hands-on projects.
        </p>
      </div>

      <div className="stack-layout">

        <div className="stack-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${
                activeCategory === category ? 'active' : ''
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
              <span>↗</span>
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {skills[activeCategory].map((skill, index) => (
            <div className="skill-card" key={skill}>
              <span className="skill-number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3>{skill}</h3>

              <span className="skill-indicator">
                TECHNOLOGY
              </span>
            </div>
          ))}
        </div>

      </div>

      <p className="stack-note">
        My technical toolkit continues to evolve as I learn,
        experiment and build new projects.
      </p>

    </section>
  );
}

const projects = [
  {
    number: '01',
    name: 'Retail Sales Intelligence',
    category: 'DATA ANALYTICS',
    description:
      'A retail analytics solution transforming sales data into meaningful business insights through data processing, performance analysis and visualisation.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'React'],
    status: 'COMPLETED',
    featured: true,
  },
  {
    number: '02',
    name: 'Business Performance Dashboard',
    category: 'BUSINESS INTELLIGENCE',
    description:
      'An interactive dashboard presenting business performance through revenue, expenses, net profit, profit margins and actionable insights.',
    technologies: ['React', 'JavaScript', 'CSS', 'Data Visualisation'],
    status: 'COMPLETED',
    featured: true,
  },
  {
    number: '03',
    name: 'Retataise Nursery',
    category: 'FULL-STACK DEVELOPMENT',
    description:
      'A nursery management application designed around parent, teacher and administrator experiences, with a focus on communication and management workflows.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    status: 'IN DEVELOPMENT',
    featured: false,
  },
  {
    number: '04',
    name: 'Rooted Link Recruits',
    category: 'WEB DEVELOPMENT',
    description:
      'A recruitment application developed to explore web application functionality and recruitment workflows.',
    technologies: ['Python', 'Flask', 'HTML', 'CSS'],
    status: 'PORTFOLIO PROJECT',
    featured: false,
  },
  {
    number: '05',
    name: 'DoneDesk Services',
    category: 'APPLICATION DEVELOPMENT',
    description:
      'A service booking application exploring digital service discovery and booking workflows.',
    technologies: ['Web Development', 'JavaScript'],
    status: 'PORTFOLIO PROJECT',
    featured: false,
  },
  {
    number: '06',
    name: 'ASEIX DATA HOUSE',
    category: 'BUSINESS & TECHNOLOGY',
    description:
      'My independent data and technology venture, bringing together business intelligence, data analytics, visualisation and software solutions.',
    technologies: ['React', 'JavaScript', 'Python', 'CSS'],
    status: 'LIVE',
    featured: true,
    link: 'https://aseix-data-house.pages.dev/',
  },
];

function ProjectShowcase() {
  return (
    <section className="projects-section" id="projects">

      <div className="section-heading">
        <span className="section-label">
          03 / SELECTED WORK
        </span>

        <h2>
          Ideas transformed into <span>reality.</span>
        </h2>

        <p className="projects-description">
          A collection of projects reflecting my technical
          journey, creativity and commitment to continuous learning.
        </p>
      </div>

      <div className="projects-grid">

        {projects.map((project) => (
          <article className="project-card" key={project.number}>

            <div className="project-card-top">
              <span className="project-number">
                {project.number}
              </span>

              <span className={`project-status ${
                project.status === 'LIVE' ? 'live' : ''
              }`}>
                {project.status}
              </span>
            </div>

            <div className="project-visual">
              <span className="project-visual-number">
                {project.number}
              </span>
              <span className="project-visual-symbol">✳</span>
              <span className="project-category">
                {project.category}
              </span>
            </div>

            <div className="project-information">

              <h3>{project.name}</h3>

              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Explore Project ↗
                </a>
              )}

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

const journey = [
  {
    year: '2025',
    title: 'The Beginning',
    description:
      'Started my coding journey through the FNB App Academy and IT Varsity, developing a foundation in software development and programming.',
    category: 'TECHNOLOGY',
  },
  {
    year: '2025 – 2026',
    title: 'Learning Through Building',
    description:
      'Expanded my technical skills through hands-on projects, exploring frontend development, backend technologies, databases and data analytics.',
    category: 'DEVELOPMENT',
  },
  {
    year: '2026',
    title: 'Data Analytics',
    description:
      'Completed the Deloitte Australia Data Analytics Job Simulation through Forage, gaining practical exposure to data analysis and visualisation.',
    category: 'CERTIFICATION',
  },
  {
    year: '2026',
    title: 'Cybersecurity',
    description:
      'Completed the Mastercard Cybersecurity Job Simulation through Forage, exploring cybersecurity concepts and phishing-related threats.',
    category: 'CERTIFICATION',
  },
  {
    year: '2026',
    title: 'AI & Business Growth',
    description:
      'Earned the AI Specialist for Business Growth certification, expanding my understanding of practical AI applications in business.',
    category: 'CERTIFICATION',
  },
];

const certifications = [
  {
    name: 'FNB App Academy',
    issuer: 'FNB & IT Varsity',
    year: '2025',
    type: 'Full Stack Development',
  },
  {
    name: 'Data Analytics Job Simulation',
    issuer: 'Deloitte Australia · Forage',
    year: '2026',
    type: 'Data Analytics',
  },
  {
    name: 'Cybersecurity Job Simulation',
    issuer: 'Mastercard · Forage',
    year: '2026',
    type: 'Cybersecurity',
  },
  {
    name: 'AI Specialist for Business Growth',
    issuer: 'AI Academy',
    year: '2026',
    type: 'Artificial Intelligence',
  },
  {
    name: 'TEFL Certification',
    issuer: 'TEFL',
    year: '2026',
    type: 'Professional Development',
  },
];

function ProfessionalJourney() {
  return (
    <section className="journey-section" id="journey">
      <div className="section-heading">
        <span className="section-label">THE JOURNEY SO FAR</span>
        <h2>
          Learning. Building. <span>Becoming.</span>
        </h2>
        <p>
          Every experience, every challenge and every new skill has
          contributed to the developer I am becoming.
        </p>
      </div>

      <div className="journey-timeline">
        {journey.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-marker">
              <span />
            </div>

            <div className="timeline-card">
              <span className="timeline-category">{item.category}</span>
              <span className="timeline-year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="certifications-area">
        <div className="certifications-heading">
          <span className="section-label">CONTINUOUS LEARNING</span>
          <h3>Certifications & <span>Achievements</span></h3>
        </div>

        <div className="certifications-grid">
          {certifications.map((certification, index) => (
            <div className="certification-card" key={index}>
              <div className="certificate-icon">✦</div>
              <span className="certificate-type">{certification.type}</span>
              <h4>{certification.name}</h4>
              <p>{certification.issuer}</p>
              <span className="certificate-year">{certification.year}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="experience-area">
        <span className="section-label">BEYOND THE CODE</span>
        <h3>Professional <span>Experience</span></h3>

        <div className="experience-grid">
          <div className="experience-card">
            <span>Customer Service</span>
            <h4>Hirsch's</h4>
            <p>
              Developed customer communication, problem-solving and
              service skills in a customer-focused environment.
            </p>
          </div>

          <div className="experience-card">
            <span>Education</span>
            <h4>Impala Crescent Primary School</h4>
            <p>
              Gained experience supporting learners, communicating
              effectively and working collaboratively in an educational
              environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

type ChatMessage = {
  role: 'assistant' | 'user';
  content: string;
};

function NalediAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const suggestedQuestions = [
  'What technical skills does Naledi have?',
  'Tell me about her projects.',
  'What certifications has she earned?',
  'How can I contact Naledi?',
];

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content:
        "Hi there! I'm Naledi's portfolio assistant. 👋 I can help you explore her projects, technical skills and professional journey. What would you like to know?",
    },
  ]);

  const getResponse = (question: string) => {
    const query = question.toLowerCase();

    if (query.includes('skill') || query.includes('technology') || query.includes('programming')) {
      return "Naledi works with technologies including React, JavaScript, TypeScript, Python, HTML, CSS, Node.js, Express, PostgreSQL and Flask. She also has experience with data tools such as Pandas, Tableau and Matplotlib.";
    }

    if (query.includes('aseix') || query.includes('business')) {
      return "ASEIX DATA HOUSE is Naledi's independent technology and data business. It focuses on Data Analytics, Business Intelligence, Data Visualisation and Software Solutions. You can explore its website at https://aseix-data-house.pages.dev/.";
    }

    if (query.includes('project')) {
      return "Naledi has worked on several projects, including Retail Sales Intelligence, Business Performance Dashboard, Retataise Nursery, Rooted Link Recruits, DoneDesk Services and ASEIX DATA HOUSE. You can explore them in the Projects section of this portfolio.";
    }

    if (query.includes('certification') || query.includes('certificate') || query.includes('course')) {
      return "Naledi's learning journey includes FNB App Academy and IT Varsity, Deloitte's Data Analytics Job Simulation, Mastercard's Cybersecurity Job Simulation, AI Specialist for Business Growth and TEFL certification.";
    }

    if (query.includes('experience') || query.includes('work')) {
      return "Naledi has professional experience in customer service at Hirsch's and education support at Impala Crescent Primary School. She is also developing practical experience through independent software and data projects.";
    }

    if (query.includes('contact') || query.includes('email') || query.includes('hire')) {
      return "Thank you for your interest in connecting with Naledi! You can reach her through the Contact section of this portfolio or visit her LinkedIn profile: linkedin.com/in/naledi-motshabi-a5a245331.";
    }

    if (query.includes('about') || query.includes('who is naledi')) {
      return "Naledi Motshabi is an aspiring software developer and the founder of ASEIX DATA HOUSE. She began her coding journey through FNB App Academy and IT Varsity and continues to develop her skills through practical projects and continuous learning.";
    }

    return "That's a great question! I can currently help you explore Naledi's background, technical skills, projects, certifications and professional experience. Try asking me about one of those topics.";
  };

  const handleSend = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  if (!input.trim() || isTyping) return;

  const userMessage = input.trim();

  setMessages((previous) => [
    ...previous,
    { role: 'user', content: userMessage },
  ]);

  setInput('');
  setIsTyping(true);

  setTimeout(() => {
    const response = getResponse(userMessage);

    setMessages((previous) => [
      ...previous,
      { role: 'assistant', content: response },
    ]);

    setIsTyping(false);
  }, 1200);
};

  return (
    <div className="assistant-container">
      {isOpen && (
        <div className="assistant-window">
          <div className="assistant-header">
            <div>
              <span className="assistant-status">● ONLINE</span>
              <h3>Naledi's Assistant</h3>
              <p>Explore my professional portfolio</p>
            </div>

            <button
              className="assistant-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close assistant"
            >
              ×
            </button>
          </div>

        <div className="assistant-messages">
  {messages.map((message, index) => (
    <div
      key={index}
      className={`chat-message ${message.role}`}
    >
      {message.content.split(/(https?:\/\/[^\s]+|linkedin\.com\/[^\s]+)/g).map(
        (part, linkIndex) => {
          if (part.startsWith('http')) {
            return (
              <a
                key={linkIndex}
                href={part}
                target="_blank"
                rel="noopener noreferrer"
              >
                {part}
              </a>
            );
          }

          if (part.startsWith('linkedin.com')) {
            return (
              <a
                key={linkIndex}
                href={`https://${part}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {part}
              </a>
            );
          }

          return part;
        }
      )}
    </div>
  ))}

    {isTyping && (
    <div className="chat-message assistant typing-indicator">
      <span></span>
      <span></span>
      <span></span>
    </div>
  )}

  {messages.length === 1 && (
    <div className="suggested-questions">
      <span>QUICK QUESTIONS</span>

      {suggestedQuestions.map((question, index) => (
        <button
          key={index}
          type="button"
          onClick={() => {
            const form = document.querySelector<HTMLFormElement>(
              '.assistant-input-area'
            );

            setInput(question);
            form?.requestSubmit();
          }}
        >
          {question} →
        </button>
      ))}
    </div>
  )}
</div>

          <form className="assistant-input-area" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Ask me something..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />

            <button type="submit" aria-label="Send message">
              ↑
            </button>
          </form>
        </div>
      )}

      <button
        className="assistant-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open portfolio assistant"
      >
        {isOpen ? '×' : '✦'}
      </button>
    </div>
  );
}

function App() {
  return (
    <main className="portfolio">

      <nav className="navbar">
        <a href="#" className="logo">
          N<span>.</span>M
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#stack">Tech Stack</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Connect ↗
        </a>
      </nav>

      <section className="hero">
        <div className="hero-content">

          <div className="availability">
            <span className="status-dot"></span>
            OPEN TO OPPORTUNITIES
          </div>

          <p className="eyebrow">HELLO, I'M NALEDI MOTSHABI</p>

          <h1>
            Building digital
            <br />
            experiences with
            <br />
            <span>purpose & precision.</span>
          </h1>

          <p className="hero-description">
            I'm a developer passionate about building meaningful
            software solutions, exploring technology and turning
            ideas into functional digital experiences.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              Explore My Work ↗
            </a>

            <a href="#about" className="secondary-button">
              Discover My Journey
            </a>
          </div>

        </div>

        <div className="hero-decoration">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="orbit-center">N<span>.</span></div>
          <div className="decoration-label">DEVELOPER / CREATOR</div>
        </div>

        <div className="hero-footer">
          <span>SOFTWARE DEVELOPMENT</span>
          <span>DATA & TECHNOLOGY</span>
          <span>JOHANNESBURG, SOUTH AFRICA</span>
        </div>
      </section>

            {/* ABOUT SECTION */}

      <section className="about-section" id="about">

        <div className="section-heading">
          <span className="section-label">01 / GET TO KNOW ME</span>
          <h2>A little about <span>my journey.</span></h2>
        </div>

        <div className="about-grid">

          <div className="about-intro">
            <p className="about-highlight">
              I believe that great developers are built through
              curiosity, consistency and the willingness to keep learning.
            </p>

            <p>
              My journey into technology began in 2025 through the
              FNB App Academy and IT Varsity, where I developed
              my foundation in software development.
            </p>

            <p>
              What started as an interest in coding gradually grew
              into a passion for creating digital solutions. I began
              exploring new technologies, developing personal projects
              and challenging myself to turn ideas into functional
              applications.
            </p>

            <p>
              Today, I'm continuing to expand my technical skills,
              explore software engineering and build projects that
              reflect my growth as a developer.
            </p>
          </div>

          <div className="about-cards">

            <div className="about-card">
              <span className="card-number">01</span>
              <h3>Continuous Learning</h3>
              <p>
                Exploring technologies, strengthening my foundations
                and embracing new challenges.
              </p>
            </div>

            <div className="about-card">
              <span className="card-number">02</span>
              <h3>Learning by Building</h3>
              <p>
                Turning concepts into practical applications,
                dashboards and digital experiences.
              </p>
            </div>

            <div className="about-card">
              <span className="card-number">03</span>
              <h3>Growing with Purpose</h3>
              <p>
                Working towards becoming a well-rounded software
                engineer who contributes to meaningful solutions.
              </p>
            </div>

          </div>

        </div>

      </section>

<TechStack />

<ProjectShowcase />

<ProfessionalJourney />

<NalediAssistant />

<section className="contact-section" id="contact">
  <div className="section-heading">
    <span className="section-label">LET'S CONNECT</span>
    <h2>Have a project or opportunity in mind?</h2>
    <p>
      I'm always open to exploring new opportunities, collaborating
      on exciting projects and connecting with people in technology.
    </p>
  </div>

  <div className="contact-card">
    <div className="contact-email">
      <span>EMAIL ME</span>
      <h3>Let's start a conversation.</h3>
      <a href="mailto:naledi.dev@outlook.com">
        naledi.dev@outlook.com →
      </a>
    </div>

 <a
  href="/Naledi_Motshabi_Software_Developer_CV.pdf"
  download
  className="cv-download-button"
>
  Download My CV ↓
</a>

    <div className="contact-links">
      <a
        href="https://linkedin.com/in/naledi-motshabi-a5a245331"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn ↗
      </a>

      <a
        href="https://github.com/NalediM-Dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub ↗
      </a>
    </div>
  </div>
</section>

    </main>
  );

}

export default App;