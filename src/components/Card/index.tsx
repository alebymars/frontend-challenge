import "../../screens/AllCats/style.css"

interface Props {
    key: string;
    url: string;
    addFavoriteCard: (card: object) => void;
}

const Card = ({ url, addFavoriteCard }: Props) => {
    return (
        <div className='card'>
            <img
                alt='cats'
                src={url}
                className='imgCat'
            />
            <div
                className={"likeButton"}
                onClick={addFavoriteCard}
            />
            <div className='gradientBlock' />
        </div>
    )
};

export default Card;
