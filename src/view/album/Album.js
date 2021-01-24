import React, { useEffect } from 'react'
import style from './album.module.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getAlbums } from './album.action';

const colorScheme = [
  'btn-outline-primary',
  'btn-outline-secondary',
  'btn-outline-success',
  'btn-outline-danger',
  'btn-outline-warning',
  'btn-outline-info',
  'btn-outline-dark'
]

export default function Album() {
  const { albums } = useSelector(state => state.albumLists);
  const dispatch = useDispatch();

  useEffect(() => {
    if (albums === 'loading') {
      dispatch(getAlbums());
    }
  }, []);


  return (
    <div className="container">
      <div className={style.album}>
        <h3>Select Gallery</h3>
        {albums === 'loading' ? <div>Loading Album</div> :
          <div className="card-columns">
            {albums.map((item) =>
              <Link
                to={`gallery/${item.id}`}
                type="button"
                className={`btn m-1 btn-lg ${colorScheme[Math.floor(Math.random() * colorScheme.length)]}`}
                key={item.id}>
                {item.title}
              </Link>
            )}
          </div>
        }
      </div>
    </div>
  )
}
