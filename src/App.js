import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AfricaDebtChina from './components/Blog/blog-pages/AfricaDebtChina';
import Airbnb from './components/Blog/blog-pages/Airbnb';
import ArtificialIntelligence from './components/Blog/blog-pages/ArtificialIntelligence';
import Autogas from './components/Blog/blog-pages/Autogas';
import BreakTheBias from './components/Blog/blog-pages/BreakTheBias';
import CassavaProducer from './components/Blog/blog-pages/CassavaProducer';
import CommonMistakes from './components/Blog/blog-pages/CommonMistakes';
import BusinessResilience from './components/Blog/blog-pages/BusinessResilience';
import Divesting from './components/Blog/blog-pages/Divesting';
import EarlyStage from './components/Blog/blog-pages/EarlyStage';
import FindingTalent from './components/Blog/blog-pages/FindingTalent';
import FlightDelays from './components/Blog/blog-pages/FlightDelays';
import Incubators from './components/Blog/blog-pages/Incubators';
import NigeriaBill from './components/Blog/blog-pages/NigeriaBill';
import NigeriaDebt from './components/Blog/blog-pages/NigeriaDebt';
import NigeriaFintech from './components/Blog/blog-pages/NigeriaFintech';
import NigeriaWage from './components/Blog/blog-pages/NigeriaWage';
import SeedFunding from './components/Blog/blog-pages/SeedFunding';
import SharingEco from './components/Blog/blog-pages/SharingEco';
import StartUpTrends22 from './components/Blog/blog-pages/StartUpTrends22';
import Footer from './components/Footer';
import Header from './components/Header';
import ErrorPage from './pages/404';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import CookiePolicy from './pages/CookiePolicy';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Services from './pages/Services';
import Terms from './pages/Terms';
import AfricaIsPredicted from './components/Blog/blog-pages/AfricaIsPredicted';

