'use client';

// ── Resume data ─────────────────────────────────────────────────────────────

const resume = {
  name: "Jocelyn Boites",
  title: "Insurance & Compliance Analyst",
  headline:
    "Turns messy processes into reliable systems — professional, upbeat, and results-driven.",
  contact: {
    email: "jocelyn_boites@yahoo.com",
    phone: "(562) 506-7166",
    location: "Corona, CA",
    linkedin: "linkedin.com/in/jocelyn-boites",
    linkedinUrl: "https://linkedin.com/in/jocelyn-boites",
  },
  availability: "Available May 2026",
  summary:
    "Results-driven Insurance & Compliance Analyst with extensive experience in regulatory compliance, data analysis, insurance claims management, and negotiation — driving operational excellence across insurance and finance. Detail-oriented with a distinguished track record: committed to minimizing claims, mitigating risk, and fostering stakeholder trust while accelerating business growth.",
  seeking: [
    "Insurance operations",
    "Regulatory compliance & governance",
    "Claims management",
    "Financial services operations",
  ],
  accomplishments: [
    {
      metric: "30%",
      text: "faster claims turnaround using industry-specific tools to streamline processing.",
    },
    {
      metric: "95%",
      text: "claimant satisfaction achieved by negotiating settlements and resolving complex disputes.",
    },
    {
      metric: "Perfect",
      text: "compliance and governance scores on all internal audits from 2016 to 2023.",
    },
    {
      metric: "45%",
      text: "reduction in contract cancellations through complex account and finance audits.",
    },
    {
      metric: "27%",
      text: "drop in branch fraud incidents by identifying critical discrepancies in financial procedures.",
    },
    {
      metric: "98%",
      text: "incident-free record for data access controls while training teams on privacy best practices.",
    },
    {
      metric: "35%",
      text: "fewer escalations through timely, professional client communication.",
    },
    {
      metric: "20%",
      text: "above performance targets by effectively communicating with policyholders.",
    },
    {
      metric: "98%",
      text: "accuracy rate in settlement determinations via strong analytical assessment of claims validity.",
    },
    {
      metric: "25%",
      text: "increase in resolutions by demonstrating adaptability in negotiations.",
    },
  ],
  experience: [
    {
      title: "Finance & Insurance Transaction Coordinator",
      company: "Trnsact",
      location: "Irvine, CA (Remote)",
      start: "Feb 2022",
      end: "May 2023",
      highlights: [
        "Managed key accounts of multiple equipment dealers to streamline commercial SaaS lending processes within a fast-paced FinTech environment.",
        "Oversaw software implementation processes: business risk assessment, application processing, proposal delivery, contract negotiation, and financial analysis/auditing.",
        "Liaised with lender business representatives and attorneys to negotiate contracts and special assignments.",
        "Partnered with top-tier leadership — CEO, CFO, Head of Production, Development Engineers, and Sales.",
        "Conducted comprehensive audits of new accounts to ensure accuracy and completeness.",
        "Reduced contract cancellations by up to 45% through complex account and finance audits.",
        "Maintained a 98% incident-free record for data access controls.",
        "Negotiated complex claims and entry-level redlining with legal department at 100% accuracy.",
        "Demonstrated adaptability in negotiations, resulting in a 25% increase in resolutions.",
        "Trained team members on data privacy best practices.",
      ],
    },
    {
      title: "Financial Service Representative II",
      company: "San Diego County Credit Union",
      location: "Yorba Linda, CA",
      start: "Mar 2020",
      end: "Aug 2021",
      highlights: [
        "Delivered comprehensive guidance on account opening procedures in collaboration with the Fraud Department.",
        "Conducted monthly and quarterly audits of internal processes to ensure State/Federal regulatory adherence.",
        "Drafted SARs in compliance with AML/BSA regulations.",
        "Consistently met or exceeded goals for reducing profit losses, fraud, and documentation errors by 25%.",
        "Reduced branch fraud incidents by up to 27% by identifying and resolving critical discrepancies.",
        "Exceeded data security benchmarks — 100% error-free record during entire tenure.",
      ],
    },
    {
      title: "Operations Processor / Assistant Manager",
      company: "Wells Fargo Dealer Services",
      location: "Insurance & Origination Support",
      start: "Jun 2016",
      end: "Oct 2018",
      highlights: [
        "Oversaw consumer auto title operations and cultivated relationships with third-party vendors, customers, attorneys, and DMVs.",
        "Collaborated with internal teams — 15% reduction in claims disputes, 88% insurance policy compliance rate.",
        "Processed and resolved high-volume insurance and title claims, exceeding performance targets by 20%.",
        "Decreased escalations by up to 35% through timely and professional client responses.",
        "Negotiated settlements and resolved complex claim disputes, achieving 95% claimant satisfaction.",
        "Developed a comprehensive compliance framework adhering to Federal and State regulations.",
        "Streamlined claims processing, reducing turnaround times by 30%.",
        "Achieved 98% accuracy rate in determining settlements through strong analytical assessment.",
      ],
    },
    {
      title: "Personal Banker",
      company: "Wells Fargo Bank NA",
      location: "Fullerton, CA",
      start: "Aug 2013",
      end: "Jun 2016",
      highlights: [
        "Managed business and personal accounts to ensure accuracy and completeness of information.",
        "Oversaw cash transaction processes including mortgages, liens, and general maintenance.",
        "Facilitated reconstruction of internal quotas to streamline overall branch operations.",
        "Outperformed peer bankers by 50% and achieved highest recovery of fake IDs district-wide in 2014.",
        "Collaborated with IT, Legal, and Compliance departments on multiple cross-functional projects.",
      ],
    },
  ],
  domainSkills: [
    "Regulatory Compliance & Governance",
    "Ethics & Case Management",
    "Policy Development & Implementation",
    "Vendor Relationships Management",
    "Contract Negotiation & Legal",
    "Legal Compliance & Contract Review",
    "Risk Assessment & Mitigation",
    "Insurance & Originations",
    "Internal Investigations & Auditing",
    "AML / BSA / UDAAP",
    "Fair Claims Practices Act",
    "Network Security & Compliance",
    "Cross-functional Collaboration",
    "Team Training & Leadership",
    "Complex Problem Resolution",
    "Documentation & Reporting",
    "Finance & Credit Transaction",
    "Project Planning & Execution",
  ],
  toolSkills: [
    "Microsoft Office Suite",
    "CRM",
    "HubSpot",
    "Jira",
    "SharePoint",
    "Confluence",
    "Zoom",
    "Slack",
    "SQL",
    "Symitar",
    "LoansPQ",
    "SVP",
    "KBB",
    "ITC",
    "LexisNexis",
    "OFAC",
    "Oracle",
    "Web-based Databases",
  ],
  education: [
    {
      degree: "Bachelor of Arts in Business Management",
      institution: "California State University, Fullerton",
      detail: "Units toward completion — expected May 2026",
    },
    {
      degree: "Associate of Arts",
      institution: "Fullerton College",
      detail:
        "Transfer Business Administration · Economics · Social Science · Science & Mathematics · 2019",
    },
  ],
  languages: [
    { language: "English", proficiency: "Fluent" },
    { language: "Spanish", proficiency: "Proficient (Level 3)" },
  ],
};

