export const getCurrentDay = () => {
  const day = new Date().getDay();
  switch (day) {
    case 0:
      return "א";
    case 1:
      return "ב";
    case 2:
      return "ג";
    case 3:
      return "ד";
    case 4:
      return "ה";
    case 5:
      return "ו";
    case 6:
      return "ש";

    default:
      break;
  }
};

export const getToday = () => {
  return new Date().toLocaleDateString("en-GB");
};