function App() {
    function toText(node) {
        let tag = document.createElement('div');
        tag.innerHTML = node;
        node = tag.innerText;
        return node;
    }

    function shortenText(text, startingPoint, maxLength) {
        return text.length > maxLength
            ? text.slice(startingPoint, maxLength)
            : text;
    }

    function removeDash(arr) {
        arr.forEach((element, index) => {
            arr[index] = element.replaceAll('-', '');
        });

        return arr;
    }

    function createMarkup(obj) {
        return { __html: obj.content };
    }

    function removeSpace(arr) {
        arr.forEach((element, index) => {
            arr[index] = element.replaceAll(' ', '');
        });
        return arr;
    }

    function removeDashAndJoin(arr) {
        arr.forEach((element, index) => {
            arr[index] = element.replaceAll('-', ' ');
        });

        return arr.join(', ');
    }
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                {/* Redirect Old Links */}
                <Route
                    path='/learning'
                    element={<Navigate to='/services#learning' />}
                />
                <Route
                    path='/advisory'
                    element={<Navigate to='/services#advisory' />}
                />
                <Route
                    path='/analytics'
                    element={<Navigate to='/services#analytics' />}
                />
                <Route
                    path='/strategy'
                    element={<Navigate to='/services#strategy' />}
                />
                <Route
                    path='/fundraising'
                    element={<Navigate to='/services#fundraising' />}
                />

                <Route
                    path='/blog'
                    element={
                        <Blog
                            toText={toText}
                            shortenText={shortenText}
                            removeDash={removeDash}
                        />
                    }
                />
                <Route path='/contact' element={<Contact />} />
                <Route path='/terms-and-conditions' element={<Terms />} />
                {/* Redirect Old Links */}
                <Route
                    path='/terms'
                    element={<Navigate to='/terms-and-conditions' />}
                />
                <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                {/* Redirect Old Links */}
                <Route
                    path='/privacypolicy'
                    element={<Navigate to='/privacy-policy' />}
                />
                <Route path='/cookie-policy' element={<CookiePolicy />} />
                {/* Redirect Old Links */}
                <Route
                    path='/cookiepolicy'
                    element={<Navigate to='/cookie-policy' />}
                />
                <Route path='*' element={<ErrorPage />} />

                {/* Blog Pages */}
                <Route
                    path='/blog/harnessing-the-power-of-artificial-intelligence-to-simplify-bookkeeping'
                    element={
                        <ArtifialIntelligence
                            toText={toText}
                            removeDashAndJoin={removeDashAndJoin}
                            removeSpace={removeSpace}
                            createMarkup={createMarkup}
                            shortenText={shortenText}
                         />
                     }
                 />
                 <Route
                    path='/blog/nigeria-is-the-biggest-cassava-producer-in-the-world-why-isnt-it-cashing-in-on-the-global-market'
                    element={
                        <CassavaProducer
                            toText={toText}
                            removeDashAndJoin={removeDashAndJoin}
                            removeSpace={removeSpace}
                            createMarkup={createMarkup}
                            shortenText={shortenText}
                        />
                    }
                />
                <Route
                    path='/blog/africa-is-predicted-to-experience-a-sustained-funding-slowdown-in-2023'
                    element={
                        <AfricaIsPredicted
                            toText={toText}
                            removeDashAndJoin={removeDashAndJoin}
                            removeSpace={removeSpace}
                            createMarkup={createMarkup}
                            shortenText={shortenText}
                        />
                    }
                />
                <Route
                    path='/blog/dimensions-of-business-resilience-from-ceos-standpoint'
                    element={
                        <BusinessResilience
                            toText={toText}
                            removeDashAndJoin={removeDashAndJoin}
                            removeSpace={removeSpace}
                            createMarkup={createMarkup}
                            shortenText={shortenText}
                        />
                    }
                />
                <Route
                    path='/blog/common-mistakes-first-time-founders-make'
                    element={
                        <CommonMistakes
                            toText={toText}
                            removeDashAndJoin={removeDashAndJoin}
                            removeSpace={removeSpace}
                            createMarkup={createMarkup}
                            shortenText={shortenText}
                        />
                    }
                />
                <Route
                    path='/blog/4-early-stage-start-up-marketing-ideas'
                    element={
                        <EarlyStage
                            toText={toText}
                            removeDashAndJoin={removeDashAndJoin}
                            removeSpace={removeSpace}
                            createMarkup={createMarkup}
                            shortenText={shortenText}
                        />
                    }
                />
                <Route
                    path='/blog/on-seed-funding'
                    element={
                        <SeedFunding
                            toText={toText}
                            removeDashAndJoin={removeDashAndJoin}
                            removeSpace={removeSpace}
                            createMarkup={createMarkup}
                            shortenText={shortenText}
                        />
                    }
                />

                <Route
                    path='/blog/how-airbnb-and-uber-got-their-first-customers'
                    element={
                        <Airbnb
                            toText={toText}
                            removeDashAndJoin={removeDashAndJoin}
                            removeSpace={removeSpace}
                            createMarkup={createMarkup}
                            shortenText={shortenText}
                        />
                    }
                />

                <Route
                    path='/blog/sharing-economy-uber-and-airbnb'
                    element={
                        <SharingEco
                            toText={toText}
                            removeDashAndJoin={removeDashAndJoin}
                            removeSpace={removeSpace}
                            createMarkup={createMarkup}
                            shortenText={shortenText}
                        />
                    }
                />

                <Route
                    path='/blog/africas-debt-to-china'
                    element={
                        <AfricaDebtChina
                            toText={toText}
                            removeDashAndJoin={removeDashAndJoin}
                            removeSpace={removeSpace}
                            createMarkup={createMarkup}
                            shortenText={shortenText}
                        />
                    }
                />

                <Route
                    path='/blog/incubators-vs-accelerators'
                    element={
                        <Incubators
                            toText={toText}
                            removeDashAndJoin={removeDashAndJoin}
                            removeSpace={removeSpace}
                            createMarkup={createMarkup}
                            shortenText={shortenText}
                        />
                    }
                />

                <Route
                    path='/blog/flight-delays-in-nigeria'
                    element={
                        <FlightDelays
                            toText={toText}
                            removeDashAndJoin={removeDashAndJoin}
                            removeSpace={removeSpace}
                            createMarkup={createMarkup}
                            shortenText={shortenText}
                        />
                    }
                />

                <Route
                    path='/blog/nigerias-fintech-financial-inclusion'
                    element={
                        <NigeriaFintech
                            toText={toText}
                            removeDashAndJoin={removeDashAndJoin}
                            removeSpace={removeSpace}
                            createMarkup={createMarkup}
                            shortenText={shortenText}
                        />
                    }
                />

                <Route
                    path='/blog/nigerias-minimum-wage'
                    element={
                        <NigeriaWage
                            toText={toText}
                            removeDashAndJoin={removeDashAndJoin}
                            removeSpace={removeSpace}
                            createMarkup={createMarkup}
                            shortenText={shortenText}
                        />
                    }
                />

                <Route
                    path='/blog/nigerias-debt-situation'
                    element={
                        <NigeriaDebt
                            toText={toText}
                            removeDashAndJoin={removeDashAndJoin}
                            removeSpace={removeSpace}
                            createMarkup={createMarkup}
                            shortenText={shortenText}
                        />
                    }
                />

                <Route
                    path='/blog/breakthebias-everything-you-need-to-know-about-international-womens-day-and-the-theme-for-2022'
                    element={
                        <BreakTheBias
                            toText={toText}
                            removeDashAndJoin={removeDashAndJoin}
                            removeSpace={removeSpace}
                            createMarkup={createMarkup}
                            shortenText={shortenText}
                        />
                    }
                />

                <Route
                    path='/blog/why-international-oil-companies-are-divesting-from-nigeria'
                    element={
                        <Divesting
                            toText={toText}
                            removeDashAndJoin={removeDashAndJoin}
                            removeSpace={removeSpace}
                            createMarkup={createMarkup}
                            shortenText={shortenText}
                        />
                    }
                />

                <Route
                    path='/blog/will-autogas-surpass-petrol-to-become-the-new-fuel-in-nigeria'
                    element={
                        <Autogas
                            toText={toText}
                            removeDashAndJoin={removeDashAndJoin}
                            removeSpace={removeSpace}
                            createMarkup={createMarkup}
                            shortenText={shortenText}
                        />
                    }
                />
                {/* Redirect Old Links */}
                <Route
                    path='/blog/autogas'
                    element={
                        <Navigate to='/blog/will-autogas-surpass-petrol-to-become-the-new-fuel-in-nigeria' />
                    }
                />

                <Route
                    path='/blog/startup-trends-in-2022'
                    element={
                        <StartUpTrends22
                            toText={toText}
                            removeDashAndJoin={removeDashAndJoin}
                            removeSpace={removeSpace}
                            createMarkup={createMarkup}
                            shortenText={shortenText}
                        />
                    }
                />
                {/* Redirect Old Links */}
                <Route
                    path='/blog/startuptrends'
                    element={<Navigate to='/blog/startup-trends-in-2022' />}
                />

                <Route
                    path='/blog/the-nigerian-start-up-bill'
                    element={
                        <NigeriaBill
                            toText={toText}
                            removeDashAndJoin={removeDashAndJoin}
                            removeSpace={removeSpace}
                            createMarkup={createMarkup}
                            shortenText={shortenText}
                        />
                    }
                />
                {/* Redirect Old Links */}
                <Route
                    path='/blog/nsb'
                    element={<Navigate to='/blog/the-nigerian-start-up-bill' />}
                />

                <Route
                    path='/blog/finding-talent-for-growth'
                    element={
                        <FindingTalent
                            toText={toText}
                            removeDashAndJoin={removeDashAndJoin}
                            removeSpace={removeSpace}
                            createMarkup={createMarkup}
                            shortenText={shortenText}
                        />
                    }
                />
                {/* Blog Pages */}
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
