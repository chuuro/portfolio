import { useEffect, useState, type ReactNode } from 'react'
import type { CaseStudy, Photo } from './data'

export function PhotoSlot({ photo, className }: { photo: Photo; className?: string; label?: string }) {
  if (!photo.src) return null
  return <img className={className} src={photo.src} alt={photo.alt} loading="lazy" />
}

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      <div className="section-body">{children}</div>
    </section>
  )
}

export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  )
}

export function CasePhotos({ photos }: { photos: Photo[] }) {
  if (!photos.length) return null
  const beside = photos.some((p) => p.fit === 'portrait' && p.layout !== 'below')
  return (
    <div className={beside ? 'case-photos split' : 'case-photos'}>
      {photos.map((p) =>
        p.fit === 'portrait' && beside ? (
          <div className="portrait-frame" key={p.src}>
            <img src={p.src} alt={p.alt} />
          </div>
        ) : (
          <img key={p.src} className={p.fit === 'portrait' ? 'portrait' : p.fit === 'natural' ? 'natural' : 'crop'} src={p.src} alt={p.alt} />
        ),
      )}
    </div>
  )
}

export function CaseStudyItem({ c }: { c: CaseStudy }) {
  return (
    <article id={c.id} className="case">
      <CasePhotos photos={c.images} />
      <header className="case-head">
        <p className="case-meta">
          {c.company} <span className="dot">·</span> {c.period}
        </p>
        <h3>{c.title}</h3>
        <p className="case-summary">{c.summary}</p>
        <p className="case-role">
          <strong>역할</strong> {c.role}
        </p>
      </header>

      <ol className="flow" aria-label="처리 흐름">
        {c.flow.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ol>

      <dl className="case-body">
        <dt>문제</dt>
        <dd>
          <ul>{c.problem.map((x) => <li key={x}>{x}</li>)}</ul>
        </dd>
        <dt>검토한 방법</dt>
        <dd>
          <ul>{c.options.map((x) => <li key={x}>{x}</li>)}</ul>
        </dd>
        <dt>한 일</dt>
        <dd>
          <ul>{c.action.map((x) => <li key={x}>{x}</li>)}</ul>
        </dd>
        <dt>결과</dt>
        <dd>
          <ul className="result">{c.result.map((x) => <li key={x}>{x}</li>)}</ul>
        </dd>
      </dl>
      <Tags items={c.tech} />
    </article>
  )
}

export function SideNav({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )
    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [items])

  return (
    <nav className="side-nav" aria-label="섹션 이동">
      <ul>
        {items.map(({ id, label }) => (
          <li key={id}>
            <a href={`#${id}`} className={active === id ? 'is-active' : undefined}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
