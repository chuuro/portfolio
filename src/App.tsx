import { CaseStudyItem, PhotoSlot, Section, SideNav, Tags } from './components'
import {
  careers,
  caseStudies,
  competencies,
  education,
  intro,
  keywords,
  profile,
  skills,
  stats,
  workStyle,
} from './data'

const NAV = [
  { id: 'intro', label: '소개' },
  { id: 'cases', label: '대표 프로젝트' },
  { id: 'career', label: '경력' },
  { id: 'competency', label: '역량' },
  { id: 'skill', label: '기술' },
  { id: 'work', label: '일하는 방식' },
  { id: 'education', label: '학력 · 자격' },
]

export default function App() {
  return (
    <>
      <SideNav items={NAV} />
      <main className="page">
        <header className="hero">
          <PhotoSlot photo={profile.photo} className="hero-photo" label="프로필 사진" />
          <div className="hero-text">
            <h1>{profile.name}</h1>
            <p className="hero-title">{profile.title}</p>
            <p className="hero-tagline">{profile.tagline}</p>
            <ul className="contact">
              <li>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  github.com/chuuro
                </a>
              </li>
              <li>
                <a href={profile.resumePdf} target="_blank" rel="noreferrer">
                  이력서 PDF
                </a>
              </li>
            </ul>
          </div>
        </header>

        <ul className="stats">
          {stats.map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>

        <Section id="intro" title="소개">
          <div className="intro">
            <div className="intro-text">
              {intro.map((p) => (
                <p key={p.slice(0, 12)}>{p}</p>
              ))}
            </div>
          </div>
          <ul className="keywords">
            {keywords.map((k) => (
              <li key={k.title}>
                <h3>{k.title}</h3>
                <p>{k.body}</p>
                <Tags items={k.tags} />
              </li>
            ))}
          </ul>
        </Section>

        <Section id="cases" title="대표 프로젝트">
          <p className="section-lead">경력 중 문제와 판단 과정을 가장 잘 설명할 수 있는 네 가지를 골랐습니다.</p>
          {caseStudies.map((c) => (
            <CaseStudyItem key={c.id} c={c} />
          ))}
        </Section>

        <Section id="career" title="경력">
          {careers.map((c) => (
            <div key={c.company} className="career">
              <div className="career-head">
                <h3>
                  {c.company} <span className="career-position">{c.position}</span>
                </h3>
                <p className="career-period">
                  {c.period} <span className="career-duration">{c.duration}</span>
                </p>
              </div>
              <div className="career-main">
                {c.note && <p className="career-note">{c.note}</p>}
                {c.projects.map((p) => (
                  <div key={p.name} className="project">
                    <p className="project-head">
                      <strong>{p.name}</strong>
                      <span>{p.period}</span>
                    </p>
                    <p className="project-desc">{p.desc}</p>
                    {p.image && <img className="project-image" src={p.image.src} alt={p.image.alt} />}
                    <ul className="project-points">
                      {p.points.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                    <div className="project-foot">
                      <Tags items={p.tech} />
                      {p.caseId && (
                        <a className="case-link" href={`#${p.caseId}`}>
                          자세히 보기
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Section>

        <Section id="competency" title="역량">
          <div className="competency">
            {competencies.map((g) => (
              <div key={g.title}>
                <h3>{g.title}</h3>
                <ul>
                  {g.items.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="skill" title="기술">
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>
                  <Tags items={s.items} />
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="work" title="일하는 방식">
          <div className="work">
            {workStyle.map((w) => (
              <div key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" title="학력 · 자격">
          <ul className="education">
            {education.map((e) => (
              <li key={e.what}>
                <span className="edu-when">{e.when}</span>
                <span>
                  {e.what}
                  {e.where && <span className="edu-where"> · {e.where}</span>}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <footer className="footer">
          <p>
            {profile.name} · <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <p>마지막 업데이트 {profile.updated}</p>
        </footer>
      </main>
    </>
  )
}
