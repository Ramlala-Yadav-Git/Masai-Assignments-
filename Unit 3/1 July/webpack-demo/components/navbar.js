let navbar = () => {
	return `<nav>
					<div class="head_left">
						<div class="head_left_1">
							<div id="logo">
								<svg
									width="32"
									height="32"
									version="1.1"
									viewBox="0 0 32 32"
									aria-labelledby="unsplash-home"
									aria-hidden="false"
								>
									<title id="unsplash-home">Unsplash Home</title>
									<path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
								</svg>
							</div>
							<div>
								<span>Unsplash</span>
								<span>Photos for everyone</span>
							</div>
						</div>
						<div class="head_left_2">
							<button id="inp_1_btn">
								<svg
									width="32"
									height="32"
									version="1.1"
									viewBox="0 0 32 32"
									aria-hidden="false"
								>
									<path
										d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"
									></path>
								</svg>
							</button>

							<input id="inp_1" placeholder="Search free high-resolution photos" />

							<button>
								<svg
									width="32"
									height="32"
									version="1.1"
									viewBox="0 0 32 32"
									aria-hidden="false"
								>
									<path
										d="M6.7 25.3H12V28H6.7C5.2 28 4 26.8 4 25.3V20h2.7v5.3zm0-18.6H12V4H6.7C5.2 4 4 5.2 4 6.7V12h2.7V6.7zM25.3 4H20v2.7h5.3V12H28V6.7C28 5.2 26.8 4 25.3 4zm0 21.3H20V28h5.3c1.5 0 2.7-1.2 2.7-2.7V20h-2.7v5.3zm-4-9.3c0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3zm-2.6 0c0-1.5-1.2-2.7-2.7-2.7s-2.7 1.2-2.7 2.7 1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7z"
									></path>
								</svg>
							</button>
						</div>
					</div>
					<div class="head_middle">
						<ul>
							<li>Brands</li>
							<li>Explore</li>
							<li>Blog</li>
							<li>
								<svg
									width="18"
									height="18"
									version="1.1"
									viewBox="0 0 32 32"
									aria-hidden="false"
								>
									<path
										d="M7 15.5c0 1.9-1.6 3.5-3.5 3.5s-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5zm21.5-3.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zm-12.5 0c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z"
									></path>
								</svg>
							</li>
						</ul>

						<button>Submit a photo</button>
					</div>
					<div class="head_right">
						<button>Login</button>
						<button>Join free</button>
					</div>
				</nav>
				<nav>
					<ul>
					    <li id="travel">Travel</li>
						<li id="technology">Technology</li>
						<li id="wallpapers">Wallpapers</li>
						<li id="nature">Nature</li>
						<li id="people">People</li>
						<li id="architecture">Architecture</li>
						<li id="currentevents">Current Events</li>
						<li id="business">Business</li>
						<li id="experimental">Experimental</li>
						<li id="fashion">Fashion</li>
						<li id="film">Film</li>
						<li id="interiors">Interiors</li>
						<li id="street">Street Photography</li>
					</ul>
				</nav>`;
};
let body_sec = () => {
	return `
	<div class="cont">
					<h1>Unsplash</h1>
					<p>
						The internet’s source of freely-usable images.<span
							><br />
							Powered by creators everywhere.
						</span>
					</p>
					<div class="head_left_2 middle_input">
						<button id="inp_2_btn">
							<svg
								width="32"
								height="32"
								version="1.1"
								viewBox="0 0 32 32"
								aria-hidden="false"
							>
								<path
									d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"
								></path>
							</svg>
						</button>

						<input id="inp_2" placeholder="Search free high-resolution photos" />

						<button>
							<svg
								width="32"
								height="32"
								version="1.1"
								viewBox="0 0 32 32"
								aria-hidden="false"
							>
								<path
									d="M6.7 25.3H12V28H6.7C5.2 28 4 26.8 4 25.3V20h2.7v5.3zm0-18.6H12V4H6.7C5.2 4 4 5.2 4 6.7V12h2.7V6.7zM25.3 4H20v2.7h5.3V12H28V6.7C28 5.2 26.8 4 25.3 4zm0 21.3H20V28h5.3c1.5 0 2.7-1.2 2.7-2.7V20h-2.7v5.3zm-4-9.3c0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3zm-2.6 0c0-1.5-1.2-2.7-2.7-2.7s-2.7 1.2-2.7 2.7 1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7z"
								></path>
							</svg>
						</button>
					</div>
				</div>`;
};

export { navbar, body_sec };
