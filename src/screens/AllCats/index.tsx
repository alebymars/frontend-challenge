import { useEffect, useRef, useState } from 'react';
import { Spin } from 'antd';
import Card from '../../components/Card';
import { fetchAllCats } from '../../utils/fetchAllCats';
import { addFavoriteCard } from '../../utils/favoriteCard';
import { Cats } from '../../types/cats';
import "./style.css"

const AllCats = () => {

    const target = useRef<HTMLDivElement | null>(null);

    const [allCards, setAllCards] = useState<Cats[]>([]);
    const [spinning, setSpinning] = useState<boolean>(false);
    const [likeButtonActive, setLikeButtonActive] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        {
            const observer = new IntersectionObserver((entries) => {
                {
                    entries.forEach((entry) => {
                        {
                            if (entry.isIntersecting) {
                                {
                                    handleLoadCats();
                                }
                            }
                        }
                    });
                }
            });

            if (target.current) {
                {
                    observer.observe(target.current);
                }
            }

            return () => {
                {
                    if (target.current) {
                        {
                            observer.unobserve(target.current);
                        }
                    }
                }
            };
        }
    }, [allCards]);

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

    const handleLoadCats = async () => {
        setSpinning(true);

        try {
            const cats = await fetchAllCats("live_5kZIu7k4qrmEklaAXqGBrjwSghock5RZ5a6HbQwxU4oHTMFHPrdajuMrT4Nc3QM9");
            const addNewCards = [...allCards, ...cats];
            setAllCards(addNewCards);
        } catch (e) {
            console.log("Error: ", e);
        } finally {
            setSpinning(false);
        }
    }

    const handleLikeButtonClick = (id: string) => {
        setLikeButtonActive(prevState => ({ ...prevState, [id]: !prevState[id] }));
    }

    return (
        <div>
            <Spin spinning={spinning} fullscreen />
            <div className='cards' style={{ gap: 30, display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {allCards ? allCards.map((cats: Cats, i: number) => (
                    <Card
                        key={i.toString()}
                        cards={cats}
                        url={cats.url}
                        addFavoriteCard={() => addFavoriteCard(cats)}
                        onLikeButtonClick={() => handleLikeButtonClick(cats.id)}
                        isLikeButtonActive={likeButtonActive[cats.id] || false}
                    />
                )) : null}
            </div>
            <div ref={target} />
            <p style={{ padding: 20 }}>...загружаем еще котиков...</p>
        </div>
    )
}

export default AllCats;