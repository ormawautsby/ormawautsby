const data = {
  email: "superadmin@ormawautsby.com",
  password: "SuperAdmin123!",
  name: "Super Admin Utama",
  role: "super_admin"
};

fetch("http://localhost:3000/api/create-user", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
})
.then(r => r.json())
.then(console.log)
.catch(console.error);
