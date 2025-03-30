import { useNavigate } from 'react-router-dom';

export default function titleButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/')} style={hub.button}>
      ⬅ Voltar ao Hub
    </button>
  );
}

const hub = {
    button: {
      marginTop: '20px',
      padding: '10px 20px',
      fontSize: '16px',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: '#C7C8CC',
      color: '#242424',
      cursor: 'pointer',
    },
  };