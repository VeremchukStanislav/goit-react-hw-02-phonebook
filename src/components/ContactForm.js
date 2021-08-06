import { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handeleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: ''});
    };

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
        <label className='label'>
        Name
        <input className='input'
        type='text'
        value={this.state.name}
        onChange={this.handeleChange}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Jack, Stan, John"
        required
        />
        </label>
        <label className='label'>
        Phone
        <input className='input'
            type="tel"
            value={this.state.number}
            onChange={this.handeleChange}
            name="number"
            required
          />
        </label>
        <button className='button' type="submit">Add contact</button>
      </form>
      );
    }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;