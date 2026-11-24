
import { useState } from 'react';

import PersonForm from '../FormrSave/FormSave';
import PersonList from '../PersonList/PersonList';

function PersonManager() {

  // Liste des personnes
  const [persons, setPersons] = useState([]);

  // Personne sélectionnée pour modification
  const [selectedPerson, setSelectedPerson] = useState(null);

  // Enregistrer une personne ou modifier
  function handleSave(formData) {

    if (selectedPerson) {

      // Modification
      setPersons(persons.map(person =>
        person.id === selectedPerson.id
          ? { ...formData, id: selectedPerson.id }
          : person
      ));

      setSelectedPerson(null);

    } else {

      // Nouvel enregistrement
      const newPerson = {
        ...formData,
        id: Date.now()
      };

      setPersons([...persons, newPerson]);
    }
  }

  // Sélectionner une personne à modifier
  function handleEdit(person) {
    setSelectedPerson(person);
  }

  // Supprimer une personne
  function handleDelete(id) {

    const confirmation = window.confirm(
      'Voulez-vous vraiment supprimer cette client ?'
    );

    if (confirmation) {
      setPersons(persons.filter(person => person.id !== id));

      if (selectedPerson?.id === id) {
        setSelectedPerson(null);
      }
    }
  }

  return (
    <div className="container mt-5">
      <PersonForm
        onSave={handleSave}
        initialData={selectedPerson}
      />

      <PersonList
        persons={persons}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

    </div>
  );
}

export default PersonManager;
