//task-1
import http from "http";
const port = 3000;
const host = 'localhost'

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.method === 'GET')
    res.end("Called using GET method");
  else if (req.method === 'POST')
    res.end("Called using POST method");
  else if (req.method === 'PUT')
    res.end("Called using PUT method");
  else if (req.method === 'DELETE')
    res.end("Called using DELETE method");
}).listen(port, () => {
  console.log(`server is running on ${port}`);
})

import fs from 'fs';

fs.readFile('student-data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const students = data.split('\n');
  const filteredStudents = students.filter(student => {
    const [name, cgpa] = student.split(',');
    return name.includes('MA') && parseFloat(cgpa) > 7;
  });

  console.log('Students whose name contains "MA" and CGPA > 7:');
  console.log(filteredStudents);
});


const loadNames = () => {
  try {
    const readData = fs.readFileSync('employee.json');
    const datajson = JSON.parse(readData)
    return datajson
  } catch (e) {
    return [];
  }
}
const data = process.argv[2]

if (data != null) {
  let arr = []
  arr = loadNames()

  if (arr.find(arr1 => arr1.name === data)) {
    console.log("User is already there");
  }
  else {
    arr.push({ name: data })


    fs.writeFileSync('employee.json',
      JSON.stringify(arr)
    )

    arr = loadNames()
    console.log(arr)
  }
}

const firstSize = fs.statSync('./first.txt').size;
const secondSize = fs.statSync('./second.txt').size;
console.log(firstSize, secondSize);

if (firstSize > secondSize) {
  console.log("First file is Larger than second!....")
} else if (firstSize < secondSize) {
  console.log("Second file is Larger than first!....")
} else {
  console.log("Both files have same size")
}

const firstFile = fs.readFileSync('first.txt', { encoding: 'utf8' }).split('\n');
const secondFile = fs.readFileSync('second.txt', { encoding: 'utf8' }).split('\n');

for (let i = 0; i < secondFile.length; i++) {
  if (firstFile[i] != secondFile[i]) {
    console.log(`Difference at line number ${i + 1}`);
  }
}

function backupFile(file) {

  const fileName = "file.txt";
  const backupPath = `../FSWD/Backup/${fileName}`;

  fs.readFile('../FSWD/main.txt', (err, data) => {
    if (err) {
      console.error(`Failed to backup file: ${file}`);
    } else {
      fs.writeFile(backupPath, data, (err) => {
        if (err) {
          console.error(`Failed to backup file: ${file}`);
        }
        console.log(`File backed up successfully: ${backupPath}`);
      })

    }
  });
}


function restoreFile(file) {
  const fileName = "file.txt"
  const backupPath = `../FSWD/Restore/${fileName}`;

  fs.readFile('../FSWD/main.txt', (err, data) => {
    if (err) {
      console.error(`Failed to restore file: ${file}`);
    } else {
      fs.writeFile(backupPath, data, (err) => {
        if (err) {
          console.error(`Failed to restore file: ${file}`);
        }
        console.log(`File Restored successfully: ${backupPath}`);
      })

    }
  });
}

const fileToBackup = '../FSWD/Backup/file.txt';
const fileToRestore = '../FWSD/Restore/file.txt';

backupFile(fileToBackup);
restoreFile(fileToRestore);



import path from "path";

// Read the JSON file
fs.readFile('folder-structure.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  try {
    // Parse the JSON data
    const structure = JSON.parse(data);

    // Create the file/folder structure
    createStructure(structure, '');
    console.log('File/folder structure created successfully!');
  } catch (error) {
    console.error('Invalid JSON format:', error);
  }
});

function createStructure(node, parentPath) {
  const { type, name, children } = node;

  // Determine the path of the current node
  const nodePath = path.join(parentPath, name);

  if (type === 'file') {
    // Create a file
    fs.writeFileSync(nodePath, '', 'utf8');
  } else if (type === 'folder') {
    // Create a folder
    fs.mkdirSync(nodePath);

    // Recursively create the structure inside the folder
    if (children && Array.isArray(children)) {
      for (const childNode of children) {
        createStructure(childNode, nodePath);
      }
    }
  }
  console.log(type);
}
