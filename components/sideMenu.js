import React from 'react';
import {useRouter} from 'next/router';
import Modal from './modal';
import MovieCreateForm from './movieCreateForm'
import {createMovie} from '../actions'

const SideMenu = (props) => {
  const {categories} = props;
  const router = useRouter();
  let modal = null;

  const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      //console.log(JSON.stringify(movies))
      modal.closeModal();
      router.push('/');
    })
  }

    return (
      <div>
        <Modal ref={ele => modal = ele} hasSubmit={false}>
          <MovieCreateForm handleForSubmit={handleCreateMovie} />
        </Modal>
        <h1 className="my-4">{props.appName}</h1>
        <div className="list-group">
          {
            categories.map((c) => (
              <a key={c.id} onClick={() => props.changeCategory(c.name)}  href="#" className={`list-group-item ${props.activeCategory === c.name ? 'active' : ''} `}>{c.name}</a>
            ))
          }
        </div>
        <div>
          <h1>{props.count}</h1>
        </div>
      </div>
    )
  }
export default SideMenu;