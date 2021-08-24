import { ToneMapping } from "three"
import SectionHeading from "./SectionHeading"

function SpecificJob({ title, company, duration, workItems, link }) {
  return (
    <div className="job">
      <p className="job-title">
        <span>{title}</span>
        <span className="highlight">&nbsp;@&nbsp;
          <a href={link} className="highlightI underline" rel="noopener noreferrer" target="_blank">
            {company}
          </a>
        </span>
      </p>
      <p className="range">{duration}</p>
      <div>
        <ul className="task-summary">
          {workItems.map(
            item => (
              <li key={item}>{item}</li>
            )
          )}
        </ul>
      </div>
      <br />
    </div>
  )
}


function Experience() {
  return (
    <div>
      <SpecificJob
        title="Lead Engineer / Architect"
        company="Two Barrels"
        duration="Sep 2019 - Present"
        link="https://www.twobarrels.com/"
        workItems={[
          "Manage a dev team and flagship software product.",
          "Govern cloud infrastructure: ELB, ECS, RDS, VPC, Route53, SQS.",
          "Write modern, performant, maintainable code for internal products.",
          "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis."
        ]}
      />
      <SpecificJob
        title="Lead Engineer"
        company="Kaspien"
        duration="May 2017 - Sep 2019"
        link="https://www.kaspien.com/"
        workItems={[
          "Manage a dev team and flagship software product.",
          "Write modern, performant, maintainable code for a diverse array of internal projects",
          "Manage infrastructure with cloudformation and CLI: EC2, RDS, VPC, Route53, SQS, ECS.",
          "Engage in regular software practices such as planning, mentorship, and code review."
        ]}
      />
      <SpecificJob
        title="Independent Contractor"
        company="Misc"
        duration="June 2017 - Present"
        link="#"
        workItems={[
          "Teach upwards of 60 workshops on basics and best practices of MERN Stack (Nucamp).",
          "Communicate with owners to understand specific system requirements.",
          "Provide advice on project costs, design concepts, or design changes.",
          "Design, build, and maintain features using a wide range of technologies.",
        ]}
      />
    </div>
  )
}

export default function Section() {
  return (
    <section id="employment-section" className="section-3">
      <div className="content-section">
        <SectionHeading prefix="02" label="Where I've Worked" />

        <div className="font-twenty flex-container">
          <Experience />
        </div>
      </div>
    </section>
  )
}


