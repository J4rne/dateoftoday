import React from 'react';

export default function MemeTinderInvite() {
  const [showForm, setShowForm] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [authenticated, setAuthenticated] = React.useState(false);
  const [noButtonStyle, setNoButtonStyle] = React.useState({});
  const [musicEnabled, setMusicEnabled] = React.useState(true);
  const [loadingScreen, setLoadingScreen] = React.useState(true);
  const [submitted, setSubmitted] = React.useState(false);
  const [catIndex, setCatIndex] = React.useState(0);

  const correctPassword = 'wii2026';

  const catMemes = [
    'https://media.tenor.com/Wr6Z2nJzQ0AAAAAM/cat-cat-meme.gif',
    'https://media.tenor.com/mecndmLiV6MAAAAM/cat-funny.gif',
    'https://media.tenor.com/4f7P0MqzVQAAAAAM/maxwell-cat.gif'
  ];

  const memes = [
    'emotionally available after 8pm',
    'certified lore dropper',
    'elite passenger princess energy',
    'professional yapper',
    'slightly acoustic but in a cool way'
  ];

  const compatibility = Math.floor(Math.random() * 14) + 86;

  React.useEffect(() => {
    const loader = setTimeout(() => {
      setLoadingScreen(false);
    }, 2600);

    const catRotation = setInterval(() => {
      setCatIndex((prev) => (prev + 1) % catMemes.length);
    }, 3500);

    return () => {
      clearTimeout(loader);
      clearInterval(catRotation);
    };
  }, []);

  const handlePassword = () => {
    if (password.toLowerCase() === correctPassword) {
      setAuthenticated(true);
    } else {
      alert('access denied by the meme council 🚫');
    }
  };

  const handleNo = () => {
    const messages = [
      'crazy fumble detected 💀',
      'Wii Sports music became sadder',
      'the council will remember this',
      'error 404: good decision not found',
      'bro folded under pressure'
    ];

    setNoButtonStyle({
      position: 'relative',
      transform: `translate(${Math.random() * 180 - 90}px, ${Math.random() * 80 - 40}px) rotate(${Math.random() * 18 - 9}deg)`
    });

    alert(messages[Math.floor(Math.random() * messages.length)]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const date = document.getElementById('date').value;
    const idea = document.getElementById('idea').value;

    try {
      await fetch('https://formspree.io/f/xqabnqep', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          selectedDate: date,
          dateIdea: idea,
          status: 'MATCH CONFIRMED 💘',
          submittedBy: 'woman'
        })
      });

      setSubmitted(true);
    } catch (err) {
      alert('servers folded under pressure 💀');
    }
  };

  if (loadingScreen) {
    return (
      <div className="min-h-screen bg-[#e8ddcf] flex items-center justify-center overflow-hidden px-6">
        <div className="text-center animate-pulse">
          <div className="text-8xl mb-6">💘</div>
          <h1 className="text-5xl font-black tracking-tight">Tinder.exe</h1>
          <p className="mt-5 text-lg font-semibold">
            calculating elite romantic compatibility...
          </p>

          <div className="mt-8 w-72 h-4 bg-white/50 rounded-full overflow-hidden mx-auto">
            <div className="h-full w-full bg-black animate-pulse"></div>
          </div>

          <p className="mt-6 text-sm opacity-60">
            consulting the meme archives...
          </p>
        </div>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-[#e8ddcf] flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-[32px] max-w-sm w-full shadow-2xl text-center border border-black/5">
          <div className="text-7xl mb-4">🔐</div>

          <h1 className="text-3xl font-black">private invitation</h1>

          <p className="mt-3 text-sm opacity-70 leading-relaxed">
            this page contains classified levels of rizz.
          </p>

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="w-full mt-6 p-4 rounded-2xl bg-[#f8f4ef] border border-black/10"
          />

          <button
            onClick={handlePassword}
            className="w-full mt-4 py-4 rounded-2xl bg-[#d8c3a5] font-black hover:scale-[1.02] transition"
          >
            unlock the lore
          </button>

          <div className="mt-5 text-xs opacity-40">
            hint: wii + current year
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#e8ddcf] flex items-center justify-center p-4 overflow-hidden">
      {musicEnabled && (
        <audio autoPlay loop>
          <source src="https://files.catbox.moe/6m0c9n.mp3" type="audio/mpeg" />
        </audio>
      )}

      <div className="w-full max-w-sm bg-white rounded-[38px] shadow-2xl border border-black/10 overflow-hidden relative animate-[pulse_6s_infinite]">
        <div className="bg-[#d8c3a5] px-5 py-4 flex items-center justify-between border-b border-black/5">
          <div>
            <h1 className="text-2xl font-black tracking-tight">Tinder.exe</h1>
            <p className="text-xs opacity-70">2026 premium delusion edition</p>
          </div>

          <button
            onClick={() => setMusicEnabled(!musicEnabled)}
            className="text-2xl hover:scale-110 transition"
          >
            {musicEnabled ? '🔊' : '🔇'}
          </button>
        </div>

        <div className="p-5">
          <div className="relative rounded-3xl overflow-hidden border border-black/10 shadow-xl hover:rotate-1 transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1200&auto=format&fit=crop"
              alt="profile"
              className="w-full h-[380px] object-cover"
            />

            <div className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full animate-bounce">
              ACTIVE MENACE
            </div>

            <div className="absolute top-3 right-3 bg-white/90 text-black text-xs px-3 py-1 rounded-full font-black">
              {compatibility}% MATCH
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-5 text-white">
              <h2 className="text-3xl font-black">Jarne, 26</h2>
              <p className="text-sm opacity-90 mt-1">
                {memes[Math.floor(Math.random() * memes.length)]}
              </p>
            </div>
          </div>

          <div className="mt-5 bg-[#f8f4ef] rounded-3xl p-4 border border-black/5">
            <div className="flex gap-2 flex-wrap text-xs font-semibold">
              <span className="bg-white px-3 py-1 rounded-full">chronically online</span>
              <span className="bg-white px-3 py-1 rounded-full">W rizz?</span>
              <span className="bg-white px-3 py-1 rounded-full">aura farmer</span>
              <span className="bg-white px-3 py-1 rounded-full">built different</span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-black/80">
              hello woman. after extensive research, multiple meme consultations,
              and several dangerous levels of delusion, i would like to formally invite you on a first date.
            </p>

            <div className="mt-4 bg-white rounded-2xl p-3 border border-black/5 flex items-center justify-between">
              <div>
                <p className="text-xs opacity-50">relationship potential</p>
                <h3 className="text-2xl font-black">immaculate</h3>
              </div>

              <div className="text-4xl">🫡</div>
            </div>
          </div>

          <div className="mt-6 flex gap-3 items-center justify-center">
            <button
              style={noButtonStyle}
              onMouseEnter={handleNo}
              onClick={handleNo}
              className="flex-1 py-4 rounded-2xl bg-gray-100 text-black font-black text-lg active:scale-95 transition"
            >
              ❌ nope
            </button>

            <button
              onClick={() => {
                setShowForm(true);
                document.getElementById('proposal').scrollIntoView({
                  behavior: 'smooth'
                });
              }}
              className="flex-1 py-4 rounded-2xl bg-[#d8c3a5] text-black font-black text-lg shadow-lg active:scale-95 transition hover:scale-[1.03]"
            >
              ❤️ bet
            </button>
          </div>

          <div className="mt-5 text-center text-xs opacity-60">
            swipe right to unlock emotional damage
          </div>

          {showForm && !submitted && (
            <div className="mt-8 animate-bounce text-center text-sm font-black">
              <div className="text-6xl mb-2">💘</div>
              MATCH FOUND
            </div>
          )}

          {!submitted ? (
            <form id="proposal" onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="font-bold text-sm">pick a date 📅</label>
                <input
                  type="date"
                  id="date"
                  required
                  className="w-full mt-2 p-4 rounded-2xl border border-black/10 bg-[#f8f4ef]"
                />
              </div>

              <div>
                <label className="font-bold text-sm">date idea 🫡</label>
                <select
                  id="idea"
                  className="w-full mt-2 p-4 rounded-2xl border border-black/10 bg-[#f8f4ef]"
                >
                  <option>Coffee & yapping</option>
                  <option>Sushi arc</option>
                  <option>Drinks & bad decisions</option>
                  <option>Mini golf (competitive)</option>
                  <option>Walk + random lore drops</option>
                  <option>Mystery side quest</option>
                </select>
              </div>

              <div className="bg-black text-white rounded-2xl p-4 text-sm leading-relaxed">
                ⚠️ warning: selecting yes may result in:
                <ul className="mt-2 list-disc list-inside opacity-80 space-y-1">
                  <li>laughing at dumb memes</li>
                  <li>cat videos at 2am</li>
                  <li>accidental emotional attachment</li>
                </ul>
              </div>

              <button
                type="submit"
                className="w-full py-5 rounded-2xl bg-[#d8c3a5] font-black text-lg shadow-xl active:scale-95 transition hover:scale-[1.02]"
              >
                lock in the date 🚀
              </button>
            </form>
          ) : (
            <div className="mt-8 bg-black text-white rounded-3xl p-8 text-center animate-pulse">
              <div className="text-7xl mb-4">🎉</div>
              <h2 className="text-3xl font-black">APPLICATION ACCEPTED</h2>
              <p className="mt-4 opacity-80 leading-relaxed">
                the board of romance has received the proposal successfully.
              </p>
            </div>
          )}

          <div className="mt-6 bg-[#f8f4ef] rounded-3xl p-4 text-center border border-black/5">
            <img
              src={catMemes[catIndex]}
              className="w-28 h-28 mx-auto rounded-2xl object-cover"
              alt="cat meme"
            />

            <p className="mt-3 text-sm font-semibold">
              currently monitored by the cat council 🐈
            </p>
          </div>

          <div className="mt-6 bg-white rounded-3xl border border-black/10 p-4 text-center shadow-lg">
            <h3 className="font-black text-lg">scan for maximum aura 📱</h3>

            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://jarne-secret-date.github.io/wii-rizz"
              alt="qr"
              className="w-40 h-40 mx-auto mt-3"
            />
          </div>

          <div className="mt-6 bg-black text-white rounded-3xl p-4 text-sm">
            <div className="font-black text-lg">latest notifications 📲</div>

            <div className="mt-3 space-y-2">
              <div className="bg-white/10 rounded-xl p-3">
                🧠 Jarne sent you a meme at 01:42 AM
              </div>

              <div className="bg-white/10 rounded-xl p-3">
                🎮 Wii music detected nearby
              </div>

              <div className="bg-white/10 rounded-xl p-3">
                💘 emotional attachment risk increased by 43%
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-[11px] opacity-40">
            not affiliated with actual Tinder™ because my lawyers strongly advised against it.
          </div>
        </div>
      </div>
    </div>
  );
}
