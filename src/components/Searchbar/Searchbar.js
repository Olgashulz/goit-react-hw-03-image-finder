import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleInputValueChange = event => {
    // console.log(event.currentTarget.value.toLowerCase())
    this.setState({ inputValue: event.currentTarget.value.toLowerCase() });
  };

  handleOnSubmit = event => {
    event.preventDefault();

    if (this.state.inputValue.trim() === '') {
      return toast.error('Please enter keyword.');
    }

    if (this.state.inputValue.trim() === '') {
      console.log('параметры поиска совпадают');
    }

    this.props.onSubmit(this.state.inputValue);
    this.props.removeImages();
    // this.setState({ inputValue: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleOnSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputValueChange}
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
