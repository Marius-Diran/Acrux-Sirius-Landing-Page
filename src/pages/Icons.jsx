
export const Icon = ({ name, size = 22, strokeWidth = 1.8, className = '' }) => {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': true,
  }

  const paths = {
    spark: <><path d="m12 3 1.35 4.1L17.5 8.5l-4.15 1.4L12 14l-1.35-4.1L6.5 8.5l4.15-1.4L12 3Z"/><path d="m5 15 .7 2.1L8 18l-2.3.9L5 21l-.7-2.1L2 18l2.3-.9L5 15Z"/></>,
    chip: <><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/><rect x="10" y="10" width="4" height="4"/></>,
    target: <><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="m14 10 7-7M17 3h4v4"/></>,
    shield: <><path d="M12 3 5 6v5c0 5 3.2 8.3 7 10 3.8-1.7 7-5 7-10V6l-7-3Z"/><path d="m9.2 12 1.8 1.8 3.8-4"/></>,
    gamepad: <><path d="M8 8h8a5 5 0 0 1 4.7 6.7l-1 2.7a2 2 0 0 1-3.3.8L14.2 16H9.8l-2.2 2.2a2 2 0 0 1-3.3-.8l-1-2.7A5 5 0 0 1 8 8Z"/><path d="M8 11v4M6 13h4M16.5 12.5h.01M18.5 14.5h.01"/></>,
    code: <><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14"/></>,
    building: <><path d="M4 21V8l8-4 8 4v13"/><path d="M9 21v-4h6v4M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    trophy: <><path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4Z"/><path d="M7 6H4v2a4 4 0 0 0 4 4M17 6h3v2a4 4 0 0 1-4 4"/></>,
    chart: <><path d="M3 20h18"/><path d="M5 17v-4M10 17V9M15 17v-6M20 17V5"/><path d="m5 10 4-4 4 2 6-5"/></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 11v6M8 8v.01M12 17v-6M16 17v-3.5a2.5 2.5 0 0 0-5 0"/></>,
  }

  return <svg {...common}>{paths[name] || paths.spark}</svg>
}
