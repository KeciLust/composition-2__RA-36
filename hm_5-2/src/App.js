
import './App.css';
import NewsLines from './components/NewsLines';
import Options from './components/Options';
import themes from './content/themes';
import news from './content/news';
import sections from './content/sections';
import Search from './components/Search';
import search from './content/search';
import Ad from './components/Ad';
import ad from './content/ad';
import Cards from './components/Cards';
import cards from './content/cards';

function App() {
 
  

  return (
    <>
      <Options themes={themes} />
      <NewsLines news={news} />
      <Options themes={sections} />
      <Search search={search} />
      <Ad ad={ad} />
      <Cards cards={cards} />
    </>
  )
}

export default App;
