import { useAppSelector } from "./store";

const ItemsSection = () => {
  const email = useAppSelector((store) => store.user.email);

  return <div>ItemsSection Email {email}</div>;
};

export default ItemsSection;
