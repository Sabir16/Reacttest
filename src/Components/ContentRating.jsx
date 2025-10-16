
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
        handleLike: () => {
            this.setState((prevState) => ({
                likes: prevState.likes+1,
                totalRating: prevState.totalRating+1
            }));
        },
        handleDislike: () => {
            this.setState((prevState)=>({
                dislikes: prevState.dislikes+1,
                totalRating: prevState.totalRating+1
            }));
        },
        totalRating: 0
    };
  }

  render() {
    return (
     <>
     <div className='content_rating'>
        <p>
        Les réseaux sociaux, ces fenêtres virtuelles sur le monde, passionnent autant qu'ils divisent. Pour beaucoup, ils sont une source infinie de connexion : retrouver un ami d'enfance, partager un moment de joie, ou découvrir des idées nouvelles en un clic. Ils démocratisent l'information et donnent une voix à ceux qui n'en avaient pas. Mais pour d'autres, c'est une spirale toxique. Addiction au scroll incessant, comparaison obsessionnelle avec des vies "parfaites", ou encore la propagation de fausses nouvelles qui sèment la discorde. Les algorithmes, conçus pour captiver, enferment parfois dans des bulles de pensées uniformes, loin du débat véritable.
Alors, outil de liberté ou prison dorée ? Chacun y trouve son compte... ou son cauchemar. Et vous, du quel du camp êtes-vous ?
        </p>
        <div className='rating_buttons'>
            <button className='like_button' onClick={this.state.handleLike}>Like ({this.state.likes})</button>
            <button className='dislike_button' onClick={this.state.handleDislike}>Dislike ({this.state.dislikes})</button>
            <br /><br /><strong>TotalRating : {this.state.totalRating}</strong>
        </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
