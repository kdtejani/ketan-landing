import { Mail, Phone, Link as Linkedin, Github, Code, Database, Server, BarChart3, TrendingUp, Shield, Cpu, Network, Zap } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Ketan Tejani
            </h1>
            <p className="text-xl md:text-2xl text-blue-400 mb-4 font-semibold">
              Senior Technology Officer
            </p>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">
              Leveraging technology resources to support business priorities and achieve extraordinary goals that impact bottom-line success
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:KTejani@gmail.com" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                <Mail size={20} />
                Get in Touch
              </a>
              <a href="https://www.linkedin.com/in/ktejani" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-colors">
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            Builder and leader of innovative strategies and solutions-driven teams, delivering leading-edge technology systems that drive business performance and efficiency for trading and operations systems. I achieve competitive edge and substantial cost savings through rapid and expert implementation of advanced technologies.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed">
            Known as a creative problem solver and "go-to" person for diverse business challenges, I lead lean, focused organizations to deliver outstanding results with limited resources.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard icon={<Code />} title="Programming Languages" skills={["Python", "C#/.NET", "Java", "C", "C++", "SQL", "Perl", "K-shell"]} />
          <SkillCard icon={<Database />} title="Databases & BI" skills={["Oracle", "SQL Server", "Sybase", "MySQL", "SSIS", "SSAS", "QlikView", "Informatica"]} />
          <SkillCard icon={<Server />} title="Systems & Infrastructure" skills={["Unix-Sun Solaris/Linux", "zmq", "Hosting Solutions", "Systems Administration", "Disaster Recovery"]} />
          <SkillCard icon={<BarChart3 />} title="Financial Systems" skills={["Bloomberg Terminal/API", "SWIFT", "FIX Protocol", "QRM", "Trading Systems", "Market Data Feeds"]} />
          <SkillCard icon={<TrendingUp />} title="Project Management" skills={["Agile Methodology", "Risk Management", "Change Management", "Crisis Management", "Strategic Planning"]} />
          <SkillCard icon={<Zap />} title="Automation & RPA" skills={["Xceptor", "GRX", "UiPATH", "Microservices", "Kafka", "Process Automation"]} />
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Professional Experience</h2>
        <div className="space-y-8">
          <ExperienceCard
            company="Rudra Management LLC"
            role="Partner"
            period="01/2026 - Present"
            location="New York, NY"
            description={[
              "Design, build, and back test proprietary trading strategies across equity, options, and futures markets",
              "Manage personal trading book end-to-end across multiple asset classes and time horizons",
              "Advise prospective clients on investment strategy and portfolio positioning"
            ]}
          />
          <ExperienceCard
            company="Morgan Stanley"
            role="Project Manager/Business Analyst"
            period="09/2024 - 12/2025"
            location="New York, NY"
            description={[
              "Planned and managed technology enhancements to existing and new systems",
              "Worked closely with Operations to define user stories using Agile methodology",
              "Retirement Technology focus on system improvements"
            ]}
          />
          <ExperienceCard
            company="BNY Mellon"
            role="Application / Transformation Manager"
            period="07/2022 - 03/2024"
            location="New York, NY"
            description={[
              "Managed and designed automation process and trained staff of 15",
              "Automated investment manager statement reconciliation using No-Code/Low-Code solutions",
              "Implemented micro service solution for Kafka message bus search",
              "Streamlined performance fee calculation process"
            ]}
          />
          <ExperienceCard
            company="SCT Capital Management"
            role="Chief Operating Officer"
            period="03/2018 - 07/2022"
            location="New York, NY"
            description={[
              "Managed relationships with brokers, trading technology partners, and fund administrators",
              "Oversaw strategic planning for trading and operations infrastructure",
              "Built Market Data feed and OMS using FIX protocol",
              "Managed Futures Trading and reconciliations with model automation"
            ]}
          />
          <ExperienceCard
            company="JPMorgan Chase"
            role="Vice President, Lead Technical Developer"
            period="05/2012 - 03/2018"
            location="New York, NY"
            description={[
              "Directed CIO Office - ALMOND project managing 6 developers",
              "Reduced 2-week risk evaluation cycle to less than 48 hours",
              "Implemented ETL using SSIS and applied CUBE using SSAS",
              "Created reports using QlikView for end users"
            ]}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 md:p-12 border border-slate-700 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Open to discussions on technology strategy, digital transformation, and fostering a tech-driven culture.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <ContactItem icon={<Mail />} label="Email" value="KTejani@gmail.com" href="mailto:KTejani@gmail.com" />
            <ContactItem icon={<Phone />} label="Phone" value="201.233.0726" href="tel:2012330726" />
            <ContactItem icon={<Linkedin />} label="LinkedIn" value="linkedin.com/in/ktejani" href="https://www.linkedin.com/in/ktejani" target="_blank" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
          <p>© 2026 Ketan Tejani. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

function SkillCard({ icon, title, skills }: { icon: React.ReactNode, title: string, skills: string[] }) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-colors">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-blue-400">{icon}</div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ company, role, period, location, description }: { company: string, role: string, period: string, location: string, description: string[] }) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-slate-700 hover:border-blue-500/50 transition-colors">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white">{company}</h3>
          <p className="text-blue-400 font-semibold">{role}</p>
        </div>
        <div className="text-slate-400 text-sm mt-2 md:mt-0">
          <p>{period}</p>
          <p>{location}</p>
        </div>
      </div>
      <ul className="space-y-2">
        {description.map((item) => (
          <li key={item} className="text-slate-300 flex items-start gap-2">
            <span className="text-blue-400 mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactItem({ icon, label, value, href, target }: { icon: React.ReactNode, label: string, value: string, href: string, target?: string }) {
  return (
    <a href={href} target={target || "_self"} rel={target ? "noopener noreferrer" : ""} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
      <div className="text-blue-400">{icon}</div>
      <div className="text-left">
        <p className="text-sm text-slate-400">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </a>
  );
}