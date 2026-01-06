import { Metadata } from 'next'
import HomeView from '../views/home'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Front End Developer creating exceptional digital experiences',
}

export default function HomePage() {
  return (
    <div className="max-w-full !p-0 h-full">
      <HomeView />
    </div>
  )
}