import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.tsx'
import './index.css'
import { Favorites } from './pages/Favorites.tsx'
import { Home } from './pages/Home.tsx'

createRoot(document.getElementById('root')!).render(
	<BrowserRouter basename='/frontend-challenge'>
		<Routes>
			<Route path='/' element={<App />}>
				<Route index element={<Home />} />
				<Route path='favorites' element={<Favorites />} />
			</Route>
		</Routes>
	</BrowserRouter>
)
