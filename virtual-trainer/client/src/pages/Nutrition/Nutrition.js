import React, { Component } from 'react'
import API from '../../utils/apis'
import axios from 'axios'


class Nutrition extends Component {
	initialState = {
		calories: 0,
		fat: 0,
		carbs: 0,
		protein: 0,
		ingredients: [],
		RecipeTitle: "",
	}
	state = {
		calories: 0,
		fat: 0,
		carbs: 0,
		protein: 0,
		ingredients: [],
		RecipeTitle: "",
	}
	handleTitleInput = event => {
		this.setState({ RecipeTitle: event.target.value })
	}
	handleIngInput = event => {
		this.setState({ ingredients: event.target.value })
	}
	// handleInputChange = (event) =>{
	// 	const name = event.target.name
	// 	const value = event.target.value
	// 	this.setState({
	// 		[name]: value
	// 	})
	// }
	handleNutrition = (event) => {
		// event.preventDefault()
		console.log(this.state)
		 API.NutritionBreakdown({title: this.state.RecipeTitle, 
			ingr:this.state.ingredients})
	}

	render() {
		return (
			<form>
				<div className='form-group'>
					<label htmlFor='recipeName'>Name of Recipe</label>
					<input type='text' className='form-control' id='recipeName' value={this.state.RecipeTitle} onChange={this.handleTitleInput}></input>
				</div>
				<div className='form-group'>
					<label htmlFor='ingredients'>Ingredients</label>
					<input type='text' className='form-control' id='ingredients' value={this.state.ingredients} onChange={this.handleIngInput}></input>
				</div>
				<button className='btn btn-primary btn-large' onClick={this.handleNutrition}>Submit</button>
			</form>
		)
	}

}

export default Nutrition