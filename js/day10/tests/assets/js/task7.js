const students = [
  { name: "Arun", mark: 85 },
  { name: "Bala", mark: 65 },
  { name: "Charan", mark: 90 },
  { name: "Deepak", mark: 70 }
];

for (let s of students) {
  if (s.mark > 75) {
    console.log(s.name, s.mark);
  }
}
