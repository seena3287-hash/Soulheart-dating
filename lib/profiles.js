// Deterministic mock profile generator so SSR + client stay in sync.
const FIRST_NAMES = ['Aanya','Riya','Priya','Meera','Kavya','Ishita','Ananya','Diya','Saanvi','Aarohi','Nyra','Myra','Zara','Anika','Trisha','Sneha','Neha','Pooja','Ritika','Sara','Tara','Vidya','Ira','Suhana','Kiara','Naina','Reya','Sia','Aditi','Isha'];
const CITIES = ['Mumbai','Delhi','Bengaluru','Hyderabad','Chennai','Kolkata','Pune','Jaipur','Ahmedabad','Lucknow','Chandigarh','Goa','Kochi','Indore','Bhopal','Nagpur','Surat','Coimbatore','Vizag','Mysuru'];
const LANGS = [['English','Hindi'],['Hindi','Kannada'],['Hindi','Telugu'],['English','Kannada'],['English','Telugu'],['English','Hindi','Marathi'],['English','Hindi','Bengali'],['English','Hindi','Tamil'],['Hindi','Punjabi'],['English','Malayalam']];

function seededRandom(seed) {
  let s = seed % 2147483647; if (s <= 0) s += 2147483646;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

export function getProfiles(page = 1, perPage = 24) {
  const start = (page - 1) * perPage;
  const items = [];
  for (let i = 0; i < perPage; i++) {
    const idx = start + i + 1;
    const rnd = seededRandom(idx * 97 + 13);
    const name = FIRST_NAMES[Math.floor(rnd() * FIRST_NAMES.length)];
    const age = 21 + Math.floor(rnd() * 14);
    const city = CITIES[Math.floor(rnd() * CITIES.length)];
    const languages = LANGS[Math.floor(rnd() * LANGS.length)];
    const online = rnd() > 0.15;
    items.push({ id: idx, name, age, city, languages, online });
  }
  return items;
}

export function getProfileById(id) {
  const numericId = parseInt(id, 10);
  if (!numericId || numericId < 1) return null;
  const page = Math.ceil(numericId / 24);
  const all = getProfiles(page, 24);
  return all.find(p => p.id === numericId) || null;
}
