import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SelectGround = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const game = location.state?.game;

  React.useEffect(() => {
    if (game) {
      switch (game.toLowerCase()) {
        case 'cricket':
          navigate('/select-cricket-ground');
          break;
        case 'football':
          navigate('/select-football-ground');
          break;
        case 'badminton':
          navigate('/select-badminton-ground');
          break;
        default:
          navigate('/');
      }
    }
  }, [game, navigate]);

  return null;
};

export default SelectGround;