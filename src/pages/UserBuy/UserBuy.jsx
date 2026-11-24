import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../../data/products';
import './UserBuy.css';

function Checkout() {

  //Récupérer l'identifiant dans l'URL
  const { id } = useParams();

  // Retrouver le produit correspondant
  const product = products.find(
    (item) => item.id === Number(id)
  );

  //Créer l'état du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  //Récupérer les valeurs saisies
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  //Gérer l'envoi du formulaire
  function handleSubmit(event) {
    event.preventDefault();

    console.log('Informations du client :', formData);
    console.log('Produit commandé :', product);

    alert('Demande accepter!');
  }

  // Si le produit n'existe pas
  if (!product) {
    return (
      <div>
        <h2>Produit introuvable</h2>
        <Link to="/">Retour aux produits</Link>
      </div>
    );
  }

  return (
    <div className="checkout-container">

      <h1>Finaliser votre commande</h1>

      {/* Informations du produit */}
      <div className="checkout-product">

        <img
          src={product.image}
          alt={product.name}
        />

        <div>
          <h2>{product.name}</h2>

          <p>
            Prix : {product.price.toLocaleString('fr-FR')} Fbu
          </p>

          <p>Catégorie : {product.category}</p>
          <p>Localisation : {product.location}</p>
        </div>

      </div>

      {/* Formulaire du client */}
      <form onSubmit={handleSubmit}>

        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="name@gmail.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          placeholder="Your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Address</label>
        <textarea
          name="address"
          placeholder="Your delivery address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Confirm 
        </button>

      </form>

    </div>
  );
}

export default Checkout;
