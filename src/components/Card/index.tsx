import "../../screens/AllCats/style.css"

interface Props {
    key: string;
    url: string;
    cards: object;
    addFavoriteCard: (card: object) => void;
    onLikeButtonClick: () => void;
    isLikeButtonActive: boolean;
}

const Card = ({ url, addFavoriteCard, isLikeButtonActive, onLikeButtonClick, cards }: Props) => {
    return (
        <div className='card'>
            <img
                alt='cats'
                src={url}
                className='imgCat'
            />
            <div
                className={`likeButton${isLikeButtonActive ? ' activeButton' : ''}`}
                onClick={() => {
                    onLikeButtonClick();
                    addFavoriteCard(cards);
                }}
            />
            <div className='gradientBlock' />
        </div>
    )
};

export default Card;
