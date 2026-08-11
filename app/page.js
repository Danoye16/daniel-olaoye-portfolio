const downloads = [
  ['Generative AI Portfolio', '/downloads/Daniel_Olaoye_Professional_Generative_AI_Portfolio.docx'],
  ['Generative AI Presentation', '/downloads/Daniel_Olaoye_Generative_AI_Portfolio_Presentation.pptx'],
  ['Prompt & Evaluation Workbook', '/downloads/Daniel_Olaoye_Generative_AI_Prompt_Evaluation_Workbook.xlsx'],
  ['AI Response Evaluation Sample', '/downloads/Daniel_Olaoye_AI_Response_Evaluation_Portfolio_Sample.docx'],
  ['PowerPoint Sample', '/downloads/Daniel_Olaoye_AI_PowerPoint_Portfolio_Sample.pptx'],
  ['Excel Sample', '/downloads/Daniel_Olaoye_Excel_Portfolio_Sample.xlsx'],
  ['IT Technical Support Portfolio', '/downloads/Daniel_Olaoye_IT_Technical_Support_Portfolio.docx'],
  ['ICT Instructor Portfolio', '/downloads/Daniel_Olaoye_ICT_Instructor_Portfolio.docx'],
  ['Technical Support Workbook', '/downloads/Daniel_Olaoye_Technical_Support_Workbook.xlsx'],
  ['Microsoft 365 IT Support Presentation', '/downloads/Daniel_Olaoye_Microsoft365_IT_Support_Portfolio.pptx'],
];

const projects = [
  [
    'Generative AI & AI Evaluation',
    'AI Evaluation',
    'Practical workflows for prompt engineering, response comparison, quality scoring and human-in-the-loop review.',
  ],
  [
    'Claude-Assisted MQL5 Expert Advisor',
    'AI-Assisted Coding',
    'Used Claude to help translate strategy requirements into MQL5 logic, review code, troubleshoot and iterate.',
  ],
  [
    'AI-Assisted eBook Development',
    'Generative AI',
    'Structured eBooks and educational resources using AI-assisted outlining, drafting, review and refinement.',
  ],
  [
    'IT Technical Support',
    'IT Support',
    'Troubleshooting demonstrations covering Windows, network connectivity, printers, documentation and escalation.',
  ],
  [
    'ICT Instructor Portfolio',
    'Education & ICT',
    'Lesson planning, digital classroom workflows, assessment and responsible AI integration in education.',
  ],
  [
    'Microsoft Office',
    'PowerPoint & Excel',
    'Professional presentation, spreadsheet, document and data-review samples designed for remote work applications.',
  ],
];

