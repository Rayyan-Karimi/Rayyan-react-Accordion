import PropTypes from "prop-types";

const Accordion = ({ items, setItems, isMultiple }) => {
  const toggleActivity = (theId) => {
    const itemIndex = items.findIndex((item) => item.id === theId);

    setItems((prev) => {
      return prev.map((item, index) => {
        if (isMultiple) {
          return index === itemIndex
            ? { ...item, isActive: !item.isActive }
            : item;
        } else {
          return index === itemIndex
            ? { ...item, isActive: true }
            : { ...item, isActive: false };
        }
      });
    });
  };

  return (
    <div className="my-10 mx-20 bg-indigo-100 items-center flex flex-col gap-4">
      {items.map((item) => {
        return (
          <div key={item.id} className="border border-black m-5">
            <label className="flex justify-between gap-6 py-2 px-5">
              <span>{item.title}</span>
              <button onClick={() => toggleActivity(item.id)}>
                {item.isActive ? "-" : "+"}
              </button>
            </label>
            <p className={`py-1 px-5 ${item.isActive ? "block" : "hidden"}`}>
              {item.content}
            </p>
          </div>
        );
      })}
    </div>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  isMultiple: PropTypes.bool,
  setIsMultiple: PropTypes.func,
  setItems: PropTypes.func,
};

export default Accordion;
