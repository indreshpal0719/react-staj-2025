// rafce
type Props = {
  metin: string;
  renk: "green" | "blue" | "red" | "yellow";
  boyut?: "küçük" | "orta" | "büyük";
};

const MyButton = (props: Props) => {
  return (
    <button
      className={`bg-${props.renk}-500 text-white p-${props.boyut === "küçük" ? "p-2" : "p-4"} rounded hover:bg-${props.renk}-700`}
    >
      {props.metin}
    </button>
  );
};

const app = () => {
  return (
    <div>
      <MyButton metin={"Satın Al"} renk={"red"} boyut={"küçük"} />
      <MyButton metin={"Satın Al"} renk={"green"} boyut={"büyük"} />
      <MyButton metin={"Satın Al"} renk={"yellow"} />
      <MyButton metin={"Satın Al"} renk={"blue"} />
    </div>
  );
};

export default app;
