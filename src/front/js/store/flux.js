const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			respuesta: {},

		},


		actions: {


			generateToken: (email, password) => {
				// fetching data from the backend
				console.log(email, password);

				fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email, password: password }),
				})
					.then(resp => resp.json())
					.then(data => {
						console.log(data)
						localStorage.setItem("token", data.token),
							localStorage.setItem("user_id", data.user_id),
							setStore({ respuesta: data });
					})

					.catch(error => console.log("Error loading message from backend", error));
			},

			generateRegister: (user) => {
				fetch(process.env.BACKEND_URL + "/api/signup", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(user),
				})
					.then(res => res.json())
					.then(data => setStore({ datosUsuario: data }))
					.catch(error => console.log("Error loading message from backend", error));
			},



		}
	};
};

export default getState;
