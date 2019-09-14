//Import libraries
import React from 'react';

//Component
class SearchBar extends React.Component {
    //Variables
    state = {term: ''};

    //Function
    onChangeSearch = (event) => {
        this.setState({term: event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    //Render Method
    render() {
        return (
            <div className="ui segment search-bar">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term} onChange={this.onChangeSearch}/>
                    </div>
                </form>
            </div>
        )
    }
}

//Export
export default SearchBar;