export default function Home() {
  return (
    <>
      <nav>
        <div className="container nav">
          <a className="brand" href="#">
            DANIEL OLAOYE
          </a>

          <div className="navlinks">
            <a href="#ai">AI</a>
            <a href="#projects">Projects</a>
            <a href="#support">IT Support</a>
            <a href="#education">ICT Education</a>
            <a href="#downloads">Downloads</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container">
          <div className="eyebrow">
            Computer Science • Generative AI • IT Support • ICT
          </div>

          <h1>Technology, AI and practical problem-solving.</h1>

          <p>
            Computer Science professional and experienced ICT educator with
            10+ years of technology-enabled education experience, practical
            generative AI workflows, AI-assisted coding, Microsoft Office and
            technical support capabilities.
          </p>

          <div className="actions">
            <a className="btn primary" href="#projects">
              Explore my work
            </a>

            <a className="btn outline" href="#downloads">
              View portfolio files
            </a>
          </div>
        </div>
      </header>

      <section id="ai">
        <div className="container">
          <div className="section-head">
            <h2>Generative AI</h2>
            <p className="muted">
              Practical human-in-the-loop AI workflows using Claude and
              ChatGPT, with emphasis on evaluation, prompting, technical work
              and content creation.
            </p>
          </div>

          <div className="grid">
            {[
              'Prompt engineering & iterative prompting',
              'AI response evaluation',
              'AI-assisted coding & debugging',
              'AI-assisted eBook development',
              'AI in education',
              'Human-in-the-loop quality assurance',
            ].map((x, i) => (
              <div className="card" key={i}>
                <h3>{x}</h3>
                <p className="muted">
                  Structured workflows focused on requirements, output
                  quality, verification and refinement.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <div className="section-head">
            <h2>Selected Projects</h2>
            <p className="muted">
              A practical portfolio across AI, software, IT support,
              education and Microsoft Office.
            </p>
          </div>

          <div className="grid">
            {projects.map(([t, k, d], i) => (
              <div className="card project" key={i}>
                <span className="tag">{k}</span>
                <h3>{t}</h3>
                <p className="muted">{d}</p>

                <div className="links">
                  <a href="#downloads">View related files →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="support">
        <div className="container">
          <div className="section-head">
            <h2>IT & Technical Support</h2>
            <p className="muted">
              A structured support mindset: understand the issue, isolate the
              cause, make controlled changes, verify the result and document
              the resolution.
            </p>
          </div>

          <div className="two">
            <div className="skillbox">
              <h3>Support areas</h3>

              <ul>
                <li>Windows workstation troubleshooting</li>
                <li>Network connectivity</li>
                <li>Printer troubleshooting</li>
                <li>Software/application issues</li>
                <li>Microsoft 365 user support</li>
                <li>Technical documentation</li>
                <li>Incident and ticket workflows</li>
              </ul>
            </div>

            <div className="skillbox">
              <h3>AI-assisted support</h3>

              <ul>
                <li>Draft troubleshooting checklists</li>
                <li>Explain technical errors</li>
                <li>Create knowledge-base drafts</li>
                <li>Improve user-facing instructions</li>
                <li>Verify AI suggestions against evidence</li>
                <li>Maintain human accountability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="education">
        <div className="container">
          <div className="section-head">
            <h2>ICT Instructor</h2>
            <p className="muted">
              Over 10 years of experience teaching Computer Science and ICT
              and translating complex technical concepts into clear,
              practical learning experiences.
            </p>
          </div>

          <div className="grid">
            <div className="card">
              <h3>Computer Science</h3>
              <p className="muted">
                Programming concepts, digital literacy, problem solving and
                technology fundamentals.
              </p>
            </div>

            <div className="card">
              <h3>Digital Learning</h3>
              <p className="muted">
                Smartboard technology, Google Classroom, Zoom and Microsoft
                Office-supported instruction.
              </p>
            </div>

            <div className="card">
              <h3>AI in Education</h3>
              <p className="muted">
                Responsible use of generative AI for lesson planning,
                resources, practice and feedback with teacher verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <h2>Core Skills</h2>
          </div>

          <div className="skillbox">
            {[
              'Generative AI',
              'Claude',
              'ChatGPT',
              'Prompt Engineering',
              'AI Evaluation',
              'MQL5',
              'MetaTrader 5',
              'Microsoft PowerPoint',
              'Microsoft Excel',
              'Microsoft Word',
              'Technical Writing',
              'IT Support',
              'ICT Instruction',
              'Google Classroom',
              'Zoom',
              'Python (developing)',
            ].map((x) => (
              <span className="tag" key={x}>
                {x}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="downloads">
        <div className="container">
          <div className="section-head">
            <h2>Portfolio Downloads</h2>

            <p className="muted">
              Supporting documents and practical samples prepared for
              professional applications.
            </p>
          </div>

          <div className="grid">
            {downloads.map(([name, url]) => (
              <div className="card" key={url}>
                <h3>{name}</h3>

                <p>
                  <a className="links" href={url} download>
                    Download →
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="section-head">
            <h2>Let's connect</h2>

            <p className="muted">
              Available for remote AI evaluation, Generative AI, Microsoft
              Office, technical support, ICT and AI-assisted technical/content
              projects.
            </p>
          </div>

          <div className="actions">
            <a className="btn primary" href="mailto:danoye16@gmail.com">
              Email Daniel
            </a>

            <a
              className="btn outline"
              href="https://www.linkedin.com/in/daniel-olaoye"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          © 2026 Daniel Olaoye. Portfolio materials distinguish professional
          experience from demonstration projects where applicable.
        </div>
      </footer>
    </>
  );
}
