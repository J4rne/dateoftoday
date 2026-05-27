export default function MemeTinderInvite() {
  const [showForm, setShowForm] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [authenticated, setAuthenticated] = React.useState(false);
  const [noButtonStyle, setNoButtonStyle] = React.useState({});

  const correctPassword = 'wii2026';

  const handlePassword = () => {
    if (password.toLowerCase() === correctPassword) {
      setAuthenticated(true);
    } else {
      alert('wrong password. access denied by the meme council 🚫');
    }
  };

  const handleNo = () => {
    const messages = [
      'bro really hit the nope button 💀',
      'my lawyer advised against this decision',
      'Wii Sports Resort music just got sadder',
      'lowkey a catastrophic fumble',
      'the council will remember this',
      'error 404: good decision not found'
    ];

    setNoButtonStyle({
      position: 'relative',
      transform: `translate(${Math.random() * 120 - 60}px, ${Math.random() * 50 - 25}px)`
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
          status: 'she pressed yes 😳',
          submittedBy: 'woman'
        })
      });

      alert('application accepted by the board of romance ✅');
    } catch (err) {
      alert('servers folded under pressure 💀');
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-[#e8ddcf] flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-[30px] max-w-sm w-full shadow-2xl text-center">
          <div className="text-6xl mb-4">🔐</div>
          <h1 className="text-3xl font-black">private invitation</h1>
          <p className="mt-3 text-sm opacity-70">
            enter the classified password to continue.
          </p>

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="w-full mt-5 p-4 rounded-2xl bg-[#f8f4ef] border border-black/10"
          />

          <button
            onClick={handlePassword}
            className="w-full mt-4 py-4 rounded-2xl bg-[#d8c3a5] font-black"
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
      <audio autoPlay loop>
        <source src="https://files.catbox.moe/6m0c9n.mp3" type="audio/mpeg" />
      </audio>

      <div className="w-full max-w-sm bg-white rounded-[35px] shadow-2xl border border-black/10 overflow-hidden relative">
        <div className="bg-[#d8c3a5] px-5 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-tight">Tinder.exe</h1>
            <p className="text-xs opacity-70">2026 premium delusion edition</p>
          </div>

          <div className="text-2xl">❤️</div>
        </div>

        <div className="p-5">
          <div className="relative rounded-3xl overflow-hidden border border-black/10 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1200&auto=format&fit=crop"
              alt="meme"
              className="w-full h-[360px] object-cover"
            />

            <div className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full animate-pulse">
              ACTIVE MENACE
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-5 text-white">
              <h2 className="text-3xl font-black">Jarne, 26</h2>
              <p className="text-sm opacity-90 mt-1">
                professional yapper • can cook instant noodles • emotionally available after 8pm
              </p>
            </div>
          </div>

          <div className="mt-5 bg-[#f8f4ef] rounded-2xl p-4 border border-black/5 animate-pulse">
            <div className="flex gap-2 flex-wrap text-xs font-semibold">
              <span className="bg-white px-3 py-1 rounded-full">chronically online</span>
              <span className="bg-white px-3 py-1 rounded-full">W rizz?</span>
              <span className="bg-white px-3 py-1 rounded-full">certified passenger princess</span>
              <span className="bg-white px-3 py-1 rounded-full">built different</span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-black/80">
              hello woman. after extensive market research and several elite-level delusions,
              i would like to formally invite you on a first date.
            </p>

            <p className="mt-3 text-sm italic text-black/60">
              current vibe: suspiciously wholesome.
            </p>
          </div>

          <div className="mt-6 flex gap-3">
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
              className="flex-1 py-4 rounded-2xl bg-[#d8c3a5] text-black font-black text-lg shadow-lg active:scale-95 transition"
            >
              ❤️ bet
            </button>
          </div>

          <div className="mt-5 text-center text-xs opacity-60">
            swipe right to unlock emotional damage
          </div>

          {showForm && (
          <div className="mt-8 animate-bounce text-center text-sm font-bold">
            MATCH FOUND 💘
          </div>
          )}

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
                <li>getting sent cat videos at 2am</li>
                <li>accidental emotional attachment</li>
              </ul>
            </div>

            <button
              type="submit"
              className="w-full py-5 rounded-2xl bg-[#d8c3a5] font-black text-lg shadow-xl active:scale-95 transition"
            >
              submit application 🚀
            </button>
          </form>

          <div className="mt-6 bg-[#f8f4ef] rounded-2xl p-4 text-center border border-black/5">
            <img
              src="https://media.tenor.com/Wr6Z2nJzQ0AAAAAM/cat-cat-meme.gif"
              className="w-28 h-28 mx-auto rounded-2xl object-cover"
              alt="cat meme"
            />
            <p className="mt-3 text-sm font-semibold">
              cat approval rating: 97%
            </p>
          </div>

          <div className="mt-6 bg-white rounded-2xl border border-black/10 p-4 text-center">
            <h3 className="font-black text-lg">scan for maximum aura 📱</h3>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://jarne-secret-date.github.io/wii-rizz"
              alt="qr"
              className="w-40 h-40 mx-auto mt-3"
            />
          </div>

          <div className="mt-6 text-center text-[11px] opacity-40">
            not affiliated with actual Tinder™ because my lawyers said absolutely not.
          </div>
        </div>
      </div>
    </div>
  );
}
