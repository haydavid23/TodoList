import React from "react";

export class Home extends React.Component {
	constructor() {
		super();

		this.state = {
			todoList: [
				{ title: "Make my bed", id: 0, done: false },
				{ title: "Wash my hands", id: 1, done: false },
				{ title: "Eat", id: 2, done: false },
				{ title: "Walk the dogs", id: 3, done: false }
			]
		};
	}

	handleFormSubmit(e) {
		if (document.querySelector("[name=taskInput]").value === "") {
			return null;
		}

		let ind = this.state.todoList.length - 1;
		this.setState({
			todoList: this.state.todoList.concat([
				{ title: e, done: false, id: ind + 1 }
			])
		});
		document.querySelector("[name=taskInput]").value = "";
	}

	deleteItem(i) {
		this.setState({
			todoList: this.state.todoList.filter(item => item.id !== i)
		});
	}

	render() {
		var newArray = this.state.todoList.map(item => {
			return (
				<li key={item.id}>
					{item.title}
					<input
						type="button"
						name="remove"
						value="Delete"
						onClick={() => this.deleteItem(item.id)}
					/>
				</li>
			);
		});

		return (
			<div className="d-flex justify-content-center">
				<div className="todolist">
					<h2 className="text-center">Todo List</h2>
					<form>
						<input
							type="text"
							name="taskInput"
							placeholder="New Todo..."
						/>

						<input
							type="button"
							value="Add ToDO"
							name="add"
							onClick={() =>
								this.handleFormSubmit(
									document.querySelector("[name=taskInput]")
										.value
								)
							}
						/>
					</form>
					<ul>{newArray}</ul>
					<p>{this.state.todoList.length} item left</p>
				</div>
			</div>
		);
	}
}
