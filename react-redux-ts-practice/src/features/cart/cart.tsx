import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addItem, removeItem, changeSearchTerm, selectCart } from "./cartSlice";
import { changeName, changePrice, selectItemInput } from "./itemInputSlice";

export const Cart = () => {
  const dispatch = useAppDispatch();
  const {
    items: itemList,
    searchTerm,
    totalPrice,
  } = useAppSelector(selectCart);
  const { name: itemName, price: itemPrice } = useAppSelector(selectItemInput);

  const handleItemAdd = () => {
    if (itemList.some(({ name }) => name === itemName)) {
      console.log(`"${itemName}" is already in the cart.`);
      return;
    }
    dispatch(addItem({ name: itemName, price: itemPrice }));
  };

  const handleItemRemove = ({ name }: { name: string }) => {
    dispatch(removeItem(name));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "itemName") {
      dispatch(changeName(value));
    } else if (name === "itemPrice") {
      dispatch(changePrice(value));
    }
  };

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchTerm(e.target.value));
  };

  return (
    <div className="flex flex-col items-center w-full h-96 bg-yellow-300 bg-opacity-70 px-32 font-mono relative text-lg">
      <div className="flex w-full justify-center text-4xl font-bold my-5">
        Cart
      </div>
      <div className="flex w-full gap-4 my-2">
        <div className="flex flex-col">
          <label>Item Name</label>
          <input
            className="rounded-md pl-2 w-full box-border"
            name="itemName"
            type="text"
            value={itemName}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label>Item price</label>
          <input
            className="rounded-md pl-2 w-full box-border"
            name="itemPrice"
            type="number"
            step="1000"
            min="0"
            value={itemPrice}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-end">
          <button
            onClick={handleItemAdd}
            className="bg-slate-300 h-7 font-bold px-4 rounded-md">
            Add
          </button>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <label>Search</label>
        <input
          className="rounded-md"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
      <ul className="w-full my-2 px-6 h-24 overflow-y-auto bg-gray-100 bg-opacity-70 rounded-md">
        {itemList.length > 0 &&
          itemList.map((item, index) => (
            <li key={index} className="flex justify-between text-xl m-1">
              {item.name} {item.price}
              <button
                onClick={() => handleItemRemove(item)}
                className="bg-red-400 text-md bg-opacity-90 px-4 rounded-md">
                X
              </button>
            </li>
          ))}
      </ul>
      <div className="flex w-full justify-between my-2">
        <label>Total Price:</label>
        <div>{totalPrice}</div>
      </div>
    </div>
  );
};
