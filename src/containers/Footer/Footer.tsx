import { MdOutlineEmail } from 'react-icons/md';
import { IoLogoTwitch } from 'react-icons/io';
import { FaInstagram } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';

import * as S from './Footer.styles';

export const Footer = () => {
  return (
    <S.Footer>
      <S.Footer__Content>
        <S.Footer__Navigate>
          <S.Footer__Content__Title>
            <h3>Viní Viseman</h3>
            <p>Transformando Disciplina em Realização</p>
          </S.Footer__Content__Title>

          <S.Footer__Navigate__List>
            <dt>Links</dt>
            <dd>
              <a href="#">Home</a>
            </dd>
            <dd>
              <a href="#">Sobre</a>
            </dd>
            <dd>
              <a href="#">Blog</a>
            </dd>
            <dd>
              <a href="#">Soluções</a>
            </dd>
            <dd>
              <a href="#">Comunidade</a>
            </dd>
          </S.Footer__Navigate__List>

          <S.Footer__Navigate__List>
            <dt>Contato</dt>
            <dd>
              <a href="#">
                <MdOutlineEmail />
                contato@viniviseman.com.br
              </a>
            </dd>
            <dd>
              <a href="#">
                <IoLogoTwitch />
                /viniviseman
              </a>
            </dd>
            <dd>
              <a href="#">
                <FaInstagram />
                @viniviseman
              </a>
            </dd>
            <dd>
              <a href="#">
                <FiYoutube />
                @viniviseman
              </a>
            </dd>
            <dd>
              <a href="#">
                <FiLinkedin />
                /viniviseman
              </a>
            </dd>
          </S.Footer__Navigate__List>

          <S.Footer__Navigate__Newsletter>
            <h3>Newsletter</h3>

            <form>
              <input type="email" placeholder="Seu email" />
              <button>Inscrever</button>
            </form>
          </S.Footer__Navigate__Newsletter>
        </S.Footer__Navigate>

        <S.Footer__Border />

        <S.Footer__Copyright>
          <p>&copy; 2025 Viní Viseman. Todos os direitos reservados.</p>
        </S.Footer__Copyright>
      </S.Footer__Content>
    </S.Footer>
  );
};
