import './App.css'
import Sidebar from './components/Sidebar'
import PageHeader from './components/PageHeader'
import Documentation from './components/Documentation'

function App() {
  return (
    <div className="container">
      <Sidebar />
      <main className="content">
        <PageHeader />
        <Documentation />
      </main>
    </div>
  )
}

export default App

