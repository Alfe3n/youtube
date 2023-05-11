import './App.css'

function App() {
  return (
    <div className="App">
      <>
        <header className="header">
          <div className="left-section">
            <img alt="menu" className="hamburger-menu" src="../svg/hamburger-menu.svg" />
            <img alt="logo" className="youtube-logo" src="../svg/youtube-logo.svg" />
          </div>
          <div className="middle-section">
            <input type="text" placeholder="Search" className="searchbar" />
            <button className="search-button">
              <img alt="pic" className="search-icon" src="../svg/search.svg" />
              <div className="tooltip">Search</div>
            </button>
            <button className="voice-search-button">
              <img alt="pic" className="voice-icon" src="../svg/voice-search-icon.svg" />
              <div className="tooltip">Search with your voice</div>
            </button>
          </div>
          <div className="right-section">
            <div className="upload-icon-container">
              <img alt="pic" className="upload-icon" src="../svg/upload.svg" />
              <div className="tooltip">Create</div>
            </div>
            <div className="apps-icon-container">
              <img alt="pic" className="apps-icon" src="../svg/youtube-apps.svg" />
              <div className="tooltip">Youtube-Apps</div>
            </div>
            <div className="notification-icon-container">
              <div className="notification-count">3</div>
              <img alt="pic" className="notification-icon" src="../svg/notifications.svg" />
              <div className="tooltip">Notifications</div>
            </div>
            <img alt="pic" className="user-pic" src="../svg/index.jpg" />
          </div>
          <nav className="sidebar">
            <div className="sidebar-link">
              <img alt="pic" src="../svg/home.svg" />
              <div className="name">Home</div>
            </div>
            <div className="sidebar-link">
              <img alt="pic" src="../svg/explore.svg" />
              <div>Explore</div>
            </div>
            <div className="sidebar-link">
              <img alt="pic" src="../svg/subscriptions.svg" />
              <div>Subscriptions</div>
            </div>
            <div className="sidebar-link">
              <img alt="pic" src="../svg/originals.svg" />
              <div>originals</div>
            </div>
            <div className="sidebar-link">
              <img alt="pic" src="../svg/youtube-music.svg" />
              <div>Youtube Music</div>
            </div>
            <div className="sidebar-link">
              <img alt="pic" src="../svg/library.svg" />
              <div>Library</div>
            </div>
          </nav>
        </header>
        <main>
          <div className="maingrid">
            <div className="video-preview">
              <div className="thumpnail-row">
                <a href="https://www.youtube.com/watch?v=n2RNcPRtAiY">
                  <img className="thumpnail" src="../thumbnail/thumbnail-1.webp" alt="pic" />
                </a>
                <div className="video-time">14:20</div>
              </div>
              <div className="video-info-grid">
                <div className="channel-pic">
                  <a href="https://www.youtube.com/c/mkbhd">
                    <img className="profile-pic" src="../channel/channel-1.jpeg" alt="pic" />
                  </a>
                </div>
                <div className="video-info">
                  <a href="https://www.youtube.com/watch?v=n2RNcPRtAiY">
                    <p className="video-title">Talking Tech and AI with Google CEO Sundar Pichai!</p>
                  </a>
                  <a href="https://www.youtube.com/c/mkbhd">
                    <p className="video-author">Marques Brownlee</p>
                  </a>
                  <p className="video-stats">3.4M views · 6 months ago</p>
                </div>
              </div>
            </div>

            <div className="video-preview">
              <div className="thumpnail-row">
                <a href="https://www.youtube.com/watch?v=mP0RAo9SKZk">
                  <img alt="pic" className="thumpnail" src="../thumbnail/thumbnail-2.webp" />
                </a>
                <div className="video-time">8:22</div>
              </div>
              <div className="video-info-grid">
                <div className="channel-pic">
                  <a href="https://www.youtube.com/c/markiplier">
                    <img alt="pic" src="../channel/channel-2.jpeg" className="profile-pic" />
                  </a>
                </div>
                <div className="video-info">
                  <a href="https://www.youtube.com/watch?v=mP0RAo9SKZk">
                    <p className="video-title">Try Not To Laugh Challenge #9</p>
                  </a>
                  <a href="https://www.youtube.com/c/markiplier">
                    <p className="video-author">Markiplier</p>
                  </a>
                  <p className="video-stats">19M views · 4 years ago</p>
                </div>
              </div>
            </div>

            <div className="video-preview">
              <div className="thumpnail-row">
                <a href="https://www.youtube.com/watch?v=FgjPQQeTh1w">
                  <img alt="pic" className="thumpnail" src="../thumbnail/thumbnail-3.webp" />
                </a>
                <div className="video-time">9:13</div>
              </div>
              <div className="video-info-grid">
                <div className="channel-pic">
                  <a href="https://www.youtube.com/user/SSSniperWolf">
                    <img alt="pic" src="../channel/channel-3.jpeg" className="profile-pic" />
                  </a>
                </div>
                <div className="video-info">
                  <a href="https://www.youtube.com/watch?v=FgjPQQeTh1w">
                    <p className="video-title">Crazy Tik Toks Taken Moments Before DISASTER</p>
                  </a>
                  <a href="https://www.youtube.com/user/SSSniperWolf">
                    <p className="video-author">SSSniperWolf</p>
                  </a>

                  <p className="video-stats">12M views · 1 year ago</p>
                </div>
              </div>
            </div>

            <div className="video-preview">
              <div className="thumpnail-row">
                <a href="https://www.youtube.com/watch?v=094y1Z2wpJg">
                  <img alt="pic" className="thumpnail" src="../thumbnail/thumbnail-4.webp" />
                </a>
                <div className="video-time">22:09</div>
              </div>
              <div className="video-info-grid">
                <div className="channel-pic">
                  <a href="https://www.youtube.com/c/veritasium">
                    <img alt="pic" src="../channel/channel-4.jpeg" className="profile-pic" />
                  </a>
                </div>
                <div className="video-info">
                  <a href="https://www.youtube.com/watch?v=094y1Z2wpJg">
                    <p className="video-title">The Simplest Math Problem No One Can Solve - Collatz Conjecture</p>
                  </a>
                  <a href="https://www.youtube.com/c/veritasium">
                    <p className="video-author">Veritasium</p>
                  </a>

                  <p className="video-stats">18M views · 4 months ago</p>
                </div>
              </div>
            </div>

            <div className="video-preview">
              <div className="thumpnail-row">
                <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                  <img alt="pic" className="thumpnail" src="../thumbnail/thumbnail-5.webp" />
                </a>
                <div className="video-time">11:17</div>
              </div>
              <div className="video-info-grid">
                <div className="channel-pic">
                  <a href="https://www.youtube.com/c/CSDojo">
                    <img alt="pic" src="../channel/channel-5.jpeg" className="profile-pic" />
                  </a>
                </div>
                <div className="video-info">
                  <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                    <p className="video-title">Kadane's Algorithm to Maximum Sum Subarray Problem</p>
                  </a>
                  <a href="https://www.youtube.com/c/CSDojo">
                    <p className="video-author">CS Dojo</p>
                  </a>
                  <p className="video-stats">519K views · 5 years ago</p>
                </div>
              </div>
            </div>

            <div className="video-preview">
              <div className="thumpnail-row">
                <a href="https://www.youtube.com/watch?v=yXWw0_UfSFg">
                  <img alt="pic" className="thumpnail" src="../thumbnail/thumbnail-6.webp" />
                </a>
                <div className="video-time">19:59</div>
              </div>
              <div className="video-info-grid">
                <div className="channel-pic">
                  <a href="https://www.youtube.com/channel/UCX6OQ3DkcsbYNE6H8uQQuVA">
                    <img alt="pic" src="../channel/channel-6.jpeg" className="profile-pic" />
                  </a>
                </div>
                <div className="video-info">
                  <a href="https://www.youtube.com/watch?v=yXWw0_UfSFg">
                    <p className="video-title">Anything You Can Fit In The Circle I'll Pay For</p>
                  </a>
                  <a href="https://www.youtube.com/channel/UCX6OQ3DkcsbYNE6H8uQQuVA">
                    <p className="video-author">MrBeast</p>
                  </a>
                  <p className="video-stats">141M views · 1 year ago</p>
                </div>
              </div>
            </div>

            <div className="video-preview">
              <div className="thumpnail-row">
                <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                  <img alt="pic" className="thumpnail" src="../thumbnail/thumbnail-7.webp" />
                </a>
                <div className="video-time">10:13</div>
              </div>
              <div className="video-info-grid">
                <div className="channel-pic">
                  <a href="https://www.youtube.com/c/CSDojo">
                    <img alt="pic" src="/channel/channel-7.jpeg" className="profile-pic" />
                  </a>
                </div>
                <div className="video-info">
                  <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                    <p className="video-title">Why Planes Don't Fly Over Tibet</p>
                  </a>
                  <a href="https://www.youtube.com/c/CSDojo">
                    <p className="video-author">RealLifeLoreo</p>
                  </a>
                  <p className="video-stats">6.6M views · 1 year ago</p>
                </div>
              </div>
            </div>

            <div className="video-preview">
              <div className="thumpnail-row">
                <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                  <img alt="pic" className="thumpnail" src="../thumbnail/thumbnail-8.webp" />
                </a>
                <div className="video-time">7:12</div>
              </div>
              <div className="video-info-grid">
                <div className="channel-pic">
                  <a href="https://www.youtube.com/c/CSDojo">
                    <img alt="pic" src="../channel/channel-8.jpeg" className="profile-pic" />
                  </a>
                </div>
                <div className="video-info">
                  <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                    <p className="video-title">Inside The World's Biggest Passenger Plane</p>
                  </a>
                  <a href="https://www.youtube.com/c/CSDojo">
                    <p className="video-author">Tech Vision</p>
                  </a>
                  <p className="video-stats">3.7M views · 10 months ago</p>
                </div>
              </div>
            </div>

            <div className="video-preview">
              <div className="thumpnail-row">
                <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                  <img alt="pic" className="thumpnail" src="../thumbnail/thumbnail-9.webp" />
                </a>
                <div className="video-time">13:17</div>
              </div>
              <div className="video-info-grid">
                <div className="channel-pic">
                  <a href="https://www.youtube.com/c/CSDojo">
                    <img alt="pic" src="../channel/channel-9.jpeg" className="profile-pic" />
                  </a>
                </div>
                <div className="video-info">
                  <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                    <p className="video-title">The SECRET to Super Human STRENGTH</p>
                  </a>
                  <a href="https://www.youtube.com/c/CSDojo">
                    <p className="video-author">ThenX</p>
                  </a>
                  <p className="video-stats">20M views · 3 year ago</p>
                </div>
              </div>
            </div>

            <div className="video-preview">
              <div className="thumpnail-row">
                <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                  <img alt="pic" className="thumpnail" src="../thumbnail/thumbnail-10.webp" />
                </a>
                <div className="video-time">7:53</div>
              </div>
              <div className="video-info-grid">
                <div className="channel-pic">
                  <a href="https://www.youtube.com/c/CSDojo">
                    <img alt="pic" src="../channel/channel-10.jpeg" className="profile-pic" />
                  </a>
                </div>
                <div className="video-info">
                  <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                    <p className="video-title">How The World's Largest Cruise Ship Makes 30,000 Meals Every Day</p>
                  </a>
                  <a href="https://www.youtube.com/c/CSDojo">
                    <p className="video-author">Business Insider</p>
                  </a>
                  <p className="video-stats">14M views · 1 year ago</p>
                </div>
              </div>
            </div>

            <div className="video-preview">
              <div className="thumpnail-row">
                <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                  <img alt="pic" className="thumpnail" src="../thumbnail/thumbnail-11.webp" />
                </a>
                <div className="video-time">4:10</div>
              </div>
              <div className="video-info-grid">
                <div className="channel-pic">
                  <a href="https://www.youtube.com/c/CSDojo">
                    <img alt="pic" src="../channel/channel-11.jpeg" className="profile-pic" />
                  </a>
                </div>
                <div className="video-info">
                  <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                    <p className="video-title">Dubai's Crazy Underwater Train and Other Things #Only in Dubai</p>
                  </a>
                  <a href="https://www.youtube.com/c/CSDojo">
                    <p className="video-author">Destination Tips</p>
                  </a>
                  <p className="video-stats">3M views · 1 year ago</p>
                </div>
              </div>
            </div>

            <div className="video-preview">
              <div className="thumpnail-row">
                <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                  <img alt="pic" className="thumpnail" src="../thumbnail/thumbnail-12.webp" />
                </a>
                <div className="video-time">4:51</div>
              </div>
              <div className="video-info-grid">
                <div className="channel-pic">
                  <a href="https://www.youtube.com/c/CSDojo">
                    <img alt="pic" src="../channel/channel-12.jpeg" className="profile-pic" />
                  </a>
                </div>
                <div className="video-info">
                  <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                    <p className="video-title">What would happen if you didn’t drink water? - Mia Nacamulli</p>
                  </a>
                  <a href="https://www.youtube.com/c/CSDojo">
                    <p className="video-author">TED-Ed</p>
                  </a>
                  <p className="video-stats">12M views · 5 years ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* <nav className="footer">
            <div className="sidebar-link">
              <img src="../svg/home.svg" />
              <div className="name">Home</div>
            </div>
            <div className="sidebar-link">
              <img src="../svg/explore.svg" />
              <div>Explore</div>
            </div>
            <div className="sidebar-link">
              <img src="../svg/subscriptions.svg" />
              <div>Subscriptions</div>
            </div>
            <div className="sidebar-link">
              <img src="../svg/originals.svg" />
              <div>originals</div>
            </div>
            <div className="sidebar-link">
              <img src="../svg/youtube-music.svg" />
              <div>Youtube Music</div>
            </div>
            <div className="sidebar-link">
              <img src="../svg/library.svg" />
              <div>Library</div>
            </div>
          </nav> */}
        </main>
      </>
      <div className="footer"></div>
    </div>
  )
}

export default App
