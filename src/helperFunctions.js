const capitalize = s => {
  if (s.includes("-")) {
    return s
      .split("-")
      .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(" ");
  }
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
};

export { capitalize };
