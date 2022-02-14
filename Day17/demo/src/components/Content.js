

function Content(props) {

    return (
        <>
            {props.data.map((meme,idx) => {
                return (
                    <div key={idx}> 
                        <img src={meme.image} alt={meme.name} />
                        <h3>Name : {meme.name}</h3>
                        <p>Rank : {meme.rank}</p>
                    </div>
                );
            })}
        </>
    );
}

export default Content;


