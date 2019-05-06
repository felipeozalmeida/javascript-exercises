let groups = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];
groups.forEach((group, groupIndex) => {
  group.forEach((value, index, group) => {
    group[index] = prompt(
      `Insert number ${index + 1} for group ${groupIndex + 1}`
    );
  });
});
groups.forEach((group, groupIndex) => {
  document.write(`Group ${groupIndex + 1}<br><br>`);
  group.forEach((value, index) => {
    document.write(`groups[${groupIndex}][${index}] = ${value}<br>`);
  });
  document.write('<br>');
});
