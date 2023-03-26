import React from "react"
import { Routes, Route } from "react-router-dom"

import Search from "./pages/Search"
import Recipe from "./pages/Recipe"
import Results from "./pages/Results"
import Header from "./components/Header.js"
import Footer from "./components/Footer"

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route exact path="/" element={ <Search /> } />
				<Route path="/results" element={ <Results /> } />
				<Route path="/recipe/:id" element={ <Recipe /> } />
			</Routes>
			<Footer />
		</>
	)
}

export default App