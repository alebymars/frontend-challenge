import { useEffect, useState } from 'react';
import { Spin } from 'antd';
import MyButton from '../../components/MyButton';
import { fetchAllCats } from '../../utils/fetchAllCats';
import { addFavoriteCard } from '../../utils/favoriteCard';
import { Cats } from '../../types/cats';
import "./style.css"


const AllCats = () => {

    const [allCards, setAllCards] = useState<Cats[]>([]);
    const [isHintMessage, setIsHintMessage] = useState(false);
    const [spinning, setSpinning] = useState<boolean>(false);


    useEffect(() => {
        setSpinning(true);

        fetchAllCats("live_5kZIu7k4qrmEklaAXqGBrjwSghock5RZ5a6HbQwxU4oHTMFHPrdajuMrT4Nc3QM9")
            .then((cats: Cats[]) => {
                setAllCards(cats);
                setSpinning(false);
            })
            .catch(e => console.log("Error: ", e))
            .finally(() => setSpinning(false));
    }, []);


    useEffect(() => {
        const likeButton = document.querySelectorAll('.likeButton');

        likeButton.forEach((card) => {

            card.addEventListener('click', (event) => {
                const target = event.currentTarget as HTMLElement;
                target.classList.add('activeButton');
            });

        });
    }, [spinning]);


    return (
        <div>
            <Spin spinning={spinning} fullscreen />
            <div className='cards' style={{ gap: 20, display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {allCards ? allCards.map((cats: Cats, i: number) => (
                    <div
                        key={i}
                        className='card'
                    >
                        <img
                            alt='cats'
                            src={cats.url}
                            className='imgCat'
                        />
                        <div
                            className={"likeButton"}
                            onClick={() => {
                                addFavoriteCard({
                                    id: cats.id,
                                    url: cats.url,
                                    height: cats.height,
                                    width: cats.width,
                                });
                            }}
                        />
                        <div className='gradientBlock' />
                    </div>
                )) : null}
            </div>
            <MyButton
                title='Загрузить еще котиков?'
                onClick={() => {
                    setIsHintMessage(true);
                    setSpinning(true);

                    fetchAllCats("live_5kZIu7k4qrmEklaAXqGBrjwSghock5RZ5a6HbQwxU4oHTMFHPrdajuMrT4Nc3QM9")
                        .then((cats: Cats[]) => {
                            const addNewCards = [...allCards, ...cats];
                            setAllCards(addNewCards);
                        })
                        .catch((e) => console.log("Error: ", e))
                        .finally(() => {
                            setIsHintMessage(false);
                            setSpinning(false);
                        })
                }}
                isLoading={isHintMessage}
            />
            {isHintMessage ? <p style={{ padding: 20 }}>...загружаем еще котиков...</p> : null}
        </div>
    )
}

export default AllCats;
