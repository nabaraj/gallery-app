import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getGallery } from './gallery.action';

export default function Gallery() {

  let { id } = useParams();
  const { gallery } = useSelector(state => state.galleryList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!gallery[id]) {
      dispatch(getGallery(id));
    }
  }, []);
  return (
    <div className="container">
      <div className="text-end"><Link to="/" className="btn btn-outline-success">Back</Link></div>
      <div className="row">
        {!gallery[id] ? <div>Loading Gallery</div> :
          gallery[id].map((item) => <div className="col-sm-1 col-md-4 mb-3 d-flex" key={item.id}><div className="card w-100">
            <img src={item.thumbnailUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">{item.title}</p>

            </div>
          </div></div>)

        }
      </div>
    </div>
  )
}
