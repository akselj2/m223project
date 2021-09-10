const URL = 'http://localhost:8080';
let entries = [];
let users = [];

const dateAndTimeToDate = (dateString, timeString) => {
    return new Date(`${dateString}T${timeString}`).toISOString();
};

const createEntry = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entry = {};
    entry['checkIn'] = dateAndTimeToDate(formData.get('checkInDate'), formData.get('checkInTime'));
    entry['checkOut'] = dateAndTimeToDate(formData.get('checkOutDate'), formData.get('checkOutTime'));

    fetch(`${URL}/entries`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(entry)
    }).then((result) => {
        result.json().then((entry) => {
            entries.push(entry);
            renderEntries();
        });
    });
};

const createUser = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = {};
    user['username'] = String(formData.get('username'));
    user['password'] = String(formData.get('password'));

    fetch(`${URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then((result) => {
        result.json().then((user) => {
            users.push(user);
        });
    });
}

const indexEntries = () => {
    fetch(`${URL}/entries`, {
        method: 'GET'
    }).then((result) => {
        result.json().then((result) => {
            entries = result;
            renderEntries();
        });
    });
    renderEntries();
};

function deleteUser() {
    let id = document.getElementById("id").value;

    fetch(`${URL}/users/${id}`, {
        method: 'DELETE',
    }).then((result) => {
        renderUsers();
    })
}

function deleteEntry() {
    let id = document.getElementById("id").value;

    fetch(`${URL}/entries/${id}`, {
        method: 'DELETE',
    }).then((result) => {
        renderEntries();
    });

    console.log("Deleted.")
}

const indexUsers = () => {
    fetch(`${URL}/users`, {
        method: 'GET'
    }).then((result) => {
        result.json().then((result) => {
            entries = result;
        });
    });
};

const createCell = (text) => {
    const cell = document.createElement('td');
    cell.innerText = text;
    return cell;
};

const renderUsers = () => {
    const display = document.querySelector('#userDisplay');
    display.innerHTML = '';
    users.forEach((user) => {
        const row = document.createElement('tr');
        row.appendChild(createCell(user.username));
        display.appendChild(row);
    });
};

const renderEntries = () => {
    const display = document.querySelector('#entryDisplay');
    display.innerHTML = '';
    entries.forEach((entry) => {
        const row = document.createElement('tr');
        row.appendChild(createCell(entry.id));
        row.appendChild(createCell(new Date(entry.checkIn).toLocaleString()));
        row.appendChild(createCell(new Date(entry.checkOut).toLocaleString()));
        display.appendChild(row);
    });
};

document.addEventListener('DOMContentLoaded', function(){
    const createEntryForm = document.querySelector('#createEntryForm');
    createEntryForm.addEventListener('submit', createEntry);
    indexEntries();
});

document.addEventListener('DOMContentLoaded', function (){
    const createUserForm = document.querySelector('#createUserForm');
    createUserForm.addEventListener('submit', createUser);
    indexUsers();
})

document.addEventListener('DOMContentLoaded', function (){
    const deleteEntryForm = document.querySelector('#deleteEntryForm');
    deleteEntryForm.addEventListener('submit', deleteEntry);
    indexEntries();
})

/*document.addEventListener('DOMContentLoaded', function () {
    const deleteUserX = document.querySelector('#deleteUser');
    deleteUserX.addEventListener('submit', deleteUser);
    indexUsers();
})*/