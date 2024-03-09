import React from 'react';
// import memesData from './memesData';

export default function Main() {
  const [meme, setMeme] = React.useState({
    topText: 'top text',
    bottomText: 'bottom text',
    randomImage: './images/memeimg.png',
  });

  const [allMemes, setAllMemes] = React.useState({});

  React.useEffect(() => {
    async function watchWidth() {
      const res = await fetch('https://api.imgflip.com/get_memes');
      const data = await res.json();
      setAllMemes(data);
    }
    watchWidth();

    // fetch('https://api.imgflip.com/get_memes')
    //   .then((res) => res.json())
    //   .then((data) => setAllMemes(data));
  }, []);

  function getImage() {
    const memes = allMemes.data.memes;
    const randomNum = Math.floor(Math.random() * memes.length);
    const url = memes[randomNum].url;

    setMeme((prevState) => {
      return { ...meme, randomImage: url };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setMeme((prevText) => {
      return {
        ...prevText,
        [name]: value,
      };
    });
  }

  return (
    <main className="main">
      <div className="main--inputs">
        <div className="main--input-container">
          <label>Top text</label>
          <input
            type="text"
            className="main--input"
            placeholder="Top text"
            name="topText"
            onChange={handleChange}
            // value={meme.topText}
          />
        </div>
        <div className="main--input-container">
          <label>Bottom text</label>
          <input
            type="text"
            className="main--input"
            placeholder="Bottom text"
            name="bottomText"
            onChange={handleChange}
            // value={meme.bottomText}
          />
        </div>
      </div>

      <button
        type="submit"
        className="main--btn"
        onClick={getImage}>
        Get a new meme image 🖼
      </button>

      <div className="meme">
        <h2 className="meme--top-text">{meme.topText}</h2>
        <img
          src={meme.randomImage}
          alt="meme"
          className="meme--img"
        />
        <h2 className="meme--bottom-text">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
