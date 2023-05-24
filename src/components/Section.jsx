const Section = () => {
  // Constantes
  const nbStudents = 16; // number
  const name = "Baptiste"; // string
  const city = "Villejuif";
  const flowers = ["tulipe", "rose"]; // array
  const classroom = {
    // object
    name: "React Classroom",
    nbStudents,
  };

  return (
    <div id="div1">
      <ul>
        {flowers.map((flower, index) => (
          <li key={index}>{flower}</li>
        ))}
      </ul>
      <p className="red">
        {name} is teacher of a class of {nbStudents} students.
      </p>
      <p>He lives in {city}.</p>
      <table>
        <th>Classroom</th>
        <tr>
          <td>{classroom.name}</td>
        </tr>
        <tr>
          <td>{classroom.nbStudents}</td>
        </tr>
      </table>
    </div>
  );
};

export default Section;
