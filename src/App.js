import logo from './logo.svg';
import './App.css';

import HandsOn1 from './HandsOn-1/Pages/Home/home';
import HandsOn2 from './HandsOn-2/Pages/Home/home';
import HandsOn3 from './HandsOn-3/Pages/Home/home';
import HandsOn4 from './HandsOn-4/Pages/Home/home';
import HandsOn5 from './HandsOn-5/Pages/Home/home';
import HandsOn6 from './HandsOn-6/Pages/Home/home';
import HandsOn7 from './HandsOn-7/Pages/Home/home';
import AppRoute from './HandsOn-8/Pages/Home/home';

function App() {
  return (
    <div className='App'>
      <section className='Gif'>
        <div className='container pt-3'>

          {/* HandsOn-1 */}
          <HandsOn1 />
          {/* akhir HandsOn-1 */}

          {/* <div className="col-md-5 hr"> */}
            <hr></hr>
          {/* </div> */}

          {/* HandsOn-2 */}
            <HandsOn2 />
          {/* akhir HandsOn-2 */}

          <hr></hr>

          {/* HandsOn-3 */}
            <HandsOn3 />
          {/* akhir HandsOn-3 */}

          <hr></hr>

          {/* HandsOn-4 */}
          <HandsOn4 />
          {/* akhir HandsOn-4 */}

          <hr></hr>

          {/* HandsOn-5 */}
          <HandsOn5 />
          {/* akhir HandsOn-5 */}

          <hr></hr>

          {/* HandsOn-6 */}
          <HandsOn6 />
          {/* akhir HandsOn-6 */}

          <hr></hr>

          {/* HandsOn-7 */}
          <HandsOn7 />
          {/* akhir HandsOn-7 */}

          <hr></hr>

          {/* HandsOn-7 */}
          <AppRoute />
          {/* akhir HandsOn-7 */}

        </div>
      </section>
    </div>
  )
}

export default App;