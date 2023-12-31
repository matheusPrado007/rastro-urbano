// AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/inicialPages/Home';
import Sobre from './pages/inicialPages/About';
import ProfilePage from './components/ProfileComponent';
import ArtList from './pages/inicialPages/Art';
import ArtPage from './components/ArtPage';
import Login from './pages/inicialPages/Login';
import AdmUser from './pages/admPages/AdmUser';
import ProfileAdmin from './pages/admPages/ProfileAdmin';
import ArtistAdmin from './pages/admPages/ArtistAdmin';
import ArtAdmin from './pages/admPages/ArtAdmin';
import ProfileAdminPost from './pages/admPages/ProfileAdminPost';
import ProfilePageEdit from './components/ProfilePageComponent';
import Artist from './pages/inicialPages/Artist';
import ArtPageEdit from './pages/admPages/ArtPagePostAdmin';
import ProfileArtist from './pages/artistPages/ProfileArtist';
import AdmArtist from './pages/artistPages/AdmArtist';
import ProfileArtistEdit from './pages/artistPages/ProfileArtistEdit';
import ProfileArtistPost from './pages/artistPages/ProfileArtistPost';
import ProfileArtistArtEdit from './pages/artistPages/ProfileArtistArtEdit';


const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/artes" element={<ArtList />} />
        <Route path="/artistas" element={<Artist/>} />
        <Route path="/arte/:id" element={<ArtPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admuser/:id" element={<AdmUser />} />
        <Route path="/admuser/:id/perfil/" element={<ProfileAdmin />} />
        <Route path="/admuser/:id/artistas" element={<ArtistAdmin/>} />
        <Route path="/admuser/:id/artes" element={<ArtAdmin />} />
        <Route path="/admuser/:id/profilepost" element={<ProfileAdminPost />} />
        <Route path="/admuser/:userId/admuser/:id/perfiladm" element={<ProfilePageEdit/>} />
        <Route path="/admuser/:id/artepost" element={<ArtPageEdit/>} />
        <Route path="/profileartist/:id" element={<ProfileArtist />} />
        <Route path="/admartist/:id" element={<AdmArtist />} />
        <Route path="/admartist/:id/profile" element={<ProfileArtistEdit />} />
        <Route path="/admartist/:id/artepost" element={<ProfileArtistPost />} />
        <Route path="/admartist/:id/arteedit" element={<ProfileArtistArtEdit />} />

      </Routes>
    </Router>
  );
};

export default AppRouter;
