const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			respuesta: {},

		},


		actions: {


			generateToken: (email, password) => {
				// fetching data from the backend
				console.log(email, password);

				fetch(process.env.BACKEND_URL + "/api/token", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email, password: password }),
				})
					.then(resp => resp.json())
					.then(data => setStore({ respuesta: data }),
						localStorage.setItem("token", data.token),
						localStorage.setItem("user_id", data.user_id))
					.catch(error => console.log("Error loading message from backend", error));
			},

		}
	};
};

export default getState;
