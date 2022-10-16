function array_to_csv(json) {
  const array = json.slice();
  let rows = array[0].join(",") + "\n";
  array.shift();
  array.forEach((e) => {
    rows += e.join(",") + "\n";
  });
  return rows;
}

console.log(
  array_to_csv([
    ["keyword", "vol", "cpc"],
    ["data", "1500000", "1.75"],
    ["data structure", "1400000", "1.55"],
  ])
);

/* Output CSV
keyword,vol,cpc
data,1500000,1.75
data structure,1400000,1.55
*/
