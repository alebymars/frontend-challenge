import { useEffect, useState } from "react";
import { Cats } from "../../types/cats";
import { removeFavoriteCard } from "../../utils/favoriteCard";
import "../AllCats/style.css";

const FavoriteCats = () => {
    const [cards, setCards] = useState<Cats[]>([]);

    useEffect(() => {
        const storedCards = localStorage.getItem("cards");
        if (storedCards) {
            setCards(JSON.parse(storedCards));
        }
    }, []);


    if (cards.length < 1) {
        return <h1>
            Пока что список пуст :(
        </h1>
    }

    return (
        <div style={{ paddingTop: 20, paddingBottom: 50 }}>
            <div className='cards' style={{ gap: 15, display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {cards.map((cats: Cats, i: number) => (
                    <div key={i} className='card'>
                        <img src={cats.url} className='imgCat' />
                        <div className='likeButton activeButton' onClick={() => {
                            removeFavoriteCard(cats);
                            setCards(cards.filter((card) => card.id !== cats.id));
                        }} />
                        <div className='gradientBlock' />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FavoriteCats;
