import React from 'react';

const Header = ({pseudo}) => {
const formatPseudo = pseudo => /[aeiou]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`;

    return (
        <header>
            <h1>La boîte à recette {formatPseudo(pseudo)}</h1>
        </header>
    )
}

export default Header;