import { useState } from 'react';

import FormInput from '../../components/InputForm/Input';
import FormSelect from '../../components/SelectForm/select';

function PersonForm() {

  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    dateNaissance: '',
    nationalite: '',
    role: '',
    typePersonne: '',
    motDePasse: ''
  });

  const [message, setMessage] = useState('');

  // Mettre à jour les champs
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setMessage('');
  }

  // Enregistrer le formulaire
  function handleSubmit(event) {
    event.preventDefault();

    console.log('Informations enregistrées :', formData);

    setMessage('Les informations ont été enregistrées avec succès !');

    // Réinitialiser le formulaire
    setFormData({
      nom: '',
      prenom: '',
      telephone: '',
      email: '',
      dateNaissance: '',
      nationalite: '',
      role: '',
      typePersonne: '',
      motDePasse: ''
    });
  }

  return (
    <div className="container mt-5">

      <div className="card shadow-sm">

        <div className="card-header bg-secondary text-white">
          <h4 className="mb-0">
            Formulaire d'enregistrement
          </h4>
        </div>

        <div className="card-body">

          <form onSubmit={handleSubmit}>

            <FormInput
              label="Nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />

            <FormInput
              label="Prénom"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              required
            />

            <FormInput
              label="Téléphone"
              name="telephone"
              type="tel"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="+25769123456"
              pattern="[+][1-9][0-9]{7,14}"
              title="Entrez un numero internationale valide, par exemple +25769123456"
              required
            />

            <FormInput
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <FormInput
              label="Date de naissance"
              name="dateNaissance"
              type="date"
              value={formData.dateNaissance}
              onChange={handleChange}
              max={new Date().toISOString().split('T')[0]}
              required
            />

            <FormSelect
              label="Nationalité"
              name="nationalite"
              value={formData.nationalite}
              onChange={handleChange}
              required
              options={[
                { value: 'burundaise', label: 'Burundaise' },
                { value: 'rwandaise', label: 'Rwandaise' },
                { value: 'congolaise', label: 'Congolaise' },
                { value: 'tanzanienne', label:'Kenya'},
                { value: 'autre', label: 'Autre' }
              ]}
            />

            <FormSelect
              label="Rôle"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              options={[
                { value: 'admin', label: 'Administrateur' },
                { value: 'client', label: 'Client' },
                { value: 'vendeur', label: 'Vendeur' }
              ]}
            />

            <FormSelect
              label="Type de personne"
              name="typePersonne"
              value={formData.typePersonne}
              onChange={handleChange}
              required
              options={[
                { value: 'physique', label: 'Personne physique' },
                { value: 'morale', label: 'Personne morale' }
              ]}
            />

            <FormInput
              label="Mot de passe"
              name="motDePasse"
              type="password"
              value={formData.motDePasse}
              onChange={handleChange}
              required
            />

            {message && (
              <div className="alert alert-success">
                {message}
              </div>
            )}

            <div className="text-end">

              <button
                type="submit"
                className="btn btn-secondary px-4"
              >
                Save
              </button>

            </div>

          </form>

        </div>
      </div>
    </div>
  );
}

export default PersonForm;