// ── Component helpers ────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label mb-3">{children}</p>;
}

function SectionDivider() {
  return (
    <div
      style={{ borderColor: "var(--border)" }}
      className="border-t my-16"
    />
  );
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div style={{ background: "var(--cream)", color: "var(--text-primary)" }}>
      {/* ── HERO ── */}
      <header
        className="noise-overlay relative overflow-hidden"
        style={{ background: "var(--navy)" }}
        aria-label="Introduction"
      >
        {/* Decorative geometric accent */}
        <div
          className="absolute top-0 right-0 opacity-10"
          aria-hidden="true"
          style={{
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, var(--gold) 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 opacity-5"
          aria-hidden="true"
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, var(--gold-light) 0%, transparent 70%)",
            transform: "translate(-40%, 40%)",
          }}
        />

        <div
          className="relative z-10 mx-auto max-w-5xl px-6 py-20 md:py-28"
          style={{ color: "var(--cream)" }}
        >
          {/* Top bar */}
          <div className="animate-fade-in flex flex-wrap items-center gap-x-6 gap-y-1 mb-10 text-sm"
            style={{ color: "var(--gold-light)", opacity: 0 }}>
            <span style={{ color: "var(--gold)" }}>●</span>
            <span>{resume.availability}</span>
            <span style={{ color: "var(--navy-light)" }}>|</span>
            <span>{resume.contact.location}</span>
          </div>

          {/* Name */}
          <h1
            className="animate-fade-up delay-100"
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--cream)",
              opacity: 0,
            }}
          >
            {resume.name}
          </h1>

          {/* Gold rule */}
          <div
            className="animate-fade-in delay-300 my-5"
            style={{ opacity: 0 }}
            aria-hidden="true"
          >
            <span className="rule-gold" />
          </div>

          {/* Title */}
          <p
            className="animate-fade-up delay-200"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--gold)",
              opacity: 0,
            }}
          >
            {resume.title}
          </p>

          {/* Headline */}
          <p
            className="animate-fade-up delay-300 mt-5 max-w-2xl"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
              fontStyle: "italic",
              lineHeight: 1.65,
              color: "rgba(248,246,241,0.75)",
              opacity: 0,
            }}
          >
            &ldquo;{resume.headline}&rdquo;
          </p>

          {/* Contact bar */}
          <div
            className="animate-fade-up delay-400 mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm"
            style={{ color: "rgba(248,246,241,0.7)", opacity: 0 }}
          >
            <a
              href={`mailto:${resume.contact.email}`}
              className="flex items-center gap-2 transition-colors"
              style={{ color: "rgba(248,246,241,0.7)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--gold-light)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(248,246,241,0.7)")
              }
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              {resume.contact.email}
            </a>
            <a
              href={`tel:${resume.contact.phone.replace(/\D/g, "")}`}
              className="flex items-center gap-2 transition-colors"
              style={{ color: "rgba(248,246,241,0.7)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--gold-light)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(248,246,241,0.7)")
              }
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {resume.contact.phone}
            </a>
            <a
              href={resume.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors"
              style={{ color: "rgba(248,246,241,0.7)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--gold-light)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(248,246,241,0.7)")
              }
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              {resume.contact.linkedin}
            </a>
          </div>
        </div>
      </header>

      {/* ── MAIN CONTENT ── */}
      <main className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        {/* ── ABOUT ── */}
        <section aria-labelledby="about-heading">
          <SectionLabel>Who I Am</SectionLabel>
          <h2
            id="about-heading"
            className="animate-fade-up"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "var(--navy)",
              opacity: 0,
            }}
          >
            Analyst. Auditor. Problem Solver.
          </h2>
          <p
            className="animate-fade-up delay-200 mt-5 max-w-3xl"
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "var(--text-secondary)",
              opacity: 0,
            }}
          >
            {resume.summary}
          </p>

          {/* Seeking roles */}
          <div className="animate-fade-up delay-300 mt-8" style={{ opacity: 0 }}>
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "12px",
              }}
            >
              Open to
            </p>
            <div className="flex flex-wrap gap-3">
              {resume.seeking.map((role) => (
                <span
                  key={role}
                  style={{
                    display: "inline-block",
                    padding: "6px 16px",
                    border: "1.5px solid var(--gold)",
                    borderRadius: "2px",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    color: "var(--navy)",
                    letterSpacing: "0.01em",
                  }}
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ── PHOTOS ── */}
        <section aria-labelledby="photos-heading">
          <SectionLabel>A Little More About Me</SectionLabel>
          <h2
            id="photos-heading"
            className="animate-fade-up"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "var(--navy)",
              opacity: 0,
            }}
          >
            The Person Behind the Resume
          </h2>
          <p
            className="animate-fade-up delay-100 mt-4 mb-8 max-w-2xl"
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "var(--text-secondary)",
              opacity: 0,
            }}
          >
            Detail-oriented at work, warm and driven everywhere else. Here&apos;s a
            glimpse of who I am beyond the spreadsheets and audit reports.
          </p>
          {/* Photo grid — swap src values with real images */}
          <div className="animate-fade-up delay-200 grid grid-cols-2 md:grid-cols-3 gap-3" style={{ opacity: 0 }}>
            {[
              { src: "/photos/headshot.jpg", alt: "Jocelyn outdoors — professional headshot" },
              { src: "/photos/scholarship.jpg", alt: "Jocelyn receiving the CSUF Mercury Insurance Scholarship" },
              { src: "/photos/smile.jpg", alt: "Jocelyn smiling — candid portrait" },
              { src: "/photos/disneyland.jpg", alt: "Jocelyn at Disneyland Star Wars ride" },
              { src: "/photos/eagles.jpg", alt: "Jocelyn celebrating in Eagles jersey" },
            ].map((photo) => (
              <div
                key={photo.src}
                style={{
                  aspectRatio: "4/3",
                  overflow: "hidden",
                  borderRadius: "2px",
                  border: "1px solid var(--border)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* ── QUICK FACTS: WHEN / WHERE / WHY ── */}
        <section aria-labelledby="quick-facts-heading">
          <SectionLabel>Quick Facts</SectionLabel>
          <h2
            id="quick-facts-heading"
            className="animate-fade-up"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "var(--navy)",
              opacity: 0,
            }}
          >
            What You Need to Know
          </h2>

          <div className="mt-8 grid md:grid-cols-3 gap-px" style={{ background: "var(--border)" }}>
            {/* When */}
            <div
              className="animate-fade-up delay-100"
              style={{
                background: "var(--cream)",
                padding: "28px 24px",
                opacity: 0,
              }}
            >
              <div style={{ marginBottom: "12px" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--gold)" }} aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--navy)", marginBottom: "8px" }}>
                When Can I Start?
              </h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>
                Available from <strong>May 2026</strong> — completing my BA at CSUF and ready to bring fresh expertise to the right team.
              </p>
            </div>

            {/* Where */}
            <div
              className="animate-fade-up delay-200"
              style={{
                background: "var(--cream)",
                padding: "28px 24px",
                opacity: 0,
              }}
            >
              <div style={{ marginBottom: "12px" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--gold)" }} aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--navy)", marginBottom: "8px" }}>
                Where Am I Located?
              </h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>
                Based in <strong>Corona, CA</strong>. Open to <strong>remote</strong> roles and willing to
                <strong> relocate</strong> for the right opportunity.
              </p>
            </div>

            {/* Why */}
            <div
              className="animate-fade-up delay-300"
              style={{
                background: "var(--cream)",
                padding: "28px 24px",
                opacity: 0,
              }}
            >
              <div style={{ marginBottom: "12px" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--gold)" }} aria-hidden="true">
                  <path d="M9 12h6m-3-3v6" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--navy)", marginBottom: "8px" }}>
                Why This Page?
              </h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>
                A single, scannable page helps hiring managers quickly see what I do, the results
                I&apos;ve delivered, and how to reach me — reducing friction and accelerating outreach.
                No PDF attachments, no guesswork.
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ── KEY ACCOMPLISHMENTS ── */}
        <section aria-labelledby="accomplishments-heading">
          <SectionLabel>Impact by the Numbers</SectionLabel>
          <h2
            id="accomplishments-heading"
            className="animate-fade-up"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "var(--navy)",
              opacity: 0,
            }}
          >
            Key Accomplishments
          </h2>

          <div className="mt-8 grid gap-px" style={{ background: "var(--border)" }}>
            {resume.accomplishments.map((item, i) => (
              <article
                key={i}
                className={`animate-fade-up delay-${Math.min((i + 1) * 100, 800)}`}
                style={{
                  background: "var(--cream)",
                  padding: "20px 24px",
                  display: "grid",
                  gridTemplateColumns: "100px 1fr",
                  gap: "16px",
                  alignItems: "center",
                  opacity: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "clamp(1.4rem, 3vw, 1.8rem)",
                    fontWeight: 800,
                    color: "var(--gold)",
                    lineHeight: 1,
                  }}
                >
                  {item.metric}
                </span>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    color: "var(--text-secondary)",
                  }}
                >
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* ── EXPERIENCE ── */}
        <section aria-labelledby="experience-heading">
          <SectionLabel>Career Trajectory</SectionLabel>
          <h2
            id="experience-heading"
            className="animate-fade-up"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "var(--navy)",
              opacity: 0,
            }}
          >
            Experience
          </h2>

          <div className="mt-10 flex flex-col gap-12">
            {resume.experience.map((job, i) => (
              <article
                key={i}
                className={`animate-fade-up delay-${Math.min((i + 1) * 100, 500)}`}
                style={{ opacity: 0 }}
              >
                {/* Job header */}
                <div
                  className="flex flex-wrap items-start gap-x-6 gap-y-1 pb-4"
                  style={{ borderBottom: "2px solid var(--navy)" }}
                >
                  <div className="flex-1 min-w-0">
                    <h3
                      style={{
                        fontFamily: "var(--font-playfair), serif",
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: "var(--navy)",
                        lineHeight: 1.3,
                      }}
                    >
                      {job.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "var(--gold)",
                        marginTop: "2px",
                      }}
                    >
                      {job.company}
                      <span
                        style={{
                          fontWeight: 400,
                          color: "var(--text-muted)",
                          marginLeft: "8px",
                        }}
                      >
                        — {job.location}
                      </span>
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      color: "var(--text-muted)",
                      letterSpacing: "0.05em",
                      whiteSpace: "nowrap",
                      paddingTop: "3px",
                    }}
                  >
                    {job.start} – {job.end}
                  </span>
                </div>

                {/* Highlights */}
                <ul
                  className="mt-4 flex flex-col gap-2"
                  style={{ paddingLeft: 0, listStyle: "none" }}
                >
                  {job.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex gap-3"
                      style={{
                        fontSize: "0.9rem",
                        lineHeight: 1.7,
                        color: "var(--text-secondary)",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--gold)",
                          flexShrink: 0,
                          marginTop: "6px",
                          fontSize: "0.5rem",
                        }}
                      >
                        ◆
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* ── SKILLS ── */}
        <section aria-labelledby="skills-heading">
          <SectionLabel>Capabilities</SectionLabel>
          <h2
            id="skills-heading"
            className="animate-fade-up"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "var(--navy)",
              opacity: 0,
            }}
          >
            Skills & Tools
          </h2>

          <div className="mt-8 grid md:grid-cols-2 gap-10">
            {/* Domain expertise */}
            <div className="animate-fade-up delay-100" style={{ opacity: 0 }}>
              <h3
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "14px",
                }}
              >
                Domain Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {resume.domainSkills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      display: "inline-block",
                      padding: "5px 13px",
                      background: "var(--navy)",
                      color: "var(--cream)",
                      borderRadius: "2px",
                      fontSize: "0.78rem",
                      fontWeight: 400,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Tech */}
            <div className="animate-fade-up delay-200" style={{ opacity: 0 }}>
              <h3
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "14px",
                }}
              >
                Tools & Technology
              </h3>
              <div className="flex flex-wrap gap-2">
                {resume.toolSkills.map((tool) => (
                  <span
                    key={tool}
                    style={{
                      display: "inline-block",
                      padding: "5px 13px",
                      background: "transparent",
                      border: "1px solid var(--border)",
                      color: "var(--text-secondary)",
                      borderRadius: "2px",
                      fontSize: "0.78rem",
                      fontWeight: 400,
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ── EDUCATION ── */}
        <section aria-labelledby="education-heading">
          <SectionLabel>Academic Background</SectionLabel>
          <h2
            id="education-heading"
            className="animate-fade-up"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "var(--navy)",
              opacity: 0,
            }}
          >
            Education
          </h2>

          <div className="mt-8 flex flex-col gap-6">
            {resume.education.map((edu, i) => (
              <article
                key={i}
                className={`animate-fade-up delay-${(i + 1) * 100}`}
                style={{
                  padding: "20px 24px",
                  background: "var(--cream-dark)",
                  borderLeft: "3px solid var(--gold)",
                  opacity: 0,
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "var(--navy)",
                  }}
                >
                  {edu.degree}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "var(--gold)",
                    marginTop: "2px",
                  }}
                >
                  {edu.institution}
                </p>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                    marginTop: "4px",
                  }}
                >
                  {edu.detail}
                </p>
              </article>
            ))}
          </div>

          {/* Languages */}
          <div className="animate-fade-up delay-300 mt-8" style={{ opacity: 0 }}>
            <h3
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "12px",
              }}
            >
              Languages
            </h3>
            <div className="flex gap-4">
              {resume.languages.map((lang) => (
                <div key={lang.language} className="flex items-center gap-2">
                  <span
                    style={{
                      fontWeight: 600,
                      color: "var(--navy)",
                      fontSize: "0.9rem",
                    }}
                  >
                    {lang.language}
                  </span>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    — {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ── CTA ── */}
        <section aria-labelledby="cta-heading">
          <div
            className="animate-fade-up"
            style={{
              padding: "48px 40px",
              background: "var(--navy)",
              position: "relative",
              overflow: "hidden",
              opacity: 0,
            }}
          >
            {/* Decorative accent */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "-60px",
                right: "-60px",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, var(--gold) 0%, transparent 70%)",
                opacity: 0.12,
              }}
            />

            <SectionLabel>
              <span style={{ color: "var(--gold-light)" }}>
                Let&apos;s Connect
              </span>
            </SectionLabel>
            <h2
              id="cta-heading"
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
                fontWeight: 700,
                color: "var(--cream)",
                marginBottom: "12px",
                marginTop: "8px",
              }}
            >
              Ready to talk?
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: "rgba(248,246,241,0.65)",
                maxWidth: "520px",
                marginBottom: "28px",
              }}
            >
              Reach out for a quick 15–20 minute conversation — I&apos;ll bring
              specific examples of audits, claims outcomes, and process
              improvements.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${resume.contact.email}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 28px",
                  background: "var(--gold)",
                  color: "var(--navy)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  borderRadius: "2px",
                  letterSpacing: "0.02em",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "var(--gold-light)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "var(--gold)")
                }
              >
                Email Jocelyn
              </a>
              <a
                href={`tel:${resume.contact.phone.replace(/\D/g, "")}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 28px",
                  background: "transparent",
                  border: "1.5px solid rgba(248,246,241,0.3)",
                  color: "var(--cream)",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  borderRadius: "2px",
                  transition: "border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold)";
                  e.currentTarget.style.color = "var(--gold-light)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(248,246,241,0.3)";
                  e.currentTarget.style.color = "var(--cream)";
                }}
              >
                {resume.contact.phone}
              </a>
              <a
                href={resume.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 28px",
                  background: "transparent",
                  border: "1.5px solid rgba(248,246,241,0.3)",
                  color: "var(--cream)",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  borderRadius: "2px",
                  transition: "border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold)";
                  e.currentTarget.style.color = "var(--gold-light)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(248,246,241,0.3)";
                  e.currentTarget.style.color = "var(--cream)";
                }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "0.78rem",
            color: "var(--text-muted)",
            letterSpacing: "0.03em",
          }}
        >
          © {resume.name} · {resume.contact.location} ·{" "}
          <a
            href={`mailto:${resume.contact.email}`}
            style={{ color: "var(--gold)", textDecoration: "none" }}
          >
            {resume.contact.email}
          </a>{" "}
          ·{" "}
          <a
            href={resume.contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--gold)", textDecoration: "none" }}
          >
            LinkedIn
          </a>
        </p>
      </footer>
    </div>
  );
}
