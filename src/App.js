import React, { Component } from 'react';
import ProductTile from './contact';

const styl = {
    textAlign: 'center',
    border: '1px solid black',
    background: 'grey',
    width: '50%',
    margin: '0 auto'
}
let newContacts, contacts;
class App extends Component {
    constructor() {
        super();
        this.state = {
            searchQr: '',
            direction: 1,
            users: []
        }
    }
    firstLetter(text) {
        return text.charAt(0).toUpperCase() + text.slice(1)
    }
    componentDidMount() {
        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(data => { contacts = data.results;
            contacts.map( contact => {
                contact.name.first = this.firstLetter(contact.name.first)
                contact.name.last = this.firstLetter(contact.name.last)
            })

                this.setState({ users: contacts}) });
    }
    filter =(event) => {

        this.setState({
            searchQr: event.target.value,
            users: contacts.filter(item => {
                return item.name.first.match(event.target.value) ||
                    item.name.last.match(event.target.value) ||
                    item.email.match(event.target.value)
            })
        })
    }
    sortAlphabeticByFirstName =() => {

        newContacts = this.state.users.map( item => item);

        newContacts.sort((a, b) => {
            if(a.name.first < b.name.first) return (-1 * this.state.direction);
            if(a.name.first > b.name.first) return this.state.direction;
            return 0;
        });
        this.setState({
            users: newContacts,
            direction: this.state.direction * -1
        })
    }

    sortAlphabeticByLastName =() => {

        newContacts = this.state.users.map( item => item);

        newContacts.sort((a, b) => {
            if(a.name.last < b.name.last) return (-1 * this.state.direction);
            if(a.name.last > b.name.last) return this.state.direction;
            return 0;
        });
        this.setState({
            users: newContacts,
            direction: this.state.direction * -1
        })
    }

    render() {
        return (
            <section style={styl}>
                <h1>Contacts</h1>
                { this.state.users.map((contact, i) =>
                    <ProductTile key={ i }
                                 item={ contact }
                    />
                ) }
                <input type="text" placeholder={'type a name'} onKeyUp={this.filter}/>
                <button onClick={this.sortAlphabeticByFirstName}>Sort by name</button>
                <button onClick={this.sortAlphabeticByLastName}>Sort by last name</button>
            </section>
        )
    }

}

export default App;
