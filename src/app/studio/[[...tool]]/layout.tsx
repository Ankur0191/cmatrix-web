// src/app/studio/[[...tool]]/layout.tsx
import '../../globals.css'
import { metadata, viewport } from './metadata'

export { metadata, viewport }

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
