import React, { Component } from 'react'; //we need to import react for all the component we write for JSX

class SearchBar extends Component { // this means to give all the access to react component's functionality
    constructor (props) {
        super(props);

        this.state = {term: ''}; // we need to update the term of the state of this component to reflect the newest change made by the user for input.
    } // this is how we initialize a state in a class. only in initializer we call it by this.state
    //outside of the constructor, we call it by this.setState

    render() {
        return (
            <div className = "search-bar">
                <input 
                    value = {this.state.term}
                    onChange = {event => this.onInputChange(event.target.value)} />
            </div>
        );
        // value is a controlled component controlled by state
        // we put an event handler inplace to monitor if the input is changed. Event handler is a function will run whenever the event occurs.
        // we constantly set a new term for the state whenever the event happens
    } // all the class have to have a render function

    onInputChange(term) {
        this.setState ({term});
        this.props.onSearchTermChange(term);
    }
}
// To let searchbar component interact with other components, we decided to promote SearchBar
// from a function component to a class component.

export default SearchBar; // so we can import seach_bar component in other files