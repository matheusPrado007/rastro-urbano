import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useApi } from '../services/context/ApiContext';
import '../styles/ArtPage.css';
import Header from './Header';
import Footer from './Footer';
import Loading from './Loading';
import iconFechar from '../assets/fechar.png'


interface GaleriaItem {
  _id: string;
  foto: string;
  nome_artista: string;
  nome: string;
  endereco: string;
  descricao: string;
  uf: string;
  cidade: string
}

const ArtPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [art, setArt] = useState<GaleriaItem | null>(null);
  const { dadosArtes } = useApi();
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1300);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (id) {
      const foundArt = dadosArtes.find((u) => u._id === id);
      console.log('art', foundArt);

      if (foundArt) {
        setArt(foundArt);
      } else {
        console.error('Usuário não encontrado');
      }
    }
  }, [id, dadosArtes]);

  return (
    <div>
      <Header />
      {isLoading && <Loading />}
      <div className="art-container-page">
        {art ? (
          <div>
            <div>
              <a href={`/`} ><img src={iconFechar} alt="icon fechar" className='x-back-home' /></a>
              <p className='description-p-art'>{art.nome}</p>
            </div>
            <img src={art.foto} alt={`Capa de ${art.nome}`} className="art-photo" />
            <div className="art-descript">
              <p>{art.descricao}</p>
            </div>

            <div className="art-info">
              <p> Artista(s): {art.nome_artista}</p>
            </div>
            <div className="art-info">
              <p> Estado: {art.uf}</p>
            </div>
            <div className="art-info">
              <p> Cidade: {art.cidade}</p>
            </div>
            <div className="art-info">
              <p> Endereço: {art.endereco}</p>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ArtPage;
