import "./App.css";

function App() {
  return (
    <div className="App">
      <>
        <header class="header">
          <div class="left-section">
            <img class="hamburger-menu" src="../svg/hamburger-menu.svg" />
            <img class="youtube-logo" src="../svg/youtube-logo.svg" />
          </div>
          <div class="middle-section">
            <input type="text" placeholder="Search" class="searchbar" />
            <button class="search-button">
              <img class="search-icon" src="../svg/search.svg" />
              <div class="tooltip">Search</div>
            </button>
            <button class="voice-search-button">
              <img class="voice-icon" src="../svg/voice-search-icon.svg" />
              <div class="tooltip">Search with your voice</div>
            </button>
          </div>
          <div class="right-section">
            <div class="upload-icon-container">
              <img class="upload-icon" src="../svg/upload.svg" />
              <div class="tooltip">Create</div>
            </div>
            <div class="apps-icon-container">
              <img class="apps-icon" src="../svg/youtube-apps.svg" />
              <div class="tooltip">Youtube-Apps</div>
            </div>
            <div class="notification-icon-container">
              <div class="notification-count">3</div>
              <img class="notification-icon" src="../svg/notifications.svg" />
              <div class="tooltip">Notifications</div>
            </div>
            <img class="user-pic" src="../svg/index.jpg" />
          </div>
          <nav class="sidebar">
            <div class="sidebar-link">
              <img src="../svg/home.svg" />
              <div>Home</div>
            </div>
            <div class="sidebar-link">
              <img src="../svg/explore.svg" />
              <div>Explore</div>
            </div>
            <div class="sidebar-link">
              <img src="../svg/subscriptions.svg" />
              <div>Subscriptions</div>
            </div>
            <div class="sidebar-link">
              <img src="../svg/originals.svg" />
              <div>originals</div>
            </div>
            <div class="sidebar-link">
              <img src="../svg/youtube-music.svg" />
              <div>Youtube Music</div>
            </div>
            <div class="sidebar-link">
              <img src="../svg/library.svg" />
              <div>Library</div>
            </div>
          </nav>
        </header>

        <main>
          <div class="maingrid">
            <div class="video-preview">
              <div class="thumpnail-row">
                <a href="https://www.youtube.com/watch?v=n2RNcPRtAiY">
                  <img class="thumpnail" src="../thumbnail/thumbnail-1.webp" />
                </a>
                <div class="video-time">14:20</div>
              </div>
              <div class="video-info-grid">
                <div class="channel-pic">
                  <a href="https://www.youtube.com/c/mkbhd">
                    <img class="profile-pic" src="../channel/channel-1.jpeg" />
                  </a>
                </div>
                <div class="video-info">
                  <a href="https://www.youtube.com/watch?v=n2RNcPRtAiY">
                    <p class="video-title">
                      Talking Tech and AI with Google CEO Sundar Pichai!
                    </p>
                  </a>
                  <a href="https://www.youtube.com/c/mkbhd">
                    <p class="video-author">Marques Brownlee</p>
                  </a>
                  <p class="video-stats">3.4M views · 6 months ago</p>
                </div>
              </div>
            </div>

            <div class="video-preview">
              <div class="thumpnail-row">
                <a href="https://www.youtube.com/watch?v=mP0RAo9SKZk">
                  <img class="thumpnail" src="../thumbnail/thumbnail-2.webp" />
                </a>
                <div class="video-time">8:22</div>
              </div>
              <div class="video-info-grid">
                <div class="channel-pic">
                  <a href="https://www.youtube.com/c/markiplier">
                    <img src="\channel\channel-2.jpeg" class="profile-pic" />
                  </a>
                </div>
                <div class="video-info">
                  <a href="https://www.youtube.com/watch?v=mP0RAo9SKZk">
                    <p class="video-title">Try Not To Laugh Challenge #9</p>
                  </a>
                  <a href="https://www.youtube.com/c/markiplier">
                    <p class="video-author">Markiplier</p>
                  </a>
                  <p class="video-stats">19M views · 4 years ago</p>
                </div>
              </div>
            </div>

            <div class="video-preview">
              <div class="thumpnail-row">
                <a href="https://www.youtube.com/watch?v=FgjPQQeTh1w">
                  <img class="thumpnail" src="\thumbnail\thumbnail-3.webp" />
                </a>
                <div class="video-time">9:13</div>
              </div>
              <div class="video-info-grid">
                <div class="channel-pic">
                  <a href="https://www.youtube.com/user/SSSniperWolf">
                    <img src="\channel\channel-3.jpeg" class="profile-pic" />
                  </a>
                </div>
                <div class="video-info">
                  <a href="https://www.youtube.com/watch?v=FgjPQQeTh1w">
                    <p class="video-title">
                      Crazy Tik Toks Taken Moments Before DISASTER
                    </p>
                  </a>
                  <a href="https://www.youtube.com/user/SSSniperWolf">
                    <p class="video-author">SSSniperWolf</p>
                  </a>

                  <p class="video-stats">12M views · 1 year ago</p>
                </div>
              </div>
            </div>

            <div class="video-preview">
              <div class="thumpnail-row">
                <a href="https://www.youtube.com/watch?v=094y1Z2wpJg">
                  <img class="thumpnail" src="\thumbnail\thumbnail-4.webp" />
                </a>
                <div class="video-time">22:09</div>
              </div>
              <div class="video-info-grid">
                <div class="channel-pic">
                  <a href="https://www.youtube.com/c/veritasium">
                    <img src="\channel\channel-4.jpeg" class="profile-pic" />
                  </a>
                </div>
                <div class="video-info">
                  <a href="https://www.youtube.com/watch?v=094y1Z2wpJg">
                    <p class="video-title">
                      The Simplest Math Problem No One Can Solve - Collatz
                      Conjecture
                    </p>
                  </a>
                  <a href="https://www.youtube.com/c/veritasium">
                    <p class="video-author">Veritasium</p>
                  </a>

                  <p class="video-stats">18M views · 4 months ago</p>
                </div>
              </div>
            </div>

            <div class="video-preview">
              <div class="thumpnail-row">
                <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                  <img class="thumpnail" src="\thumbnail\thumbnail-5.webp" />
                </a>
                <div class="video-time">11:17</div>
              </div>
              <div class="video-info-grid">
                <div class="channel-pic">
                  <a href="https://www.youtube.com/c/CSDojo">
                    <img src="\channel\channel-5.jpeg" class="profile-pic" />
                  </a>
                </div>
                <div class="video-info">
                  <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                    <p class="video-title">
                      Kadane's Algorithm to Maximum Sum Subarray Problem
                    </p>
                  </a>
                  <a href="https://www.youtube.com/c/CSDojo">
                    <p class="video-author">CS Dojo</p>
                  </a>
                  <p class="video-stats">519K views · 5 years ago</p>
                </div>
              </div>
            </div>

            <div class="video-preview">
              <div class="thumpnail-row">
                <a href="https://www.youtube.com/watch?v=yXWw0_UfSFg">
                  <img class="thumpnail" src="\thumbnail\thumbnail-6.webp" />
                </a>
                <div class="video-time">19:59</div>
              </div>
              <div class="video-info-grid">
                <div class="channel-pic">
                  <a href="https://www.youtube.com/channel/UCX6OQ3DkcsbYNE6H8uQQuVA">
                    <img src="\channel\channel-6.jpeg" class="profile-pic" />
                  </a>
                </div>
                <div class="video-info">
                  <a href="https://www.youtube.com/watch?v=yXWw0_UfSFg">
                    <p class="video-title">
                      Anything You Can Fit In The Circle I’ll Pay For
                    </p>
                  </a>
                  <a href="https://www.youtube.com/channel/UCX6OQ3DkcsbYNE6H8uQQuVA">
                    <p class="video-author">MrBeast</p>
                  </a>
                  <p class="video-stats">141M views · 1 year ago</p>
                </div>
              </div>
            </div>

            <div class="video-preview">
              <div class="thumpnail-row">
                <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                  <img class="thumpnail" src="\thumbnail\thumbnail-7.webp" />
                </a>
                <div class="video-time">10:13</div>
              </div>
              <div class="video-info-grid">
                <div class="channel-pic">
                  <a href="https://www.youtube.com/c/CSDojo">
                    <img src="\channel\channel-7.jpeg" class="profile-pic" />
                  </a>
                </div>
                <div class="video-info">
                  <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                    <p class="video-title">Why Planes Don't Fly Over Tibet</p>
                  </a>
                  <a href="https://www.youtube.com/c/CSDojo">
                    <p class="video-author">RealLifeLoreo</p>
                  </a>
                  <p class="video-stats">6.6M views · 1 year ago</p>
                </div>
              </div>
            </div>

            <div class="video-preview">
              <div class="thumpnail-row">
                <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                  <img class="thumpnail" src="\thumbnail\thumbnail-8.webp" />
                </a>
                <div class="video-time">7:12</div>
              </div>
              <div class="video-info-grid">
                <div class="channel-pic">
                  <a href="https://www.youtube.com/c/CSDojo">
                    <img src="\channel\channel-8.jpeg" class="profile-pic" />
                  </a>
                </div>
                <div class="video-info">
                  <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                    <p class="video-title">
                      Inside The World's Biggest Passenger Plane
                    </p>
                  </a>
                  <a href="https://www.youtube.com/c/CSDojo">
                    <p class="video-author">Tech Vision</p>
                  </a>
                  <p class="video-stats">3.7M views · 10 months ago</p>
                </div>
              </div>
            </div>

            <div class="video-preview">
              <div class="thumpnail-row">
                <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                  <img class="thumpnail" src="\thumbnail\thumbnail-9.webp" />
                </a>
                <div class="video-time">13:17</div>
              </div>
              <div class="video-info-grid">
                <div class="channel-pic">
                  <a href="https://www.youtube.com/c/CSDojo">
                    <img src="\channel\channel-9.jpeg" class="profile-pic" />
                  </a>
                </div>
                <div class="video-info">
                  <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                    <p class="video-title">
                      The SECRET to Super Human STRENGTH
                    </p>
                  </a>
                  <a href="https://www.youtube.com/c/CSDojo">
                    <p class="video-author">ThenX</p>
                  </a>
                  <p class="video-stats">20M views · 3 year ago</p>
                </div>
              </div>
            </div>

            <div class="video-preview">
              <div class="thumpnail-row">
                <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                  <img class="thumpnail" src="\thumbnail\thumbnail-10.webp" />
                </a>
                <div class="video-time">7:53</div>
              </div>
              <div class="video-info-grid">
                <div class="channel-pic">
                  <a href="https://www.youtube.com/c/CSDojo">
                    <img src="\channel\channel-10.jpeg" class="profile-pic" />
                  </a>
                </div>
                <div class="video-info">
                  <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                    <p class="video-title">
                      How The World's Largest Cruise Ship Makes 30,000 Meals
                      Every Day
                    </p>
                  </a>
                  <a href="https://www.youtube.com/c/CSDojo">
                    <p class="video-author">Business Insider</p>
                  </a>
                  <p class="video-stats">14M views · 1 year ago</p>
                </div>
              </div>
            </div>

            <div class="video-preview">
              <div class="thumpnail-row">
                <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                  <img class="thumpnail" src="\thumbnail\thumbnail-11.webp" />
                </a>
                <div class="video-time">4:10</div>
              </div>
              <div class="video-info-grid">
                <div class="channel-pic">
                  <a href="https://www.youtube.com/c/CSDojo">
                    <img src="\channel\channel-11.jpeg" class="profile-pic" />
                  </a>
                </div>
                <div class="video-info">
                  <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                    <p class="video-title">
                      Dubai's Crazy Underwater Train and Other Things #Only in
                      Dubai
                    </p>
                  </a>
                  <a href="https://www.youtube.com/c/CSDojo">
                    <p class="video-author">Destination Tips</p>
                  </a>
                  <p class="video-stats">3M views · 1 year ago</p>
                </div>
              </div>
            </div>

            <div class="video-preview">
              <div class="thumpnail-row">
                <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                  <img class="thumpnail" src="\thumbnail\thumbnail-12.webp" />
                </a>
                <div class="video-time">4:51</div>
              </div>
              <div class="video-info-grid">
                <div class="channel-pic">
                  <a href="https://www.youtube.com/c/CSDojo">
                    <img src="\channel\channel-12.jpeg" class="profile-pic" />
                  </a>
                </div>
                <div class="video-info">
                  <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                    <p class="video-title">
                      What would happen if you didn’t drink water? - Mia
                      Nacamulli
                    </p>
                  </a>
                  <a href="https://www.youtube.com/c/CSDojo">
                    <p class="video-author">TED-Ed</p>
                  </a>
                  <p class="video-stats">12M views · 5 years ago</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    </div>
  );
}

export default App;
