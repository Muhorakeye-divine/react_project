
import { useState, useEffect } from 'react';

import FormInput from '../../components/InputForm/Input';
import FormSelect from '../../components/SelectForm/select';

const emptyForm = {
  nom: '',
  prenom: '',
  telephone: '',
  email: '',
  dateNaissance: '',
  nationalite: '',
  role: '',
  typePersonne: '',
  motDePasse: ''
};

function PersonForm({ onSave, initialData }) {

  const [formData, setFormData] = useState(emptyForm);
  const [message, setMessage] = useState('');

  // Charger les informations en cas de modification
  useEffect(() => {
    setFormData(initialData || emptyForm);
    setMessage('');
  }, [initialData]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setMessage('');
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSave(formData);

    setMessage(
      initialData
        ? 'Les informations ont été modifiées avec succès !'
        : 'La personne a été enregistrée avec succès !'
    );

    setFormData(emptyForm);
  }

  return (
    <div className="card shadow-sm mb-4">

      <div className="card-header bg-secondary text-white">
        <h4 className="mb-0">
          {initialData ? 'Modifier une personne' : 'Formulaire d’enregistrement'}
        </h4>
      </div>

      <div className="card-body">

        <form onSubmit={handleSubmit}>

          <FormInput label="Nom" name="nom"
            value={formData.nom} onChange={handleChange} required />

          <FormInput label="Prénom" name="prenom"
            value={formData.prenom} onChange={handleChange} required />

          <FormInput label="Téléphone" name="telephone"
            type="tel" value={formData.telephone}
            onChange={handleChange}
            placeholder="+25769123456"
            pattern="[+][1-9][0-9]{7,14}"
            title="Entrez un numéro international valide"
            required />

          <FormInput label="Email" name="email"
            type="email" value={formData.email}
            onChange={handleChange} required />

          <FormInput label="Date de naissance" name="dateNaissance"
            type="date" value={formData.dateNaissance}
            onChange={handleChange}
            max={new Date().toISOString().split('T')[0]}
            required />

          <FormSelect label="Nationalité" name="nationalite"
            value={formData.nationalite}
            onChange={handleChange}
            required
            options={[
              { value: 'burundaise', label: 'Burundaise' },
              { value: 'rwandaise', label: 'Rwandaise' },
              { value: 'congolaise', label: 'Congolaise' },
              { value: 'kenyane', label: 'Kenyane' },
              { value: 'autre', label: 'Autre' }
            ]}
          />

          <FormSelect label="Rôle" name="role"
            value={formData.role} onChange={handleChange}
            required
            options={[
              { value: 'admin', label: 'Administrateur' },
              { value: 'client', label: 'Client' },
              { value: 'vendeur', label: 'Vendeur' }
            ]}
          />

          <FormSelect label="Type de personne" name="typePersonne"
            value={formData.typePersonne}
            onChange={handleChange}
            required
            options={[
              { value: 'physique', label: 'Personne physique' },
              { value: 'morale', label: 'Personne morale' }
            ]}
          />

          <FormInput label="Mot de passe" name="motDePasse"
            type="password" value={formData.motDePasse}
            onChange={handleChange} required />

          {message && (
            <div className="alert alert-success">
              {message}
            </div>
          )}

          <div className="text-end">

            <button type="submit" className="btn btn-secondary px-4">
              {initialData ? 'Modifier' : 'Enregistrer'}
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}

export default PersonForm;
