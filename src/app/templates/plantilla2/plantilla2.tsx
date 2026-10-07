import React, { useEffect, useRef, useState } from 'react'
import './assets/plantilla2.css'

export interface FotoMural {
  src: string
  title: string
  wide?: boolean // true = la tarjeta ocupa dos columnas
}

interface Props {
  fotos?: FotoMural[]
  titulo?: string
  descripcion?: string
}

// Fotos de ejemplo: se usan solo si no pasas la prop "fotos"
const FOTOS_DEMO: FotoMural[] = [
  { src: 'https://picsum.photos/seed/a1/800/600', title: 'Costa al amanecer', wide: true },
  { src: 'https://picsum.photos/seed/a2/600/800', title: 'Mercado' },
  { src: 'https://picsum.photos/seed/a3/600/800', title: 'Callejón' },
  { src: 'https://picsum.photos/seed/a4/600/800', title: 'Cerro azul' },
  { src: 'https://picsum.photos/seed/a5/600/800', title: 'Plaza' },
  { src: 'https://picsum.photos/seed/a6/800/600', title: 'Tarde de lluvia', wide: true },
  { src: 'https://picsum.photos/seed/a7/600/800', title: 'Puerto' },
  { src: 'https://picsum.photos/seed/a8/600/800', title: 'Jardín' },
  { src: 'https://picsum.photos/seed/a9/600/800', title: 'Atardecer' },
  { src: 'https://picsum.photos/seed/b1/600/800', title: 'Noche' },
]

const PROFUNDIDAD = [0, 28, 12, 40, 6] // translateZ de cada tarjeta (px)
const MAX_TILT = 10 // grados máximos de inclinación

const plantilla2 = ({
  fotos = FOTOS_DEMO,
  titulo = 'Mural de fotos',
  descripcion = 'Mueve el mouse sobre el mural para inclinarlo. Pasa el cursor sobre una foto para acercarla y haz clic para ampliarla.',
}: Props) => {
  const stageRef = useRef<HTMLElement>(null)
  const boardRef = useRef<HTMLDivElement>(null)
  const [abierta, setAbierta] = useState<number | null>(null)

  const total = fotos.length

  // Inclinación del mural con el mouse
  const moverMouse = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType === 'touch') return
    if (window.matchMedia('(max-width: 760px)').matches) return
    const stage = stageRef.current
    const board = boardRef.current
    if (!stage || !board) return
    const r = stage.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    board.style.setProperty('--ry', (x * MAX_TILT * 2).toFixed(2))
    board.style.setProperty('--rx', (-y * MAX_TILT * 2).toFixed(2))
  }

  const soltarMouse = () => {
    boardRef.current?.style.setProperty('--rx', '0')
    boardRef.current?.style.setProperty('--ry', '0')
  }

  const ir = (d: number) =>
    setAbierta((i) => (i === null ? i : (i + d + total) % total))

  // Teclado del visor: flechas y Esc
  useEffect(() => {
    if (abierta === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAbierta(null)
      if (e.key === 'ArrowLeft') ir(-1)
      if (e.key === 'ArrowRight') ir(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [abierta, total])

  const actual = abierta !== null ? fotos[abierta] : null

  return (
    <div className="p3-root">
      <header className="p3-header">
        <h1>{titulo}</h1>
        <p>{descripcion}</p>
      </header>

      <main
        className="p3-stage"
        ref={stageRef}
        onPointerMove={moverMouse}
        onPointerLeave={soltarMouse}
      >
        <div className="p3-board" ref={boardRef}>
          {fotos.map((f, i) => (
            <button
              key={`${f.src}-${i}`}
              className={`p3-tile${f.wide ? ' p3-wide' : ''}`}
              style={{ '--z': PROFUNDIDAD[i % PROFUNDIDAD.length] } as React.CSSProperties}
              onClick={() => setAbierta(i)}
            >
              <img
                src={f.src}
                alt={f.title}
                loading="lazy"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
              <span>{f.title}</span>
            </button>
          ))}
        </div>
      </main>

      {actual && (
        <div
          className="p3-lb"
          role="dialog"
          aria-modal="true"
          aria-label="Foto ampliada"
          onClick={(e) => e.target === e.currentTarget && setAbierta(null)}
        >
          <button className="p3-lb-close" onClick={() => setAbierta(null)}>
            Cerrar
          </button>
          <button className="p3-lb-prev" aria-label="Foto anterior" onClick={() => ir(-1)}>
            Anterior
          </button>
          <button className="p3-lb-next" aria-label="Foto siguiente" onClick={() => ir(1)}>
            Siguiente
          </button>
          <figure>
            <img src={actual.src} alt={actual.title} />
            <figcaption>
              {actual.title} ({(abierta as number) + 1}/{total})
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  )
}

export default plantilla2
