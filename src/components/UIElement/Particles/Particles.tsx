import ReactParticles from 'react-particles-js';
import { DARK_THEME_PARTICLES, LIGHT_THEME_PARTICLES } from '../../../constant/particles';
import { useThemeContext } from '../../../hooks/themeHook/useThemeHook';

const Particles = () => {
  const { dark } = useThemeContext();

  const particles = dark ? DARK_THEME_PARTICLES : LIGHT_THEME_PARTICLES;
  return (
    <ReactParticles
      params={{
        particles: particles as any,
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: 'push'
            }
          },
          modes: {
            push: {
              particles_nb: 1
            }
          }
        },
        retina_detect: true
      }}
    />
  );
};

export default Particles;
