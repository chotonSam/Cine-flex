import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { MovieContext } from "../../context/MyContext";
import { getImgUrl } from "../../utilities/cine-utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Ratings from "./Ratings";

export default function CineCard({ movie }) {
  const [isModal, setIsModal] = useState(false);
  const [modalMovie, setModalMovie] = useState(null);

  const { state, dispatch } = useContext(MovieContext);

  function modalMovieHandler(movie) {
    setModalMovie(movie);
    setIsModal(true);
  }

  function isModalHandler() {
    setIsModal(false);
    setModalMovie(null);
  }

  function handleAddToCard(e, movie) {
    e.preventDefault();
    e.stopPropagation();

    const found = state.cardMovie.find((item) => {
      return item.id === movie.id;
    });

    if (!found) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...movie,
        },
      });
      toast.success(`Added ${movie.title} to Cart !`);
    } else {
      toast.error(
        `The movie ${movie.title} has been added to the cart already`
      );
    }
  }

  return (
    <>
      {isModal && (
        <MovieDetailsModal movie={modalMovie} onClose={isModalHandler} />
      )}

      <figure className=" p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => modalMovieHandler(movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Ratings value={movie.rating} />
            </div>
            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCard(e, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>$100 | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
