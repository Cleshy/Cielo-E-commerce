import WishlistGrid from "../components/wishlist/WishlistGrid";
import { useWishlistContext } from "../context/WishlistProvider";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Wishlist() {
  const { wishlist, clearWishList } = useWishlistContext();
  const navigate = useNavigate();

  return (
    <section className="my-8 sm:my-12">
      <h1 className="text-3xl font-bold text-center sm:text-4xl xl:text-5xl">
        Your Wishlist
      </h1>
      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center gap-6 mt-8 md:gap-8 md:mt-14">
          <LazyLoadImage
            effect="blur"
            src="/wishlist.svg"
            alt="Illustration of a wishlist on mobile."
            className="w-50 lg:w-80"
          />
          <p className="italic text-center">
            No treasures saved yet. Discover our collection and curate your
            list.
          </p>
          <Button onClick={() => navigate("/products")}>
            Return to the Collection
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-4 mt-6">
          <div className="flex justify-between">
            <Button size="sm" onClick={() => navigate("/products")}>
              Collection
            </Button>
            <Button size="sm" onClick={clearWishList}>
              Clear Wishlist
            </Button>
          </div>
          <WishlistGrid wishlist={wishlist} />
        </div>
      )}
    </section>
  );
}

export default Wishlist;
