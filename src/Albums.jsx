import React, { useState, useEffect } from "react";

const Albums = (prop) => {
  const [albums, setAlbums] = useState([]);
  const [errors, setErrors] = useState(false);

  async function getData() {
    let url = "https://jsonplaceholder.typicode.com/albums?userId=" + prop.id;

    const res = await fetch(url);
    res
      .json()
      .then((res) => setAlbums(res))
      .catch((errors) => setErrors());
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="albums">
      <h3>albums</h3>
      <ul>
        {albums.length === 0 ? (
          <h2>Sorry, no albums</h2>
        ) : (
          albums.map((album) => (
            <li>
              <a key={album.id} href="#">
                {album.title}
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Albums;
