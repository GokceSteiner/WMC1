const students = [
  { name: "Anna", age: 17, grade: 2 },
  { name: "Ben", age: 16, grade: 4 },
  { name: "Clara", age: 18, grade: 1 },
  { name: "David", age: 17, grade: 5 },
  { name: "Elena", age: 16, grade: 3 },
  { name: "Felix", age: 19, grade: 2 },
  { name: "Gina", age: 17, grade: 1 },
  { name: "Hugo", age: 18, grade: 4 },
];


//Task 1 – filter: Find all students who passed (grade ≤ 4). Store the result in passed.

students.filter(s => {return s.grade <=4})

/* { name: 'Anna', age: 17, grade: 2 },
  { name: 'Ben', age: 16, grade: 4 },
  { name: 'Clara', age: 18, grade: 1 },
  { name: 'Elena', age: 16, grade: 3 },
  { name: 'Felix', age: 19, grade: 2 },
  { name: 'Gina', age: 17, grade: 1 },
  { name: 'Hugo', age: 18, grade: 4 }
]*/

//Task 2 – map: Create an array of strings in the format "Anna (17)" from the original array. Store it in labels.
students.map(s => {return `${s.name} (${s.age})`})
/*[
  'Anna (17)',
  'Ben (16)',
  'Clara (18)',
  'David (17)',
  'Elena (16)',
  'Felix (19)',
  'Gina (17)',
  'Hugo (18)'
]*/

//Task 3 – filter + map: From only the passed students, extract just their names into an array passedNames.
students.filter(s => {return s.grade <=4}).map(s => {return s.name})

//Task 4 – reduce: Calculate the average grade of all students. Store it in averageGrade.
students.reduce((acc, s) => acc + s.grade, 0) / students.length


//Task 5 – chaining (bonus): In a single chain, find the names of all students aged 17 or older who passed, joined into one comma-separated string.
