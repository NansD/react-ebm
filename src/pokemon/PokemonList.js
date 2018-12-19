import React from 'react';
import PropTypes from 'prop-types';
import Button from './../button/Button';
import {results} from '../pokemon.json'

export default class PokemonList extends React.PureComponent {
    static propTypes = {
    };

    state = {
        value: '',
        pokemons: [...results]
    };

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }
    render() {
        const pokemonsToShow = this.state.pokemons.filter((pokemon) => {
            return pokemon.name.includes(this.state.value);
        });
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <ul>
                    {pokemonsToShow.map((pokemon) => {
                        if(pokemon.name.includes(this.state.value)) {
                            return (
                                <div key={pokemon.name}> <a href={pokemon.url}>{pokemon.name}</a></div>
                            )
                        }
                    })}
                </ul>
            </div>
        );
    }
}