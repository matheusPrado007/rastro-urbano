import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useApi } from '../services/context/ApiContext';
import '../styles/Profile.css';
import Header from './Header';
import Footer from './Footer';
import Loading from './Loading';
import InstagramLogo from '../assets/instagram.png'; 
import LinkedInLogo from '../assets/linkedin.png'; 
import EmailLogo from '../assets/email.png'; 

interface User {
  _id: number;
  username: string;
  foto_capa: string;
  foto_perfil: string;
  descricao_perfil: string;
  email: string;
  linkedin: string;
  instagram: string;
}

const ProfilePage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [user, setUser] = useState<User | null>(null);


  const { dadosUsers } = useApi();

  useEffect(() => {
    if (id) {
      const foundUser = dadosUsers.find((u) => u._id === id);

      if (foundUser) {
        setUser(foundUser);
      } else {
        console.error('Usuário não encontrado');
      }
    }
  }, [id, dadosUsers]);

  return (
    <div>
      <Header />

      <div className="profile-container">
        {user && (
          <div>
            <img src={user.foto_capa} alt={`Capa de ${user.username}`} className="cover-photo" />
            <div className='description-data'>
              <img src={user.foto_perfil} alt={`Foto de perfil de ${user.username}`} className="profile-photo" />
              <p className='responsibility-p'>Co-fundador do Rastro Urbano</p>
            </div>
            <div className="user-info">
            <div className="social-links">
              <a href={`mailto:${user.email}`}>
                <img src={EmailLogo} alt="E-mail" className="social-logo-profile" />
              </a>
              <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
                <img src={LinkedInLogo} alt="LinkedIn" className="social-logo-profile" />
              </a>
              <a href={user.instagram} target="_blank" rel="noopener noreferrer">
                <img src={InstagramLogo} alt="Instagram" className="social-logo-profile" />
              </a>
            </div>
              <p>{user.username}</p>
            </div>
            <div className='description-p'>
              <p>{user.descricao_perfil}</p>
            </div>
            
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
