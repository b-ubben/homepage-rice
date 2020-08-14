import Head from 'next/head';
import styled from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';
import Wrapper from '../components/Wrapper';

export default function IndexPage() {
  function timeOfDay() {
    const hour = new Date().getHours();

    if (hour < 12 && hour > 5) {
      return 'Morning';
    }

    if (hour < 18 && hour > 12) {
      return 'Afternoon';
    }

    return 'Evening';
  }

  const welcomeText = `Good ${timeOfDay()}, Brandon`;
  const links = [
    { href: 'https://coinmarketcap.com', text: 'CoinMarketCap' },
    { href: 'https://coingecko.com', text: 'CoinGecko' },
    { href: 'https://gandhiji.io/ind/', text: 'Gandhiji' },
    { href: 'https://phemex.com', text: 'Phemex' },
    { href: 'https://primexbt.com', text: 'PrimeXBT' },
    { href: 'https://tradingview.com', text: 'Trading View' },
    { href: 'https://youtube.com', text: 'YouTube' },
  ];

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>{welcomeText}</title>
      </Head>
      <Wrapper>
        <header style={{ paddingTop: '1rem', paddingLeft: '1rem' }}>
          <div className="text-comment">// {welcomeText}</div>
          <div className="text-comment">// Links to your favorite things</div>
        </header>
        <article style={{ paddingLeft: '1rem' }}>
          <div style={{ display: 'flex' }}>
            <div className="text-cyan italic">const&nbsp;</div>
            <div className="text-pink">links = [</div>
          </div>
          <ul>
            {links.map(link => (
              <li style={{ paddingLeft: '2rem' }}>
                <a
                  className="text-yellow"
                  rel="noreferrer noopener"
                  target="_blank"
                  href={link.href}
                >
                  <span>'</span>
                  <span>{link.text}</span>
                  <span>'</span>
                </a>
                <span className="text-white">,</span>
              </li>
            ))}
          </ul>
          <div className="text-pink">];</div>
        </article>
      </Wrapper>
    </>
  );
}
