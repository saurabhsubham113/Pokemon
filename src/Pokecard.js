import React , {Component} from 'react';
import './Pokecard.css'
const Poke_Icon = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

let padToThree = (num) => ( num <= 999 ? `00${num}`.slice(-3) : num )
class Pokecard extends Component{
    render(){
        const {id, name, type, exp } = this.props
        const icon = `${Poke_Icon}${padToThree(id)}.png`
        return(
            <div className="Pokecard">
                <h1 className="Pokecard-title"> {name} </h1>
                <div className="Pokecard-image">
                    <img src={icon} alt= {name}/>
                </div>
                <div className="Pokecard-data"> {type} </div>
                <div className="Pokecard-data"> {exp} </div>
            </div>
        );
    };
};

export default Pokecard;