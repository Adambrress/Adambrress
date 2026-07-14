// PASTE THE 'ALL_AVAILABLE_ITEMS' ARRAY FROM YOUR APP'S constants.js HERE
const ALL_AVAILABLE_ITEMS = [
  { id: 'weather-local', league: 'weather', name: 'Local Weather' },
  // ... (the rest of your teams, scoreboards, news, etc.)
];

// --- Firebase Configuration ---
// IMPORTANT: Use the same credentials as in your App.js
const firebaseConfig = {
  apiKey: "AIzaSyCXoDVmryclNRrkcbo2_quEtTPXMhHoG4s",
  authDomain: "shabbosmode-83043.firebaseapp.com",
  databaseURL: "https://shabbosmode-83043-default-rtdb.firebaseio.com",
  projectId: "shabbosmode-83043",
  storageBucket: "shabbosmode-83043.firebasestorage.app",
  messagingSenderId: "1071512338854",
  appId: "1:1071512338854:web:265ec0bc0b037ad4a70f67"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const deviceId = params.get('id');
    const teamsListDiv = document.getElementById('teams-list');
    const saveButton = document.getElementById('save-button');
    const statusDiv = document.getElementById('status');

    if (!deviceId) {
        teamsListDiv.innerHTML = '<p style="color: red; text-align: center;">Error: No device ID found in URL. Please re-scan the QR code from your app.</p>';
        saveButton.disabled = true;
        return;
    }

    const dbRef = database.ref(`devices/${deviceId}/preferences`);

    const formatLeagueName = (league) => {
        if (!league) return '';
        const lg = String(league).toUpperCase();
        if (lg === 'USA.1') return 'MLS';
        if (lg === 'ENG.1') return 'PREMIER LEAGUE';
        if (lg === 'FIFA.WORLD') return 'FIFA WORLD CUP';
        return lg;
    };

    const leagues = [...new Set(ALL_AVAILABLE_ITEMS.map(t => formatLeagueName(t.league)))];

    dbRef.once('value', (snapshot) => {
        const selectedIds = snapshot.val() || [];

        leagues.forEach(league => {
            const section = document.createElement('div');
            section.className = 'league-section';

            const header = document.createElement('div');
            header.className = 'league-header';
            header.textContent = league;
            section.appendChild(header);

            ALL_AVAILABLE_ITEMS
                .filter(item => formatLeagueName(item.league) === league)
                .forEach(item => {
                    const label = document.createElement('label');
                    label.className = 'team-item';

                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.value = item.id;
                    checkbox.checked = selectedIds.includes(item.id);

                    label.appendChild(checkbox);
                    label.appendChild(document.createTextNode(item.name));
                    section.appendChild(label);
                });

            teamsListDiv.appendChild(section);
        });
    });

    saveButton.addEventListener('click', () => {
        const selectedCheckboxes = document.querySelectorAll('#teams-list input[type="checkbox"]:checked');
        const newSelectedIds = Array.from(selectedCheckboxes).map(cb => cb.value);

        statusDiv.textContent = 'Saving...';
        dbRef.set(newSelectedIds)
            .then(() => {
                statusDiv.textContent = 'Saved successfully! The ticker will update shortly.';
                setTimeout(() => statusDiv.textContent = '', 3000);
            })
            .catch((error) => {
                statusDiv.textContent = `Error: ${error.message}`;
            });
    });
});
