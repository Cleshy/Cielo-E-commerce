import WishlistGrid from "../components/wishlist/WishlistGrid";
import { useWishlistContext } from "../context/WishlistProvider";
import Button from "../components/ui/Button";
import LazyLoadImg from "../components/ui/LazyLoadImg";
import WishlistToolbar from "../components/wishlist/WishlistToolbar";
import { useNavigate } from "react-router";

function Wishlist() {
  const navigate = useNavigate();
  const { wishlist } = useWishlistContext();

  return (
    <section className="my-8 sm:my-12">
      <h1 className="text-3xl font-bold text-center sm:text-4xl xl:text-5xl">
        Your Wishlist
      </h1>
      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center gap-6 mt-8 md:gap-8 md:mt-14">
          <LazyLoadImg
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
          <WishlistToolbar />
          <WishlistGrid wishlist={wishlist} />
        </div>
      )}
    </section>
  );
}

export default Wishlist;
