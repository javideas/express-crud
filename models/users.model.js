let users = [
    { id: "1", name: "Julio"},
    { id: "2", name: "Carlos"},
];

setInterval(() => { // temp: autocreates users
    users.push({
        id: (users.length + 1).toString(),
        name: `User ${users.length + 1}`,
    });
}, 5000);

const User = {
    find() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(users);
            }, Math.random() * 1000);
        });
    },
    findById(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(users.find((u) => u.id === id));
            }, Math.random() * 1000);
        });
    },
    create(user) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newUser = { ...user, id: `${users.length + 1}` };
                users.push(newUser);
                resolve(newUser);
            }, Math.random() * 1000);
        });
    },
    findByIdAndUpdate(id, patch) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const user = users.find((u) => u.id === id);
                Object.assign(user, patch);
                resolve(user);
            }, Math.random() * 1000);
        });
    },
    findByIdAndDelete(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const user = users.find((u) => u.id === id);
                users = users.filter((u) => u.id !== user);
                resolve(user);
            }, Math.random() * 1000);
        });
    }
}

module.exports = User;