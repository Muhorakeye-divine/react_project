
function PersonList({ persons, onEdit, onDelete }) {

  return (
    <div className="card shadow-sm">

      <div className="card-header bg-dark text-white">
        <h4 className="mb-0">
          Liste des clients enregistrées
        </h4>
      </div>

      <div className="card-body">

        <div className="table-responsive">

          <table className="table table-bordered table-hover align-middle">

            <thead className="table-secondary">
              <tr>
                <th>#</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Téléphone</th>
                <th>Email</th>
                <th>Nationalité</th>
                <th>Rôle</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {persons.length === 0 ? (

                <tr>
                  <td colSpan="9" className="text-center">
                    Aucune personne enregistrée.
                  </td>
                </tr>

              ) : (

                persons.map((person, index) => (

                  <tr key={person.id}>

                    <td>{index + 1}</td>
                    <td>{person.nom}</td>
                    <td>{person.prenom}</td>
                    <td>{person.telephone}</td>
                    <td>{person.email}</td>
                    <td>{person.nationalite}</td>
                    <td>{person.role}</td>
                    <td>{person.typePersonne}</td>

                    <td>
                      <div className="d-flex gap-2">

                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => onEdit(person)}
                        >
                          Update
                        </button>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => onDelete(person.id)}
                        >
                          Delete
                        </button>

                      </div>
                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

        <p className="text-muted mb-0">
          Total : {persons.length} personne(s)
        </p>

      </div>
    </div>
  );
}

export default PersonList;
