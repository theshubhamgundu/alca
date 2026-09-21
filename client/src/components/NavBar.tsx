import { useNavigate } from 'react-router-dom'

interface NavBarProps { businessName?: string; accent?: string }

export default function NavBar({ businessName, accent = '#a51d25' }: NavBarProps) {
  const navigate = useNavigate()
  return <nav className="site-nav">
      <div className="page-width nav-inner">
        <button className="brand-button" onClick={() => navigate('/')} aria-label="Go to ALCA home"><span className="brand-copy"><strong>ALCA</strong><small>{businessName || 'A family of businesses'}</small></span></button>
        <div className="nav-context" style={{ color: accent }}>{businessName || 'Our businesses'}</div>
        <button className="back-button" onClick={() => navigate('/')}><span aria-hidden="true">←</span> All businesses</button>
      </div>
    </nav>
}
